import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../models/Activity';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { ActivityService } from '../../../services/activity.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-listar-actividad',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterLink,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarActividadComponent implements OnInit{
  datasource: MatTableDataSource<Activity> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','accion01','accion02'];

  constructor(private aS: ActivityService) {}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.aS.delete(id).subscribe((data) => {
      this.aS.list().subscribe((data) => {
        this.aS.setList(data);
      });
    });
  }
}
