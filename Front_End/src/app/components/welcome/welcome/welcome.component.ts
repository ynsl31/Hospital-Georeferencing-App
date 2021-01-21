import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hopital } from 'src/app/modals/Hopital';
import { NatureService } from 'src/app/modals/NatureService';
import { Patient } from 'src/app/modals/Patient';
import { Region } from 'src/app/modals/Region';
import { RendezVous } from 'src/app/modals/RendezVous';
import { Service } from 'src/app/modals/Service';
import { Ville } from 'src/app/modals/Ville';
import { CategorieService } from '../../categorie/categorie.service';
import { HopitalService } from '../../hopital/hopital.service';
import { NatureServiceService } from '../../nature-service/nature-service.service';
import { RegionService } from '../../region/region.service';
import { RendezVousService } from '../../rendez-vous/rendez-vous.service';
import { ServiceService } from '../../service/service.service';
import { VilleService } from '../../ville/ville.service';

declare var $: any;
declare var toastr:any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  resConfirmation: string = ""
  welcomeForm: FormGroup
  rendezVous: FormGroup

  villes: Ville[]
  regions: Region[]
  selectedVilleId: number
  hopitals: Hopital[]
  ville: Ville
  selectedHopital: Hopital
  lat;
  lng;
  initzoom = 6
  fitBounds = false

  services: Service[]
  natureServices: NatureService[]



  constructor(private form: FormBuilder,
    private hoitalService: HopitalService,
    private VilleService: VilleService,
    private categorieService: CategorieService,
    private regionservice: RegionService,
    private route: Router,

    private serviceService : ServiceService,
    private natureServiceService : NatureServiceService,
    private rendezVousService: RendezVousService
    
  ) {


    this.welcomeForm = form.group({
      ville: ['', Validators.compose([Validators.required])],
      region: []
    });

    this.rendezVous = form.group({

      dateRdv: ['', Validators.compose([Validators.required])],
      heureRdv: ['', Validators.compose([Validators.required])],
      
      service: ['', Validators.compose([Validators.required])],
      natureService: ['', Validators.compose([Validators.required])],

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prenom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      
      email: ['', Validators.compose([Validators.required, Validators.email])],
      passwd: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
     
      tel: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      adresse: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

      cin: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      
      
    });


  }
  ngOnInit() {
    this.lat = 33.34785;
    this.lng = -4.3333
    this.loadData();
  }

  loadData() {

    this.regionservice.getRegions().subscribe(
      data => {

        this.regions = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEmballage Data loading ... Done') }
    );

    this.VilleService.getVilles().subscribe(
      data => {

        this.villes = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Data loading ... Done') }
    );

    this.natureServiceService.getNatureServices().subscribe(
      data => {

        this.natureServices = data

        console.log(this.natureServices);
        
        
      },
      error => {
        console.log("error")
      },
      () => { console.log('NatureService Data loading ... Done')}
    );

  }

  onSelectville(id) {

    this.VilleService.getVille(id).subscribe(
      data => {

        this.ville = data
        console.log(this.ville);
        this.hoitalService.getHopitalByVille(this.ville.id).subscribe(
          data => {

            this.hopitals = data

          },
          error => {
            console.log("error")
          },
          () => { console.log('Hopitals by ville Data loading ... Done') }
        );


      },
      error => {
        console.log("error")
      },
      () => { console.log('ville Data loading ... Done') }
    );

    this.initzoom = 15
    this.fitBounds = true

  }

  onSelectregion(id) {

    this.VilleService.villesByRegion(id).subscribe(
      data => {

        this.villes = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Ville by regin  Data loading ... Done') }
    );
  }


  onSelecNatureService(id){


    this.serviceService.getServicesByHopitatAndNatureService(this.selectedHopital.id, id).subscribe(
      data => {

        this.services = data

        console.log(this.services);
        

      },
      error => {
        console.log("error")
      },
      () => { console.log('services Data loading ... Done') }
    );


  }

  reset(){

    this.services = []
    this.rendezVous.reset();

  }

  addRendezVous(){

    let patient: Patient = {

      nom: this.rendezVous.controls.nom.value,
      prenom: this.rendezVous.controls.prenom.value,

      email: this.rendezVous.controls.email.value,
      passwd: this.rendezVous.controls.passwd.value,

      tel: this.rendezVous.controls.tel.value,
      adresse: this.rendezVous.controls.adresse.value,

      cni: this.rendezVous.controls.cin.value
    }

    let rendezVous: RendezVous = {

      dateRdv: this.rendezVous.controls.dateRdv.value,
      heureRdv: this.rendezVous.controls.heureRdv.value,
      
      patient: patient,
      service: this.services.find(x => x.id == this.rendezVous.controls.service.value)
      

    }

    console.log(JSON.stringify(rendezVous));
    
    
    this.rendezVousService.createRendezVous(rendezVous).subscribe(
      data => {

        toastr.options = { "positionClass": "toast-bottom-right", }
        toastr.success('votre Rendez-vous est bien enregistrer', 'Bien Enregistrer')
    
        this.rendezVous.reset();

        $('.modal').modal('hide');

        
      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done')}
    );

    
    

  }

}
