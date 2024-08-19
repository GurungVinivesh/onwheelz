import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(protected authservice: AuthService, private router: Router){}
  private dropdownList: bootstrap.Dropdown[] = [];

  ngAfterViewInit() {
    const dropdownToggleElements = Array.from(document.querySelectorAll('.dropdown-toggle')) as HTMLElement[];
    this.dropdownList = dropdownToggleElements.map((dropdownToggleEl) => {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  }

  ngOnDestroy() {
    this.dropdownList.forEach((dropdown) => {
      dropdown.dispose();
    });
  }
  

  logout(){
    this.authservice.logout().subscribe(()=>{
      this.router.navigate(['/login']);
    })
  }
}
