import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartValueAxis, ChartValueAxisItem, ChartTitle, ChartLegend } from "@progress/kendo-react-charts";
import { Card, CardBody, CardTitle, CardHeader } from '@progress/kendo-react-layout';

// Move data outside component to prevent re-rendering
const solarBatteryData = [
  { time: "06:00", battery: 45, charging: 0 },
  { time: "08:00", battery: 55, charging: 150 },
  { time: "10:00", battery: 65, charging: 280 },
  { time: "12:00", battery: 75, charging: 420 },
  { time: "14:00", battery: 85, charging: 380 },
  { time: "16:00", battery: 92, charging: 250 },
  { time: "18:00", battery: 95, charging: 80 },
  { time: "20:00", battery: 93, charging: 0 },
  { time: "22:00", battery: 90, charging: 0 }
];

export default function SolarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>💀 Solar Death Countdown</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <Chart>
            <ChartTitle text="Countdown to Van Death: Solar Life Support" />
            <ChartLegend position="bottom" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={solarBatteryData.map(d => d.time)} />
            </ChartCategoryAxis>
            <ChartValueAxis>
              <ChartValueAxisItem min={0} max={100} />
            </ChartValueAxis>
            <ChartSeries>
              <ChartSeriesItem 
                type="line" 
                data={solarBatteryData.map(d => d.battery)}
                name="Battery Level (%)"
                markers={{ visible: true }}
              />
              <ChartSeriesItem 
                type="column" 
                data={solarBatteryData.map(d => d.charging)}
                name="Charging Power (W)"
              />
            </ChartSeries>
          </Chart>
        </div>
      </CardBody>
    </Card>
  );
}
