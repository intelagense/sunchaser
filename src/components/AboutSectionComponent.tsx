import { Card, StackLayout } from '@progress/kendo-react-layout';
import { useState, useEffect } from 'react';

export default function AboutSectionComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#F8F5F2' }} className="about-component">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Card 
          style={{ 
            backgroundColor: '#FCFCFB',
            border: '1px solid #E6E2DD',
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <StackLayout
            orientation={isMobile ? "vertical" : "horizontal"}
            gap={0}
            style={{ width: '100%' }}
          >
            {/* Van Image */}
            <div style={{
              flex: isMobile ? 'none' : '0 0 50%',
              minHeight: isMobile ? '250px' : '300px',
              backgroundImage: 'url(/van.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%'
            }} />

            {/* Text Content */}
            <div style={{
              flex: '1',
              padding: isMobile ? '30px 20px' : '40px'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                fontWeight: '600',
                color: '#2B211D',
                margin: '0 0 20px 0',
                lineHeight: '1.2'
              }}>
                Sun Chaser
              </h2>

              <p style={{
                fontSize: '1.1rem',
                fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                fontWeight: '400',
                color: '#5B504B',
                lineHeight: '1.6',
                margin: '0 0 20px 0'
              }}>
                My 2002 Chevy Astro van runs a full server setup powered by solar panels and battery storage. I work remotely from anywhere with cell service - no generator noise, no fuel costs, just clean power from the sun.
              </p>

              <p style={{
                fontSize: '1.1rem',
                fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                fontWeight: '400',
                color: '#5B504B',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Built this for the freedom to work where I want while staying connected. The solar setup handles all my development work, and I've got monitoring so I know everything's running smooth.
              </p>
            </div>
          </StackLayout>
        </Card>
      </div>
    </div>
  );
}
