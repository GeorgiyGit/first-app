import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/comments/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() placeId?:number;
  @Input() eventId?:number;

  comments:IComment[];
  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    if(this.placeId!=null){
      this.commentsService.getPlaceComments(this.placeId).subscribe(res=>{
        this.comments=res;
      })
    }
    else if(this.eventId!=null){
      this.commentsService.getEventComments(this.eventId).subscribe(res=>{
        this.comments=res;
      })
    }
  }

}
