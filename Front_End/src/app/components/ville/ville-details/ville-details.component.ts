import { Component, Input, OnInit } from '@angular/core';
import { Ville } from 'src/app/modals/Ville';

@Component({
  selector: 'app-ville-details',
  templateUrl: './ville-details.component.html',
  styleUrls: ['./ville-details.component.css']
})
export class VilleDetailsComponent implements OnInit {

  @Input()  ville: Ville

  constructor() { }

  ngOnInit() {
  }

}
