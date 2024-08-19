import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';
import { AuthService } from 'src/app/auth/auth.service';

interface Bike {
  id: string;
  brand: string;
  model: string;
  price: number;
  location: string;
  available: boolean;
  // Add any other properties if needed
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  myForm!: FormGroup;
  searchLocationOptions: string[] = []; // Replace with your actual options
  bikeDataObj: object[] = [];
  matchingBikes: Bike[] = [];

 bikeproducts: string[] = []
  constructor(private firestore: Firestore, protected authservice: AuthService) { }
  

    bikeProducts = [
      {
        id: 1,
        brand: 'Hero',
        model: 'Dio',
        description: 'A friendly two wheeler that can carry your bags around.',
        rentPrice: 800,
        location: 'Dharamshala',
        image: 'assets/dio.jpg'
      },
      {
        id: 2,
        brand: 'Yamaha',
        model: 'R15',
        description: 'For a sporty style of yourself.',
        rentPrice: 1500,
        location: 'McLeodganj',
        image: 'assets/yamaha-r15-v4.jpg'
      },
      {
        id: 3,
        brand: 'Bajaj',
        model: 'Avenger',
        description: 'Want to cruise on something comfortable, this is the one.',
        rentPrice: 1200,
        location: 'Kangra',
        image: 'assets/bajaj-avenger-street.jpg'
      },
      {
        id: 4,
        brand: 'Bajaj',
        model: 'Pulsar 150',
        description: 'All time favourite.',
        rentPrice: 1100,
        location: 'Kangra',
        image: 'assets/pulsar.jpg'
      },
      {
        id: 5,
        brand: 'Yamaha',
        model: 'R15',
        description: 'Feels sporty, yeah it is.',
        rentPrice: 750,
        location: 'Darri',
        image: 'assets/yamaha-r152.jpg'
      }
    ];


  ngOnInit() {
    this.myForm = new FormGroup({
      searchLocation: new FormControl('', Validators.required),
    });
    this.setLocation();
  }

  get searchLocation() {
    return this.myForm.get('searchLocation');

  }
  async setLocation() {
    const getBikeQuery = collection(this.firestore, "bikes");
    // const bikeNames: string[] = [];
    const bikeQuerySnapshot = await getDocs(getBikeQuery);
    bikeQuerySnapshot.forEach((doc) => {
      const bikeData = doc.data();
      const bikeOBJ = doc.data();
      const location = bikeData['location']
      if (this.searchLocationOptions.indexOf(location) === -1) {
        this.searchLocationOptions.push(location);
      }
      const bike: any = {
        id: doc.id,
        ...bikeData
      };
      this.bikeDataObj.push(bike);
    });
    console.log(this.searchLocationOptions)
  }
  async onSearch() {
    console.log(this.bikeDataObj)
    const location = this.myForm.get('searchLocation')?.value;

    this.matchingBikes = this.bikeDataObj.filter((bike: any) => {
      return bike.location === location;
    }) as Bike[];
    console.log(this.matchingBikes);
  }

}
