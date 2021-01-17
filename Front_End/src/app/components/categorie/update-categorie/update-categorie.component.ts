import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/modals/categorie';
import { CategorieService } from '../categorie.service';

declare var $: any;
@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

 @Input()  categorie : Categorie;

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



  updateCategorie() {

    let categorie = new Categorie();

    categorie = this.categorieForm.value;
    categorie.id = this.categorie.id


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
