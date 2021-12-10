import {
  Webpack5BabelPluginOptions,
  Webpack5BabelRazzlePlugin,
} from "./types";
import defaultOptions from "./defaultOptions.js";
import { resolveExternal } from "./utils.js";
import path from "path";

export * from "./types.js";

const Plugin: Webpack5BabelRazzlePlugin = {
  name: "webpack5-babel",
  defaultOptions: defaultOptions,
  modifyWebpackConfig: (
    pluginOptions,
    razzleConfig,
    razzleContext,
    webpackOptions,
    webpackConfig
  ) => {

  //  if(webpackOptions.isNode) {

    return webpackConfig;
  },
};

export default function (options: Webpack5BabelPluginOptions): {
  plugin: Webpack5BabelRazzlePlugin;
  options: Webpack5BabelPluginOptions;
} {
  return {
    plugin: Plugin,
    options: { ...(Plugin.defaultOptions || {}), ...options },
  };
}