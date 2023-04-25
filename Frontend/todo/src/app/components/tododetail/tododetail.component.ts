import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  constructor(private service:TodoService,private  router:ActivatedRoute,private navrouter:Router) { }
  edit={
    status:true
  }
  status:any='in-progress'
  todo:any
  ngOnInit(): void {
    let token=localStorage.getItem("token")
    if(!token){
        this.navrouter.navigateByUrl('login')
    }
    let id=this.router.snapshot.paramMap.get("id")
    this.service.tododetail(id).then(res=>res.json()).then(data=>this.todo=data
    )
  }

  todoEdit(id:any){

    console.log(id);
    this.service.todoStatus(id,this.edit).then(res=>res.json()).then(data=>{console.log(data)}) 
    if(this.edit.status===true){
       this.edit.status=false
    }
    else{
      this.edit.status=true
    }
    
   }

   
   
todostat(id:any){
  this.service.tododetail(id).then(res=>res.json()).then(data=>this.todo=data)
  let value=this.todo.status
  console.log(value);
  value==true?this.status="completed":this.status="pending"
}

todoRemove(id:any){
  this.service.removeTodo(id).then(res=>res.json()).then(data=>console.log(data))
  this.navrouter.navigateByUrl("mytodos")
  
}
   
}
