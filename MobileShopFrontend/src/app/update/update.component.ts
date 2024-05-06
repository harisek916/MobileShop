import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { MobileService } from '../services/mobile.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  mobileId:any
  mobileObject:any

  constructor(private service:MobileService,private route:ActivatedRoute){
    this.mobileId=this.route.snapshot.params["id"]
    console.log(this.mobileId);
    
  }

  mobileUpdateForm = new FormGroup({
    "title": new FormControl("", Validators.required),
    "price": new FormControl("", Validators.required),
    "brand": new FormControl("", Validators.required),
    "specs": new FormControl("", Validators.required),
 })

 ngOnInit(): void {
   this.service.retrieveMobile(this.mobileId).subscribe((data:any)=>{
    console.log(data);
    this.mobileObject=data
    this.mobileUpdateForm.patchValue(data)    
   })
 }

 updateMobile(){
  let id=this.mobileId
  let data=this.mobileUpdateForm.value
  this.service.updateMobile(id,data).subscribe(data=>console.log(data))

 }

}
