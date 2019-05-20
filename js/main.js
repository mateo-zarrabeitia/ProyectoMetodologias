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

});
