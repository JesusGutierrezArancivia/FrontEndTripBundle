import { Component, OnInit } from '@angular/core';
import { Fauna } from '../../../models/Fauna';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FaunaService } from '../../../services/fauna.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-listar-fauna',
  standalone: true,
  imports: [MatCardModule,MatTableModule, MatIconModule,RouterLink,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarFaunaComponent implements OnInit{
  datasource: MatTableDataSource<Fauna> = new MatTableDataSource();

  constructor(private fS: FaunaService) {}
  ngOnInit(): void {
    this.fS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.fS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.fS.delete(id).subscribe((data) => {
      this.fS.list().subscribe((data) => {
        this.fS.setList(data);
      });
    });
  }
}
