import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { isAdmin } from 'src/app/shared/roles';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  searchText;
  posts: {};
  isDataAvailable:boolean = false;
  currentUser: {};

  constructor(private userService: UserService, private router: Router,
    private postService: PostService ) { }

  ngOnInit() {
    this.userService.WhoAmI().toPromise().then(data =>  {
      this.currentUser = data; if(data == null || data == undefined) { this.router.navigate(['/403']); }
      this.postService.GetAll(this.currentUser["ageGroup"]).subscribe(data => { 
          this.posts = data;
          this.isDataAvailable = true;
        });
    });
  
  }

  createPost(){
    this.router.navigate(['create']);
  }

  IsDeleteAvailable() {
    return isAdmin(this.userService.role);
  }

  IsCreateAvailable() {
    return isAdmin(this.userService.role);
  }

  IsUpdateAvailable() {
    return isAdmin(this.userService.role);
  }

  update(post_id: number) {
    this.postService.GetById(post_id).subscribe(data => this.router.navigate(['update', data.id]));
  }

  details(post_id: number) {
    this.postService.GetById(post_id).subscribe(data => this.router.navigate(['post', data.id]));
  }

  delete(post_id: number) {
    this.postService.delete(post_id).subscribe(data => this.router.navigate(['post/all']));
  }
}