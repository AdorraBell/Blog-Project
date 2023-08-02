import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const path = require('path');

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');

  //@ts-ignore
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    // исключаем все правила работающие с svg 
    if(/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i}
    }
    // возвращаем правило, если оно никак не связано с svg
    return rule;
  })

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoader(true)); //можно true, так как storybook будет использоваться только
  // на этапе разработки

  return config;
}