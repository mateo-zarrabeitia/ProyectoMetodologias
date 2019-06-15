$(document).ready(function() {

	  "use strict"


	$('.modal').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
    // BS adds some padding-right to acomodate the scrollbar at right
    $('body').removeAttr('style');
  })

  $(".modal [data-toggle='modal']").click(function(){
    $(this).closest(".modal").modal('hide');
  });

	$("#borrarForm").click(function(){
			document.getElementById("formDenuncia").reset();
	});

	$("#cerrarDenuncia").click(function(){
		$("#modalDenunciaForm").modal('hide');
		$("#mostrarDenuncia").show();
		$("#mostrarReporte").hide();
		$("#modalCancelar").modal();
	});

	$("#cerrarReporte").click(function(){
		$("#modalReporteForm").modal('hide');
		$("#mostrarDenuncia").hide();
		$("#mostrarReporte").show();
		$("#modalCancelar").modal();
	});

	$("#mostrarDenuncia").click(function(){
		$("#modalCancelar").modal('hide');
		$("#modalDenunciaForm").modal('show');
	});

	$("#mostrarReporte").click(function(){
		$("#modalCancelar").modal('hide');
		$("#modalReporteForm").modal('show');
	});

});
