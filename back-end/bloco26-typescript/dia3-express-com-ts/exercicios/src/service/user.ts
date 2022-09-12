import IUser from "../interfaces/user.interface";
import connection from "../models/connection";
import UserModel from '../models/user';

export default class UserService {
  model: UserModel

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);

    return user;
  }
}