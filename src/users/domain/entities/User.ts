export default class User {
  constructor(
    id: number,
    loginId: string,
    password: string,
    name: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.loginId = loginId;
    this.password = password;
    this.name = name;
    this.createdAt = createdAt;
  }
  id: number;
  loginId: string;
  password: string;
  name: string;
  createdAt: Date;
}
