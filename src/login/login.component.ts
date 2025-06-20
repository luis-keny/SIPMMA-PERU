import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  browserWidth: number;

  constructor(private router: Router) {
    this.browserWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.browserWidth = (event.target as Window).innerWidth;
  }


  ingresar(event: Event) {
    event.preventDefault();
    Swal.fire({
      title: "¡Bienvenido!",
      text: "Presione el botón para continuar",
      icon: "success"
    }).then(() => {
        this.router.navigate(['/main']); // Cambia '/otra-vista' por tu ruta deseada
    });;
  }
}