import { Injectable } from '@angular/core';
import { cities } from '../tz.json';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TimeZonesService {
  getZones() {
    this.logger.log(new Date, 'Getting all timezones')
    return cities
  }
  getZone(city: string) {
    this.logger.log(new Date, 'Getting timezone for:' + city)
    return cities.find(c => c.city === city)
  }
  constructor(private logger: LoggerService) { }
}
