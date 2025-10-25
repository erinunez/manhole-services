import * as L from 'leaflet';

// Expose Leaflet globally for the plugin
(window as any).L = L;

// ESM-safe dynamic import for the plugin
export async function loadLeafletMarkerCluster() {
  if ((L as any).markerClusterGroup) {
    // already loaded
    return L;
  }

  try {
    await import('leaflet.markercluster');
    console.log('✅ Leaflet.MarkerCluster loaded successfully');
  } catch (error) {
    console.error('❌ Failed to load Leaflet.MarkerCluster', error);
  }

  return L;
}
