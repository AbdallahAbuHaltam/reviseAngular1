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
  constructor(){
    setTimeout(()=>{
      this.isAllowed=true;
    },2000);
  }

  onServerCreation(){
    this.serverCreationStatus="The Server Has Been Successfully Created!";
  }

  onUpdateName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
