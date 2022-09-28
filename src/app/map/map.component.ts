import { Component } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  center: google.maps.LatLngLiteral = {lat: 37.785658446047904, lng: -79.44160722169747};
  zoom = 17.5;
}
