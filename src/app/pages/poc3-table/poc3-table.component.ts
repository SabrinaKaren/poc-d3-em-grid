import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc3-table',
  templateUrl: './poc3-table.component.html',
  styleUrls: ['./poc3-table.component.scss']
})
export class Poc3TableComponent implements OnInit {

  displayedColumns: string[] = ['cgf', 'notaGeral', 'pesoNaNotaGeral', 'historico'];
  data: PeriodicElement[];

  constructor() {
    this.data = [
      { cgf: 'COMÉRCIO ATACAREJO RJ - 500653', notaGeral: 5, historico: '', pesoNaNotaGeral: 2.5 },
      { cgf: 'COMÉRCIO ATACAREJO RS - 432764', notaGeral: 2, historico: '', pesoNaNotaGeral: 75 },
      { cgf: 'COMÉRCIO ATACAREJO ES - 842995', notaGeral: 2, historico: '', pesoNaNotaGeral: 65.1 },
      { cgf: 'COMÉRCIO ATACAREJO DF - 300510', notaGeral: 1, historico: '', pesoNaNotaGeral: 2.4 },
      { cgf: 'COMÉRCIO ATACAREJO GO - 667310', notaGeral: 4, historico: '', pesoNaNotaGeral: 47.4 },
      { cgf: 'COMÉRCIO ATACAREJO AM - 728860', notaGeral: 5, historico: '', pesoNaNotaGeral: 23 },
      { cgf: 'COMÉRCIO ATACAREJO RJ - 827774', notaGeral: 5, historico: '', pesoNaNotaGeral: 2.9 },
      { cgf: 'COMÉRCIO ATACAREJO SP - 120198', notaGeral: 5, historico: '', pesoNaNotaGeral: 29 }
    ];
  }

  ngOnInit(): void {
  }

  getAtributosDeUmItem(itemObject: any): Array<string> {
    let attributesList = [];
    for (let key of Object.keys(itemObject)) {
      // não incluir na lista de valores caso seja id
      if (key !== 'historico') attributesList.push(itemObject[key]);
    }
    return attributesList;
  }
  
}

export interface PeriodicElement {
  cgf: string;
  notaGeral: number;
  historico: any;
  pesoNaNotaGeral: number;
}