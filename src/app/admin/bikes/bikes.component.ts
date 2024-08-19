import { Component } from '@angular/core';
import { Firestore, collection, doc, getDocs } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  bikeDetails: any[] = [];

  constructor(private firestore: Firestore) {
    this.fetchBikeDetails();
  }

  async fetchBikeDetails() {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, 'bikes'));
      this.bikeDetails = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Bike details:', this.bikeDetails);
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  }

}
