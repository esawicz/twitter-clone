$(document).ready(function() {
  $('#tweet-controls').hide();
  tweetActionsInit();
  statsReply();
  $('.time').timeago();
  


  $('.tweet-compose').focus(function() {
  	$(this).css({height: '5em'});
  	$('#tweet-controls').show();

  	$(this).on('keyup', function() {
		var maxCharCount = 140;
		var tweetInput = $(this).val();
		var tweetInputLength = tweetInput.length;

		maxCharCount = maxCharCount - tweetInputLength;
  		
  		$('#char-count').text(maxCharCount);

  		if(maxCharCount <= 10) {
  			$('#char-count').css({"color": "red"});
  		}

  		if(maxCharCount < 0) {
  			$('.button').prop('disabled', true);
  		}

  		else {
  			//$('#char-count').css({'color': 'black'});
  			$('.button').prop('disabled', false);

  		}
 	 });
  })
	$('#tweet-submit').on('click', function() {
		var currentTime = $.timeago(new Date());
		var newTweet = $('.tweet-compose').val();
		var num = 0;

		$('#stream').prepend(function() {
			return '<div class="tweet">' + 
					'<div class="content">' + 
							'<a data-toggle="tooltip" title = "Ellen"><img class="avatar" src="img/alagoon.jpg" /></a>' +
							'<strong class="fullname">' + 'Your Name ' + '</strong>' +
							'<span class="username">' + '@your Name' + '</span>' +
							'<p class="tweet-text">' + newTweet + '</p>' +
								'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
							'</div>' +
							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">'+ num + '</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">' + num + '</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +

										
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +
								'<div class="time">' +
									currentTime +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>'

				})

		tweetActionsInit();
		statsReply();
  	});

	

	function tweetActionsInit() {
		$('.tweet-actions').hide();

		$('.tweet').hover(function() {
			$(this).find('.tweet-actions').show();
		}, function() {
			$(this).find('.tweet-actions').hide();
		});
	}

	function statsReply() {
		$('.stats').hide();
		$('.reply').hide();
		$('.tweet').off('click')
		$('.tweet').on('click', function() {
			$(this).find('.stats').toggle();
			$(this).find('.reply').toggle();

		});
	}
	$(document).ready(function() {
		$('[data-toggle="tooltip]').tooltip();
	})
});
