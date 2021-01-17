import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/modals/Departement';
import { DepartementService } from '../departement.service';

declare var $: any;
@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

   


  @Output() isClosed = new EventEmitter<boolean>();

  departementForm: FormGroup

  constructor(
    private form: FormBuilder,
    private departementService: DepartementService
  ) {


    this.departementForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      adresse: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    

    });

  }

  ngOnInit() {
  
  }



  addDepartement() {

    let departement = new Departement();

    departement = this.departementForm.value;

    this.departementService.createDepartement(departement).subscribe(
      data => {

        this.departementForm.reset();

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
