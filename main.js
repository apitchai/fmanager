$(document).ready(function() {
	$("form#frmUpdload").submit(function() {
		//Image validation start
		var file_name=$('.txtFile').val();
		var index_dot=file_name.lastIndexOf(".")+1;
		var ext=file_name.substr(index_dot);
		if(file_name=='') {
			alert('Please upload image');
		}
		else if(!(ext=='png' || ext=='jpg' || ext=='jpeg')) {
			alert('Please upload jpg or png image only');
		}	//Image validation end
		else {
			//formdata object to send file upload data
			var formData = new FormData();
			formData.append('fileupload',$( '.txtFile' )[0].files[0], file_name);
			
			$.ajax({
				url: 'upload.php',
				 data: formData,
				 processData: false,
				 contentType: false,
				 type: 'POST',
				 success: function(data){
					alert(data);
				 }
			});
		}
		$('#frmUpdload')[0].reset();
		return false;
	});
});
