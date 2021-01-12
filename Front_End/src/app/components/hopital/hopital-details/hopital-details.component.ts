import { Component, Input, OnInit } from '@angular/core';
import { Hopital } from 'src/app/modals/Hopital';

@Component({
  selector: 'app-hopital-details',
  templateUrl: './hopital-details.component.html',
  styleUrls: ['./hopital-details.component.css']
})
export class HopitalDetailsComponent implements OnInit {

 @Input()  hopital : Hopital


  constructor() {
  
   }

  ngOnInit() {
  }


}
