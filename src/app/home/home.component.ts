import { Component, OnInit } from '@angular/core';
import {Estagio} from '../jobs-list/job/job.model'
import {JobsService} from '../jobs-list/jobs.service'

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

lista: Estagio[] = [];
listaResposta: Estagio[] = [];
valida:boolean = false;
  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getEstagios().subscribe(jobs => this.lista = jobs);;
  }

  pesquisa(){
    this.valida = true

    let input1 = (<HTMLInputElement> document.getElementById("input1")).value
    let input2 = (<HTMLInputElement> document.getElementById("input2")).value
    let select = (<HTMLSelectElement>document.getElementById("select")).value
    console.log(input1,input2,select)

    for(let obj of this.lista){
      if((obj.empresa == input1 || obj.location === input2) && obj.categoria == select){
        this.listaResposta.push(obj);
      }else if((obj.empresa == input1 || obj.location === input2) && select == "Todas as Categorias"){
          this.listaResposta.push(obj);
      }
    }

  }

}
