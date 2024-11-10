import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    CreateInvoiceComponent,
    InvoicePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // <-- Add FormsModule here
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

