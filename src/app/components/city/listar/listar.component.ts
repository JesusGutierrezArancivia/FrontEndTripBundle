<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> MarcosDev
import { Component, OnInit, signal } from '@angular/core';
import { City } from '../../../models/City';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CityService } from '../../../services/city.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {GoogleMap, GoogleMapsModule, MapAdvancedMarker} from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule,GoogleMap,GoogleMapsModule,MapAdvancedMarker, CommonModule,MatCardModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent implements OnInit {
  datasource: MatTableDataSource<City> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6','accion01','accion02'];
  cities: City[] = [];
  selectedCity: City | null = null;
  constructor(private cS: CityService) {}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.cS.getCities().subscribe((data: City[]) => {
      this.cities = data;
    });
  }

  delete(id: number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }
  center: google.maps.LatLngLiteral = {lat: -9.19, lng: -75.0152};
  zoom = 6;
  showCityDetails(city: City) {
    this.selectedCity = city;
    this.center = { lat: city.latitudeCity, lng: city.lengthCity }; // Centra mapa
    this.zoom = 10; 
  }


  $cities=signal<City[]>([
    {
      idCity:1,
      nameCity: 'Lima',
      latitudeCity:-12.0464,
      lengthCity:-77.0428,
      provinceCity:'Lima',
      departmentCity:'Lima'
    }
  ])
  /*
  limaPosition={lat:-12.0464, lng:-77.0428};

  options: google.maps.MapOptions={
    center:this.limaPosition,
    zoom:17,
  }
  markerOptions: google.maps.marker.AdvancedMarkerElementOptions={
    position:this.limaPosition
  }
  */
}
<<<<<<< HEAD
>>>>>>> MarcosDev
=======
>>>>>>> MarcosDev
