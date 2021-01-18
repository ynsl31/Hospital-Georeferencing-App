import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hopital } from 'src/app/modals/Hopital';
import { Medecin } from 'src/app/modals/Medecin';
import { Service } from 'src/app/modals/Service';
import { MedecinService } from '../medecin.service';

declare var $ :any;

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();
  
  medecin : Medecin
  medecinForm :  FormGroup

  // hopital: Hopital
  @Input() service: Service

  constructor(
    private medecinService: MedecinService,
    private form: FormBuilder,
  ) {


    this.medecinForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prenom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      
      email: ['', Validators.compose([Validators.required, Validators.email])],
      passwd: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
     
      tel: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      adresse: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

      matricule: ['', Validators.compose([Validators.required, Validators.minLength(3)])],


    });

  }

  ngOnInit() {
    
  }

  addMedecin(){

    let medecin = new Medecin();

    medecin = this.medecinForm.value;
    medecin.service = this.service

    this.medecinService.createMedecin(medecin).subscribe(
      data => {

        this.medecinForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done')}
    );


  }


}
