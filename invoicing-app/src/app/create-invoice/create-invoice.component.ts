import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { Invoice, InvoiceItem } from '../models/invoice.model';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css'],
})
export class CreateInvoiceComponent {
  customerName: string = '';
  items: InvoiceItem[] = [];
  newItem: InvoiceItem = { description: '', quantity: 1, price: 0, total: 0 };
  totalAmount: number = 0;

  constructor(private invoiceService: InvoiceService) {}

  addItem(): void {
    this.newItem.total = this.newItem.quantity * this.newItem.price;
    this.items.push(this.newItem);
    this.newItem = { description: '', quantity: 1, price: 0, total: 0 };
    this.calculateTotal();
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.items.reduce((acc, item) => acc + item.total, 0);
  }

  createInvoice(): void {
    const newInvoice: Invoice = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      customerName: this.customerName,
      items: this.items,
      totalAmount: this.totalAmount,
    };
    this.invoiceService.addInvoice(newInvoice);
    alert('Invoice created successfully!');
  }
}

