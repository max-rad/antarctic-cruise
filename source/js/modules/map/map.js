import {Loader} from '@googlemaps/js-api-loader';


const initMap = () => {
  let map;
  const center = {lat: 59.938823968762776, lng: 30.323025941216045};
  const zoom = 17;
  const loader = new Loader({
    apiKey: 'AIzaSyBNDrSx-tXwouhgMarRJCfmSlodzCAIrXs',
    version: 'weekly',
  });

  function loadMap() {
    loader.load().then(() => {
      map = new window.google.maps.Map(document.querySelector('[data-map="map-wrapper"]'), {
        center,
        zoom,
        disableDefaultUI: true,
      });

      const marker = new window.google.maps.Marker({
        position: center,
        icon: {
          url: 'data:image/svg+xml;charset=utf-8,'
            + encodeURIComponent(
                '<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
              '<path d="M15.364 15.5563L9 22L2.636 15.5563C1.37734 14.2819 0.520187 12.6581 0.172928 10.8905C-0.17433 9.12277 0.00390685 7.29051 0.685099 5.62539C1.36629 3.96027 2.51984 2.53707 3.99988 1.53576C5.47992 0.534448 7.21998 0 9 0C10.78 0 12.5201 0.534448 14.0001 1.53576C15.4802 2.53707 16.6337 3.96027 17.3149 5.62539C17.9961 7.29051 18.1743 9.12277 17.8271 10.8905C17.4798 12.6581 16.6227 14.2819 15.364 15.5563ZM9 11.1377C9.53044 11.1377 10.0391 10.9243 10.4142 10.5445C10.7893 10.1648 11 9.64969 11 9.11262C11 8.57554 10.7893 8.06047 10.4142 7.6807C10.0391 7.30093 9.53044 7.08757 9 7.08757C8.46957 7.08757 7.96086 7.30093 7.58579 7.6807C7.21072 8.06047 7 8.57554 7 9.11262C7 9.64969 7.21072 10.1648 7.58579 10.5445C7.96086 10.9243 8.46957 11.1377 9 11.1377Z" fill="#011C40"/>' +
              '</svg>'),
          size: new window.google.maps.Size(18, 22),
        },
        map,
      });

      marker.setMap(map);
    });
  }

  if (document.readyState !== 'loading') {
    loadMap();
  } else {
    document.addEventListener('DOMContentLoaded', loadMap);
  }
};

export {initMap};
