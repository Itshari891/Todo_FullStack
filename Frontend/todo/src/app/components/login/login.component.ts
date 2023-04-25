import { Component,OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfailed:any;
  loginForm = new FormGroup({
      "username" : new FormControl('',Validators.required),
      "password" : new FormControl('',Validators.required)
    })
    constructor(private service:TodoService,private router:Router) { }
  
    ngOnInit(): void {
    }
    login(){
      this.service.getToken(this.loginForm.value).then(res=> res.json())
      .then(data=>{
        let token ="Token " + data.token
        localStorage.setItem("token",token)
        
        if(data.non_field_errors || this.loginForm.value.username=='' && this.loginForm.value.password==''){
          let username=data.non_field_errors
          this.loginfailed=username 
          this.router.navigateByUrl('login')
        }
        else{
          console.log(this.loginForm.value);
          console.log(data);
          
          this.router.navigateByUrl('todo')
        }
      }
      )
    }
    
  }