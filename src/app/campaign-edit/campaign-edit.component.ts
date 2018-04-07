import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Campaign } from '../models/campaign.model';
import { FirebaseService } from '../services/firebase.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css'],
  providers: [FirebaseService]
})
export class CampaignEditComponent implements OnInit {
  campaignKey: string;
  campaignToEdit: Campaign;

  constructor(private route: ActivatedRoute, private location: Location, private firebaseService: FirebaseService, private router: Router,) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.campaignKey = urlParameters['id'];
    });

    this.firebaseService.getCampaignByKey(this.campaignKey).subscribe(dataLastEmittedFromObserver => {
          this.campaignToEdit = dataLastEmittedFromObserver;

   console.log(this.campaignToEdit);
 })
}

  beginUpdatingCampaign(campaignToUpdate){
    this.firebaseService.updateCampaign(campaignToUpdate)
  }

  beginDeletingCampaign(campaignToDelete){
    if(confirm("Are You Totes Fur Sursies?")){
      this.firebaseService.deleteCampaign(campaignToDelete);
    }
  }

}
