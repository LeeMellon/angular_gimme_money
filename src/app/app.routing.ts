import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';



const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'create-campaign',
    component: CampaignCreateComponent
  },
  // {
  //   path: 'about',
  //   component:
  // }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
