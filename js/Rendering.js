$(function(){
	'use strict;'
	var html = $('#it_test').html();

	var questions = JSON.parse(localStorage.getItem('test'));
	console.log(questions);
	var content = tmpl(html, {
		data: questions
	});

	$('body').append(content);
});