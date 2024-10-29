import { Component, OnInit } from '@angular/core';
import { City } from '../../../models/City';
import {MatTableDataSource} from '@angular/material/table'
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  datasource:MatTableDataSource<City>=new MatTableDataSource()

  constructor(private cS:CityService){}

  ngOnInit(): void {
    this.cS.list().subscribe(data=>{
      this.datasource=new MatTableDataSource(data)
    })
  }
}
