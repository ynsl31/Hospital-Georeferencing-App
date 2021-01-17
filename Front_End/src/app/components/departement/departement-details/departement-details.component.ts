import { Component, Input, OnInit } from '@angular/core';
import { Departement } from 'src/app/modals/Departement';

@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit {

  @Input() departement : Departement
  constructor() { }

  ngOnInit() {
  }

}
