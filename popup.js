
document.addEventListener('onload', function() {
	alert('1');
});

document.addEventListener('DOMContentLoaded', function () {
	var date = new Date;
	hour = date.getHours();
	minutes = date.getMinutes();
	if (hour == 17) {
		alert('Have you ordered lunch?');
	}
});


function initExtension() {
	setTimeout(function() {
		alert('init');
	}, 5000);
}

