import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {

  @Input() grafico: any = {};

  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet[];
  doughnutChartType: ChartType;
  leyenda: string;
  
  constructor() {
    
   }

  ngOnInit(): void {
    this.doughnutChartLabels = this.grafico.labels;
      this.doughnutChartData = this.grafico.data;
      this.doughnutChartType = this.grafico.type;
      this.leyenda = this.grafico.leyenda;
  }

}
