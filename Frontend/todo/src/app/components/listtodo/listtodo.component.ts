import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {
  listtodo:any 
  
  constructor(private service:TodoService ,private router:Router) { }

  ngOnInit(): void {
    let token=localStorage.getItem("token")
    if(!token){
        this.router.navigateByUrl('login')
    }
    this.service.listTodo().then(res=>res.json()).then(data=>this.listtodo=data)
  }


  logout(){
    localStorage.removeItem("token")
    this.router.navigateByUrl('login')
  }

  todoDetail(id:any){
    console.log(id);
    this.router.navigate(["tododetail/",id])
       
  }
}
