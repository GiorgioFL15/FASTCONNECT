import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  document: number;
  email: string;
  phone: number;
  dateRegister: string;
  situation: boolean;
  seller: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Giorgio', document: 7222148, email: 'H', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 2, name: 'Leonardo', document: 8734567, email: 'He', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 3, name: 'Marssala', document: 1234567, email: 'Li', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 4, name: 'Adriana', document: 7654321, email: 'Be', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 5, name: 'Gabriel', document: 1343567, email: 'B', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 6, name: 'Pedro', document: 12.0107, email: 'C', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 7, name: 'Nicole', document: 14.0067, email: 'N', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 8, name: 'Andrea', document: 15.9994, email: 'O', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 9, name: 'Ivo', document: 18.9984, email: 'F', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
  {position: 10, name: 'Luis', document: 20.1797, email: 'Ne', phone: 48999356645, dateRegister: '15/05/2003', situation: true, seller: 'Thiago junior'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'document', 'email','phone', 'dateRegister', 'situation', 'seller', 'action'];
  dataSource = ELEMENT_DATA;
}
