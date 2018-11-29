import { UsuarioService } from '../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService,
    public router: Router
  ){

  }
  canActivate(){

    if(this._usuarioService.Logueado()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;

    }

    
  }
}
