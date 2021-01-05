import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { NatureService } from "../../../modals/NatureService";
import { NatureServiceService } from "../nature-service.service";

declare var $ :any;

@Component({
  selector: 'app-update-nature-service',
  templateUrl: './update-nature-service.component.html',
  styleUrls: ['./update-nature-service.component.css']
})
export class UpdateNatureServiceComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();
  @Input()  natureService: NatureService

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

  ngOnChanges(){

    this.natureServiceForm.reset();

    this.natureServiceForm.controls['nom'].setValue(this.natureService.nom);

  }


  updateNatureService(){

    let natureService = new NatureService();

    natureService = this.natureServiceForm.value;
    natureService.id = this.natureService.id

    this.natureServiceService.updateNatureService(natureService).subscribe(
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
