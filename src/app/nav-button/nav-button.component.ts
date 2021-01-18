import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  @Input()  options: any = {};
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked($event){
    this.onClick.emit($event);
  }

}
