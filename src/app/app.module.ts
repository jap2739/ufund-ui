import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { NeedsComponent } from './needs/needs.component';
import { NeedDetailComponent } from './need-detail/need-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { FundingBasketComponent } from './funding-basket/funding-basket.component';
=======
>>>>>>> 8b1e258 (Got the front end side of things working with the)
import { HttpClientModule } from '@angular/common/http';
import { NeedSearchComponent } from './need-search/need-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NeedsComponent,
    NeedDetailComponent,
    MessagesComponent,
    DashboardComponent,
<<<<<<< HEAD
    FundingBasketComponent,
=======
>>>>>>> 8b1e258 (Got the front end side of things working with the)
    NeedSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
