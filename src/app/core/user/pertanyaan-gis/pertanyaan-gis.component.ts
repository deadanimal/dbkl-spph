import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-pertanyaan-gis',
  templateUrl: './pertanyaan-gis.component.html',
  styleUrls: ['./pertanyaan-gis.component.scss']
})
export class PertanyaanGisComponent implements OnInit {

  options = {
    layers: [
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', 
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19
      })
    ],
    zoom: 15,
    center: L.latLng(3.210930, 101.710623)
  };

  constructor() { }

  ngOnInit() {
  }

}
