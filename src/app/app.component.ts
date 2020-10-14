import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  Linechart1 = [];
  Linechart2 = [];
  pieChart = [];

  constructor() {}
  ngOnInit() {
    this.Linechart1 = new Chart("canvas", {
      type: "line",
      data: {
        labels: ["01:05", "05:23", "07:25", "11:58", "17:56", "18:45"],
        datasets: [
          {
            data: [1, 2, 3, 4],
            borderColor: "#3cb371",
            backgroundColor: "#0000FF",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });
    this.Linechart2 = new Chart("canvas1", {
      type: "line",
      data: {
        labels: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        datasets: [
          {
            label: "data shown for Week",
            data: [10, 20, 30, 40, 50, 60],
            fill: false,
            lineTension: 0.5,
            borderColor: "red",
            borderWidth: 1.5,
            radius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: true,
              },
              ticks: {
                beginAtZero: false,
                stepSize: 10,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label(tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
      },
    });

    this.pieChart = new Chart("canvas2", {
      type: "pie",
      data: {
        labels: [10, 20, 30],
        datasets: [
          {
            data: [1, 2, 3],
            borderColor: "#3cba9f",
            backgroundColor: [
              "#3cb371",
              "#0000FF",
              "#9966FF",
              "#4C4CFF",
              "#00FFFF",
              "#f990a7",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue",
            ],
            fill: true,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });
  }
}
