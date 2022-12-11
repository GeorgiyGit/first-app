import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICreateGenre } from 'src/app/models/genres/create-genre';
import { IGenre } from 'src/app/models/genres/genre';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres-select',
  templateUrl: './genres-select.component.html',
  styleUrls: ['./genres-select.component.css']
})
export class GenresSelectComponent implements OnInit {

  filter: string;
  genres: IGenre[];

  @Input()selectedGenres: IGenre[]=[];

  @Output() selectedGenreEvent = new EventEmitter<IGenre[]>();
  @Input() placeholder:string;

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(result => {
      this.genres = result;
    });
  }

  //sort(): void {
    //this.genres.forEach(element => {
      //if (element.name.includes(this.filter)) {
        //let genre:ISortedGenre={
        //id: element.id,

        //firstPart:element.name.slice(0,element.name.indexOf(this.filter)),
        //selectedPart:element.name.slice(element.name.indexOf(this.filter),this.filter.length),
        //lastPart:element.name.slice(element.name.indexOf(this.filter)+this.filter.length,element.name.length)
        //};
        //this.sortedGenres.push(element);
      //}
    //});
  //}

  select(e: any): void {
    let find = this.genres.find(x => x?.name === e.target.value);
    let genre = this.genres.find(x => x.id === find?.id);
    if (genre != null && !this.selectedGenres.includes(genre)) {
      this.selectedGenres.push(genre);

      this.selectedGenreEvent.emit(this.selectedGenres);
      e.target.value='';
    }
  }
  unSelect(genre: IGenre) {
    this.selectedGenres = this.selectedGenres.filter(obj => obj !== genre);
    this.selectedGenreEvent.emit(this.selectedGenres);
  }
}
