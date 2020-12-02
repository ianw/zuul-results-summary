load("@npm//@bazel/rollup:index.bzl", "rollup_bundle")
load("//tools/bzl:js.bzl", "bundle_assets", "polygerrit_plugin")

polygerrit_plugin(
    name = "zuul_summary_status",
    app = "zuul-summary-status-bundle.js",
    plugin_name = "zuul-summary-status",
)


rollup_bundle(
    name = "zuul-summary-status-bundle",
    srcs = glob(["gr-zuul-summary-status/*.js"]),
    entry_point = "gr-zuul-summary-status/gr-zuul-summary-status.js",
    format = "iife",
    rollup_bin = "//tools/node_tools:rollup-bin",
    sourcemap = "hidden",
    deps = [
      "@tools_npm//rollup-plugin-node-resolve",
    ],
)
