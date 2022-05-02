import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dots-chart',
  templateUrl: './dots-chart.component.html',
  styleUrls: ['./dots-chart.component.scss']
})
export class DotsChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 40, bottom: 30, left: 30},
    width = 450 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // anexar o objeto svg ao corpo da página
    var svg = d3.select("#scatter_area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // dados mockados
    var data = [ {x:10, y:10}, {x:20, y:20}, {x:30, y:30}, {x:40, y:40}, {x:50, y:30}, {x:60, y:20}, {x:70, y:10} ]

    // X: escala e eixo
    var x = d3.scaleLinear()
      .domain([0, 80]) // Este é o mínimo e o máximo dos dados: 0 a 100 se porcentagens
      .range([0, width]); // Este é o valor correspondente que eu quero em Pixel

    svg
      .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Y: escala e eixo
    var y = d3.scaleLinear()
      .domain([0, 55]) // Este é o mínimo e o máximo dos dados: 0 a 100 se porcentagens
      .range([height, 0]); // Este é o valor correspondente que eu quero em Pixel
    
    svg
      .append('g')
      .call(d3.axisLeft(y));

    // adiciona 3 pontos para 0, 50 e 100%
    svg
      .selectAll("whatever")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function(d){ return x(d.x) })
      .attr("cy", function(d){ return y(d.y) })
      .attr("r", 7)

  }

}