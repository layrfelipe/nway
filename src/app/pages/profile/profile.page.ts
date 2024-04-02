import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {

  constructor(
    private location: Location
  ) { }

  back() {
    this.location.back()
  }
}
