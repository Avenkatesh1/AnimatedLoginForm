import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimatedLoginForm';

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
