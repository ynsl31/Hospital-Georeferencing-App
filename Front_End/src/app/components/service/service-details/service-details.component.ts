import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/modals/Service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  @Input() service : Service;
  
  constructor() { }

  ngOnInit() {
  }

}
