import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryDTO } from 'src/app/dto/CategoryDTO';
import { RegisterDTO } from 'src/app/dto/RegisterDTO';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new RegisterDTO();
  currentUser: any = {};
  isDataAvailable: boolean  = false;
  categories : Observable<CategoryDTO[]>;
  selectedOption: any = {};

  constructor(private userService : UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isDataAvailable = true;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onUserSubmit() {
    this.userService.Register(this.register).subscribe(() => {
     this.openSnackBar('User created.', 'Ok');
    }, error => {this.openSnackBar('Failed.', 'Ok');});
  }
  
  refresh() {
    this.register = new RegisterDTO();
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  userRole() {
    return true;
  }
}