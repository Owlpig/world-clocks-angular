import { Component, OnInit } from '@angular/core';
import { TimeZonesService } from '../time-zones.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cities: Array<any> = this.timezones.getZones()

  constructor(private timezones: TimeZonesService) { }

  ngOnInit(): void {
  }

}
