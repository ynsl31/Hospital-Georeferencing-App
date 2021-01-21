import { Component, OnInit } from '@angular/core';
import { HopitalService } from 'src/app/components/hopital/hopital.service';
import { MedecinService } from 'src/app/components/medecin/medecin.service';
import { Hopital } from 'src/app/modals/Hopital';
import { Medecin } from 'src/app/modals/Medecin';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
hopitaux : number
listhopitaux : Hopital[]
medecins : number
listmedecin  : Medecin[]
  constructor(private medecinService : MedecinService,private hopitalService : HopitalService) { }

  ngOnInit() {
    this.loadData();
 

  }

  loadData(){

    this.hopitalService.getHopitaux().subscribe(
      data => {

        this.hopitaux = data.length
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Hopital Data loading ... Done')}
    );

    this.medecinService.getMedecins().subscribe(
      data => {

        this.medecins = data.length
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Medecin Data loading ... Done')}
    );
  }
  
  

}
