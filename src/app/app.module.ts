import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import jss from "jss";
import preset from "jss-preset-default";

import { StoreModule } from "@ngrx/store";
import { countReducer } from "./redux/reducers";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

jss.setup(preset());

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    StoreModule.forRoot({ count: countReducer }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
