import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class FirebaseService {

campaignToDisplay = null;
campaigns: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.campaigns = database.list('campaigns');
  }


getCampaigns(){
  return this.campaigns;
}

addCampaign(newCampaign: Campaign){
  this.campaigns.push(newCampaign);
}

getCampaignByKey(key: string){
  return this.database.object('campaigns/' + key);
}



updateCampaign(localUpdatedCampaign){
  var campaignInFirebase = this.getCampaignByKey(localUpdatedCampaign.$key);
  campaignInFirebase.update(
    {title: localUpdatedCampaign.title,
    total: localUpdatedCampaign.total,
    current: localUpdatedCampaign.current,
    tagline: localUpdatedCampaign.tagline,
    image:  localUpdatedCampaign.image,
    location: localUpdatedCampaign.location,
    category: localUpdatedCampaign.category,
    // tags: localUpdatedCampaign.tags,
    story: localUpdatedCampaign.story,
    perks:  localUpdatedCampaign.perks})
}


deleteCampaign(localCampaignToDelete){
  var campaignInFirebase = this.getCampaignByKey(localCampaignToDelete.$key)
    campaignInFirebase.remove();
  }
}
