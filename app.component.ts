import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private count:number=0;

  private onBtnClick(){
    console.log("hello:"+this.count);
    this.count ++;
  }
}



