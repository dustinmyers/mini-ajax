$(document).ready(function(){

	var insertData = function (arr) {
		for (var i = 0; i < arr.length; i++) {
			$('#userInfo' + (i + 1)).html('<div>' +
				'User Info:' +
				'<li>' +
				'First name: ' + arr[i].first_name +
				'</li>' +
				'<li>' +
				'Last name: ' + arr[i].last_name +
				'</li>' +
				'<hr>' +
				'</div>'
			)
		};
	}


	$('#getUsers').click(function (){
		return $.ajax(
		{
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1',
			success: function (response) {
				console.log(response);
				insertData(response.data)
		},
			error: function(error){
        		console.log(error);
        }
		})

	});
	$('#addUser').click(function	(e) {
		e.preventDefault();
		var userName = $('#name').val();
		var userJob = $('#job').val();
		return $.ajax(
		{
			method: 'POST',
			url: 'http://reqr.es/api/users',
			data: {name: userName, job: userJob},
			success: function (response) {
          	console.log(response);
				$('#recentUser').html(
		          '<li>' +
		            'name: ' + response.name +
		          '</li>' +
		          '<li>' +
		            'job: ' + response.job +
		          '</li>' +
		          '<li>' +
		            'id: ' + response.id +
		          '</li>' +
		          '<li>' +
		            'created at: ' + response.createdAt +
		          '</li>'
				)
			}
		})
	})
});