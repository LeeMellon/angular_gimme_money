import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Campaign } from '../models/campaign.model';
import { FirebaseService } from '../services/firebase.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css'],
  providers: [FirebaseService]
})
export class CampaignDetailComponent implements OnInit {
  campaignKey: string;
  campaignToDisplay: Campaign;
  private user;

  constructor(private route: ActivatedRoute, private location: Location, private firebaseService: FirebaseService, private router: Router,) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.campaignKey = urlParameters['id'];
    });

    this.firebaseService.getCampaignByKey(this.campaignKey).subscribe(dataLastEmittedFromObserver => {
          this.campaignToDisplay = dataLastEmittedFromObserver;

   console.log(this.campaignToDisplay);
   })
  }

  clickToEdit(){
    this.router.navigate(['edit', this.campaignKey]);
  }

  ngDoCheck() {
      this.user = firebase.auth().currentUser;
  }

}






// this.firebaseService.getCampaignByKey(this.campaignKey).subscribe(campaign =>{
//   console.log(campaign.title)
//   this.campaignToDisplay = new Campaign(
//     campaign.title,
//     campaign.total,
//     campaign.tagline,
//     campaign.image,
//     campaign.location,
//     campaign.category,
//     campaign.tags,
//     campaign.duration,
//     campaign.story,
//     campaign.perk
//   );
//
//   console.log(this.campaignToDisplay)
// })
// }
