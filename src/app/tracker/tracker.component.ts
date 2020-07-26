import { Component, OnInit } from '@angular/core';
import { GetdataService} from '../getdata.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
   isLoader=true;
  public tracker=[];
  
  countryss;
  getcountry(name){
   for(let j=0;j<this.tracker.length;j++){
      if(this.tracker[j].country==name){
         this.countryss=j;
      }
   }
  }
  constructor(private trackdata: GetdataService) {}
   ngOnInit() {
      this.trackdata.getData().subscribe((data) => {
         this.tracker = Array.from(Object.keys(data), k=>data[k]);
         this.isLoader=false;
      });
   }

   

}
