import { Pool, ResultSetHeader } from "mysql2/promise";
import IUser from "../interfaces/user.interface";

export default class User {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  } 

  public async getAll(): Promise<IUser[]> {
    const [users] = await this.connection.execute('SELECT * FROM Users');
    return users as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const [rows] = await this.connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
    const [user] = rows as IUser[];
    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>('INSERT INTO Users(nome, email, password) values(?, ?, ?)', [name, email, password]);
    return { id: insertId, ...user }
  }

}