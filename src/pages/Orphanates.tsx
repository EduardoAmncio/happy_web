import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import '../styles/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import logoImg from '../images/map-marker.svg';


function Orphanates() {
  return (
    <>
      <div id="page-map">
        <aside>
          <header>
            <img src={logoImg} alt="Happy"/>
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>
          <footer>
            <strong>Quixeramobim</strong>
            <span>Ceará</span>
          </footer>
        </aside>

        <Map 
          center={[-3.7510894,-38.5025751]}
          zoom={15}
          style={{width:'100%', height: '100%'}}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>

        <Link to="" className="create-orphanate">
          <FiPlus size={32} color= '#fff'  />
        </Link>
      </div>
    </>
  );
}

export default Orphanates;