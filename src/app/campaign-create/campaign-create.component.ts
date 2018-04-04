import { Component, Input } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { FirebaseService } from '../services/firebase.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css'],
  providers: [ FirebaseService ]
})
export class CampaignCreateComponent {

  constructor(private firebaseService: FirebaseService) { }

  submitForm(title: string, total: number){
    let newCampaign: Campaign = new Campaign(title, total);
    this.firebaseService.addCampaign(newCampaign);
  }


}
