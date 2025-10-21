import { Card, CardBody, CardTitle, CardHeader } from '@progress/kendo-react-layout';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { ListView } from '@progress/kendo-react-listview';

export default function CurrentSolarOutputComponent() {
  const solarData = [
    { label: 'Battery Voltage', value: '12.8V' },
    { label: 'Solar Input', value: '450W' },
    { label: 'Current Draw', value: '2.3A' },
    { label: 'Temperature', value: '72°F' },
    { label: 'Time to Full', value: '2.5h' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Solar Output</CardTitle>
      </CardHeader>
      <CardBody className="k-p-0">
        <div className="k-d-flex k-flex-column k-h-100">
          {solarData.map((dataItem, index) => (
            <div key={index} className="k-p-5 k-border-bottom k-flex-1 k-d-flex k-justify-content-between k-align-items-center">
              <span className="k-font-weight-medium k-text-muted k-font-size-md">{dataItem.label}</span>
              <span className="k-font-weight-bold k-font-size-lg">{dataItem.value}</span>
            </div>
          ))}
          <div className="k-p-5 k-flex-1 k-d-flex k-flex-column k-justify-content-center">
            <div className="k-d-flex k-justify-content-between k-align-items-center k-mb-3">
              <span className="k-font-weight-medium k-text-muted k-font-size-md">Efficiency</span>
              <span className="k-font-weight-bold k-font-size-lg">94%</span>
            </div>
            <div style={{ maxWidth: '150px' }}>
              <ProgressBar value={94} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
