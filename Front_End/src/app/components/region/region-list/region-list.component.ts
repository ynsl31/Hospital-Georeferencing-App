import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/modals/Region';
import { RegionService } from '../region.service';
declare var $ :any;

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  componentName : string = "Region"

  regions : Region[];
  selectedRegion : Region;

  deleteConfirmation : string = ""


  constructor(private Regionservice : RegionService,

  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.Regionservice.getRegions().subscribe(
      data => {

        this.regions = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Region Data loading ... Done')}
    );
  }

  deleteRegion(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedRegion.id;

      this.Regionservice.deleteRegion(id).subscribe(data => {

          this.loadData();

          $('.modal').modal('hide');

        },
        error => {
          console.log("error");
        },
        () => {}
      );

    }

  }

}
