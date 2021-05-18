import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  @Input() city = {city: '', timeZone: ''}
  time: Date = new Date()
  intervalID!: number;

  constructor() { }
    
  ngOnInit() {
    this.intervalID = setInterval(() => this.time = new Date(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

}
