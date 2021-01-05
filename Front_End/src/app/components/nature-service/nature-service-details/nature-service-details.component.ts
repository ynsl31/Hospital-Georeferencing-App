import { Component, OnInit, Input } from '@angular/core';

import { NatureService } from "../../../modals/NatureService";

@Component({
  selector: 'app-nature-service-details',
  templateUrl: './nature-service-details.component.html',
  styleUrls: ['./nature-service-details.component.css']
})
export class NatureServiceDetailsComponent implements OnInit {

  @Input()  natureService: NatureService

  constructor() { }

  ngOnInit() {
  }

}
