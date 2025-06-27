import { Component, inject } from '@angular/core';
import { PostsService } from '../../core/services/Posts/posts.service';
import { Iposts } from '../../core/interface/iposts';

@Component({
  selector: 'app-friends',
  imports: [],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {
  private readonly friendsService = inject(PostsService);
  friendsList!:Iposts[];
  ngOnInit(): void {
    this.Get_friends();
  }
  Get_friends():void{
    this.friendsService.Get_friends().subscribe({
      next:(res)=>{
        this.friendsList=res.posts;
        
        
      },
      error:(err)=>{
        console.error('Error fetching friends:', err);
      }
    })
  }


}
