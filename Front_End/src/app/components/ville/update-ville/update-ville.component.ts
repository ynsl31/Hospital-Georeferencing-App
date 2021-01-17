import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/modals/Region';
import { Ville } from 'src/app/modals/Ville';
import { RegionService } from '../../region/region.service';
import { VilleService } from '../ville.service';

declare var $: any;

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent implements OnInit {

  
  @Input() ville: Ville

  @Output() isClosed = new EventEmitter<boolean>();

  villeForm: FormGroup
  regions: Region[];
  selectedRegion: Region;

  constructor(
    private form: FormBuilder,
    private regionService: RegionService,private villeService : VilleService
  ) {


    this.villeForm = form.group({

      nomVille: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      region: ['', Validators.compose([Validators.required])],


    });

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.regionService.getRegions().subscribe(
      data => {

        this.regions = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('regions Data loading ... Done') }
    );


  }
  onSelectRegion(idRegion) {

   
    this.regionService.getRegion(idRegion).subscribe(
      data => {

        this.selectedRegion = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('regions Data loading ... Done') }
    );


  }

  updateVille() {

    const formValues = this.villeForm.value;

    let v = new Ville();

    v = formValues

    v.region = new Region();
    v.region = this.selectedRegion;
    v.id = this.ville.id

    this.villeService.createVille(v).subscribe(
      data => {

        this.villeForm.reset();

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
