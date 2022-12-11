import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateEvent } from 'src/app/models/events/create-event';
import { IGenre } from 'src/app/models/genres/genre';
import { ISimplePlace } from 'src/app/models/places/simple-place';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {


  id: string;
  isAddMode: boolean;
  eventForm: FormGroup;

  get formValue() {
    return this.eventForm.value as ICreateEvent;
  }

  get title() { return this.eventForm.get('title')!; }
  get text() { return this.eventForm.get('text')!; }
  get isOnline() { return this.eventForm.get('isOnline')!; }
  get site() { return this.eventForm.get('site')!; }
  get facebook() { return this.eventForm.get('facebook')!; }
  get instagram() { return this.eventForm.get('instagram')!; }
  get eventTime() { return this.eventForm.get('eventTime')!; }
  get price() { return this.eventForm.get('price')!; }

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  public selectedGenres: IGenre[];
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.selectedGenres = [];

    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]],
      isOnline: [false],
  
      site: [''],
      facebook: [''],
      instagram: [''],
  
      eventTime: [''],
      price: [0, Validators.min(0)]
    });


    if (!this.isAddMode) {
      this.eventsService.getById(parseInt(this.id))
        .subscribe(res => {
          console.log(res);
          this.eventForm.patchValue(res);
          this.selectedGenres = res.types;
          this.placeId=res.placeId??0;
          console.log(this.selectedGenres);
        });
    }
  }

  public placeholder = "Types";
  public types: IGenre[];
  public placeId: number;
  public isOnline2: boolean = false;

  isPassVisible = false;

  eyeClick() {
    this.isPassVisible = !this.isPassVisible;
    console.log(this.isPassVisible);
  }


  checkChange() {
    this.isOnline2 = !this.isOnline2;
  }

  sumbit(): void {

    if (this.eventForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const _event: ICreateEvent = this.eventForm.value;

    _event.types = [];

    this.types.forEach(element => {
      _event.types.push(element.id);
    });
    if (this.placeId != null) _event.placeId = this.placeId;

    if (_event.facebook == '') _event.facebook = undefined;
    if (_event.instagram == '') _event.instagram = undefined;
    console.log(_event);

    if(this.isAddMode)
    {
      this.eventsService.addEvent(_event).subscribe(result => {
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
    else{
      _event.placeId=this.placeId;
      _event.id=parseInt(this.id);

      this.eventsService.updateEvent(_event).subscribe(result => {
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

  addGenre(genres: IGenre[]) {
    this.types = genres;
    console.log('Genres is updated');
  }

  selectPlace(place: ISimplePlace) {
    this.placeId = place.id;
    console.log('Place is updated');
  }
  //addImage(image: File) {
  //this.image = image;
  //console.log('Image is updated');
  //}
}
