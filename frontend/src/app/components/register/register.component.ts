import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuarios: any;
  usuario = {
    email: '',
    password: '',
    name: ''
  }

  ngOnInit() {
    this.database.obtenerTodos("users").subscribe((usuariosRef) => {
      console.log("usuariosRef: ", usuariosRef);
      this.usuarios = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
      console.log(this.usuarios)
    })
  }

  constructor(private authService: AuthService, private database: DataBaseService, private router: Router) { }

  registrarse() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(user => {
      console.log("Registered: ", user);
      let list = [...this.usuarios];
      let existe = list.find(user => user.email == email);

      if (!existe) {
        console.log("New User Created")
        this.database.crear('users', this.usuario);
      };

      this.router.navigate(['/twitter']);
    }).catch(err => {
      console.log(err)
    })
  }



}