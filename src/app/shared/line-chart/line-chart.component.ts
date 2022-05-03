import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() id: string = '';

  data: [number, number][] = [[0, 10], [50, 20], [52, 23], [59, 18], [62, 31]];

  private svg: any;
  private margin = 10;
  private width = 200;
  private height = 50;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    // cria o elemento svg:
    this.svg = d3.select("div#line" + this.id)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

    // prepara uma função auxiliar
    var lineFunc = d3.line()
      .x(function(d: any) { return d[0]; })
      .y(function(d: any) { return d[1]; });

    // adiciona o caminho usando esta função auxiliar
    this.svg.append('path')
      .attr('d', lineFunc(this.data))
      .attr('stroke', 'green')
      .attr('fill', 'none');

  }

}