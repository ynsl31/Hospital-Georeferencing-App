import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/modals/Ville';
import { VilleService } from '../ville.service';
declare var $ :any;
@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {

  componentName : string = "Ville"

  villes : Ville[];
  selectedVille : Ville;

  deleteConfirmation : string = ""


  constructor(
    private Villeservice : VilleService,

  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){

    this.Villeservice.getVilles().subscribe(
      data => {

        this.villes = data
        //this.initClient
      },
      error => {
        console.log("error")
      },
      () => { console.log('Ville Data loading ... Done')}
    );
  }

  deletehopital(){

    if (this.deleteConfirmation.toUpperCase() == 'YES') {

      let id = this.selectedVille.id;

      this.Villeservice.deleteVille(id).subscribe(data => {

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
