var twitter_username = 'c4ptainFox';

$.ajax({
  url: "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=" + twitter_username,
  dataType: 'jsonp',
  crossDomain: true
}).done(function(data) {
  $("twitflw").text(data[0]['followers_count']);
});
