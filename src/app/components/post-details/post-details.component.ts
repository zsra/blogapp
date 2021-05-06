import { Component, OnInit, OnDestroy, forwardRef, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { PostDTO } from 'src/app/dto/PostDTO';
import { CommentDTO } from 'src/app/dto/CommentDTO';
import { UserDTO } from 'src/app/dto/UserDTO';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {

  currentUser: UserDTO;
  id: number = 0;
  post : PostDTO = new PostDTO();
  comments : {};
  commentText: string;
  isDataAvailable:boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute,
    private postService: PostService, private router: Router) { this.currentUser = this.userService.currentUser; }

  ngOnInit() {
    this.userService.WhoAmI().subscribe( data => { this.currentUser = data; if(data == null || data == undefined) { this.router.navigate(['/403']); } });
    this.id = this.route.snapshot.params['id'];
    this.postService.GetById(this.id).subscribe(data => { 
        this.post = data;
        this.comments = this.post["comments"];
        this.isDataAvailable = true;
      });
  }

  newComment(){
    let comment = new CommentDTO();
    comment.AuthorId = this.currentUser.Id;
    comment.Body = this.commentText;
    comment.CreatedAt = new Date();
    
    this.post["comments"].push(comment);

    this.isDataAvailable = false;
    this.postService.update(this.post).subscribe( data => {
      this.post = data;
      this.comments = this.post["comments"];
      this.isDataAvailable = true;
    });
  }

  addComment(comment : CommentDTO){
    let _comment = new CommentDTO();
    _comment.AuthorId = this.currentUser.Id;
    _comment.Body = this.commentText;
    _comment.CreatedAt = new Date();
    comment["comments"].push(_comment);

    for (var i = 0; i < this.post["comments"].length; i++) {
        if(this.post["comments"][i].Id == comment.Id) {
          this.post["comments"][i] = comment;
          break;
        }
    }

   
    this.isDataAvailable = false;
    this.postService.update(this.post).subscribe( data => {
        this.post = data;
        this.comments = this.post["comments"];
        this.isDataAvailable = true;
    });
  }

  userRole(): boolean {
    return true;
  }

}