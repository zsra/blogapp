import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { PostDTO } from 'src/app/dto/PostDTO';
import { PostService } from 'src/app/service/post.service';
import { Observable } from 'rxjs';
import { CategoryDTO } from 'src/app/dto/CategoryDTO';
import { CategoryService } from 'src/app/service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isAdmin, isAdult, isElder, isYoung } from 'src/app/shared/roles';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  post = new PostDTO();
  currentUser: any = {};
  isDataAvailable: boolean  = false;
  categories : Observable<CategoryDTO[]>;
  selectedOption: any = {};
  createdCategory = new CategoryDTO();
  isNewCategory: boolean = false;

  constructor(private postService: PostService, private categoryService: CategoryService, private userService
     : UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.WhoAmI().subscribe( data => { this.currentUser = data; if(data == null || data == undefined) { this.router.navigate(['/403']); } });
    this.categoryService.GetAll().subscribe(data => {
        this.categories = data;
        this.isDataAvailable = true;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onPostSubmit() {
    this.post.AuthorId = this.currentUser.Id;
    this.post.CreatedAt.setDate = Date.now;
    if(!this.selectedOption) this.post.Category = this.selectedOption.Id;
    this.postService.create(this.post).subscribe(() => {
     this.openSnackBar('Post created.', 'Ok');
    }, error => {this.openSnackBar('Failed.', 'Ok');});
  }
  
  newCategory(){
    this.isNewCategory = true;
  }

  onCategorySubmit(){
    this.isDataAvailable = false;
    this.categoryService.create(this.createdCategory).subscribe( data => {
      this.categoryService.GetAll().subscribe(data => {
        this.categories = data;
        this.isNewCategory = false;
        this.isDataAvailable = true;
    });
    })
  }

  refresh() {
    this.post = new PostDTO();
  }

  goBack() {
    this.router.navigate(['/post/all']);
  }

  userRole() {
    isAdmin(this.userService.role);
  }
}