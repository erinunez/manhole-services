import { Component, AfterViewInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  imports: [ButtonModule],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss'
})
export class MapView implements AfterViewInit {
ngAfterViewInit(): void {
    const map = L.map('map').setView([2.9264, 101.6964], 16);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors © CARTO',
  subdomains: 'abcd',
  noWrap: true    // 🔥 stops repeating horizontally
}).addTo(map);
  }
  
}
