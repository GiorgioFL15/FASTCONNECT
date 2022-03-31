import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateClientComponent } from 'src/app/components/create-client/create-client.component';

export interface PeriodicElement {
  position: number;
  name: string;
  document: number;
  phone: number;
  city: string;
  state: string;
  street: string;
  zipCode: number;
  complement: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Giorgio', document: 7222148, phone: 48999356645, city: 'Florianópolis', state: 'Santa Catarina',  street: 'Mauro Ramos',  zipCode:88058072,  complement: 'APT 204'},
  {position: 2, name: 'Leonardo', document: 8734567, phone: 48999356645,  city: 'Florianópolis', state: 'Santa Catarina',  street: 'Mauro Ramos',  zipCode:88058072,  complement: 'APT 204'},
  {position: 3, name: 'Marssala', document: 1234567, phone: 48999356645,  city: 'Florianópolis', state: 'Santa Catarina',  street: 'Mauro Ramos',  zipCode:88058072,  complement: 'APT 204'},
  {position: 4, name: 'Adriana', document: 7654321, phone: 48999356645, city: 'Florianópolis', state: 'Santa Catarina',  street: 'Mauro Ramos',  zipCode:88058072,  complement: 'APT 204'},
  {position: 5, name: 'Gabriel', document: 1343567, phone: 48999356645, city: 'Florianópolis', state: 'Santa Catarina',  street: 'Mauro Ramos',  zipCode:88058072,  complement: 'APT 204'},
  {position: 6, name: 'Pedro', document: 12.0107, phone: 48999356645, city: 'Florianópolis', state: 'Santa Catarina',  street: 'Mauro Ramos',  zipCode:88058072,  complement: 'APT 204'},
  {position: 7, name: 'Nicole', document: 14.0067, phone: 48999356645,  city: 'Florianópolis', state: 'Santa Catarina',  street:'Mauro Ramos', zipCode:88058072,  complement: 'APT 204'},
  {position: 8, name: 'Andrea', document: 15.9994, phone: 48999356645,  city: 'Florianópolis', state: 'Santa Catarina',  street:'Mauro Ramos', zipCode:88058072,  complement: 'APT 204'},
  {position: 9, name: 'Ivo', document: 18.9984, phone: 48999356645, city: 'Florianópolis', state: 'Santa Catarina',  street:'Mauro Ramos', zipCode:88058072,  complement: 'APT 204'},
  {position: 10, name: 'Luis', document: 20.1797, phone: 48999356645, city: 'Florianópolis', state: 'Santa Catarina',  street:'Mauro Ramos', zipCode:88058072,  complement: 'APT 204'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'document','phone', 'city', 'state', 'street',  'zipCode', 'complement', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createClient(){
    const dialogRef = this.dialog.open(CreateClientComponent, {
      width: '350px'
    })
  }

}
