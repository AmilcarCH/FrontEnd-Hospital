import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ModalUploadComponent } from "../components/modal-upload/modal-upload.component";

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuard,
  SubirArchivoService
} from "./service.index";



@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuard,
    SubirArchivoService,
    ModalUploadComponent
  ],
  declarations: []
})
export class ServiceModule {}
