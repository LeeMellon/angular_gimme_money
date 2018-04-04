import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css'],
  providers: [FirebaseService]
})
export class CampaignEditComponent implements OnInit {
  @Input() selectedCampaign;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
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
