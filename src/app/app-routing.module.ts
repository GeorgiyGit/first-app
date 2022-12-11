import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/account/log-in/log-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { AddGenreComponent } from './components/add-genre/add-genre.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { PlacesEditComponent } from './components/places-edit/places-edit.component';
import { EventsEditComponent } from './components/events-edit/events-edit.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { FavoritePlacesComponent } from './components/favorite-places/favorite-places.component';
import { FavoriteEventsComponent } from './components/favorite-events/favorite-events.component';
const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'events', component:EventListComponent},
  { path: 'places', component:PlaceListComponent},
  { path: 'add-place', component:AddPlaceComponent},
  { path: 'edit-place/:id', component:AddPlaceComponent},
  { path: 'edit-event/:id', component:AddEventComponent},
  { path: 'add-event', component:AddEventComponent},
  { path: 'add-genre', component:AddGenreComponent},
  { path: 'places-edit', component:PlacesEditComponent},
  { path: 'events-edit', component:EventsEditComponent},
  { path: 'place-details/:id', component:PlaceDetailsComponent},
  { path: 'event-details/:id', component:EventDetailsComponent},
  { path: 'log-in', component:LogInComponent},
  { path: 'sign-up', component:SignUpComponent},
  { path: 'favorite-places', component:FavoritePlacesComponent},
  { path: 'favorite-events', component:FavoriteEventsComponent},
  { path: '**', component: EventListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
