import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './guard/admin.guard';
import { LoginGuard } from './guard/login.guard';
import { ApiService } from './service/api.service';
import { ConfigService } from './service/config.service';
import { UserService } from './service/user.service';
import { PanelLoaderComponent } from './components/panels/panel-loader/panel-loader.component';
import { PostService } from './service/post.service';
import { CategoryService } from './service/category.service';
import { CommentService } from './service/comment.service';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import {MatCardModule} from '@angular/material/card';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatSnackBarModule,
    MatCardModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForbiddenComponent,
    HeaderComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostListComponent,
    PanelLoaderComponent,
    RegisterComponent,
    PostUpdateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    LoginGuard,
    AdminGuard,
    ApiService,
    UserService,
    ConfigService,
    PostService,
    CategoryService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
