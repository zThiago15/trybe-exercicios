import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import BlogPostService from "../service/blogPosts";

export default class BlogPostController {
  constructor(private postService = new BlogPostService()) { };

  public getAll = async (req: Request, res: Response) => {
    const posts = await this.postService.getAll();
    return res.status(StatusCodes.OK).json(posts);
  }

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const post = await this.postService.getById(id);
    return res.status(StatusCodes.OK).json(post);
  }

  public create = async (req: Request, res: Response) => {
    const post = req.body;

    const postCreated = await this.postService.create(post);
    res.status(StatusCodes.CREATED).json(postCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = req.body;
    await this.postService.update(id, post);

    res.status(StatusCodes.NO_CONTENT).end();
  };
  
  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.postService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Post deletado com sucesso' });
  };

  public filter = async (req: Request, res: Response) => {
    const q = String(req.params);
    console.log(q);
    
    // const postFiltered = await this.postService.filterPost(q);

    res.status(StatusCodes.OK).end();
  }
}