import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

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
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule {}
