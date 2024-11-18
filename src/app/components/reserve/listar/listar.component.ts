import { Component, OnInit } from '@angular/core';
import { Reserve } from '../../../models/Reserve';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { ReserveService } from '../../../services/reserve.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-reserva',
  standalone: true,
  imports: [MatCardModule, MatIconModule,RouterModule,CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarReservaComponent implements OnInit{
  datasource: MatTableDataSource<Reserve> = new MatTableDataSource();
  constructor(private fS: ReserveService) {}
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
