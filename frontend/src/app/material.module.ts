import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


const modulosMaterial = [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      modulosMaterial
    ],
    exports: [
      modulosMaterial
    ],
    providers:[
      {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    ]
  })
  export class MaterialModule { }
  