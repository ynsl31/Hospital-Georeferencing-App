import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hopital } from 'src/app/modals/Hopital';
import { Service } from 'src/app/modals/Service';
import { ServiceService } from '../service.service';

declare var $ :any;

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  componentName : string = "Services de departements"

  @Input() hopital : Hopital;
  @Output() isClosed = new EventEmitter<boolean>();

  services : Service[];
  selectedservice : Service;

  deleteConfirmation : string = ""


  constructor(
    private serviceService : ServiceService,

  ) { }

  ngOnInit() {    
    
  }

  ngOnChanges() {

  }
  
  deleteClient(){
  
    if (this.deleteConfirmation.toUpperCase() == 'YES') {
  
      let id = this.selectedservice.id;     
  
      this.serviceService.deleteService(this.hopital.id, id).subscribe(data => {
  
          $('.modal').modal('hide');
          
          this.isClosed.emit(true);
  
        },
        error => {
          console.log("error");
        },
        () => {}
      );
  
    }
  
  }

}
