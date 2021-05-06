import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryDTO } from 'src/app/dto/CategoryDTO';
import { PostDTO } from 'src/app/dto/PostDTO';
import { CategoryService } from 'src/app/service/category.service';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';
import { isAdmin } from 'src/app/shared/roles';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent implements OnInit {

  id: number;
  post = new PostDTO();
  currentUser: any = {};
  isDataAvailable: boolean  = false;
  categories : Observable<CategoryDTO[]>;
  selectedOption: any = {};
  createdCategory = new CategoryDTO();
  isNewCategory: boolean = false;

  constructor(private postService: PostService, private categoryService: CategoryService, private userService
     : UserService, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.WhoAmI().subscribe( data => { this.currentUser = data; if(data == null || data == undefined) { this.router.navigate(['/403']); } });
    this.id = this.route.snapshot.params['id'];
    this.postService.GetById(this.id).subscribe(data => { 
        this.post = data;
        this.categoryService.GetAll().subscribe(data => {
          this.categories = data;
          this.isDataAvailable = true;
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onPostSubmit() {
    if(!this.selectedOption) this.post.Category = this.selectedOption.Id;
    this.postService.update(this.post).subscribe(() => {
     this.openSnackBar('Post updated.', 'Ok');
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

  goBack() {
    this.router.navigate(['/post/all']);
  }

  userRole() {
    return isAdmin(this.userService.role);
  }

}
