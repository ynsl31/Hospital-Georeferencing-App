import { Component, Input, OnInit } from '@angular/core';
import { Medecin } from 'src/app/modals/Medecin';

@Component({
  selector: 'app-medecin-details',
  templateUrl: './medecin-details.component.html',
  styleUrls: ['./medecin-details.component.css']
})
export class MedecinDetailsComponent implements OnInit {

  @Input() medecin: Medecin
  
  constructor() { }

  ngOnInit() {
  }

}
