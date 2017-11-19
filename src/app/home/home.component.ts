import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meuNome:string = "Vinícius Tolentino"
  pathCafeDaManha:string = "../../assets/img/foods/donut.png"
  pathAlmoco:string = "../../assets/img/foods/zlasagna.png"
  show:boolean = true

  constructor() { }

  ngOnInit() {
  }

  cafeDaManha(nome){
    this.pathCafeDaManha = `../../assets/img/foods/${nome}.png`
  }



}
