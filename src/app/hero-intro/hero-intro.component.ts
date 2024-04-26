import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-intro',
  templateUrl: './hero-intro.component.html',
  styleUrls: ['./hero-intro.component.scss']
})
export class HeroIntroComponent implements OnInit {
  public heroTitle: string = "";
  public heroDescription: string = "";

  constructor() { }

  ngOnInit() {
    const that = this;
    setTimeout(function () {
      that.displayIntro();
    }, 1500);
  }

  displayIntro() {
    const that = this;
    setTimeout(function () {
      that.heroTitle = '';
      that.displayGreeting('Hello there!', 0, 75);
    }, 500);
  }


  displayGreeting(message: string , index: number, interval: number) {
    const that = this;
    if (index < message.length) {
      this.heroTitle += (message[index++]);
      setTimeout(function () { that.displayGreeting(message, index, interval); }, interval);
    } else {
      const that = this;
      setTimeout(function () {
        that.displayDescription('This site is a work in progress.', 0, 50);
      }, 500);
    }
  }

  displayDescription(message: string , index: number, interval: number) {
    const that = this;
    if (this.heroDescription === undefined) {
      this.heroDescription = '';
    }
    if (index < message.length) {
      that.heroDescription += (message[index++]);
      setTimeout(function () { that.displayDescription(message, index, interval); }, interval);
    }
  }

}
