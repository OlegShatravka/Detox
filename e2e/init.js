const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/mocha/adapter');

jest.setTimeout(120000);

beforeAll(async () => {
  await detox.init(config);
});

// beforeEach(async function () {
//   await adapter.beforeEach(this);
// });

// afterEach(async function () {
//   await adapter.afterEach(this);
// });

afterAll(async () => {
  await detox.cleanup();
});