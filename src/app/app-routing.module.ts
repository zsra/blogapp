import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'post/all',
    component: PostListComponent
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent
  },
  {
    path: 'update/:id',
    component: PostUpdateComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
