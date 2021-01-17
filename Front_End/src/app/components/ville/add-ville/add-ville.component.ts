import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/modals/Region';
import { Ville } from 'src/app/modals/Ville';
import { RegionService } from '../../region/region.service';
import { VilleService } from '../ville.service';


declare var $: any;
@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {



  @Output() isClosed = new EventEmitter<boolean>();


  selectedVilleService: VilleService
  regions: Region[]
  villeForm: FormGroup
  selectedRegionId: number
  constructor(
    private villeService: VilleService,
    private form: FormBuilder,
    private regionService: RegionService
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

    this.selectedRegionId = idRegion
  }

  addVille() {

    const formValues = this.villeForm.value;

    let v = new Ville();

    v = formValues

    v.region = new Region();
    v.region.id = this.selectedRegionId;
    console.log(v)
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
