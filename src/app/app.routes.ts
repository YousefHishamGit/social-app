import { Routes } from '@angular/router';
import { TimeLineComponent } from './components/timeLine/time-line/time-line.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { AuthPageComponent } from './Layout/auth-page/auth-page.component';
import { BlankPageComponent } from './Layout/blank-page/blank-page.component';
import { loggedGuard } from './core/guards/logged.guard';
import { regsGuard } from './core/guards/regs.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

export const routes: Routes = [
    {
        path:"",
        component:AuthPageComponent,
        canActivate:[loggedGuard],
        children:[
            {path:"",redirectTo:"sign-in",pathMatch:"full"},
            {path:"sign-in",component:SignInComponent,title:"Log-in"},
            {path:"register",component:SignOutComponent,title:"Register"},
            

        ]
    },
    {
        path:"",
        component:BlankPageComponent,
        canActivate:[regsGuard],
        children:[
            {path:"",redirectTo:"timeLine",pathMatch:"full"},
            {path:"timeLine",component:TimeLineComponent,title:"Time-Line"},
            {path:"profile",component:MyProfileComponent,title:"My-Profile"},
            {path:"**",component:NotFoundComponent,title:"Not-Found"},
           

        ]
    },
     
    


];
