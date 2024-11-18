<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../services/activity.service';
import { MatCardModule } from '@angular/material/card';
import { Activity } from '../../../models/Activity';
import { RouterModule } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-listar',
  standalone: true,
<<<<<<< Updated upstream
  imports: [],
=======
  imports: [MatCardModule,RouterModule,CommonModule],
>>>>>>> Stashed changes
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
<<<<<<< Updated upstream
export class ListarComponent {
=======
export class ListarComponent implements OnInit {

  actividades: Activity[] = [];

  constructor(private aS: ActivityService) {}

  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.actividades= data;
    });
    this.aS.getList().subscribe((data: Activity[]) => {
      this.actividades=data;
    });
  }

>>>>>>> Stashed changes

}
