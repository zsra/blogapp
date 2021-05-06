import { CategoryDTO } from "./CategoryDTO";
import { CommentDTO } from "./CommentDTO";

export class PostDTO {
    Id: number;
    Title: string;
    Body: string;
    CreatedAt: Date;
    AuthorId: number;
    Comments: Array<CommentDTO> = [];
    Category:  Array<CategoryDTO>;
}