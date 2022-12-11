import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenre } from 'src/app/models/genres/genre';
import { ICreateImage } from 'src/app/models/images/create-image';
import { ICreatePlace } from 'src/app/models/places/create-place';
import { ImageService } from 'src/app/services/image.service';
import { PlacesService } from 'src/app/services/place.service';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {


  id: string;
  isAddMode: boolean;
  placeForm: FormGroup;

  get formValue() {
    return this.placeForm.value as ICreatePlace;
  }

  get name() { return this.placeForm.get('name')!; }
  get text() { return this.placeForm.get('text')!; }
  get route() { return this.placeForm.get('route')!; }
  get site() { return this.placeForm.get('site')!; }
  get facebook() { return this.placeForm.get('facebook')!; }
  get instagram() { return this.placeForm.get('instagram')!; }
  get googleMaps() { return this.placeForm.get('googleMaps')!; }


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private placesService: PlacesService,
    private router: Router,
    private imagesService: ImageService,
    private route2: ActivatedRoute) {
  }

  public selectedGenres: IGenre[];

  ngOnInit(): void {
    this.id = this.route2.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.selectedGenres = [];

    this.placeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]],
      route: ['', [Validators.required, Validators.maxLength(500)]],
      site: [''],
      facebook: [''],
      instagram: [''],
      googleMaps: ['', Validators.required]
    });


    if (!this.isAddMode) {
      this.placesService.getById(parseInt(this.id))
        .subscribe(res => {
          this.placeForm.patchValue(res);
          this.selectedGenres = res.types;
        });
    }
  }

  public placeholder = "Types";
  public types: IGenre[];
  public image: File;
  isPassVisible = false;

  eyeClick() {
    this.isPassVisible = !this.isPassVisible;
    console.log(this.isPassVisible);
  }

  sumbit(): void {

    if (this.placeForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const place: ICreatePlace = this.placeForm.value;

    place.types = [];

    this.types.forEach(element => {
      place.types.push(element.id);
    });

    if (place.facebook == '') place.facebook = undefined;
    if (place.instagram == '') place.instagram = undefined;
    console.log(place);

    if (this.isAddMode) {
      this.placesService.addPlace(place).subscribe(result => {
        //this.imagesService.CreateImage({
          //file:this.image,
          //placeId:result
       //}).subscribe(res=>{}, error => {
          //console.error(error);
          //if (error?.error?.ErrorMessage)
            //alert(error.error.ErrorMessage);
          //else
            //alert(error.message);
        //});
        //console.log(result);

        this.router.navigateByUrl('/');
      }, error => {
        console.error(error);
        if (error?.error?.ErrorMessage)
          alert(error.error.ErrorMessage);
        else
          alert(error.message);
      });
    }
    else {
      place.id = parseInt(this.id);

      this.placesService.updatePlace(place).subscribe(result => {
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

  addParent(genres: IGenre[]) {
    this.types = genres;
    console.log('Genres is updated');
  }
 // addImage(image: File) {
  //this.image=image;
  //console.log('Image is updated');
  //console.log(image);
  //}
}
