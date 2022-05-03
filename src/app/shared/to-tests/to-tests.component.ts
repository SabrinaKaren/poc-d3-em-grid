import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-to-tests',
  templateUrl: './to-tests.component.html',
  styleUrls: ['./to-tests.component.scss']
})
export class ToTestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let data = [{x: 0, y: 20}, {x: 150, y: 150}, {x: 300, y: 100}, {x: 450, y: 20}, {x: 600, y: 130}];

    // cria o elemento svg:
    var svg = d3.select("#line").append("svg").attr("width", 800).attr("height", 200);

    // prepara uma função auxiliar
    var lineFunc = d3.line()
      .x(function(d: any) {return d.x})
      .y(function(d: any) {return d.y});

    // adiciona o caminho usando esta função auxiliar
    svg.append('path')
      // .attr('d', lineFunc(data))
      .attr('stroke', 'blue')
      .attr('fill', 'none');

  }

}