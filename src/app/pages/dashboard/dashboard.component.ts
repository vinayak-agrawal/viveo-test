import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/shared/interfaces/athletes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  athleteDetails: Array<Athlete>;
  athletesToDisplay: Array<Athlete> = [];
  raceStarted: boolean = false;
  time: number = 0;

  constructor() { }

  ngOnInit(): void {
    // retrieve the athlete details
    this.athleteDetails = localStorage.getItem("atheleteDetails") ? JSON.parse(localStorage.getItem("atheleteDetails")) : [];
  }

  /**
   * @method - startRace
   * @description - Method to call when clicked on Start Race button, to initiate the check for timings
   */
  startRace() {
    this.raceStarted = true;

    // connect socket. in this case setInterval will run to check the timing of athletes
    let intervalCheck = setInterval(() => {
      // only run when browser is active
      if (!document.hidden) {
        this.time += 1000;

        this.athleteDetails.forEach(athlete => {
          if (athlete.entryTime * 1000 === this.time) {
            let _athlete = {...athlete};
            _athlete.finishTime = null;
            this.athletesToDisplay.push(_athlete);
          }

          if (athlete.finishTime * 1000 === this.time) {
            // remove athelete from toDisplay and also from the main details
            const indexToDel = this.athletesToDisplay.findIndex(ath => ath.athleteId === athlete.athleteId);
            this.athletesToDisplay.splice(indexToDel, 1);
            this.athletesToDisplay.push(athlete);
          }
        });

        // logic to clear when the finish row is completed
        if (this.athleteDetails.length === this.athletesToDisplay.length) {
          const _emptyAthlete = this.athletesToDisplay.filter(elem => !elem.finishTime || elem.finishTime === null);
          if (_emptyAthlete.length === 0) clearInterval(intervalCheck);
          this.raceStarted = false;
        }
      }
    }, 1000);    
  }
}


