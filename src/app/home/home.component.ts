import { isPlatformBrowser } from '@angular/common';
import { Component, DoCheck, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { interval, mergeMap, timer } from 'rxjs';
import { HomeService } from './home-service.service';
import { HttpClient, HttpRequest } from '@angular/common/http';

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

  images = [
    {'image': "assets/images/married.jpg"},
  ];
  config = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  emailSimone = "gsmakeup92@gmail.com";
  emailArianna = "arianna.mostardi@gmail.com";

  constructor(@Inject(PLATFORM_ID) platformId: object,private imageService:HomeService,private http:HttpClient){
    this.isBrowser.set(isPlatformBrowser(platformId));
  }
  ngOnInit(): void {
    if(this.isBrowser()) { // check it where you want to write setTimeout or setInterval
      setInterval(()=> {
        this.startTimer();
      }, 1000)
    }
    this.downloadImages();
  }
  ngDoCheck(): void {

  }
  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }
  scrollTo(div:any){
    if(this.isBrowser()) {
      const elementList = document.querySelectorAll('.' + div);
      const element = elementList[0] as HTMLElement;
      element.scrollIntoView({behavior: 'smooth'})
    }

  }

  downloadImages(): void {
    console.log('download');

    this.imageService.getImages().subscribe(images => {
      images.forEach((url:any) => {
        // this.images.push({'image': url})
      });
    });
  }
  downloadImage(): void {
    //   this.images.forEach((url:any) => {
    //   const a:any = document.createElement('a');
    //   a.href = url.image;
    //   a.download = url.image.split('/').pop();
    //   document.body.appendChild(a);
    //   a.click();
    //   document.body.removeChild(a);
    // });
       this.images.forEach((url:any) => {
         this.http.get(url.image, { responseType: 'blob' }).subscribe(blob => {
           const a = document.createElement('a');
           const objectUrl = URL.createObjectURL(blob);
           a.href = objectUrl;
           a.download = url.image.split('/').pop() || 'download';
           a.click();
           URL.revokeObjectURL(objectUrl);
         });
    })

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
    // Modificato link location
    window.open( 'https://maps.app.goo.gl/91RiugUD17GoKoue8','BLANK')

  }
}
