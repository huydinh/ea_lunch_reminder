function checkLunchTime() {
	var date = new Date;
	hours = date.getHours();
	minutes = date.getMinutes();
  if(hours == 11 && (minutes > 5 && minutes < 45)) {
		alert("Have your ordered lunch!");

		sleepLunchCheck();
	}else {
		setTimeout(checkLunchTime, 10 * 60 * 1000);
	}
}

function sleepLunchCheck() {
	setTimeout(function() {
		checkLunchTime();
	}, 23 * 60 * 60 * 1000);
}

welcomeMessage();
checkLunchTime();


chrome.windows.onCreated.addListener(function() {
	checkLunchTime();
})

function welcomeMessage() {
	alert('Have set up lunch time alrm!');
}

