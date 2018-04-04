import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'create-campaign',
    component: CampaignCreateComponent
  },
  {
    path: 'edit/:id',
    component: CampaignEditComponent
  },
  {
    path: 'detail/:id',
    component: CampaignDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
