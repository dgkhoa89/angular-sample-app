import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  public title = 'Event Binding'; 

  onClickMe(event:Event){
    console.log(event.target.innerHTML)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
