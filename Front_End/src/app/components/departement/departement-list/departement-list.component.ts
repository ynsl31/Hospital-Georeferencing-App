import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/modals/Departement';
import { DepartementService } from '../departement.service';

declare var $ :any;
@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

 
  componentName : string = "Departement"

  departements : Departement[];
  selectedDepartement : Departement;

  deleteConfirmation : string = ""


  constructor(
    private Departementservice : DepartementService,

  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){

    this.Departementservice.getDepartements().subscribe(
      data => {

        this.departements = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Departement Data loading ... Done')}
    );
  }

  deletedepartement(id) {

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

     // let id = this.selectedDepartement.id;

      this.Departementservice.deleteDepartement(id).subscribe(data => {

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
