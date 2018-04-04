import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { FooterComponent } from './footer/footer.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    CampaignDetailComponent,
    FooterComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
