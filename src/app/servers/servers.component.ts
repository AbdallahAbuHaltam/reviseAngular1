import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isAllowed=false;
  serverCreationStatus:string='No Server Was Created!';
  serverName='TestServer';
  serverCreated:boolean=false;
  servers=['TestServer1', 'TestServer2'];


  constructor(){
    setTimeout(()=>{
      this.isAllowed=true;
    },2000);
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="The Server Has Been Successfully Created! Name is "+ this.serverName;
  }

  onUpdateName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
