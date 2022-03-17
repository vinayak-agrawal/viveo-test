import { Component, OnInit } from '@angular/core';
import { Athlete } from './shared/interfaces/athletes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // all time in seconds
  athleteDetails: Array<Athlete> = [
    {
      athleteId: 1,
      startLine: 1,
      fullName: 'John Doe',
      entryTime: 10,
      finishTime: 14
    },
    {
      athleteId: 2,
      startLine: 2,
      fullName: 'Amrit Am',
      entryTime: 7,
      finishTime: 11
    },
    {
      athleteId: 3,
      startLine: 3,
      fullName: 'Mark Wall',
      entryTime: 25,
      finishTime: 30
    },
    {
      athleteId: 4,
      startLine: 4,
      fullName: 'Johny Dep',
      entryTime: 16,
      finishTime: 20
    },
    {
      athleteId: 5,
      startLine: 5,
      fullName: 'Jack Spar',
      entryTime: 9,
      finishTime: 16
    },
    {
      athleteId: 6,
      startLine: 6,
      fullName: 'Vinayak Ag',
      entryTime: 6,
      finishTime: 13
    },
    {
      athleteId: 7,
      startLine: 7,
      fullName: 'Nato Moto',
      entryTime: 15,
      finishTime: 23
    }
  ];

  ngOnInit() {
    // save data in local storage, which will come from the server regarding the athletes
    localStorage.setItem('atheleteDetails', JSON.stringify(this.athleteDetails));
  }
}
