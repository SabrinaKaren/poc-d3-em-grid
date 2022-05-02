import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public data: { value: number, date: string }[];

  private width = 700;
  private height = 700;
  private margin = 50;
  public svg: any;
  public svgInner: any;
  public yScale: any;
  public xScale: any;
  public xAxis: any;
  public yAxis: any;
  public lineGroup: any;
  
  public constructor(public chartElem: ElementRef) {
    this.data = [{"value":20,"date":"2020-05-12T12:19:00+00:00"},{"value":50,"date":"2020-05-14T12:19:00+00:00"},{"value":30,"date":"2020-05-16T12:19:00+00:00"},{"value":80,"date":"2020-05-18T12:19:00+00:00"},{"value":55,"date":"2020-05-20T12:19:00+00:00"},{"value":60,"date":"2020-05-22T12:19:00+00:00"},{"value":45,"date":"2020-05-24T12:19:00+00:00"},{"value":30,"date":"2020-05-26T12:19:00+00:00"},{"value":40,"date":"2020-05-28T12:19:00+00:00"},{"value":70,"date":"2020-05-30T12:19:00+00:00"},{"value":63,"date":"2020-06-01T12:19:00+00:00"},{"value":40,"date":"2020-06-03T12:19:00+00:00"},{"value":50,"date":"2020-06-05T12:19:00+00:00"},{"value":75,"date":"2020-06-07T12:19:00+00:00"},{"value":20,"date":"2020-06-09T12:19:00+00:00"},{"value":50,"date":"2020-06-11T12:19:00+00:00"},{"value":80,"date":"2020-06-13T12:19:00+00:00"},{"value":75,"date":"2020-06-15T12:19:00+00:00"},{"value":82,"date":"2020-06-17T12:19:00+00:00"},{"value":55,"date":"2020-06-19T12:19:00+00:00"},{"value":35,"date":"2020-06-21T12:19:00+00:00"},{"value":34,"date":"2020-06-23T12:19:00+00:00"},{"value":45,"date":"2020-06-25T12:19:00+00:00"},{"value":58,"date":"2020-06-27T12:19:00+00:00"},{"value":34,"date":"2020-06-29T12:19:00+00:00"},{"value":60,"date":"2020-07-01T12:19:00+00:00"},{"value":75,"date":"2020-07-03T12:19:00+00:00"},{"value":80,"date":"2020-07-05T12:19:00+00:00"},{"value":29,"date":"2020-07-07T12:19:00+00:00"},{"value":40,"date":"2020-07-09T12:19:00+00:00"},{"value":54,"date":"2020-07-11T12:19:00+00:00"},{"value":67,"date":"2020-07-13T12:19:00+00:00"},{"value":90,"date":"2020-07-15T12:19:00+00:00"},{"value":84,"date":"2020-07-17T12:19:00+00:00"},{"value":43,"date":"2020-07-19T12:19:00+00:00"}];
  }

  ngOnInit(): void { }

  public ngOnChanges(changes: any): void {
    if (changes.hasOwnProperty('data') && this.data) {
      console.log(this.data);

      this.initializeChart();
      this.drawChart();

      window.addEventListener('resize', () => this.drawChart());
    }
  }

  private initializeChart(): void {

    this.svg = d3
      .select(this.chartElem.nativeElement)
      .select('.linechart')
      .append('svg')
      .attr('height', this.height);

    this.svgInner = this.svg
      .append('g')
      .style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');

    /* Escalas */

    this.yScale = d3
      .scaleLinear()
      .domain([d3.max(this.data, (d: any) => d.value) + 1, d3.min(this.data, (d: any) => d.value) - 1])
      .range([0, this.height - 2 * this.margin]);

    // this.xScale = d3.scaleTime().domain(d3.extent(this.data, (d: any) => new Date(d.date)));

    /* Eixos */

    this.yAxis = this.svgInner
      .append('g')
      .attr('id', 'y-axis')
      .style('transform', 'translate(' + this.margin + 'px,  0)');

    this.xAxis = this.svgInner
      .append('g')
      .attr('id', 'x-axis')
      .style('transform', 'translate(0, ' + (this.height - 2 * this.margin) + 'px)');

    /* Linha */
    this.lineGroup = this.svgInner
      .append('g')
      .append('path')
      .attr('id', 'line')
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', '2px');

  }

  private drawChart(): void {

    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = d3
      .axisBottom(this.xScale)
      .ticks(10)
      // .tickFormat(d3.timeFormat('%m / %Y'));

    this.xAxis.call(xAxis);

    const yAxis = d3
      .axisLeft(this.yScale);

    this.yAxis.call(yAxis);

    const line = d3
      .line()
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveMonotoneX);

    const points: [number, number][] = this.data.map(d => [
      this.xScale(new Date(d.date)),
      this.yScale(d.value),
    ]);

    this.lineGroup.attr('d', line(points));

  }

}