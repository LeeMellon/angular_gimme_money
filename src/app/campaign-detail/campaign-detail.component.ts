import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Campaign } from '../models/campaign.model';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css'],
  providers: [FirebaseService]
})
export class CampaignDetailComponent implements OnInit {
  campaignKey: string;
  campaignToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.campaignKey = urlParameters['key'];
    });

    this.firebaseService.getCampaignByKey(this.campaignKey).subscribe(campaign =>{
      this.campaignToDisplay = campaign;
    })
  }

}
