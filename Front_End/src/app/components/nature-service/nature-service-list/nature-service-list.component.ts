import { Component, OnInit } from '@angular/core';

import { NatureService } from "../../../modals/NatureService";
import { NatureServiceService } from "../nature-service.service";

declare var $ :any;

@Component({
  selector: 'app-nature-service-list',
  templateUrl: './nature-service-list.component.html',
  styleUrls: ['./nature-service-list.component.css']
})
export class NatureServiceListComponent implements OnInit {

  componentName : string = "Nature du Services"

  natureServices : NatureService[];
  selectedNatureService : NatureService;

  deleteConfirmation : string = ""


  constructor(
    private natureServiceService : NatureServiceService,

  ) { }

  ngOnInit() {

    this.loadData();
  }

  loadData(){

    this.natureServiceService.getNatureServices().subscribe(
      data => {

        this.natureServices = data
      },
      error => {
        console.log("error")
      },
      () => { console.log('NatureService Data loading ... Done')}
    );
  }

  deleteClient(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedNatureService.id;

      this.natureServiceService.deleteNatureService(id).subscribe(data => {

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
