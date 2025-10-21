import { Card, CardBody, CardTitle, CardHeader } from '@progress/kendo-react-layout';
import { ListView } from '@progress/kendo-react-listview';

export default function CurrentLocationSpecsComponent() {
  const locationData = [
    { label: 'Location', value: 'Jackson, MS' },
    { label: 'Visit Count', value: '3' },
    { label: 'Temperature', value: '68°F' },
    { label: 'Humidity', value: '72%' },
    { label: 'Solar Efficiency', value: '94%' },
    { label: 'Battery Level', value: '89%' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Location</CardTitle>
      </CardHeader>
      <CardBody className="k-p-0">
        <div className="k-d-flex k-flex-column k-h-100">
          {locationData.map((dataItem, index) => (
            <div key={index} className="k-p-5 k-border-bottom k-flex-1 k-d-flex k-justify-content-between k-align-items-center">
              <span className="k-font-weight-medium k-text-muted k-font-size-md">{dataItem.label}</span>
              <span className="k-font-weight-bold k-font-size-lg">{dataItem.value}</span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
