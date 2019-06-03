import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { TAREFAS } from './mock-tarefas';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefas(): Tarefa[] {
    return TAREFAS;
  }
}
