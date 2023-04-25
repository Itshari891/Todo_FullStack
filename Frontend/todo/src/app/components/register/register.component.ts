import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Validators ,FormGroup,FormControl} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userForm=new FormGroup({
    "username" : new FormControl('',Validators.required),
    "email" : new FormControl('',Validators.required),
    "password" : new FormControl('',Validators.required),
    "password2" : new FormControl('',Validators.required)
  })
  passworderror:any
  emailerror:any
  usernameerror:any
  constructor(private service:TodoService,private router:Router){}

  ngOnInit(): void {
    
  }

 register(){
    this.service.registerService(this.userForm.value).then(res=>res.json()).then(data=>{
      if(data.password){
        this.passworderror='password '+data.password
      }
      if(data.email=='Enter a valid email address.'){
        this.emailerror=data.email
      }
      if(data.username=='A user with that username already exists.'){
        this.usernameerror=data.username
      }
      if(data.token){
        this.router.navigateByUrl('login')
      }
      
    })
  }
}
