import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  bikeForm!: FormGroup;
  

  constructor(private firestore: Firestore) {
    this.bikeForm = new FormGroup({
      bikeKey: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });
  }
  async addBikeDetails() {
    if (this.bikeForm.invalid) {
    return;
  }

  const bikeKey = this.bikeForm.value.bikeKey;
  const brand = this.bikeForm.value.brand;
  const model = this.bikeForm.value.model;
  const price = this.bikeForm.value.price;
  const location = this.bikeForm.value.location;
  
  const bikeRef = doc(this.firestore,`bikes/${bikeKey}`);
  setDoc(bikeRef, { brand: brand,model: model,price: price,available: true,location: location});
  this.bikeForm.reset();
}


}
