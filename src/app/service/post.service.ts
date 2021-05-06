import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostDTO } from "../dto/PostDTO";
import { ApiService } from "./api.service";
import { ConfigService } from "./config.service";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient, private apiService: ApiService, private configService: ConfigService) { }
    
    GetAll(ageGroup: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        }); 
        return this.http.post(this.configService.getAllPostUrl, JSON.stringify(ageGroup), {headers: headers});
    }

    GetById(id: number) {
        return this.apiService.get(this.configService.getPostByIdUrl + '/' + id);
    }

    create(post: PostDTO) {
        return this.apiService.post(this.configService.getCreatePostUrl, post);
    }

    update(post: PostDTO) {
        return this.apiService.put(this.configService.getUpdatePostUrl, post);
    }
    delete(id: number) {
        return this.apiService.delete(this.configService.getDeletePostByIdUrl + '/' + id, id);
    } 
}