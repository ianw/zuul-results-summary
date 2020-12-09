load("@npm//@bazel/rollup:index.bzl", "rollup_bundle")
load("//tools/bzl:js.bzl", "bundle_assets", "polygerrit_plugin")

polygerrit_plugin(
    name = "zuul_results_summary",
    app = "zuul-results-summary-bundle.js",
    plugin_name = "zuul-results-summary",
)


rollup_bundle(
    name = "zuul-results-summary-bundle",
    srcs = glob(["zuul-results-summary/*.js"]),
    entry_point = "zuul-results-summary/zuul-results-summary.js",
    format = "iife",
    rollup_bin = "//tools/node_tools:rollup-bin",
    sourcemap = "hidden",
    deps = [
      "@tools_npm//rollup-plugin-node-resolve",
    ],
)
