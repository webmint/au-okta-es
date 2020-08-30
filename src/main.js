// regenerator-runtime is to support async/await syntax in ESNext.
// If you target latest browsers (have native support), or don't use async/await,
// you can remove regenerator-runtime.
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PLATFORM } from 'aurelia-pal';
import * as environment from '../config/environment.json';

// eslint-disable-next-line import/prefer-default-export
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
