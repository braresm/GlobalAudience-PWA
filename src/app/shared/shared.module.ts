import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';


const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    TranslateModule,
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
