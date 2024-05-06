import { Component } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
   selector: 'app-create',
   templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponent {

   constructor(private service: MobileService) {}

   mobileAddForm = new FormGroup({
      "title": new FormControl("", Validators.required),
      "price": new FormControl("", Validators.required),
      "brand": new FormControl("", Validators.required),
      "specs": new FormControl("", Validators.required),
      "picture": new FormControl("")
   })

   addMobile() {
      let data = this.mobileAddForm.value
      this.service.addMobile(data).subscribe(data => {
         console.log(data)

      })
   }

}



