import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../core/services/User/users.service';

@Component({
  selector: 'app-sign-out',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css'
})
export class SignOutComponent {
  private readonly usersService=inject(UsersService)
  private readonly router=inject(Router);
  SignOut:FormGroup=new FormGroup({
    name:new FormControl(null ,[Validators.required]),
    email:new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null ,[Validators.required]),
    rePassword:new FormControl(null ,[Validators.required]),
    dateOfBirth:new FormControl("7-10-1994" ,[Validators.required]),
    gender:new FormControl("male",[Validators.required]),
    
  });

  loading!:boolean;

  submitReg():void{
    this.loading=true;
    if(this.SignOut.valid){
    this.usersService.signUp(this.SignOut.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.loading=false;
        if (res.message=="success") {
          
          this.router.navigate(["/timeLine"])
          
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
}
