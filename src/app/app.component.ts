import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { ActivityComponent } from './components/activity/activity.component';
import { UsersComponent } from './components/users/users.component';
import { FloraComponent } from './components/flora/flora.component';
import { FaunaComponent } from './components/fauna/fauna.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CityComponent,ActivityComponent,UsersComponent,FloraComponent,FaunaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TripBundleProject';
}
