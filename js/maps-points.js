$(document).ready(function() {

  $.ajax({
    "url" : "api/points",
    "method" : "GET",
    "data-type" : "JSON",
    success: function(data, status){
      initialize(data);
    }
  });

  var map;



  function initialize(json) {

  //CENTRO EL MAPA EN LAS COORDENADAS DE TANDIL Y CON UN ZOOM ESTABLECIDO
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(-37.32300305515352,-59.12654744135478)
    };

    // CREO EL MAPA
    map = new google.maps.Map(document.getElementById('mp'), mapOptions);


    // ITERO EL JSON PARA OBTENER LOS PUNTOS DE COORDENADAS
    for(var i = 0; i < json.length; i++) {

      // CREO OBJETOS CON CADA PUNTO
      var obj = json[i];
      // CREO LA IMAGEN CON LOS PARAMETROS QUE VA A VERSE EN EL MAPA
      var image = {
        url: "https://cdn3.iconfinder.com/data/icons/map-markers-1/512/trash_can-512.png",
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(40, 40)
      };
      // CREO EL MARCADOR CON LAS CORDENADAS, EL ID_REPORTE Y LA IMAGEN
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(obj.latitud,obj.longitud),
        map: map,
        id: obj.id_reporte,
        icon: image
      });
      // CREO EL EVENTO AL HACER UN CLICK EN EL MARCADOR PARA QUE LLAME A LA FUNCION "eventClick"
      google.maps.event.addListener(marker, 'click', eventClick)
    }
    // CREO LA FUNCION LLAMADA AL HACER CLICK EN UN MARCADOR
    function eventClick() {
      alert("ID: " + this.id);
    }

  }

});
