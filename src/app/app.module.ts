import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { FooterComponent } from './footer/footer.component';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    CampaignDetailComponent,
    FooterComponent,
    NgbdCarouselBasic,
    CampaignCreateComponent,
    CampaignEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [HttpClientModule, AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
