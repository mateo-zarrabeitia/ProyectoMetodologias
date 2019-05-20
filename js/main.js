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

	$("#cerrarForm").click(function(){
		$("#modalDenunciaForm").modal('hide');
		$("#modalCancelar").modal();
	});

	$("#mostrarForm").click(function(){
		$("#modalCancelar").modal('hide');
		$("#modalDenunciaForm").modal('show');
	});

});
