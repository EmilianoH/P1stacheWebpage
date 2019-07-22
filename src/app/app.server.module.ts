import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { UniversalInterceptor } from "./universal-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalInterceptor,
    multi: true
  }],
})
export class AppServerModule {}
