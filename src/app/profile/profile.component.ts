import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html' /* ,
  styleUrls: ['./hero-detail.component.css'] */
})
export class ProfileComponent implements OnInit {
    @Input() profile: Profile;

    constructor() {
    }

    ngOnInit() {
        this.profile = new Profile("MILO P COSGROVE", "12341234", "XYZ");
    }

}