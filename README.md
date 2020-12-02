# Zuul Summary Status

Show a summary of Zuul results in Polygerrit

## UI tests

To run UI tests here will need install dependencies from both npm and bower.

`npm run wct-test` should take care both for you, read more in `package.json`.

## Test plugin on Gerrit

1. Build the bundle locally with: `bazel build :zuul_summary_status`
