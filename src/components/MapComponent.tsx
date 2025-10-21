import { Map, MapLayers, MapTileLayer, MapMarkerLayer, TileUrlTemplateArgs } from "@progress/kendo-react-map";
import { Card, CardBody, CardTitle, CardHeader } from '@progress/kendo-react-layout';

const center = [32.2988, -90.1848]; // Jackson, MS coordinates
const tileSubdomains = ['a', 'b', 'c', 'd'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.basemaps.cartocdn.com/rastertiles/voyager/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>';

const markers = [
  { 
    latlng: [32.2988, -90.1848], 
    name: 'Jackson, MS',
    title: 'Jackson, MS - Current Location'
  }
];

export default function MapComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trip Locations Map</CardTitle>
      </CardHeader>
      <CardBody>
        <div>
          <Map
            center={center}
            zoom={10}
            zoomable={false}
            pannable={false}
          >
            <MapLayers>
              <MapTileLayer
                urlTemplate={tileUrl}
                subdomains={tileSubdomains}
                attribution={attribution}
              />
              <MapMarkerLayer
                data={markers}
                locationField="latlng"
                titleField="title"
              />
            </MapLayers>
          </Map>
        </div>
      </CardBody>
    </Card>
  );
}
