import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { NatureService } from "../../../modals/NatureService";
import { NatureServiceService } from "../nature-service.service";

declare var $ :any;

@Component({
  selector: 'app-add-nature-service',
  templateUrl: './add-nature-service.component.html',
  styleUrls: ['./add-nature-service.component.css']
})
export class AddNatureServiceComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();


  selectedNatureService : NatureService
  natureServiceForm :  FormGroup

  constructor(
    private natureServiceService : NatureServiceService,
    private form: FormBuilder,
  ) {


    this.natureServiceForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

    });

  }

  ngOnInit() {

  }


  addNatureService(){

    let natureService = new NatureService();

    natureService = this.natureServiceForm.value;

    this.natureServiceService.createNatureService(natureService).subscribe(
      data => {

        this.natureServiceForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done')}
    );


  }
}
