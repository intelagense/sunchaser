import { AppBar, AppBarSection, StackLayout } from '@progress/kendo-react-layout';

export default function HeaderComponent() {
  return (
    <AppBar 
      positionMode="static"
      style={{ 
        backgroundColor: '#FFD650',
        boxShadow: '0 2px 8px rgba(43, 33, 29, 0.12)',
        border: 'none',
        padding: '20px 0'
      }}
    >
      <AppBarSection style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StackLayout orientation="vertical" gap={6} className="k-text-center">
          <img
            src="/van-smart-cropped.svg"
            alt="Sun Chaser Van"
            style={{ 
              width: '80px', 
              height: '80px',
              display: 'block',
              margin: '0 auto'
            }}
          />
          <h1 
            style={{ 
              margin: 0,
              fontSize: '2.2rem',
              fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
              fontWeight: '300',
              color: '#FFFFFF',
              lineHeight: '1.1',
              textAlign: 'center',
              letterSpacing: '-0.02em'
            }}
          >
            Sun Chaser
          </h1>
          <p 
            style={{ 
              margin: 0,
              fontSize: '1rem',
              fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
              fontWeight: '600',
              color: '#FF9E3D',
              fontStyle: 'italic',
              textAlign: 'center'
            }}
          >
            Driving the Dream
          </p>
        </StackLayout>
      </AppBarSection>
    </AppBar>
  );
}
