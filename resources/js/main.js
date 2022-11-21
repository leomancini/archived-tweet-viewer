const container = document.querySelector('.render-when-visible');
const tweets = document.querySelectorAll('.r-1re7ezh');

tweets.forEach((tweet) => {
	let tweetId = tweet.innerText.replace('ID', '');
	let tweetContainer = tweet.closest('.r-uvzvve');
	
	tweet.remove();

	if (window.tweetId) {
		if (window.tweetId.includes(',')) {
			container.classList.add('multipleTweets');

			tweetIdsToShow = window.tweetId.split(',');
			if (tweetIdsToShow.includes(tweetId)) {
				let tweetTimestamp = tweetContainer.querySelector('.Tweet-timestamp').innerText;
				document.title = `Tweets on ${tweetTimestamp}`;
			} else {
				tweetContainer.remove();
			}
		} else {
			container.classList.add('singleTweet');
			if (window.tweetId === tweetId) {
				let tweetTimestamp = tweetContainer.querySelector('.Tweet-timestamp').innerText;
				document.title = `Tweet on ${tweetTimestamp}`;
			} else {
				tweetContainer.remove();
			}
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