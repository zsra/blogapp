import { Injectable } from "@angular/core";
import { CommentDTO } from "../dto/CommentDTO";
import { ApiService } from "./api.service";
import { ConfigService } from "./config.service";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(private apiService: ApiService, private configService: ConfigService) { }

    GetById(id: number) {
        return this.apiService.get(this.configService.getCommentByIdUrl + '/' + id);
    }

    create(comment: CommentDTO) {
        return this.apiService.post(this.configService.getCreateCommentUrl, comment);
    }

    update(comment: CommentDTO) {
        return this.apiService.put(this.configService.getUpdateCommentUrl, comment);
    }
    delete(id: number) {
        return this.apiService.delete(this.configService.getDeleteCommentByIdUrl + '/' + id, id);
    } 
}