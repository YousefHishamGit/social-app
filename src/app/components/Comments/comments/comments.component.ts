import { Comment } from './../../../core/interface/iposts';
import { DatePipe } from '@angular/common';
import { Component, ElementRef, inject, input, InputSignal, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommentsService } from '../../../core/services/Comments/comments.service';
import { Icomments } from '../../../core/interface/icomments';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-comments',
  imports: [DatePipe,ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  private readonly commentsService = inject(CommentsService);
  postId:InputSignal<any>=input.required();
  commentList!:Icomments
  commentForm!:FormGroup;
  @ViewChild('textComment') textComment!: ElementRef;


  ngOnInit(): void {
    this.Get_Post_comments(this.postId());

    this.commentForm=new FormGroup({
      content:new FormControl(null),
      post:new FormControl(this.postId())
    })
  }
  Get_Post_comments(data:any):void{
    this.commentsService.Get_Post_comments(data).subscribe({
      next:(res)=>{
        this.commentList=res;
        console.log(this.commentList.comments);

        

        
      }
    })
  }
  addComment():void{
    console.log("hellll");
    this.commentsService.Create_Comment(this.commentForm.value).subscribe({
    next:(res)=>{
      this.commentList.comments=res.comments
      this.textComment.nativeElement.value='';
      
      
      
    }
   })

  }

}
