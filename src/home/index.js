import auth from '../resources/okta/index';

export default class Index {
  // eslint-disable-next-line class-methods-use-this
  async logout() {
    await auth.logout();
  }
}
