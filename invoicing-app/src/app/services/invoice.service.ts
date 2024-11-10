import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoices: Invoice[] = [];

  constructor() {}

  addInvoice(invoice: Invoice): void {
    this.invoices.push(invoice);
  }

  getInvoices(): Observable<Invoice[]> {
    return of(this.invoices);
  }

  getInvoiceById(id: number): Observable<Invoice> {
    const invoice = this.invoices.find((inv) => inv.id === id);
    return of(invoice as Invoice);
  }
}
