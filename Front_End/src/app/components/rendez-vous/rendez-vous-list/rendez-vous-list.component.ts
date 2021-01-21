import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/modals/Patient';
import { RendezVous } from 'src/app/modals/RendezVous';
import { RendezVousService } from '../rendez-vous.service';

declare var $ :any;
@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.css']
})
export class RendezVousListComponent implements OnInit {

  componentName : string = "gérer mes rendez-vous"

  rendezVousList: RendezVous[];
  selectedRD: RendezVous;
  pationForm :  FormGroup
  

  deleteConfirmation : string = ""


  constructor(
    private rendezVousService : RendezVousService,
    private form: FormBuilder,

  ) {

    this.pationForm = form.group({

      email: ['', Validators.compose([Validators.required, Validators.email])],
      passwd: ['', Validators.compose([Validators.required])],

    });

  }


  dataTable(){

    $( document ).ready(function() {
      
      $('#myDataTable').DataTable({
        ordering:  false,
        "bLengthChange" : false,
        "bInfo":false,
      })

     });
    
  }

  ngOnInit() {
    
  }

  loadData(){

    let patient: Patient = {

      email: this.pationForm.controls.email.value ,
      passwd: this.pationForm.controls.passwd.value

    }

    this.rendezVousService.getRendezVousByPatient(patient).subscribe(
      data => {

        this.rendezVousList = data
        this.dataTable()

      },
      error => {
        console.log("error")
      },
      () => { console.log('Hopital Data loading ... Done')}
    );
  }

  desactiverRd(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedRD.id;

      this.rendezVousService.desactiveRendezVous(id).subscribe(data => {

        this.loadData()
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
