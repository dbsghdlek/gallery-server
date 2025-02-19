export class CreateUserDto {
  private id: string;
  private password: string;
  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }
}
