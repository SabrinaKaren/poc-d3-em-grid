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

    let data: [number, number][] = [[0, 20], [150, 150], [300, 100], [450, 20], [600, 130]];

    // cria o elemento svg:
    var svg = d3.select("#line").append("svg").attr("width", 800).attr("height", 200);

    // prepara uma função auxiliar
    var lineFunc = d3.line()
      .x(function(d: any) { return d[0]; })
      .y(function(d: any) { return d[1]; });

    // adiciona o caminho usando esta função auxiliar
    svg.append('path')
      .attr('d', lineFunc(data))
      .attr('stroke', 'blue')
      .attr('fill', 'none');

  }

}