import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import failOnConsole from 'jest-fail-on-console'
import { fetch } from 'whatwg-fetch';

failOnConsole()
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
global.fetch = fetch;
