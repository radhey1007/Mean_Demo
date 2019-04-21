import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEANCRUD';

  constructor(public loading :SlimLoadingBarService,private router: Router){
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }


  private navigationInterceptor(event: Event): void {

    if( event instanceof NavigationStart ){
      this.loading.start();
    } else if(event instanceof NavigationEnd) {
      this.loading.complete();
    } else if(event instanceof NavigationCancel) {
      this.loading.stop();
    } else if(event instanceof NavigationError) {
      this.loading.stop();
    }

  }

}
