// eslint-disable-next-line import/no-extraneous-dependencies
import { PLATFORM } from 'aurelia-pal';
import auth from './resources/okta/index';

class AuthorizeStep {
  // eslint-disable-next-line class-methods-use-this
  async run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some((i) => i.config.settings.auth)) {
      const isLoggedIn = await auth.isAuthenticated();
      if (!isLoggedIn) {
        // @ts-ignore
        await auth.login('/');
      }
    }
    return next();
  }
}

export default class App {
  message = 'Hello World!';

  domain = process.env.OKTA_DOMAIN;

  id = process.env.OKTA_ID;

  configureRouter(config, router) {
    this.router = router;
    Object.assign(config, { title: 'Aurelia Okta' });
    // eslint-disable-next-line no-param-reassign
    config.options.pushState = true;
    // eslint-disable-next-line no-param-reassign
    config.options.root = '/';
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('home/index'),
        title: 'Home',
        nav: true,
        settings: { auth: true },
      },
      {
        route: 'about',
        name: 'about',
        moduleId: PLATFORM.moduleName('about/index'),
        title: 'About',
        nav: true,
        settings: { auth: true },
      },
      {
        route: 'implicit/callback',
        name: 'callback',
        moduleId: PLATFORM.moduleName('callback/index'),
        title: 'Callback',
        nav: false,
      },
    ]);
  }
}
