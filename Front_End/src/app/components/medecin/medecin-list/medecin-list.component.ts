import { Component, OnInit } from '@angular/core';

import { Medecin } from "../../../modals/Medecin";
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


  constructor(
    private medecinService : MedecinService,

  ) { }

  ngOnInit() {
  }

  loadData(){

    this.medecinService.getMedecins().subscribe(
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

}
