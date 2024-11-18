import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarFloraComponent } from './listar/listar.component';

@Component({
  selector: 'app-flora',
  standalone: true,
  imports: [RouterOutlet,ListarFloraComponent],
  templateUrl: './flora.component.html',
  styleUrl: './flora.component.css'
})
export class FloraComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
