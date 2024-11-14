import { Component } from '@angular/core';
import { ActivityService } from '../../../services/activity.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
constructor(private aS: ActivityService){}
}
