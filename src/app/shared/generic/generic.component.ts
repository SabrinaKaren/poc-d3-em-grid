import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit {

  @Input() initialValue: string = 'Sushi';

  constructor() { }

  ngOnInit(): void {
  }

}