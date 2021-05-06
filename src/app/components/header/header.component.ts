import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  user: any;
  role: string;
  isDataAvailable:boolean = false;

  ngOnInit() {
    this.isDataAvailable = true
  }

  home() {
    this.router.navigate(["/post/all"]);
  }
  
  login() {
    this.router.navigate(["/login"]);
  }

  hasSignedIn() {
    return !!this.userService.userKey;
  }
}