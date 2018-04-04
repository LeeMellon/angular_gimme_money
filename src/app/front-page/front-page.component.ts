import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Campaign } from '../models/campaign.model';
import { FirebaseService } from '../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [FirebaseService]
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router, private firebaseService: FirebaseService) { }
  currentRoute: string = this.router.url;
  campaigns: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.campaigns = this.firebaseService.getCampaigns();
  }

  goToDetailsPage(clickedCampaign){
    this.router.navigate(['campaigns', clickedCampaign.$key]);
  }

}
