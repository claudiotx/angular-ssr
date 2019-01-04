import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { ApiService } from './api.service';

registerLocaleData(localePt);

export function tokenGetter() {
  // return localStorage.getItem('access_token');
  return '';
}

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000', 'properties.coderecipes.org'],
        blacklistedRoutes: ['localhost:3000/api/auth', 'properties.coderecipes.org/api/auth']
      }
    })
  ],
  providers: [
    HttpClientModule,
    ApiService,
    // AuthService,
    // AuthGuard,
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ],
  bootstrap: [AppComponent, DocsComponent]
})
export class AppModule { }
