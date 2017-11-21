import { Component, OnInit } from '@angular/core';
import {Estagio} from './job/job.model'
@Component({
  selector: 'mt-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  listaJobs: Estagio[] = [
    {
      id:1,
      empresa:"Teste",
      descricao:`sdfsfsfsffsfsadfsdffffffffffffffff
      fffffffffffffffffffffffffffffffffffffff`,
      data:"",
      title:"Estágio TI",
      capa:"../../../assets/img/students/empresa1.jpg",
      categoria:"TI"
    },

    {
      id:2,
      empresa:"Teste",
      descricao:"sdfsfsfsffsfsadf",
      data:"",
      title:"Estágio TI",
      capa:"../../../assets/img/students/empresa1.jpg",
      categoria:"TI"
    },

    {
      id:3,
      empresa:"Teste",
      descricao:"sdfsfsfsffsfsadf",
      data:"",
      title:"Estágio TI",
      capa:"../../../assets/img/students/empresa1.jpg",
      categoria:"TI"
    },

    {
      id:4,
      empresa:"Teste",
      descricao:"sdfsfsfsffsfsadf",
      data:"",
      title:"Estágio TI",
      capa:"../../../assets/img/students/empresa1.jpg",
      categoria:"TI"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
