import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MessageService} from "primeng/api";

interface hora {
  hora: string;
  code: string;
}
@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css'],
  providers: [MessageService]
})
export class SolicitacaoComponent implements OnInit{
  dataSolicitada: any;
  dataSolicitadaFormatada: any;
  showDialog: any;
  horasDisponiveis: hora[] = [];
  horaSelecionada: any;
  isBotaoDesabilitado = true;
  myFormattedDate: string | null = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.horasDisponiveis = [
      { hora: 'Selecione um Horário', code: '0' },
      { hora: '10:00', code: '1' },
      { hora: '10:10', code: '2' },
      { hora: '10:20', code: '3' },
      { hora: '10:30', code: '4' },
      { hora: '10:40', code: '5' }
    ];
  }

  confirmarData() {
    let day = this.dataSolicitada.getDate();
    let month = this.dataSolicitada.getMonth() + 1; // add 1 because months are indexed from 0
    let year = this.dataSolicitada.getFullYear();

    this.dataSolicitadaFormatada = ('0' + day + '/0' + month + '/' + year);


    var horaSeparada = this.horaSelecionada.hora.split(':');
    this.dataSolicitada.setHours(horaSeparada[0], horaSeparada[1]);


    const datePipe = new DatePipe('pt-BR');


    this.myFormattedDate = datePipe.transform(this.dataSolicitada, 'dd/MM/yyyy hh:mm');


    this.showDialog = true;
  }

  habilitarBotaoSolicitacao() {
    if (this.horaSelecionada.code === '0') {
      this.isBotaoDesabilitado = true;
    } else {
      this.isBotaoDesabilitado = false;
    }
  }

  solicitarAgendamento() {
    this.messageService.add({ severity: 'success', summary: 'Solicitação Agendada' });
    this.showDialog = false;
  }
}
