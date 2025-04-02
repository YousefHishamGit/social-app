import { UsersService } from './../../core/services/User/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink,RouterLinkActive,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private readonly usersService=inject(UsersService);
  private readonly router=inject(Router);
  SignIn:FormGroup=new FormGroup({
    email:new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null ,[Validators.required])
    
  });

  sumbitForm():void{
    if(this.SignIn.valid){
      this.usersService.signIn(this.SignIn.value).subscribe({
        next:(res)=>{
          console.log(res);
          if (res.message=="success") {
            localStorage.setItem('token',res.token);
            this.router.navigate(["/timeLine"])
            
          }
          
        }
      })
    }

  }

}
