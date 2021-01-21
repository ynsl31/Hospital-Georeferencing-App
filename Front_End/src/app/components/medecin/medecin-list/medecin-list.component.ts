import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/modals/Hopital';
import { Service } from 'src/app/modals/Service';

import { Medecin } from "../../../modals/Medecin";
import { HopitalService } from '../../hopital/hopital.service';
import { MedecinService } from "../medecin.service";

declare var $ :any;

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.css']
})
export class MedecinListComponent implements OnInit {


  componentName : string = "Medecin"

  medecins : Medecin[];
  selectedMedecin : Medecin;

  deleteConfirmation : string = ""

  hopitals: Hopital[]
  services: Service[]
  
  hopital: Hopital
  service: Service




  constructor(
    private medecinService : MedecinService,
    private hopitalservice: HopitalService,

  ) {

   }


  ngOnInit() {
    this.onSelect()
    this.loadData()
  }

  loadData(){

    this.hopitalservice.getHopitaux().subscribe(
      data => {

        this.hopitals = data
        this.hopital = this.hopitals[0]
        
        this.services = this.hopital.services
        this.service = this.services[0]  
        
        this.getMedecin()

      },
      error => {
        console.log("error")
      },
      () => { console.log('Hopital Data loading ... Done')}
    );

    
  }

  getMedecin(){

    if (!this.service) {
      this.service = {
        id : 0
      }
    }
    
    this.medecinService.getMedecinsByService(this.service.id || 0).subscribe(
      data => {

        this.medecins = data
        
      },
      error => {
        console.log("error")
      },
      () => { console.log('Medecin Data loading ... Done')}
    );  
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedMedecin.id;

      this.medecinService.deleteMedecin(id).subscribe(data => {

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

  onSelect(){

    $('.mySelect').select2({
      placeholder: '==================='
    });

    $('.mySelect').on(
        'change', (e) => {

          const controlName = $(e.target).data("select")
          const controlValue = $(e.target).val()

          if (controlName == 'hopital'){

            this.hopital = this.hopitals.find(x => x.id == controlValue);
            this.services = this.hopital.services;
            this.service = this.services[0] || null
            
          }

          if (controlName == 'service') {
            
            this.service = this.services.find(x => x.id == controlValue)            
          }

          this.getMedecin()

      }


    );

    
  }

}
