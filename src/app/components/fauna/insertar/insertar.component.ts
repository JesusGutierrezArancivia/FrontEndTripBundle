import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Fauna } from '../../../models/Fauna';
import { FaunaService } from '../../../services/fauna.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insertar-fauna',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarFaunaComponent {
  form: FormGroup = new FormGroup({});
  fauna: Fauna = new Fauna();
  id: number = 0;
  fotoFauna: any = null;
  edicion: boolean = false;
  listaEstados: { value: string; viewValue: string }[] = [
    { value: 'Extincion', viewValue: 'Extincion' },
    { value: 'Amenazado', viewValue: 'Amenazado' },
    { value: 'Preocupacion menor', viewValue: 'Preocupacion menor' },
  ];
  constructor(
    private fS: FaunaService,
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
      hnombre: ['', Validators.required],
      hfamilia: ['', Validators.required],
      hlatitud: ['', Validators.required],
      hlongitud: ['', Validators.required],
      hestado: ['', Validators.required],

    });
  }
  seleccionaFoto(event: any) {
    this.fotoFauna = event.target.files[0];
    console.log(this.fotoFauna);
  }
  insertar(): void {
    if (this.form.valid) {
      this.fauna.idFauna = this.form.value.hcodigo;
      this.fauna.nameFauna = this.form.value.hnombre;
      this.fauna.familyFauna = this.form.value.hfamilia;
      this.fauna.latitudeFauna = this.form.value.hlatitud;
      this.fauna.lengthFauna = this.form.value.hlongitud;
      this.fauna.stateFauna = this.form.value.hestado;
      if (this.edicion) {
        //update
        this.fS.update(this.fauna).subscribe((data) => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      } else {
        //insert
        this.fS.insert(this.fauna).subscribe((data:any) => {
          console.log(data);
          if (this.fotoFauna) {
            const fotoFormData = new FormData();
            fotoFormData.append("image", this.fotoFauna, this.fotoFauna.name);
            //console.log(fotoFormData);
            this.fS.updateImage(data.idFauna, fotoFormData).subscribe({
             
            });
          }

          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['faunas']);
  }
  init() {
    if (this.edicion) {
      this.fS.listId(this.id).subscribe((data) => {
        console.log(data);
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idFauna),
          hnombre: new FormControl(data.nameFauna),
          hfamilia: new FormControl(data.familyFauna),
          hlatitud: new FormControl(data.latitudeFauna),
          hlongitud: new FormControl(data.lengthFauna),
          hestado: new FormControl(data.stateFauna),

        });
      });
    }
  }
}
