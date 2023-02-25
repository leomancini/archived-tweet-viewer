const page = document.querySelector('#page');
const container = document.querySelector('.render-when-visible');
const tweets = document.querySelectorAll('.r-1re7ezh');

let tweetTimestamps = [];

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
				tweetTimestamps.push(tweetTimestamp);
				let uniqueTweetTimestamps = [...new Set(tweetTimestamps)];

				if (uniqueTweetTimestamps.length === 1) {
					document.title = `Tweets on ${tweetTimestamp}`;
				} else {
					document.title = `Tweets on ${uniqueTweetTimestamps.join(' & ')}`;
				}
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
	if (link.dataset.replacement) {
		link.href = link.dataset.replacement;
		link.innerText = link.dataset.replacement;
	} else if (link.classList.contains('Tweet-photoGalleryCell') || link.classList.contains('Tweet-photoContainer')) {
		link.href = link.querySelector('img').src;
	} else {
		link.removeAttribute('rel');
		link.removeAttribute('target');
		link.removeAttribute('href');
		link.classList.add('not-allowed');

		if (link.innerText.includes('https://t.co')) {
			link.remove();
		}

		if (link.innerText == 'View on Twitter') {
			link.remove();
		}
	}
});

setTimeout(() => {
	page.classList.add('loaded');
}, 1000)