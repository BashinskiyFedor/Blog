<template>
  <div class="bg-gradient-secondary">
    <div class="header bg-gradient-danger">
      <div class="container-fluid pt-7 pb-7">
        <div class="row">
          <div class="col">
            <stats-card title="Total traffic"
                  icon="home"
                  subtitle="20.1%"
            >
              <template slot="footer">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i>58.8%</span>
                <span class="text-nowrap">Since last month</span>
              </template>
            </stats-card>
          </div>
          <div class="col">
            <stats-card title="Total traffic"
                  icon="home"
                  subtitle="20.1%"
            >
              <template slot="footer">
                <span class="text-success mr-2"><icon :icon="['fab', 'microsoft']"/>58.8%</span>
                <span class="text-nowrap">Since last month</span>
              </template>
            </stats-card>
          </div>
          <div class="col">
            <stats-card title="Total traffic"
                  icon="home"
                  subtitle="20.1%"
            >
              <template slot="footer">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i>58.8%</span>
                <span class="text-nowrap">Since last month</span>
              </template>
            </stats-card>
          </div>
          <div class="col">
            <stats-card title="Total traffic"
                  icon="home"
                  subtitle="20.1%"
            >
              <template slot="footer">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i>58.8%</span>
                <span class="text-nowrap">Since last month</span>
              </template>
            </stats-card>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container-fluid">
      <div class="row mt--5 pb-5">
        <div class="col-8">
          <card gradient="success">
            <template slot="header">
              <h5 class="text-muted">Overview</h5>
            </template>
            <template>
              <line-chart
                :height="350"
                ref="bigChart"
                :chart-data="bigLineChart.chartData"
                :extra-options="bigLineChart.extraOptions"
              >
              </line-chart>
            </template>
          </card>
        </div>
        <div class="col-4">
          <card gradient="success">
            <template slot="header">
              <h5 class="text-mute">Sales</h5>
            </template>
            <template>

            </template>
          </card>
        </div>
      </div>
    </div>

    <footer class="bg-dark">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="copyright text-start text-muted">
            <a href="#" class="font-weight-bold ml-1">Creative Tim</a>
          </div>
        </div>
        <div class="col-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import * as chartConfigs from '../components/charts/config';
  export default {
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        console.log(this.chartData),
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted () {
      this.initBigChart(0);
    }
  };
</script>
</script>
