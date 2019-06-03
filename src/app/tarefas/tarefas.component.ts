import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import {TAREFAS} from '../mock-tarefas'
import { from } from 'rxjs';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefa1 : Tarefa = {
    id: 1,
    name: 'correr'
  };

  tarefas = TAREFAS;
  sTarefas: Tarefa[];

  selectedTarefa:Tarefa;

  constructor(private tarefaService: TarefaService) { }


  onSelect(tarefa: Tarefa): void{
    this.selectedTarefa = tarefa;
  }
  getTarefas(): void{
    this.sTarefas = this.tarefaService.getTarefas();
  }

  ngOnInit() {
    this.getTarefas()
  }


}
