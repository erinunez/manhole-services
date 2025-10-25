import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix missing marker icons
const iconRetinaUrl = 'assets/leaflet/marker-icon-2x.png';
const iconUrl = 'assets/leaflet/metal-normal3.png';
const shadowUrl = 'assets/leaflet/marker-shadow.png';

(L.Icon.Default as any).mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});
