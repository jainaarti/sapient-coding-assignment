import { Component, OnInit } from '@angular/core';
import { Mission } from '../missionData';
import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  missions: Mission[];

  constructor(public fetchDataService: FetchDataService) { }

  yearArray = {
    buttonValue: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    id: 'year',
    name: 'year'
  };

  launchArray = {
    buttonValue: ['True', 'False'],
    id: 'launch_success',
    name: 'launch_success'
  };

  landingArray = {
    buttonValue: ['True', 'False'],
    id: 'landing_success',
    name: 'landing_success'
  };
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.fetchDataService.getMissions().subscribe((resp: any) => {
      this.missions = resp;
    });
  }

  getByID($event) {
    const buttonName = $event.target.name;
    const buttonValue = $event.target.value.toLowerCase();
    this.fetchDataService.getMissionsById(buttonName, buttonValue).subscribe((resp: any) => {
      this.missions = resp;
      console.log(this.missions);
    });
  }
}