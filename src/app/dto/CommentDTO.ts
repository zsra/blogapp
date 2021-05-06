export class CommentDTO {
    Id: number;
    Body: string;
    CreatedAt: Date;
    AuthorId: number;
    AuthorName: string;
    Comments: CommentDTO[];
}