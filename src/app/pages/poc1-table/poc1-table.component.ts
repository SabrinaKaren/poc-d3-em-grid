import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc1-table',
  templateUrl: './poc1-table.component.html',
  styleUrls: ['./poc1-table.component.scss']
})
export class Poc1TableComponent implements OnInit {

  columnsIdentificator: string[] = ['cgf', 'notaGeral', 'historico', 'pesoNaNotaGeral'];
  tableData: PeriodicElement[];

  constructor() {
    this.tableData = [
      { id: '1', cgf: 'COMÉRCIO ATACAREJO RJ - 500653', notaGeral: 4, historico: '', pesoNaNotaGeral: 2.5 },
      { id: '2', cgf: 'COMÉRCIO ATACAREJO RS - 432764', notaGeral: 1, historico: '', pesoNaNotaGeral: 75 },
      { id: '3', cgf: 'COMÉRCIO ATACAREJO ES - 842995', notaGeral: 5, historico: '', pesoNaNotaGeral: 65.1 },
      { id: '4', cgf: 'COMÉRCIO ATACAREJO DF - 300510', notaGeral: 3, historico: '', pesoNaNotaGeral: 2.4 },
      { id: '5', cgf: 'COMÉRCIO ATACAREJO GO - 667310', notaGeral: 5, historico: '', pesoNaNotaGeral: 47.4 },
      { id: '6', cgf: 'COMÉRCIO ATACAREJO AM - 728860', notaGeral: 2, historico: '', pesoNaNotaGeral: 23 },
      { id: '7', cgf: 'COMÉRCIO ATACAREJO RJ - 827774', notaGeral: 3, historico: '', pesoNaNotaGeral: 2.9 },
      { id: '8', cgf: 'COMÉRCIO ATACAREJO SP - 120198', notaGeral: 1, historico: '', pesoNaNotaGeral: 29 }
    ];
  }

  ngOnInit(): void {
  }
  
}

export interface PeriodicElement {
  id: string;
  cgf: string;
  notaGeral: number;
  historico: any;
  pesoNaNotaGeral: number;
}