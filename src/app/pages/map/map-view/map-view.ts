import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-map-view',
    imports: [ButtonModule, FormsModule, CommonModule],
    templateUrl: './map-view.html',
    styleUrl: './map-view.scss'
})
export class MapView implements AfterViewInit, OnInit {
    listNodes: any = [];
    private map!: L.Map;
    selectedMarkerData: any = null;
    showAlarmDetails: boolean = false;

    device = {
        id: '123',
        address: 'ST. Sesame',
        latitude: 0,
        longitude: 0,
        status: 'active',
        lastMaintenanceTimestamp: '12/09/2025',
        lastMaintenancePIC: 'En. Muhiddin',
        deviceModel: 'LoraWon',
        firmwareVersion: '11.0.02',
        tiltReading: 0,
        defaultTiltReading: 0,
        batteryReading: 100,
        gatewayId: '0923'
    };

    ngAfterViewInit(): void {
        // Configure Leaflet icon paths
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'assets/images/leaflet/marker-icon-2x.png',
            iconUrl: 'assets/images/leaflet/marker-icon.png',
            shadowUrl: 'assets/images/leaflet/marker-shadow.png',
        });
        
        // this.initMap();
        this.initMapCluster();
    }

    initMap() {
        const map = L.map('map', {
            zoomControl: false // 🚫 disables default zoom control
        }).setView([2.9264, 101.6964], 16);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors © CARTO',
            subdomains: 'abcd',
            noWrap: true
        }).addTo(map);

        L.control
            .zoom({
                position: 'bottomright' // ✅ now only one control
            })
            .addTo(map);

        if (this.listNodes.length !== 0) {
            const defaultIcon = L.icon({
                iconUrl: 'assets/icons/water.png',
                // shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            const coordsArray = this.listNodes.map((item: any) => {
                const [lat, lng] = item.latLong.split(',').map(Number);
                return [lat, lng];
            });

            // // Add markers to the cluster group
            coordsArray.forEach((coords: any) => {
                const marker = L.marker(coords, {
                    icon: defaultIcon,
                    draggable: true,
                    title: 'company name'
                })
                    .bindPopup(`Lat: ${coords[0]}, Lng: ${coords[1]}`)
                    .addTo(map);
                // const marker = L.marker(coords).bindPopup(`Lat: ${coords[0]}, Lng: ${coords[1]}`);
                // markers.addLayer(marker);
            });

            // let marker = L.marker([2.9264, 101.6964], {
            //     icon: defaultIcon,
            //     draggable: true,
            //     title: 'company name'
            // }).addTo(map);

            // let marker = new L.Marker([2.9264, 101.6964], iconOptions);
            // marker.bindPopup('2.9264, 101.6964');
            // marker.addTo(map);
        }
    }

    initMapCluster() {
        // // Dummy manhole data
        // const dummyData = [
        //     { latLong: '2.9264, 101.6964', name: 'Manhole 1' },
        //     { latLong: '2.9220, 101.6964', name: 'Manhole 2' },
        //     { latLong: '2.9214, 101.6964', name: 'Manhole 3' },
        //     { latLong: '2.9000, 101.6964', name: 'Manhole 4' },
        //     { latLong: '2.9400, 101.6964', name: 'Manhole 5' },
        //     { latLong: '2.9364, 101.6964', name: 'Manhole 6' },
        //     { latLong: '2.9764, 101.6964', name: 'Manhole 7' }
        // ];

        // if (L.DomUtil.get('map') !== null) {
        //     L.DomUtil.get('map')._leaflet_id = null;
        // }

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
            iconUrl: 'assets/leaflet/marker-icon.png',
            shadowUrl: 'assets/leaflet/marker-shadow.png',
          });
          
        // 1. Create the map
        this.map = L.map('map', {
            zoomControl: false // 🚫 disables default zoom control
        }).setView([2.9264, 101.6964], 13);

        // 2. Add a tile layer (dark theme)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors © CARTO',
            subdomains: 'abcd',
            noWrap: true
        }).addTo(this.map);

        L.control
            .zoom({
                position: 'bottomright' // ✅ now only one control
            })
            .addTo(this.map);

        // 3. Create a Marker Cluster Group with custom colors
        const markerClusterGroup = L.markerClusterGroup({
            iconCreateFunction: function(cluster) {
                const childCount = cluster.getChildCount();
                let className = 'marker-cluster-';
                if (childCount < 10) {
                    className += 'small';
                } else if (childCount < 100) {
                    className += 'medium';
                } else {
                    className += 'large';
                }
                
                return L.divIcon({
                    html: '<div><span>' + childCount + '</span></div>',
                    className: 'marker-cluster ' + className,
                    iconSize: L.point(40, 40)
                });
            }
        });

        if (this.listNodes.length !== 0) {
            // 4. Loop through your dummy data and add markers
            this.listNodes.forEach((item: any) => {
                const defaultIcon = L.icon({
                    iconUrl: item.status === 'normal' ? 'assets/icons/metal-normal3.png' : 'assets/icons/metal-alarm.png',
                    // shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });

                const [lat, lng] = item.latLong.split(',').map(Number); // convert to numbers
                const marker = L.marker([lat, lng], {
                    icon: defaultIcon,
                    draggable: true
                });
                marker.on('click', () => this.showMarkerData({ name: item.name, info: 'Some details here', status: item.status}));
                // marker.bindPopup(`<b>${item.name}</b><br>${lat}, ${lng}`);
                markerClusterGroup.addLayer(marker); // add to cluster group
            });
        }

        // 5. Add the cluster group to the map
        this.map.addLayer(markerClusterGroup);
    }

    showMarkerData(data: any) {
        this.selectedMarkerData = data;
    }

    closePopup() {
        this.selectedMarkerData = null;
    }

    getAlarmCount(): number {
        return this.listNodes.filter((node: any) => node.status === 'alarm').length;
    }

    getAlarmManholes(): any[] {
        return this.listNodes.filter((node: any) => node.status === 'alarm');
    }

    toggleAlarmDetails(): void {
        this.showAlarmDetails = !this.showAlarmDetails;
    }

    closeAlarmDetails(): void {
        this.showAlarmDetails = false;
    }

    flyToLocation(latLong: string): void {
        const [lat, lng] = latLong.split(',').map(Number);
        
        // Find the corresponding manhole data
        const manholeData = this.listNodes.find((node: any) => node.latLong === latLong);
        
        // Fly to the location
        this.map.setView([lat, lng], 16, {
            animate: true,
            duration: 1.5
        });
        
        // Show the marker data popup after animation completes
        setTimeout(() => {
            if (manholeData) {
                this.showMarkerData({ 
                    name: manholeData.name, 
                    info: `Location: ${latLong}`, 
                    status: manholeData.status 
                });
            }
        }, 200); // Slightly longer than animation duration
        
        this.closeAlarmDetails();
    }

    ngOnInit(): void {
        const putrajayaManholeData = [
            { latLong: '2.9318, 101.6735', name: 'Persiaran Sultan Salahuddin (Roundabout)', status: 'normal' },
            { latLong: '2.9294, 101.6812', name: 'Lebuh Sentosa - Near Putra Mosque', status: 'normal' },
            { latLong: '2.9271, 101.6863', name: 'Persiaran Perdana - Ministry of Finance', status: 'alarm' },
            { latLong: '2.9224, 101.6885', name: 'Persiaran Utara - Precinct 2', status: 'normal' },
            { latLong: '2.9187, 101.6932', name: 'Persiaran Selatan - Precinct 3', status: 'normal' },
            { latLong: '2.9152, 101.6990', name: 'Lebuh Sentosa - Taman Wawasan', status: 'normal' },
            { latLong: '2.9113, 101.7038', name: 'Persiaran Timur - Precinct 4', status: 'normal' },
            { latLong: '2.9054, 101.7076', name: 'Persiaran Barat - Precinct 5', status: 'alarm' },
            { latLong: '2.8999, 101.7123', name: 'Persiaran Sultan Salahuddin - Near PICC', status: 'normal' },
            { latLong: '2.8962, 101.7158', name: 'Putrajaya-Cyberjaya Expressway - Precinct 6', status: 'alarm' },
            { latLong: '2.9345, 101.6789', name: 'Lebuh Wawasan - Near Government Complex', status: 'normal' },
            { latLong: '2.9256, 101.6847', name: 'Persiaran Utara - Near Alamanda Mall', status: 'normal' },
            { latLong: '2.9203, 101.6901', name: 'Lebuh Sentosa - Near IOI City Mall', status: 'alarm' },
            { latLong: '2.9134, 101.6972', name: 'Persiaran Selatan - Near Pullman Hotel', status: 'normal' },
            { latLong: '2.9087, 101.7015', name: 'Lebuh Persiaran - Near Equatorial Hotel', status: 'normal' },
            { latLong: '2.9021, 101.7093', name: 'Persiaran Timur - Near Convention Centre', status: 'alarm' },
            { latLong: '2.8976, 101.7134', name: 'Persiaran Barat - Near Seri Wawasan Bridge', status: 'normal' },
            { latLong: '2.8923, 101.7187', name: 'Lebuh Sentosa - Near Seri Gemilang Bridge', status: 'normal' },
            { latLong: '2.8867, 101.7234', name: 'Putrajaya-Cyberjaya Expressway - Near Cyberjaya', status: 'alarm' },
            { latLong: '2.8821, 101.7276', name: 'Persiaran Sultan Salahuddin - Near Water Sports Complex', status: 'normal' }
        ];

        this.listNodes = putrajayaManholeData;
        // this.initMap();
        this.initMapCluster();
    }
}
