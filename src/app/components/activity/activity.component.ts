<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  constructor(public route:ActivatedRoute){}
}
=======
=======
>>>>>>> MarcosDev
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarActividadComponent } from './listar/listar.component';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [RouterOutlet,ListarActividadComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  constructor(public route:ActivatedRoute){}
}
<<<<<<< HEAD
>>>>>>> MarcosDev
=======
>>>>>>> MarcosDev
