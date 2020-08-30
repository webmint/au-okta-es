// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'aurelia-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { inject } from 'aurelia-framework';
import Auth from '../resources/okta/index';

@inject(Router, Auth)
export default class Index {
  // eslint-disable-next-line no-shadow
  constructor(Router, Auth) {
    this.router = Router;
    this.auth = Auth;
  }

  // eslint-disable-next-line class-methods-use-this
  async created() {
    await this.auth.handleAuthentication();
    this.router.navigate(this.auth.getFromUri());
  }
}
