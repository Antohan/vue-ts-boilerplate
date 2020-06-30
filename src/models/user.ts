/**
 * User model.
 */
export default class User {
  email: string;

  constructor(data: User) {
    this.email = data.email;
  }
}
