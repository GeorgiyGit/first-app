import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LogInComponent } from './components/account/log-in/log-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { PlacesService } from './services/place.service';
import { GenresSelectComponent } from './components/genres-select/genres-select.component';
import { AddGenreComponent } from './components/add-genre/add-genre.component';
import { AddImagesComponent } from './components/add-images/add-images.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { SelectPlaceComponent } from './components/select-place/select-place.component';
import { PlacesEditComponent } from './components/places-edit/places-edit.component';
import { EventsEditComponent } from './components/events-edit/events-edit.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { FooterComponent } from './footer/footer.component';
//import { AgmCoreModule } from '@agm/core';
import { FavoritePlacesComponent } from './components/favorite-places/favorite-places.component';
import { FavoriteEventsComponent } from './components/favorite-events/favorite-events.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HeaderComponent,
    LogInComponent,
    PlaceListComponent,
    SignUpComponent,
    AddImagesComponent,
    AddPlaceComponent,
    GenresSelectComponent,
    AddGenreComponent,
    AddEventComponent,
    SelectPlaceComponent,
    PlacesEditComponent,
    EventsEditComponent,
    PlaceDetailsComponent,
    EventDetailsComponent,
    FooterComponent,
    FavoritePlacesComponent,
    FavoriteEventsComponent,
    AddCommentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule//,
    //AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyD3m4Ebxh4hafQn_GePd1VvYfEMWTMIKwI'
    //})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
