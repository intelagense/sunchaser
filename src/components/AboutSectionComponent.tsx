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
                This is my 2002 Chevy Astro van(not pictured). It runs a full server setup powered by a solar panel and 2400Wh backup battery storage. It also has a sleeping bag. I can park this anywhere and take a nap or get some work done.
              </p>

              <p style={{
                fontSize: '1.1rem',
                fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                fontWeight: '400',
                color: '#5B504B',
                lineHeight: '1.6',
                margin: '0'
              }}>
                I had the idea to run a full web server after reading <a href="https://solar.lowtechmagazine.com/">LOW←TECH MAGAZINE</a> and wanted to see if it was possible to make a "mobile inspired" version, lawl.
              </p>
            </div>
          </StackLayout>
        </Card>
      </div>
    </div>
  );
}
