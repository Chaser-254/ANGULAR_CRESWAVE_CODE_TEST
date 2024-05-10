import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Import for contact Service, used for adding and display contacts with the backend server.
import { ApiService } from './api.service';

import { AppRoutingModule } from './app.routes';
import {AppComponent} from './app.component';
// Import for HTTP requests
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Imported Components

// Import for Forms
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule} from '@angular/material/core';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatGridListModule,
        MatToolbarModule,
        MatExpansionModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatRadioModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    providers: [
        ApiService,
        CreateComponent,
        ViewComponent,
        MatDatepickerModule,
        MatNativeDateModule]
})
export class AppModule {
}