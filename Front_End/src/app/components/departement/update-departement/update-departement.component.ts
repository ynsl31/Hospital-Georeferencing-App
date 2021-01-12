import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/modals/Departement';
import { DepartementService } from '../departement.service';

declare var $ :any;

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {

  @Input()  departement: Departement

  @Output() isClosed = new EventEmitter<boolean>();

  departementForm: FormGroup
 
  constructor(
    private form: FormBuilder,
    private departementService: DepartementService
  ) {


    this.departementForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    

    });

  }

  ngOnInit() {
  }

  updateDepartement() {

    let departement = new Departement();

    departement = this.departementForm.value;

    departement.id = this.departement.id

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
