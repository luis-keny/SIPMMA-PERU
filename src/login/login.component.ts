import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  ingresar(event: Event) {
    event.preventDefault();
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }
}