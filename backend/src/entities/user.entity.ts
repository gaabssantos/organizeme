type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
  verificationCode: string;
};

export class UserEntity {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public active: boolean;
  public verificationCode: string;

  constructor({ id, name, email, password, active, verificationCode }: User) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.active = active;
    this.verificationCode = verificationCode;
  }
}
