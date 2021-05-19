import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = []
  log(timestamp: Date, description: string) {
    if (this.logs.length >= 10) { this.logs.pop() }
    console.log(timestamp + ' - ' + description)
    this.logs.unshift(timestamp + '-' + description)
  }
  readLatest() { this.logs }
  constructor() { }
}
