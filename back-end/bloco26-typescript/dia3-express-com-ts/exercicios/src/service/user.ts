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

  public async create(user: IUser): Promise<IUser> {
    const userCreated = await this.model.create(user);
    return userCreated;
  }

  public async update(id: number, user: IUser): Promise<void> {
    const userFound = this.model.getById(id);
    if (!userFound) {
      throw new Error('User not found');
    }

    return this.model.update(id, user);
  }
  
  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new Error('User not found');
    }

    this.model.remove(id);
  }
}