import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateComment } from 'src/app/models/comments/create-comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  id: string;
  isAddMode: boolean;
  commentForm: FormGroup;
  @Input() parentId?: number;
  @Input() eventId?: number;
  @Input() placeId?: number;

  get formValue() {
    return this.commentForm.value as ICreateComment;
  }

  get text() { return this.commentForm.get('text')!; }


  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commentService: CommentsService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.commentForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]]
    });


    if (!this.isAddMode) {
      this.commentService.getById(parseInt(this.id))
        .subscribe(res => {
          console.log(res);
          this.commentForm.patchValue(res);
        });
    }
  }



  sumbit() {
    if (this.commentForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const comment: ICreateComment = this.commentForm.value;


    comment.parentId = this.parentId;
    comment.eventId = this.eventId;
    comment.placeId = this.placeId;

    console.log(this.parentId);
    console.log(this.eventId);
    console.log(this.placeId);
    console.log(comment);
    console.log(this.isAddMode);
    console.log(this.id);

    if (!this.isAddMode) {
      this.commentService.addComment(comment).subscribe(result => {
        console.log(result);

        if(this.placeId!=null){
          this.router.navigateByUrl('/place-details/'+this.placeId).then(() => {
            window.location.reload();
          });
        }
        else if(this.eventId!=null){
          this.router.navigateByUrl('/event-details/'+this.eventId).then(() => {
            window.location.reload();
          });
        }
        
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }
    else {
      comment.id = parseInt(this.id);

      this.commentService.update(comment).subscribe(result => {
        console.log(result);

        this.router.navigateByUrl('/');
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }
  }
}
