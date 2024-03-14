/* eslint-disable no-console, @cspell/spellchecker */
const { exec, spawn } = require('child_process');
const { exit } = require('process');

function getFileNamesFromStdout(error: Error | null, stdout: string, type: string): string[] {
  if (error) {
    console.error(`list of changed files (${type}) could not be compiled`);
    console.error('');
    exit(1);
  }

  let stdoutSplitLines = stdout.split('\n');
  if (stdoutSplitLines.length > 1) {
    stdoutSplitLines = stdoutSplitLines.slice(0, -1); // Trim last line break
    return stdoutSplitLines;
  }
  return [];
}

// Get list of changed files from master that have been committed, but are unmerged
function getChangedCommittedFiles(): Promise<string[]> {
  return new Promise((resolve) => {
    exec(
      'git diff --diff-filter=ACMRTUXB origin/main...HEAD --name-only "$@"',
      (error: Error | null, stdout: string) => {
        const files = getFileNamesFromStdout(error, stdout, 'committed');
        return resolve(files);
      }
    );
  });
}

// Get list of changed files from master that have not yet been committed
function getChangedLocalFiles(): Promise<string[]> {
  return new Promise((resolve) => {
    exec('git status --porcelain | sed "s/^...//"', (error: Error | null, stdout: string) => {
      const files = getFileNamesFromStdout(error, stdout, 'local');
      return resolve(files);
    });
  });
}

// Get list of deleted files from master
function getDeletedLocalFiles(): Promise<string[]> {
  return new Promise((resolve) => {
    exec('git ls-files --deleted', (error: Error | null, stdout: string) => {
      const files = getFileNamesFromStdout(error, stdout, 'deleted');
      return resolve(files);
    });
  });
}

// Get list of all changed files (using above two methods)
function getAllChangedFiles(): Promise<string[]> {
  console.log('> Fetching changed files');
  return new Promise((resolve) => {
    Promise.all([getChangedCommittedFiles(), getChangedLocalFiles(), getDeletedLocalFiles()]).then(
      (files) => {
        if (files.length) {
          const changedFiles = files.slice(0, 2);
          const deletedFiles = files[2];
          const flattened = changedFiles.flat();

          // Filter out items that aren't within ./src or ./spec
          const filtered = [
            ...new Set(
              flattened
                .filter((item) => item.startsWith('src') || item.startsWith('spec'))
                .filter((item) => !deletedFiles.includes(item))
            ),
          ];
          return resolve(filtered);
        }
        return resolve([]);
      }
    );
  });
}

getAllChangedFiles().then((files) => {
  if (!files.length) {
    exit(0);
  }
  const runTest = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'test']);

  runTest.stdout.on('data', (data: string | Buffer) => {
    console.log(data.toString());
  });
  runTest.stderr.on('data', (data: string | Buffer) => {
    console.log(data.toString());
  });

  runTest.on('error', (error: Error) => {
    console.log(error.message);
  });
  runTest.on('close', (code: number) => {
    exit(code);
  });
});
