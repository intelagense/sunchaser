import { StackLayout } from '@progress/kendo-react-layout';
import { ProgressBar } from '@progress/kendo-react-progressbars';

export default function CurrentSolarOutputComponent() {
  const solarData = [
    { label: 'Battery Voltage', value: '12.8V' },
    { label: 'Solar Input', value: '450W' },
    { label: 'Current Draw', value: '2.3A' }
  ];

  return (
    <StackLayout 
      orientation="vertical" 
      gap={8}
      style={{ 
        height: '100%'
      }}
    >
      {solarData.map((dataItem, index) => (
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
      
      <div style={{
        padding: '12px 16px',
        backgroundColor: '#F8F7F5',
        borderRadius: '6px',
        border: '1px solid #E6E2DD',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '1'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{
            fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
            fontWeight: '500',
            color: '#5B504B',
            fontSize: '0.9rem'
          }}>
            Battery Remaining
          </span>
          <span style={{
            fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
            fontWeight: '600',
            color: '#2B211D',
            fontSize: '0.95rem'
          }}>
            94%
          </span>
        </div>
        <div style={{ width: '100%' }}>
          <ProgressBar 
            value={94} 
            labelVisible={false}
            style={{ 
              height: '8px', 
              borderRadius: '4px'
            }}
            progressStyle={{ 
              backgroundColor: '#22C55E'
            }}
            emptyStyle={{
              backgroundColor: '#DCFCE7'
            }}
          />
        </div>
      </div>
    </StackLayout>
  );
}
