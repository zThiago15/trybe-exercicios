import BlogPost from "../models/blogPost";
import connection from "../models/connection";

export default class BlogPostService {
  model: BlogPost

  constructor() {
    this.model = new BlogPost(connection);
  }


  public async getAll(): Promise<IBlogPost[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<IBlogPost> {
    const user = await this.model.getById(id);

    return user;
  }

  public async create(post: IBlogPost): Promise<IBlogPost> {
    const userCreated = await this.model.create(post);
    return userCreated;
  }

  public async update(id: number, post: IBlogPost): Promise<void> {
    const postNotFound = this.model.getById(id);
    if (!postNotFound) {
      throw new Error('Post not found');
    }

    return this.model.update(id, post);
  }
  
  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new Error('Post not found');
    }

    this.model.remove(id);
  }

  public async filterPost(query: string): Promise<IBlogPost> {
    const postFiltered = await this.model.filterPost(query);

    return postFiltered;
  }
}