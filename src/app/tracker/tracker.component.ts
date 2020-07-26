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
  
  
  constructor(private trackdata: GetdataService) {}
   ngOnInit() {
      this.trackdata.getData().subscribe((data) => {
         if(data){
         this.isLoader=false;
         }
         this.tracker = Array.from(Object.keys(data), k=>data[k]);
      });
   }

   

}
