import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/modals/categorie';
import { CategorieService } from '../categorie.service';
declare var $ :any;
@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  componentName : string = "Categorie"

  categories : Categorie[];
  selectedCategorie : Categorie;

  deleteConfirmation : string = ""


  constructor(private Categorieservice : CategorieService,

  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.Categorieservice.getCategories().subscribe(
      data => {

        this.categories = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Categorie Data loading ... Done')}
    );
  }

  deleteCategorie(id){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {


      this.Categorieservice.deleteCategorie(id).subscribe(data => {

          this.loadData();

          $('.modal').modal('hide');

        },
        error => {
          console.log("error");
        },
        () => {}
      );

    }

  }

}
