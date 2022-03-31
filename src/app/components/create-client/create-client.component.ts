import { Component, OnInit } from '@angular/core';
import { states } from 'src/app/utils/states';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  
  states = states

  constructor() { }

  ngOnInit(): void {
  }
}
