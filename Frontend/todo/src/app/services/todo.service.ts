import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  registerService(data:any){
    let header = new Headers()
    header.append('Content-Type','application/json')
    let options={
      method:'POST',
      headers:header,
      body:JSON.stringify(data),
    }
    return fetch('http://127.0.0.1:8000/api/register',options)
}


getToken(data:any){
  let header = new Headers()
  header.append('Content-Type','application/json')
  let raw=JSON.stringify(data)
  let options={
    method:"POST",
    body:JSON.stringify(data),
    headers:header
  }
  return fetch('http://127.0.0.1:8000/api/login',options)
}

fetchToken(){
  return localStorage.getItem("token");
}



addTodo(data:any){
  let header=new Headers()
  header.append('Content-Type', 'application/json')
  let token:any=this.fetchToken();
  if(token){
    header.append("Authorization",token)
    console.log(token);
    
  }
  let options:any={
    method:"POST",
    body:JSON.stringify(data),
    headers: header
}
return fetch('http://127.0.0.1:8000/api/todo',options)
}

listTodo(){
  
  let header=new Headers()
  header.append('Content-Type','application/json')
  let token=this.fetchToken();
  if(token){
    header.append('Authorization',token)
  }
  let options:any={ 
    method:"GET", 
    headers:header
  } 
  return fetch('http://127.0.0.1:8000/api/todo',options)
}


todoStatus(id:any,data:any){
  let header=new Headers()
  header.append('Content-Type','application/json')
  let token=this.fetchToken()
  if(token){
    header.append('Authorization',token)
  }
  let options:any={
    method:"PUT",
    headers:header,
    body:JSON.stringify(data)
  }
  return fetch(`http://127.0.0.1:8000/api/todo/${id}`,options)
}



tododetail(id:any){
  let header=new Headers()
  header.append('Content-Type','application/json')
  let token=this.fetchToken()
  if(token){
    header.append('Authorization',token)
  }
  let options:any={
    method:"GET",
    headers:header,
  }
  return fetch(`http://127.0.0.1:8000/api/todo/${id}`,options)
}



removeTodo(id:any){
  let header=new Headers()
  header.append('Content-Type','application/json')
  let token=this.fetchToken()
  if(token){
    header.append('Authorization',token)
  }
  let options:any={
    method:"DELETE",
    headers:header,
  }
  return fetch(`http://127.0.0.1:8000/api/todo/${id}`,options)
}

}








