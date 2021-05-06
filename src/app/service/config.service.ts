import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    
    private baseUrl = 'https://localhost:44396/api/v1/public';

    private categoryUrl = this.baseUrl + '/category';

    get getAllCategoryUrl(): string {
        return this.categoryUrl + "/all";
    }

    get getCategoryByIdUrl(): string {
        return this.categoryUrl;
    }

    get getCreateCategoryUrl(): string {
        return this.categoryUrl + "/create";
    }

    get getUpdateCategoryUrl(): string {
        return this.categoryUrl + "/update";
    }

    get getDeleteCategoryByIdUrl(): string {
        return this.categoryUrl;
    }

    private commentUrl = this.baseUrl + '/comment';

    get getCommentByIdUrl(): string {
        return this.commentUrl;
    }

    get getCreateCommentUrl(): string {
        return this.commentUrl + "/create";
    }

    get getUpdateCommentUrl(): string {
        return this.commentUrl + "/update";
    }

    get getDeleteCommentByIdUrl(): string {
        return this.commentUrl;
    }

    private postUrl = this.baseUrl + '/post';

    get getAllPostUrl(): string {
        return this.postUrl + "/all";
    }

    get getPostByIdUrl(): string {
        return this.postUrl;
    }

    get getCreatePostUrl(): string {
        return this.postUrl + "/create";
    }

    get getUpdatePostUrl(): string {
        return this.postUrl + "/update";
    }

    get getDeletePostByIdUrl(): string {
        return this.postUrl;
    }

    private userUrl = this.baseUrl + '/user';

    get getWhoAmIUrl(): string {
        return this.userUrl + "/whoami";
    }

    get getLoginUrl(): string {
        return this.userUrl + "/login";
    }

    get getRegisterUrl(): string {
        return this.userUrl + "/register";
    }

    get getRegisterAdminUrl(): string {
        return this.userUrl + "/register-admin";
    }
}