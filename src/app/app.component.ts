<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { ActivityComponent } from './components/activity/activity.component';
import { UsersComponent } from './components/users/users.component';
import { FloraComponent } from './components/flora/flora.component';
import { FaunaComponent } from './components/fauna/fauna.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CityComponent,ActivityComponent,UsersComponent,FloraComponent,FaunaComponent,MatToolbarModule,
    RouterLink,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TripBundleProject';
  role: string = '';
  constructor(private loginService: LoginService) {}
  cerrar() {
    sessionStorage.clear();
  }
  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
  isTourist() {
    return this.role === 'TOURIST';
  }

  isAdmin() {
    return this.role === 'ADMIN';
  }
}
>>>>>>> MarcosDev
