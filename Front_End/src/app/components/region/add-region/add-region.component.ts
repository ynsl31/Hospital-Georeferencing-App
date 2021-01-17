import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/modals/Region';
import { RegionService } from '../region.service';

declare var $: any;
@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {

 


  @Output() isClosed = new EventEmitter<boolean>();

  regionForm: FormGroup

  constructor(
    private form: FormBuilder,
    private regionService: RegionService
  ) {


    this.regionForm = form.group({

      nomRegion: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    

    });

  }

  ngOnInit() {
  
  }



  addVille() {

    let region = new Region();

    region = this.regionForm.value;

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
