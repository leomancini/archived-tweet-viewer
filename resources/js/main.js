const tweets = document.querySelectorAll('.r-1re7ezh');

tweets.forEach((tweet) => {
	let tweetId = tweet.innerText.replace('ID', '');
	let tweetContainer = tweet.closest('.r-uvzvve');
	
	tweet.remove();

	if (window.tweetId) {
		if (tweetId === window.tweetId) {
			tweetTimestamp = tweetContainer.querySelector('.Tweet-timestamp').innerText;
			console.log(tweetTimestamp);
			document.title = `Tweet on ${tweetTimestamp}`;
		} else {
			tweetContainer.remove();
		}
	} else {
		document.querySelector('body').remove();
	}
});

const links = document.querySelectorAll('a');

links.forEach((link) => {
	link.removeAttribute('rel');
	link.removeAttribute('target');
	link.removeAttribute('href');

	if (link.innerText.includes('https://t.co')) {
		link.remove();
	}

	if (link.innerText == 'View on Twitter') {
		link.remove();
	}
});