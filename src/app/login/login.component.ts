import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=''
  pswd=''

  userDetails:any= {
       1000:{acno:1000, username:"Ray", password:1000, balance:35000},
       1001:{acno:1001, username:"Raj", password:1001, balance:45000},
       1002:{acno:1002, username:"Ram", password:1002, balance:55000}
     }

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value
  }
// login(){
//   var acno=this.acno
//   var pswd=this.pswd
//   let userDetails=this.userDetails
//   if(acno in userDetails){
//        if(pswd==userDetails[acno]['password'
//         alert('login successfull')
//        }
//        else{
//         alert('incorrect password')
//        }
//   }
//   else{
//     alert('user does not exist')
//   }

// }
login(a:any,p:any){
  var acno=a.value
  var pswd=p.value
  let userDetails=this.userDetails
  if(acno in userDetails){
       if(pswd==userDetails[acno]['password']){
        alert('login successfull')
       }
       else{
        alert('incorrect password')
       }
  }
  else{
    alert('user does not exist')
  }

}

}
