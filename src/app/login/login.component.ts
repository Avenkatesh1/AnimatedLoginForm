import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any ={
    userName:"",
    password:""
  }

  constructor(private router:Router){}
  onClick(){
    if(this.loginObj.userName == "venkat" && this.loginObj.password == "123456"){
        this.router.navigateByUrl('/Dashboard')
    }else{
      alert('wrong Credentials....')
    }
  }
}

