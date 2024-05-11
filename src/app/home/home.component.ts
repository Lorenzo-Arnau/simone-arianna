import { isPlatformBrowser } from '@angular/common';
import { Component, DoCheck, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { interval, mergeMap, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,DoCheck{
  days:any=0;
  hours:any=0;
  minutes:any=0;
  secs:any=0;
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: object){
    this.isBrowser.set(isPlatformBrowser(platformId));
  }
  ngOnInit(): void {
    if(this.isBrowser()) { // check it where you want to write setTimeout or setInterval
      setInterval(()=> {
        this.startTimer();
      }, 1000)
    }
  }
  ngDoCheck(): void {

  }
  scrollTo(div:any){
    if(this.isBrowser()) {
      const elementList = document.querySelectorAll('.' + div);
      const element = elementList[0] as HTMLElement;
      element.scrollIntoView({behavior: 'smooth'})
    }

  }
  goOnPaypal(){
    //TODO: da inserire link paypal
    window.open( 'https://maps.app.goo.gl/ThC1hDCYsd8nLbLN7','BLANK')
  }
  startTimer(){
    var countDownDate = new Date("Jun 29, 2024 11:00:00").getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.secs = seconds;

  }
  goOnGoogleMaps(){
    window.open( 'https://maps.app.goo.gl/ThC1hDCYsd8nLbLN7','BLANK')

  }
}
