import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';


import { NewCharComponent } from './new-char/new-char.component';

import { MonsterFormComponent } from './monster-form/monster-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { LoginComponent } from './login/login.component';
import { PrivateDieComponent } from './private-die/private-die.component';
import { PublicDieComponent } from './public-die/public-die.component';
import { CharactersComponent } from './characters/characters.component';
import { MonstersListComponent } from './monsters-list/monsters-list.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { SingleCampaignInfoComponent } from './single-campaign-info/single-campaign-info.component';
import { CharInfoComponent } from './char-info/char-info.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NewCharComponent,
    MonsterFormComponent,
    NavigationComponent,
    CampaignFormComponent,
    LoginComponent,
    PrivateDieComponent,
    PublicDieComponent,
    CharactersComponent,
    MonstersListComponent,
    CampaignListComponent,
    SingleCampaignInfoComponent,
    CharInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
