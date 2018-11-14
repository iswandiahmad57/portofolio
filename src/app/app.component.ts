import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portofolio';
  resumeMenu:boolean =true;
  workMenu:boolean=false;
  funMenu:boolean =false;
  blogMenu:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  menu(menu:any){
    switch(menu){
      case "resume":{
        this.resumeMenu=true;
        this.workMenu=false;
        this.funMenu=false;
        this.blogMenu=false;
        break;
      }
      case "work":{
        this.resumeMenu=false;
        this.workMenu=true;
        this.funMenu=false;
        this.blogMenu=false;
        break;
      }
    }
    $("#mcs_container").mCustomScrollbar("scrollTo", "#main-content", {
      scrollInertia: 500,
      callbacks: false
    });
  }

  
}
