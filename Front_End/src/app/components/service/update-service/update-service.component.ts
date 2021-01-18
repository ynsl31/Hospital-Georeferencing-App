import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hopital } from 'src/app/modals/Hopital';
import { NatureService } from 'src/app/modals/NatureService';
import { Service } from 'src/app/modals/Service';
import { NatureServiceService } from '../../nature-service/nature-service.service';
import { ServiceService } from '../service.service';

declare var $ :any;

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  @Input() service : Service;
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

  

  ngOnChanges(){

    this.onSelect();

    this.serviceForm.reset();

    console.log(this.service); 

    if (this.service) {
      
      this.serviceForm.controls['nom'].setValue(this.service.nom);

      // $('[data-select=natureService]').val(this.service.natureService.id).trigger('change');

    }

  }

  loadData(){

    this.natureServiceService.getNatureServices().subscribe(
      data => {

        this.natureServices = data;
      }
    )

  }


  updateService(){

    let service = new Service()
    service = this.serviceForm.value;
    service.natureService = {

      id : this.serviceForm.controls['natureService'].value
    }
    service.id = this.service.id;

    console.log(service); 
    
    
    this.serviceService.updateService(this.hopital.id, service).subscribe(
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