import { StackLayout } from '@progress/kendo-react-layout';

export default function CurrentLocationSpecsComponent() {
  const locationData = [
    { label: 'Location', value: 'Jackson, MS' },
    { label: 'Visit Count', value: '1' },
    { label: 'Temperature', value: '68°F' },
    { label: 'Current Weather', value: 'Partly Cloudy' }
  ];

  return (
    <StackLayout 
      orientation="vertical" 
      gap={8}
      style={{ 
        height: '100%'
      }}
    >
      {locationData.map((dataItem, index) => (
        <div key={index} style={{
          padding: '12px 16px',
          backgroundColor: '#F8F7F5',
          borderRadius: '6px',
          border: '1px solid #E6E2DD',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: '1'
        }}>
          <span style={{
            fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
            fontWeight: '500',
            color: '#5B504B',
            fontSize: '0.9rem'
          }}>
            {dataItem.label}
          </span>
          <span style={{
            fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
            fontWeight: '600',
            color: '#2B211D',
            fontSize: '0.95rem'
          }}>
            {dataItem.value}
          </span>
        </div>
      ))}
    </StackLayout>
  );
}
