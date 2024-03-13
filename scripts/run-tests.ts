/* eslint-disable import/no-extraneous-dependencies, no-console, @cspell/spellchecker */
const { exec } = require('child_process');
const { exit } = require('process');

// Get list of changed files from master that have been committed, but are unmerged
function getChangedCommittedFiles(): Promise<string[]> {
  return new Promise((resolve) => {
    exec('git diff --diff-filter=ACMRTUXB origin/main...HEAD --name-only "$@"', (error, stdout) => {
      if (error) {
        console.error('list of changed (committed) files could not be compiled');
        console.error(error);
        process.exit(1);
      }

      let stdoutSplitLines = stdout.split('\n');

      if (stdoutSplitLines.length > 1) {
        stdoutSplitLines = stdoutSplitLines.slice(0, -1); // Trim last line break
        return resolve(stdoutSplitLines);
      }

      return resolve([]);
    });
  });
}

// Get list of changed files from master that have not yet been committed
function getChangedLocalFiles(): Promise<string[]> {
  return new Promise((resolve) => {
    exec('git status --porcelain | sed "s/^...//"', (error, stdout) => {
      if (error) {
        console.error('list of changed (local) files could not be compiled');
        console.error('');
        process.exit(1);
      }

      let stdoutSplitLines = stdout.split('\n');

      if (stdoutSplitLines.length > 1) {
        stdoutSplitLines = stdoutSplitLines.slice(0, -1); // Trim last line break

        return resolve(stdoutSplitLines);
      }

      return resolve([]);
    });
  });
}

// Get list of deleted files from master
function getDeletedLocalFiles(): Promise<string[]> {
  return new Promise((resolve) => {
    exec('git ls-files --deleted', (error, stdout) => {
      if (error) {
        console.error('list of deleted (local) files could not be compiled');
        console.error('');
        process.exit(1);
      }

      let stdoutSplitLines = stdout.split('\n');

      if (stdoutSplitLines.length > 1) {
        stdoutSplitLines = stdoutSplitLines.slice(0, -1); // Trim last line break

        return resolve(stdoutSplitLines);
      }

      return resolve([]);
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

          console.log('getChangedLocalFiles()', getChangedLocalFiles());

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
  console.log('> Running tests');
  exec(`npm run test ${files.join(' ')} -- --coverage`, (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
      exit(1);
    }
    console.log(stdout);
  }); // eslint-disable-line no-console
});
