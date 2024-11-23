import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarReservaComponent } from './listar/listar.component';
@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [RouterOutlet,ListarReservaComponent],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
