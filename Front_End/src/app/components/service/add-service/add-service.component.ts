import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { Hopital } from 'src/app/modals/Hopital';
import { NatureService } from 'src/app/modals/NatureService';
import { Service } from 'src/app/modals/Service';
import { NatureServiceService } from '../../nature-service/nature-service.service';
import { ServiceService } from '../service.service';


declare var $ :any;

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  @Input() hopital : Hopital;
  @Output() isClosed = new EventEmitter<boolean>();

  selectedService : Service
  
  natureServices : NatureService[]

  serviceForm :  FormGroup
  
  constructor(
    private serviceService : ServiceService,
    private natureServiceService : NatureServiceService,
    private form: FormBuilder,
  ) {


    this.serviceForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      natureService: ['', Validators.compose([Validators.required])],

    });

    this.onSelect();

  }

  ngOnInit() {
    
    this.loadData();
  }

  ngOnChanges() {
    
    this.onSelect(); 
    // this.serviceForm.controls['natureService'].setValue(this.natureServices[0].id);    
  }

  loadData(){

    this.natureServiceService.getNatureServices().subscribe(
      data => {

        this.natureServices = data;
      }
    )

  }

  addService(){

    let service = new Service();

    service = this.serviceForm.value;
    service.natureService = {

      id : this.serviceForm.controls['natureService'].value
    }

    console.log(service); 
    
    this.serviceService.createService(this.hopital.id, service).subscribe(
      data => {

        this.serviceForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done')}
    );


  }

  onSelect(){

    $('.mySelect').select2({
      placeholder: 'Selectionez une departement'
    });

    $('.mySelect').on(
        'change', (e) => {

          const controlName = $(e.target).data("select")
          const controlValue = $(e.target).val()

          this.serviceForm.controls[controlName].setValue(controlValue)

      }


    );
  }
}
