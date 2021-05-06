import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import { RegisterDTO } from '../dto/RegisterDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public currentUser;
    public userKey : string;
    public role : string;

    constructor(private http: HttpClient, private apiService: ApiService, private configService: ConfigService) { }
    
    WhoAmI() {
        return this.apiService.get(this.configService.getWhoAmIUrl + '/' + this.userKey);
    }

    Login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}public/user/login`, { username, password })
        .pipe(map(data => {
            var decoded = jwt_decode(data.token);
            this.userKey = (decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"]);
            this.role = (decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
            return "Success";
        }));
    }

    Register(register: RegisterDTO) {
        return this.apiService.post(this.configService.getRegisterUrl, register);
    }

    RegisterAdmin(register: RegisterDTO) {
        return this.apiService.post(this.configService.getRegisterAdminUrl, register);
    }

}