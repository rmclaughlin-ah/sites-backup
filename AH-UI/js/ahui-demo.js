jQuery(document).ready(function() {
$('.dk_container').addClass("form-test").tooltip({ title: 'Error!', placement: 'right', trigger: 'manual'}).tooltip('show');;
$('input[type="text"].form-test').tooltip({ title: 'Error!', placement: 'right', trigger: 'manual'}).tooltip('show');
$('input[type="radio"].form-test,input[type="checkbox"].form-test').tooltip({ title: 'Error!', placement: 'left', trigger: 'manual'}).tooltip('show');

$('.btn-danger').click(function() {
	$('.form-test').each(function() {
		var me = $(this);
		if (me.closest('p').hasClass("error")) {
			me.closest('p').removeClass("error");
		} else {
			me.closest('p').addClass("error");
		}
	});
});
});