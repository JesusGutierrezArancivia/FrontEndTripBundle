<<<<<<< HEAD
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-fauna',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './fauna.component.html',
  styleUrl: './fauna.component.css'
})
export class FaunaComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
=======
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarFaunaComponent } from './listar/listar.component';

@Component({
  selector: 'app-fauna',
  standalone: true,
  imports: [RouterOutlet,ListarFaunaComponent],
  templateUrl: './fauna.component.html',
  styleUrl: './fauna.component.css'
})
export class FaunaComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
>>>>>>> MarcosDev
