import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/modals/categorie';

@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.component.html',
  styleUrls: ['./categorie-details.component.css']
})
export class CategorieDetailsComponent implements OnInit {

  @Input() categorie : Categorie
  constructor() { }

  ngOnInit() {
  }

}
