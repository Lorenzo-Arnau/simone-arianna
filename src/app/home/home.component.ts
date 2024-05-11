import { Component, DoCheck, OnInit } from '@angular/core';
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

  constructor(){

  }
  ngOnInit(): void {

  }
  ngDoCheck(): void {
    this.startTimer();
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
    this.days = days + "d "
    this.hours = hours + "h "
    this.minutes = minutes + "m "
    this.secs = seconds + "s "

  }
  goOnGoogleMaps(){
    window.open( 'https://maps.app.goo.gl/ThC1hDCYsd8nLbLN7','BLANK')

  }
}
