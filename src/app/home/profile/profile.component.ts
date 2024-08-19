import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userID!: string;

constructor(protected auth:AuthService, private router: Router){ 
  this.userID = uuidv4();
}
  
}
