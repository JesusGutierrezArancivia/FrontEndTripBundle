<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

}
=======
import { Component, OnInit } from '@angular/core';
import { Flora } from '../../../models/Flora';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FloraService } from '../../../services/flora.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-flora',
  standalone: true,
  imports: [MatCardModule, MatIconModule,RouterModule,CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarFloraComponent implements OnInit{
  datasource: MatTableDataSource<Flora> = new MatTableDataSource();
  constructor(private fS: FloraService) {}
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
>>>>>>> MarcosDev
