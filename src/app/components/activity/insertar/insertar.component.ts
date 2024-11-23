import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Activity } from '../../../models/Activity';
import { ActivityService } from '../../../services/activity.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-insertar',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css',
})
export class InsertarActivityComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  activity: Activity = new Activity();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private aS: ActivityService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hnombre: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      hcosto: ['', Validators.required],
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.activity.idActivity = this.form.value.hcodigo;
      this.activity.nameActivity = this.form.value.hnombre;
      this.activity.descriptionActivity = this.form.value.hdescripcion;
      this.activity.costActivity = this.form.value.hcosto;

      if (this.edicion) {
        //update
        this.aS.update(this.activity).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        //insertar
        this.aS.insert(this.activity).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['actividades']);
  }
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idActivity),
          hnombre: new FormControl(data.nameActivity),
          hdescripcion: new FormControl(data.descriptionActivity),
          hcosto: new FormControl(data.costActivity),
        });
      });
    }
  }
}
