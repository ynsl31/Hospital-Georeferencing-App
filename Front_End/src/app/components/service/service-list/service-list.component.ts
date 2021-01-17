import { Component, OnInit } from '@angular/core';

import { NatureService } from "../../../modals/NatureService";
// import { NatureServiceService } from "../nature-service.service";

declare var $ :any;

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  componentName : string = "Services de departements"

  // natureServices : NatureService[];
  // selectedNatureService : NatureService;
  //
  // deleteConfirmation : string = ""


  constructor(
    // private natureServiceService : NatureServiceService,

  ) { }

  ngOnInit() {

    // this.loadData();
  }

  // loadData(){
  //
  //   this.natureServiceService.getNatureServices().subscribe(
  //     data => {
  //
  //       this.natureServices = data
  //     },
  //     error => {
  //       console.log("error")
  //     },
  //     () => { console.log('NatureService Data loading ... Done')}
  //   );
  // }
  //
  // deleteClient(){
  //
  //   if (this.deleteConfirmation.toUpperCase() == 'YES') {
  //
  //     let id = this.selectedNatureService.id;
  //
  //     this.natureServiceService.deleteNatureService(id).subscribe(data => {
  //
  //         this.loadData();
  //
  //         $('.modal').modal('hide');
  //
  //       },
  //       error => {
  //         console.log("error");
  //       },
  //       () => {}
  //     );
  //
  //   }
  //
  // }

}
