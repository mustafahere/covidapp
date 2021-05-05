import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
   isLoader=true;
  countries=[];

  global=0;
  recovered=0;
  confirmed=0;
  deaths=0;

  todayCases=0;
  todayDeaths=0;

  countryName="World"
  
  
  constructor(private trackdata: GetdataService) {}
   ngOnInit() {
      this.trackdata.getData().subscribe((data) => {
         if(data){
         this.isLoader=false;
         }
         for(let key of Object.keys(data)){
            if(data[key].country=="World"){
               this.global=data[key].cases;
               this.recovered=data[key].recovered;
               this.confirmed=data[key].active;
               this.deaths=data[key].deaths;
               this.todayCases=data[key].todayCases;
               this.todayDeaths=data[key].todayDeaths;
            }
            this.countries.push(data[key].country);
         }
      });
      

   }

   changeCountry(countryName:any){
      this.trackdata.getData().subscribe((data) => {

         this.isLoader=true;

         for(let key of Object.keys(data)){

            if(data[key].country==countryName){
               this.global=data[key].cases;
               this.recovered=data[key].recovered;
               this.confirmed=data[key].active;
               this.deaths=data[key].deaths;
               this.todayCases=data[key].todayCases;
               this.todayDeaths=data[key].todayDeaths;
               this.countryName=countryName;
               this.isLoader=false;
               break;
            }
         }
      });
   }

}
