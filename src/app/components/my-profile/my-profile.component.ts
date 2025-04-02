import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/Posts/posts.service';
import { UsersService } from '../../core/services/User/users.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommentsComponent } from "../Comments/comments/comments.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  imports: [NavbarComponent, DatePipe, CommentsComponent,FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit {
  private readonly postsService =inject(PostsService);
  private readonly usersService =inject(UsersService);
  myPost:any;
  myToken=localStorage.getItem('token')
  myId:any;
  contant:any;
  saveImg:any;

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
            console.log(this.myPost);
            
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
        console.log(res);
        
      }
    })
  }
}
