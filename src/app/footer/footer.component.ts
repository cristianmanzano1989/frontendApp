import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  autor: any = {nombre: 'Cristian Adolfo ', apellido: 'Manzano Quiñones'};
  ngOnInit() {
  }

}
