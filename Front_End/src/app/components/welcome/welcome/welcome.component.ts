import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hopital } from 'src/app/modals/Hopital';
import { Region } from 'src/app/modals/Region';
import { Ville } from 'src/app/modals/Ville';
import { CategorieService } from '../../categorie/categorie.service';
import { HopitalService } from '../../hopital/hopital.service';
import { RegionService } from '../../region/region.service';
import { VilleService } from '../../ville/ville.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  resConfirmation :string = ""
  welcomeForm: FormGroup
  villes : Ville[]
  regions : Region[]
  selectedVilleId :number
  hopitals : Hopital[]
  ville : Ville
  selectedHopital : Hopital
  lat ;
  lng ;
  initzoom = 6
  fitBounds = false
  constructor(    private form: FormBuilder,
    private hoitalService : HopitalService,
    private VilleService : VilleService,
    private categorieService : CategorieService,
    private regionservice : RegionService,
    private route :Router
   ) { 


    this.welcomeForm = form.group({
      ville:      ['', Validators.compose([Validators.required])]  ,
      region : []
    });


  }
  ngOnInit(){
   this.lat = 33.34785;
  this.lng = -4.3333
   this.loadData();
  }

  loadData(){

    this.regionservice.getRegions().subscribe(
      data => {

        this.regions = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEmballage Data loading ... Done')}
    );

    this.VilleService.getVilles().subscribe(
      data => {

        this.villes = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEmballage Data loading ... Done')}
    );
  }
  onSelectville(id){
   
    this.VilleService.getVille(id).subscribe(
      data => {

        this.ville = data
        console.log(this.ville);
        this.hoitalService.getHopitalByVille(this.ville.id).subscribe(
          data => {
    
            this.hopitals= data
    
          },
          error => {
            console.log("error")
          },
          () => { console.log('Hopitals by ville Data loading ... Done')}
        );
    

      },
      error => {
        console.log("error")
      },
      () => { console.log('ville Data loading ... Done')}
    );
    
    this.initzoom = 15
    this.fitBounds = true

  }

  onSelectregion(id){
 
    this.VilleService.villesByRegion(id).subscribe(
      data => {

        this.villes = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Ville by regin  Data loading ... Done')}
    );
  }
  resHopital(id){

    if (this.resConfirmation.toUpperCase() == 'YES') {

      this.route.navigate(['/rdv', { id: id }]);

      

    }

  }


}
