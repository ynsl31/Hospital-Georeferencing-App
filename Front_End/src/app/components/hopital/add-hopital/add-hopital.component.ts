import { LatLngLiteral } from '@agm/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";


import { Categorie } from 'src/app/modals/categorie';
import { Hopital } from 'src/app/modals/Hopital';
import { Ville } from 'src/app/modals/Ville';
import { CategorieService } from '../../categorie/categorie.service';
import { VilleService } from '../../ville/ville.service';
import { HopitalService } from '../hopital.service';

declare var $: any;
@Component({
  selector: 'app-add-hopital',
  templateUrl: './add-hopital.component.html',
  styleUrls: ['./add-hopital.component.css']
})
export class AddHopitalComponent implements OnInit {
  @Output() isClosed = new EventEmitter<boolean>();

  lat = 51.678418;
  lng = 7.809007

  hopitalForm: FormGroup
  categories: Categorie[]

  villes : Ville[]
  selectedCategorieId : number
  
  selectedVilleId : number
  
  isTracking : boolean
  currentLat: any;
  currentLong: any;
  map: any;
  marker: any;
  
  constructor(    private form: FormBuilder,
     private hoitalService : HopitalService,
     private VilleService : VilleService,
     private categorieService : CategorieService,
    ) { 
 
    
    const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    const telRegex = '0[5,6][0-9]{8}';
    const faxRegex = /^0[5][0-9]{8}$/;

    this.hopitalForm = form.group({

      nom: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email :['', Validators.compose([Validators.email, Validators.minLength(3)])],       

      abriviation: ['', Validators.compose([Validators.required, Validators.minLength(3)])] ,
      adresse:     ['', Validators.compose([Validators.required, Validators.minLength(3)])]   ,
      
      codePostale: ['', Validators.compose([Validators.required, Validators.minLength(3)])]  ,
      telephone:    ['', Validators.pattern(telRegex)],
      
      siteWeb:   ['', Validators.compose([Validators.required, Validators.pattern(urlRegex)])]  ,
      fax:      ['', Validators.pattern(faxRegex)],
      
      categorie:      ['', Validators.compose([Validators.required])]  ,
      ville:      ['', Validators.compose([Validators.required])]  ,
      
      longitude :[],
      latitude : [] 

    });


    
  }


  onchagecordination($event){
    this.lat = $event.coords.lat
    this.lng =$event.coords.lng


  }


  placeMarker(x){
    console.log(x.coords.lat);
    console.log(x.coords.lng);
    this.lat=x.coords.lat; 
    this.lng=x.coords.lng; 
  }
  subject: Subject<LatLngLiteral> = new Subject();

  ngOnInit() {
    this.subject.pipe(debounceTime(300)).subscribe(details => {
      this.lat = details.lat;
      this.lng = details.lng;
    });

    this.loadData()

    this.getPosition()

  }

  onSelectcategorie(idcategorie){
this.selectedCategorieId = idcategorie
  }

  onSelectville(idhopital){
    this.selectedVilleId = idhopital

  }
  loadData(){

    this.VilleService.getVilles().subscribe(
      data => {

        this.villes = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('TypeEmballage Data loading ... Done')}
    );

    this.categorieService.getCategories().subscribe(
      data => {

        this.categories = data

      },
      error => {
        console.log("error")
      },
      () => { console.log('Categories Data loading ... Done')}
    );
  }

  centerChange(code) {
    this.subject.next(code);
  }
  
  addhHopital(){

    
    const formValues = this.hopitalForm.value;

    let v = new Hopital();

    v = formValues

    v.categorie = new Categorie();
    v.ville = new Ville()
    v.categorie.id = this.selectedCategorieId;
    v.ville.id = this.selectedVilleId
    v.latitude = this.lat
    v.longitude = this.lng
    console.log(v)
    this.hoitalService.createHopital(v).subscribe(
      data => {

        this.hopitalForm.reset();

        this.isClosed.emit(true);

        $('.modal').modal('hide');

      },
      error => {
        console.log("error");
      },
      () => { console.log('loading Done') }
    );


  }

  getPosition() {

    if (navigator.geolocation) {
    
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        
      });
    
    } else {
     
      alert("Pour le bien fonctionnement, Autorisez nous pour occuperer votre position.");
    }
  }
  



}
