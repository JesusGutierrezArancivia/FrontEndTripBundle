import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Reserve } from '../../../models/Reserve';
import { Activity } from '../../../models/Activity';
import { City } from '../../../models/City';
import { ReserveService } from '../../../services/reserve.service';
import { CityService } from '../../../services/city.service';
import { ActivityService } from '../../../services/activity.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insertar-reserva',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarReserveComponent {
  form: FormGroup = new FormGroup({});
  reserve: Reserve = new Reserve();
  listaActividades: Activity[] = [];
  listaCiudades: City[] = [];
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private rS: ReserveService,
    private aS: ActivityService,
    private cS: CityService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hfecha: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      hhora: ['', Validators.required],
      hactividad: ['', Validators.required],
      hciudad: ['', Validators.required],

    });
    this.cS.list().subscribe((d) => {
      this.listaCiudades = d;
    });
    this.aS.list().subscribe((d) => {
      this.listaActividades = d;
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.reserve.idReserve = this.form.value.hcodigo;
      this.reserve.dateReserve = this.form.value.hfecha;
      this.reserve.descriptionReserve = this.form.value.hdescripcion;
      this.reserve.hourReserve = this.form.value.hhora;
      this.reserve.activity.descriptionActivity = this.form.value.hactivity;
      this.reserve.city.idCity = this.form.value.hciudad;

      if (this.edicion) {
        //update
        this.rS.update(this.reserve).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        //insert
        this.rS.insert(this.reserve).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['reservas']);
  }
  init() {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe((data) => {
        console.log(data);
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idReserve),
          hfecha: new FormControl(data.dateReserve),
          hdescripcion: new FormControl(data.descriptionReserve),
          hhora: new FormControl(data.hourReserve),
          hactividad: new FormControl(data.activity.idActivity),
          hciudad: new FormControl(data.city.idCity),

        });
      });
    }
  }
}
