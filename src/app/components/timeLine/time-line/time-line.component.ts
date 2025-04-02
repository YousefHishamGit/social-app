import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/Posts/posts.service';
import { Iposts } from '../../../core/interface/iposts';
import { DatePipe } from '@angular/common';
import { CommentsService } from '../../../core/services/Comments/comments.service';
import { CommentsComponent } from "../../Comments/comments/comments.component";
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-time-line',
  imports: [DatePipe, CommentsComponent, FormsModule, NavbarComponent],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  postList:Iposts[]=[];
  contant:any;
  saveImg:any;
  ngOnInit(): void {
    this.Get_All_Posts();
    
  }


  Get_All_Posts():void{
    this.postsService.Get_All_Posts().subscribe({
      next:(res)=>{
        
        this.postList=res.posts;
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
