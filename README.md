# Zuul Summary Status

Show a summary of Zuul results in Polygerrit

## UI tests

To run UI tests here will need install dependencies from both npm and bower.

`npm run wct-test` should take care both for you, read more in `package.json`.

## Test plugin on Gerrit

1. Clone gerrit `git clone https://gerrit.googlesource.com/gerrit`
1. Clone plugin to `plugins/zuul-summary-status` `cd plugins; git clone https://github.com/ianw/gerrit-zuul-summary-status zuul-summary-status`
1. Run build `cd ..; bazel build plugins/zuul-summary-status:zuul_summary_status`
1. Copy resulting plugin `bazel-bin/plugins/zuul-summary-status/zuul-summary-status-bundle.js` to Gerrit plugins directory
 
