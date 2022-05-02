import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc1-table',
  templateUrl: './poc1-table.component.html',
  styleUrls: ['./poc1-table.component.scss']
})
export class Poc1TableComponent implements OnInit {

  readonly URL_1FLAG: string = '/assets/flag-score/1-flag.png';
  readonly URL_2FLAGS: string = '/assets/flag-score/2-flags.png';
  readonly URL_3FLAGS: string = '/assets/flag-score/3-flags.png';
  readonly URL_4FLAGS: string = '/assets/flag-score/4-flags.png';
  readonly URL_5FLAGS: string = '/assets/flag-score/5-flags.png';

  columnsIdentificator: string[] = ['cgf', 'notaGeral', 'historico', 'pesoNaNotaGeral', 'empty'];
  tableData: PeriodicElement[];

  constructor() {
    /* dados mockados */
    this.tableData = [
      { id: '1', cgf: 'COMÉRCIO ATACAREJO RJ - 500653', notaGeral: 4, historico: '', pesoNaNotaGeral: 17, empty: '' },
      { id: '2', cgf: 'COMÉRCIO ATACAREJO RS - 432764', notaGeral: 4, historico: '', pesoNaNotaGeral: 75, empty: '' },
      { id: '3', cgf: 'COMÉRCIO ATACAREJO ES - 842995', notaGeral: 5, historico: '', pesoNaNotaGeral: 65.1, empty: '' },
      { id: '4', cgf: 'COMÉRCIO ATACAREJO DF - 300510', notaGeral: 3, historico: '', pesoNaNotaGeral: 35, empty: '' },
      { id: '5', cgf: 'COMÉRCIO ATACAREJO GO - 667310', notaGeral: 5, historico: '', pesoNaNotaGeral: 47.4, empty: '' },
      { id: '6', cgf: 'COMÉRCIO ATACAREJO AM - 728860', notaGeral: 2, historico: '', pesoNaNotaGeral: 23, empty: '' },
      { id: '7', cgf: 'COMÉRCIO ATACAREJO RJ - 827774', notaGeral: 3, historico: '', pesoNaNotaGeral: 30, empty: '' },
      { id: '8', cgf: 'COMÉRCIO ATACAREJO SP - 120198', notaGeral: 5, historico: '', pesoNaNotaGeral: 29, empty: '' }
    ];
  }

  ngOnInit(): void {
  }

  getUrlFlagByScore(score: number): string {
    switch(score) {
      case 1:
        return this.URL_1FLAG;
      case 2:
        return this.URL_2FLAGS;
      case 3:
        return this.URL_3FLAGS;
      case 4:
        return this.URL_4FLAGS;
      case 5:
        return this.URL_5FLAGS;
      default:
        return this.URL_1FLAG;
    }
  }
  
}

export interface PeriodicElement {
  id: string;
  cgf: string;
  notaGeral: number;
  historico: any;
  pesoNaNotaGeral: number;
  empty: any;
}