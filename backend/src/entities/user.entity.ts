type User = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
  verificationCode: string;
};

export class UserEntity {
  public _id?: string;
  public name: string;
  public email: string;
  public password: string;
  public active: boolean;
  public verificationCode: string;

  constructor({ _id, name, email, password, active, verificationCode }: User) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.active = active;
    this.verificationCode = verificationCode;
  }
}
