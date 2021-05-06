import { Injectable } from "@angular/core";
import { CategoryDTO } from "../dto/CategoryDTO";
import { ApiService } from "./api.service";
import { ConfigService } from "./config.service";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private apiService: ApiService, private configService: ConfigService) { }
    
    GetAll() {
        return this.apiService.get(this.configService.getAllCategoryUrl);
    }

    GetById(id: number) {
        return this.apiService.get(this.configService.getCategoryByIdUrl + '/' + id);
    }

    create(category: CategoryDTO) {
        return this.apiService.post(this.configService.getCreateCategoryUrl, category);
    }

    update(category: CategoryDTO) {
        return this.apiService.put(this.configService.getUpdateCategoryUrl, category);
    }
    delete(id: number) {
        return this.apiService.delete(this.configService.getDeleteCategoryByIdUrl + '/' + id, id);
    } 
}