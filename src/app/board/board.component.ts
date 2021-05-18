import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cities = [
    { city: 'Stockholm', timeZone: 'UTC +2' },
    { city: 'London', timeZone: 'UTC +1' },
    { city: 'Paris', timeZone: 'UTC +2' },
    { city: 'New York', timeZone: 'UTC -4' },
    { city: 'Los Angeles', timeZone: 'UTC -7' },
    { city: 'Moscow', timeZone: 'UTC +3' },
    { city: 'Tokyo', timeZone: 'UTC +9' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
