import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-mobiledetail',
  templateUrl: './mobiledetail.component.html',
  styleUrls: ['./mobiledetail.component.css']
})
export class MobiledetailComponent implements OnInit {
  id:any
  mobileDetail:any=null
  
  
    
  constructor(private service:MobileService,private route:ActivatedRoute){
    this.id=this.route.snapshot.params["id"]
  }

  ngOnInit(){
    this.service.retrieveMobile(this.id).subscribe((data:any)=>{
      this.mobileDetail=data
      console.log(this.mobileDetail);
      

    })
    
  }


}
