import MapComponent from "./components/MapComponent";
import SolarChartComponent from "./components/SolarChartComponent";
import CurrentLocationSpecsComponent from "./components/CurrentLocationSpecsComponent";
import CurrentSolarOutputComponent from "./components/CurrentSolarOutputComponent";
import HeaderComponent from "./components/HeaderComponent";
import AboutSectionComponent from "./components/AboutSectionComponent";
import FooterComponent from "./components/FooterComponent";
import { StackLayout, Card } from '@progress/kendo-react-layout';
import { useState, useEffect } from 'react';

export default function Home() {
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
    <div>
      <HeaderComponent />

      <AboutSectionComponent />

      <div style={{ padding: '40px 20px', backgroundColor: '#F8F5F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <StackLayout orientation="vertical" gap={20} style={{ height: isMobile ? 'auto' : '800px' }}>
            {/* Desktop: 2x2 grid, Mobile: 4 stacked cards */}
            {isMobile ? (
              // Mobile: Stack all 4 cards vertically
              <>
                <Card style={{
                  backgroundColor: '#FCFCFB',
                  border: '1px solid #E6E2DD',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      margin: '0 0 16px 0',
                      fontSize: '1.3rem',
                      fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                      fontWeight: '600',
                      color: '#2B211D'
                    }}>
                      Current Location
                    </h3>
                    <MapComponent />
                  </div>
                </Card>

                <Card style={{
                  backgroundColor: '#FCFCFB',
                  border: '1px solid #E6E2DD',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      margin: '0 0 16px 0',
                      fontSize: '1.3rem',
                      fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                      fontWeight: '600',
                      color: '#2B211D'
                    }}>
                      Location Specs
                    </h3>
                    <CurrentLocationSpecsComponent />
                  </div>
                </Card>

                <Card style={{
                  backgroundColor: '#FCFCFB',
                  border: '1px solid #E6E2DD',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      margin: '0 0 16px 0',
                      fontSize: '1.3rem',
                      fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                      fontWeight: '600',
                      color: '#2B211D'
                    }}>
                      Solar Chart
                    </h3>
                    <SolarChartComponent />
                  </div>
                </Card>

                <Card style={{
                  backgroundColor: '#FCFCFB',
                  border: '1px solid #E6E2DD',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      margin: '0 0 16px 0',
                      fontSize: '1.3rem',
                      fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                      fontWeight: '600',
                      color: '#2B211D'
                    }}>
                      Solar Output
                    </h3>
                    <CurrentSolarOutputComponent />
                  </div>
                </Card>
              </>
            ) : (
              // Desktop: 2x2 grid layout
              <>
                <StackLayout orientation="horizontal" gap={20} style={{ flex: '1' }}>
                  <Card style={{
                    flex: '2',
                    backgroundColor: '#FCFCFB',
                    border: '1px solid #E6E2DD',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{
                        margin: '0 0 16px 0',
                        fontSize: '1.3rem',
                        fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '600',
                        color: '#2B211D'
                      }}>
                        Current Location
                      </h3>
                      <MapComponent />
                    </div>
                  </Card>

                  <Card style={{
                    flex: '1',
                    backgroundColor: '#FCFCFB',
                    border: '1px solid #E6E2DD',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{
                        margin: '0 0 16px 0',
                        fontSize: '1.3rem',
                        fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '600',
                        color: '#2B211D'
                      }}>
                        Location Specs
                      </h3>
                      <CurrentLocationSpecsComponent />
                    </div>
                  </Card>
                </StackLayout>

                <StackLayout orientation="horizontal" gap={20} style={{ flex: '1' }}>
                  <Card style={{
                    flex: '2',
                    backgroundColor: '#FCFCFB',
                    border: '1px solid #E6E2DD',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{
                        margin: '0 0 16px 0',
                        fontSize: '1.3rem',
                        fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '600',
                        color: '#2B211D'
                      }}>
                        Solar Chart
                      </h3>
                      <SolarChartComponent />
                    </div>
                  </Card>

                  <Card style={{
                    flex: '1',
                    backgroundColor: '#FCFCFB',
                    border: '1px solid #E6E2DD',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{
                        margin: '0 0 16px 0',
                        fontSize: '1.3rem',
                        fontFamily: 'Poppins, "Segoe UI", system-ui, sans-serif',
                        fontWeight: '600',
                        color: '#2B211D'
                      }}>
                        Solar Output
                      </h3>
                      <CurrentSolarOutputComponent />
                    </div>
                  </Card>
                </StackLayout>
              </>
            )}
          </StackLayout>
        </div>
      </div>
      
      <FooterComponent />
    </div>
  )
}