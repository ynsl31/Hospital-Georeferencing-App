import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/modals/Region';
import { RegionService } from '../region.service';

declare var $ :any;

@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css']
})
export class UpdateRegionComponent implements OnInit {

  
  @Input()  region: Region

  @Output() isClosed = new EventEmitter<boolean>();

  regionForm: FormGroup
 
  constructor(
    private form: FormBuilder,
    private regionService: RegionService
  ) {


    this.regionForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    

    });

  }

  ngOnInit() {
  }

  updateRegion() {

    let region = new Region();

    region = this.regionForm.value;

    region.id = this.region.id

    this.regionService.createRegion(region).subscribe(
      data => {

        this.regionForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done') }
    );


  }

}
