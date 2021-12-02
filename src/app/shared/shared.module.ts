import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputComponent } from './components/input/input.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterPageComponent,
    CardComponent,
    NavbarComponent,
    InputComponent,
    NotFoundPageComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
    
  ],
  exports: [
    MasterPageComponent,
    CardComponent,
    InputComponent,
    FormComponent
  ]
})
export class SharedModule { }
