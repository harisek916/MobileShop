import { Component,OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  mobileData:any

  constructor(private service:MobileService){}

  ngOnInit(){
    this.service.getAllMobiles().subscribe(data=>{
      this.mobileData=data
    })
  }
  updateMobile(id:any){
    this.service.dispatchId(id)
  }

  destroyMobile(id:any){
    this.service.deleteMobile(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit()
      
    })
  }

}
