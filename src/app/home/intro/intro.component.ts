import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore, 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  collectionData
} from '@angular/fire/firestore';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent  {

  searchLocation!: string;
  searchForm!: FormGroup;
  constructor(private auth: Auth, private firestore: Firestore) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      from: new FormControl('', Validators.required)
    });
  }
 
  
    posts = [
      {
        id: 1,
        title: 'Motorbike Tour To Leh Ladakh',
        description: 'Adventurous travelers looking for a memorable tour will enjoy this private 9-day motorcycle journey from Manali to Ladakh. Cross high passes and desert roads without the risk of getting lost or stuck if you break down. Starting in Manali, you’ll ride to Ladakh over three days, to help with acclimatization. Ride to many natural and cultural highlights in Ladakh, including Leh, Pangong Tso, and the Nubra Valley.',
        image: 'assets/leh.jpg'
      },
      {
        id: 2,
        title: 'hilloferry - a guided cycling tour',
        description: 'Head up into the hills around Dharmsala with a professional guide to lead the way on this small-group mountain-biking tour for up to four people. You will be equipped with a high-quality mountain bike with hydraulic disc brakes plus helmets and gloves to keep your trip safe and enjoyable. Over the course of your 3-hour ride, your guide will lead you through the hills, showing you beautiful scenery along the way.',
        image: 'assets/hillo.jpg'
      },
  
    ]
  }
