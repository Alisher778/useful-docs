$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip({delay: { "show": 50, "hide": 100 }});
	
	var totalFee = 0;
	$('.calculate').on('click', function(){
		
		var fee = $('.fee');

		fee.map(function(feeList) {
			var inputVal = parseInt(fee.eq(feeList).val(), 10);
			if(fee.eq(feeList).val() === ""){
				inputVal = 0;
			}
			totalFee+= inputVal
			console.log(totalFee)
			
		});
		$('.total >input').val(totalFee)
	});

	$('header').sticky({topSpacing:0, zIndex: 1000})
    $('.datepicker').pickadate()


	$('div.done').click(function(){
			$('#mceu_15, div.done').hide();
			$('div.edit').show().addClass('hide-on-print');
			$('#textarea-result').html(tinyMCE.activeEditor.getContent());
			
		});

		$('div.edit').click(function(){
			$('#mceu_15').show();
			$('div.done').show();
			$('div.edit').hide();
		});

});