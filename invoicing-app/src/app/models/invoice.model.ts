export interface Invoice {
  id: number;
  date: string;
  customerName: string;
  items: InvoiceItem[];
  totalAmount: number;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  total: number;
}
