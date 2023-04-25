import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {Router} from '@angular/router'
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todohome',
  templateUrl: './todohome.component.html',
  styleUrls: ['./todohome.component.css']
})
export class TodohomeComponent implements OnInit {
 
  todo:any={
    task:''
  }
  listtodo:any 
  message=''
  constructor(private service:TodoService,private router:Router) { }

  ngOnInit(): void {
    let token=localStorage.getItem("token")
    if(!token){
        this.router.navigateByUrl('login')
    }
    
  }

  addTodoView(){
    console.log(this.todo);
     this.service.addTodo(this.todo).then(res=>res.json()).then(data=>{
    if(data.task=='This field may not be blank.'){
      this.message='This field may not be blank.'
    } 
    else{
      this.message="Todo created Successfully"
    }
    })
     this.todo.task=''
  }

hide(){
  this.message=''
}

}


