import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { LineChartDataModel } from './line-chart-data.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() id: string = '';
  @Input() data: LineChartDataModel[] = [];

  dataInExpectedFormat: [number, number][] = [];

  private svg: any;
  private margin = 5;
  private width = 200;
  private height = 50;

  constructor() { }

  ngOnInit(): void {
    this.transformDataFormat();
  }

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
      .attr('d', lineFunc(this.dataInExpectedFormat))
      .attr('stroke', 'green')
      .attr('fill', 'none');

  }

  transformDataFormat(): void {
    this.data.forEach((item: LineChartDataModel) => {
      this.dataInExpectedFormat.push([item.x, item.y]);
    });
  }

}