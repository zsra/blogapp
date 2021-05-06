import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from '../../shared/message';
import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  title = "Login";
  form: FormGroup;
  notification: Message;
  encoded: Observable<string>;

  submitted = false;

  returnUrl: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private userService : UserService,
    private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.activatedRoute.params
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((params: Message) => {
          this.notification = params;
        });
    
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(16)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(64)])]
    });
  }

  ngOnDestroy() {
    
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    
    this.notification = undefined;
    this.submitted = true;
    
    this.userService.Login(this.form.value.username, this.form.value.password).pipe(first())
    .subscribe(
        data => {
            this.router.navigate(["post/all"]);
        },
        error => {
        });;
  }

  register(){
    this.router.navigate(["register"]);
  }
}