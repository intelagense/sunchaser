import MapComponent from "./components/MapComponent";
import SolarChartComponent from "./components/SolarChartComponent";
import CurrentLocationSpecsComponent from "./components/CurrentLocationSpecsComponent";
import CurrentSolarOutputComponent from "./components/CurrentSolarOutputComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { StackLayout } from '@progress/kendo-react-layout';

export default function Home() {

  return (
    <div>
      <div className="header-section">
        <HeaderComponent />
      </div>
      
      <div className="main-content-section k-p-6">
        <div className="k-d-flex k-justify-content-center">
          <div className="k-max-width-1200">
            <StackLayout orientation="horizontal" gap={30} className="responsive-layout">
              <StackLayout orientation="vertical" className="k-flex-66" gap={30}>
                <MapComponent />
                <SolarChartComponent />
              </StackLayout>
              <StackLayout orientation="vertical" className="k-flex-33" gap={30}>
                <CurrentLocationSpecsComponent />
                <CurrentSolarOutputComponent />
              </StackLayout>
            </StackLayout>
          </div>
        </div>
      </div>
      
      <div className="footer-section">
        <FooterComponent />
      </div>
    </div>
  )
}