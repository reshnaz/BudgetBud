import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface TransacHistory {
  date: String;
  status: String;
  transacType: String;
  receipt: String;
  amount: String;
}

const TRANSAC_DATA: TransacHistory[] = [
  {date: '17-04-2025', status: 'complete', transacType: 'debit', receipt: '8KJHKJ676FG', amount: 'INR 160'},
  {date: '12-04-2025', status: 'complete', transacType: 'credit', receipt: '9YUHKJ676FG', amount: 'INR 500' },
  {date: '02-03-2025', status: 'complete', transacType: 'credit', receipt: '2IUHKJ676FG', amount: 'INR 250' },
  {date: '26-02-2025', status: 'complete', transacType: 'debit', receipt: '5SNNKJ676FG', amount: 'INR 100' }
]

@Component({
  selector: 'app-transaction-table',
  imports: [MatTableModule],
  templateUrl: './transaction-table.html',
  styleUrl: './transaction-table.scss'
})
export class TransactionTable {

   displayedColumns: string[] = ['Date', 'Status', 'Transaction Type', 'Receipt', 'Amount'];
   dataSource = TRANSAC_DATA;

}
