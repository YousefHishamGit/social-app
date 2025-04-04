import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/Posts/posts.service';
import { UsersService } from '../../core/services/User/users.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommentsComponent } from "../Comments/comments/comments.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  imports: [NavbarComponent, DatePipe, CommentsComponent,FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
  standalone:true
})
export class MyProfileComponent implements OnInit {
  private readonly postsService =inject(PostsService);
  private readonly usersService =inject(UsersService);
  private readonly router =inject(Router);
  toastrService=inject(ToastrService);
  myPost:any;
  myToken=localStorage.getItem('token')
  myId:any;
  contant:any;
  saveImg:any;
  count!:number;

  ngOnInit(): void {
    this.getMyPostes();
    
  
  }


  getMyPostes():void{
    this.usersService.Get_logged_User_Data().subscribe({
      next:(res)=>{
        
        
        this.myId=res.user._id;
        
        this.postsService.Get_My_Posts(this.myId).subscribe({
          next:(res)=>{
            
            this.myPost=res.posts;
            this.count=res.paginationInfo.total;
            
            
          }
        })
        
        
      }
    })
    

  }
  savedImg(e:Event):void{
    const element=e.target as HTMLInputElement;
    this.saveImg=element!.files![0];

  }
  addPost():void{
    let data =new FormData;
    data.append("body",this.contant);
    data.append("image",this.saveImg);


    this.postsService.Create_Post(data).subscribe({
      next:(res)=>{

        this.getMyPostes();
        this.AddSuccess();
        
      }

    })
  }
  deletePost(id:string):void{
    this.postsService.Delete_Post(id).subscribe({
      next:(res)=>{ 
          
          if(res.message=="success"){
            
            this.getMyPostes();
            this.DeletedSuccess();
          }
          

      }
    })
  }
  DeletedSuccess() {
    this.toastrService.success('Your post has been Deleted!');
  }
  AddSuccess() {
    this.toastrService.success('Your post has been Created!');
  }
}
