require(['app/main', 'echarts', 'vue', 'xstream', 'fetch'], function (main, echarts, Vue, xstream) {

	const xs = xstream.Stream;

	const url = 'http://httpbin.org/delay/3?some=text'

	const fetchData = xs.fromPromise(fetch(url).then(resp => resp.json()))
		.map(data => ({
			data,
			loading: false
		}))
		.startWith({
			loading: true
		});

	fetchData.subscribe({
		next(data) {
			if (data.loading) {
				console.log('is loading');
			} else {
				console.log('loaded');
				let json = data.data
				console.log(json)
			}
		}
	});
});