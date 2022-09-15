import { Pool, ResultSetHeader } from "mysql2/promise";

export default class BlogPost {
  connection: Pool

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IBlogPost[]> {
    const [posts] = await this.connection.execute('SELECT * FROM Posts');
    
    return posts as IBlogPost[];
  }

  public async getById(id: number): Promise<IBlogPost> {
    const [result] = await this.connection.execute('SELECT * FROM Posts WHERE id = ?', [id]);
    const [post] = result as IBlogPost[]

    return post as IBlogPost;
  }

  public async create(post: IBlogPost): Promise<IBlogPost> {
    const { name, title, author, publicationDate } = post;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>('INSERT INTO Posts (name, title, author, publicationDate) VALUES (?, ?, ?, ?)', [name, title, author, publicationDate]);
    return { id: insertId, ...post }
  }

  public async update(id: number, post: IBlogPost): Promise<void> {
    const { name, title, author, publicationDate } = post;
    await this.connection.execute('UPDATE Posts SET name=?, title=?, author=?, publicationDate=?', [name, title, author, publicationDate]);
  
  }

  public async remove(id: number): Promise<void> {
    await this.connection.execute('DELETE FROM Posts WHERE id=?', [id]);
  }

  public async filterPost(query: string): Promise<IBlogPost> {
    const [result] = await this.connection.execute('SELECT * FROM Posts WHERE LIKE ?', [`%${query}%`]);
    const [post] = result as IBlogPost[];
    
    return post;
  }

}