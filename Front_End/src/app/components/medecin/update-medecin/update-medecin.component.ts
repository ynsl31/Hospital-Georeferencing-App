import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hopital } from 'src/app/modals/Hopital';
import { Medecin } from 'src/app/modals/Medecin';
import { Service } from 'src/app/modals/Service';
import { MedecinService } from '../medecin.service';

declare var $ :any;

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();
  
  @Input() medecin : Medecin
  medecinForm :  FormGroup

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

  ngOnChanges(){

    this.medecinForm.reset();

    if (this.medecin) {

      this.medecinForm.controls['nom'].setValue(this.medecin.nom);
      this.medecinForm.controls['prenom'].setValue(this.medecin.prenom);
      this.medecinForm.controls['email'].setValue(this.medecin.email);
      this.medecinForm.controls['passwd'].setValue(this.medecin.passwd);
      this.medecinForm.controls['tel'].setValue(this.medecin.tel);
      this.medecinForm.controls['adresse'].setValue(this.medecin.adresse);
      this.medecinForm.controls['matricule'].setValue(this.medecin.matricule);
    }

  }

  updateMedecin(){

    let medecin = new Medecin();

    medecin = this.medecinForm.value;
    medecin.service = this.medecin.service
    medecin.id = this.medecin.id

    this.medecinService.updateMedecin(medecin).subscribe(
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
