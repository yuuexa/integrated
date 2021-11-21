var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 2700,
	strokeWidth: 0.2,
	color: '#a22041',
	trailWidth: 0.2,
	trailColor: '#474a4d',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '35px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1.4rem',
			color: '#fffffc',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});

//アニメーションスタート
bar.animate(1.0, function () {
	$("#splash").delay(250).fadeOut(450);
});