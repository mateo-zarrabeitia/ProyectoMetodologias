$(document).ready(function() {
  "use strict"
  //CREO EL EVENTO AL PULSAR EL BOTON CON LA CLASE DENUNCIA QUE LLAME A LA FUNCION GEOLOCALIZAR
  $(".denuncia").on("click", function (event) {
    Geolocalizar('Denuncia');
    document.getElementById("formDenuncia").reset();
    $('#formDenuncia').on('submit', function (event) {
      event.preventDefault();
      $("#video").upload('guardarArchivo',
      {
        nombre_archivo: $("#nombre_imangen").val()
      },
      function(respuesta) {
        $(".dirVideo").val(respuesta);
        ///
        var formData = new FormData(document.getElementById("formDenuncia"));
        formData.append("dato", "valor");
        $.ajax({
          url: "guardarDenuncia",
          type: "post",
          dataType: "html",
          data: formData,
          cache: false,
          contentType: false,
          processData: false
        })
        .done(function(res){
          if (res == 1) {
            $("#modalDenunciaForm").modal("hide");
            $("#modalMensaje").modal();
          } else {
            // FALTA MENSAJE DE ERROR
          }
          $("#barra_de_progreso").attr('style', "width: 0%");
        });
      }, function(progreso, valor) {
        $("#barra_de_progreso").attr('style', "width:"+valor+"%");
      });

    });
  });

  $(".reporte").on("click", function (event) {
    Geolocalizar('Reporte');
    document.getElementById("formReporte").reset();
    $('#formReporte').on('submit', function (event) {
      event.preventDefault();
      $("#imagen").upload('guardarArchivo',
      {
        nombre_archivo: $("#nombre_archivo").val()
      },
      function(respuesta) {
        $("#dirFoto").val(respuesta);
        //
        var formData = new FormData(document.getElementById("formReporte"));
        formData.append("dato", "valor");
        $.ajax({
          url: "guardarReporte",
          type: "post",
          dataType: "html",
          data: formData,
          cache: false,
          contentType: false,
          processData: false
        })
        .done(function(res){
          console.log(res);
          if (res) {
            $("#modalReporteForm").modal("hide");
            $("#idReporte").html('<label data-error="wrong" data-success="right" for="form8"><p>Su numero de reporte es:'+res+'</p></label>');
            $("#modalMensaje").modal();
          } else {
            // FALTA MENSAJE DE ERROR
          }
        });
      }, function(progreso, valor) {
      });

    });
  });

  let map, infoWindow , marker;
  // DEFINO LA FUNCION GEOLOCALIZAR QUE CONSUME DE LA API DE GOOGLE MAPS PARA OBTENER LAS COORDENADAS Y CREAR EL POINT EN EL MAPA
  function Geolocalizar(id) {
    map = new google.maps.Map(document.getElementById("mapa"+id), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // INTENTA GEOLOCALIZAR SI EL NAVEGADOR LO PERMITE
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://us1.locationiq.com/v1/reverse.php?key=9bc950c6f7cc34&lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&format=json",
          "method": "GET"
        }

        $.ajax(settings).done(function (response) {
          $("#dir"+id).val(response.address.road+" "+response.address.house_number);
        });
        //GUARDO EN LOS INPUT DEL FORM LA LAT Y LNG
        document.getElementById("inputLat"+id).value = pos.lat;
        document.getElementById("inputLng"+id).value = pos.lng;
        infoWindow.setPosition(pos);
        infoWindow.setContent('Estoy Aqui');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        //LLAMO A LA FUNCION CON LOS RESULTADOS
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // SI EL NAVEGADOR NO SOPORTA LA GEOLOCALIZACION, MUESTRO EL MAPA CON EL MENSAJE
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: El servicio de geolocalización falló.' :
      'Error: Tu navegador no soporta la geolocalización.');
      infoWindow.open(map);
    }

  });
