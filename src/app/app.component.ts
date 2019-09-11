import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public serkan : string;
 
 // @Input() serkan : string;

  doClick(){
    window.alert(this.serkan);
  }
}
