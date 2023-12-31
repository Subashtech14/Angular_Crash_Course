
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `<h1>Hello World from inline template</h1>`,
  // styles:["h1{color:red}"]
})
export class AppComponent implements OnInit {

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService) {
    console.log(initService.config);

  }
  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = 'Hilton Hotel';
    // this.localStorage.setItem('name', 'Subash');
  }
  title = 'hotelinventoryapp';
  role = 'admin';
  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  // ngAfterViewInit(): void {
  //  const componentRef = this.vcr.createComponent(RoomsComponent);
  //  componentRef.instance.numberofRooms=50;
  // }

}
