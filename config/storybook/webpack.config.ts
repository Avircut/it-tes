import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config:webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.alias = { entities: path.resolve(paths.src, 'entities') };
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.resolve!.fallback = {
    http: false, zlib: false, https: false, timers: false, stream: false,
  };

  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule : RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config!.module!.rules!.push(buildSvgLoader());
  config!.module!.rules!.push(buildCssLoader(true));
  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://www.googleapis.com/books/v1/'),
    __PROJECT__: JSON.stringify('storybook'),
  }));
  return config;
};
