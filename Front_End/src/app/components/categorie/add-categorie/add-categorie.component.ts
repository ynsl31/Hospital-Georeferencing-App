import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Categorie } from 'src/app/modals/categorie';
import { CategorieService } from '../categorie.service';

declare var $: any;
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  
 


  @Output() isClosed = new EventEmitter<boolean>();

  categorieForm: FormGroup

  constructor(
    private form: FormBuilder,
    private categorieService: CategorieService
  ) {


    this.categorieForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
       

    });

  }

  ngOnInit() {
  
  }



  addCategorie() {

    let categorie = new Categorie();

    categorie = this.categorieForm.value;

    this.categorieService.createCategorie(categorie).subscribe(
      data => {

        this.categorieForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done') }
    );


  }

}
