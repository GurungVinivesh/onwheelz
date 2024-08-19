import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
  export class PaymentFormComponent implements OnInit {
    paymentForm!: FormGroup;

    ngOnInit() {
      this.paymentForm = new FormGroup({
        amount: new FormControl('', [Validators.required]),
        cardNumber: new FormControl('', [Validators.required]),
        expiryDate: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required])
      });
    }
  
    onSubmit() {
      if (this.paymentForm.valid) {
        // Handle form submission
      }
  }
}
