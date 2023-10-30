import { Component } from '@angular/core';
import { UserData } from './UserData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata:UserData=new UserData();
  usersDetails:UserData[]=[];
  layout:string = '';
  
  selectedOption:string = '';
   all=[
    ['chennai','thanjavur','kumbakonam','Trichy','Tiruneveli'],['banglore','udupi','karnataka','Gadaks'],
    ['hyderabad','vijayawada','andhra pradesh','telangana'],
    [' Mahbubnagar', 'Medak', 'Nalgonda', 'Nizamabad', 'Adilabad', 'Karimnagar' ,'Warangal']
//Hyderabad, 
   ]
   states=["Tamil nadu","Karnataka","Andhar pradhesh","Telugana"];
   state1:number=-1;
   state2:number=-1;
   stateName:string="AP";
   saveData(){
    console.log(this.states[this.state1]);
    console.log(this.state2);
            var user=new UserData();
            user.firstName=this.udata.firstName;
            user.lastName=this.udata.lastName;
            user.company=this.udata.company;
            sessionStorage.setItem("user"+this.udata.firstName, user.firstName+" " +user.lastName);
            this.usersDetails.push(user);
            console.log(this.usersDetails);
             //this.usersDetails=[];
             
   }

   checkData() {
    //console.log(event.target);
   // console.log(this.firstName);
   }
   sendData(){
    console.log("Sending  data....")
   }
}
