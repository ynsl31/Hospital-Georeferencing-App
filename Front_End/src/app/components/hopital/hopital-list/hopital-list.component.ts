import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/modals/Hopital';
import { HopitalService } from '../hopital.service';

declare var $ :any;

@Component({
  selector: 'app-hopital-list',
  templateUrl: './hopital-list.component.html',
  styleUrls: ['./hopital-list.component.css']
})

export class HopitalListComponent implements OnInit {



  componentName : string = "Hopital"

  hopitals : Hopital[];
  selectedHopital : Hopital;
  hopital : Hopital
  deleteConfirmation : string = ""


  constructor(
    private Hopitalservice : HopitalService,

  ) {}


  dataTable(){

    $( document ).ready(function() {
      
      $('#myDataTable').DataTable({
        ordering:  false,
        "bLengthChange" : false,
        "bInfo":false,
      })

     });
    
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){

    this.Hopitalservice.getHopitaux().subscribe(
      data => {

        this.hopitals = data
        //this.initClient
        this.dataTable()

      },
      error => {
        console.log("error")
      },
      () => { console.log('Hopital Data loading ... Done')}
    );
  }

  deletehopital(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedHopital.id;

      this.Hopitalservice.deleteHopital(id).subscribe(data => {

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
