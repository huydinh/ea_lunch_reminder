alert(1);
function checkLunchTime() {
	var date = new Date;
	hours = date.getHours();
	minutes = date.getMinutes();
  if(hours == 13 && (minutes > 0 && minutes < 45)) {
		alert("Have your ordered lunch!");

		sleepLunchCheck();
	}else {
		setTimeout(checkLunchTime, 10 * 60 * 1000);
	}
}

function sleepLunchCheck() {
	setTimeout(function() {
		checkLunchTime();
	}, 20 * 60 * 60 * 1000);
}

checkLunchTime();

chrome.tabs.onCreated.addListener(function(tab) {
	alert('tab');
});
