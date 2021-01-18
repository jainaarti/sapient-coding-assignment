import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {


  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}

