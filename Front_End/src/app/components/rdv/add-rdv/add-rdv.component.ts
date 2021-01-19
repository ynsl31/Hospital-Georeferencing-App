import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Hopital } from 'src/app/modals/Hopital';
import { NatureService } from 'src/app/modals/NatureService';
import { Service } from 'src/app/modals/Service';
import { NatureServiceService } from '../../nature-service/nature-service.service';
import { ServiceService } from '../../service/service.service';

declare var $: any;

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRdvComponent implements OnInit {
  @Input() hopital : Hopital
  selectednatureserviceID : number
  natureservlist : NatureService[]
  services : Service[]
  rdvForm: FormGroup
  date: { year: number, month: number };
  selectedRegionId: number
  @ViewChild('dp', { static: false }) dp: NgbDatepicker;

  constructor(
    private servService : ServiceService,
    private natureServiceService : NatureServiceService, 
    private form: FormBuilder) { 
    this.rdvForm = form.group({
       dateRdv :  [],
      // statut :  [],
      // dateCreation :  [],
      // patient :  [],
      // consultation :  [],
      service  : [],
      nservice : []
    });
  }

  ngOnInit() {
    $(document).ready(function() {

      $('#smartwizard').smartWizard({
        
    });
    $('#smartwizard').smartWizard("loader", "hide");

  });
 
   

  
  this.laodData();
    
  }

  navigateEvent(event) {
    this.date = event.next;
  }
  laodData(){
    this.natureServiceService.getNatureServices().subscribe(
      data => {

        this.natureservlist = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('nature services  Data loading ... Done') }
    );

  

  }
  onSelectnatureservice(id: number){
    // console.log(this.hopital.id)
    console.log(id)
this.servService.getServicesByNature(433,id).subscribe(
  data => {

    this.services = data

  },
  error => {
    console.log("error")
  },
  () => { console.log(' getServicesByNature Data loading ... Done') }
);

      
  }
  onSelectService(id){


  }

  

  









}
