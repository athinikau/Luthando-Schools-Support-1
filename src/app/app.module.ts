import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MakePostComponent } from './make-post/make-post.component';
import { ProvideSupportComponent } from './provide-support/provide-support.component';
import { RegisterOrganisationComponent } from './register-organisation/register-organisation.component';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MakePostComponent,
    ProvideSupportComponent,
    RegisterOrganisationComponent,
    RegisterSchoolComponent,
    RegisterUserComponent,
    ViewProfileComponent
  ],
  imports: [ RouterModule, 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
