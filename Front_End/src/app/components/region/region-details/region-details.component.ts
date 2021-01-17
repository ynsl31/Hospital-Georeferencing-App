import { Component, Input, OnInit } from '@angular/core';
import { Region } from 'src/app/modals/Region';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit {
  
  @Input() region : Region
  constructor() { }

  ngOnInit() {
  }

}
