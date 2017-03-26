$('#movie-search-form').keyup(function(event) {
  event.preventDefault();
  // this function fires on keyup. as you type in the searchbar, it fires searchIMDB function
  $('.result').hide(); // while we wait for the API to respond, we hide the last search result for that split second
  var userSearchQuery = this.query.value;
  if (userSearchQuery.length > 2){
    searchOMDB(userSearchQuery);
  }
});

function searchOMDB(query) {
  // this is the function that makes the request with jQuerys's getJSON
  $.getJSON('http://www.omdbapi.com/', {
    t: query, // this query comes from the argument passed in parens above, which
    plot: "short",
    r: 'json'
  }, function(omdbData) { //this function fires after the network request finishes.
    if (omdbData.Response == "True"){
      renderMovie(omdbData)
      console.log(omdbData);
    // Things worked! Show the movie data by calling the renderMovie function, pass in the omdbData variable
    } else {
      renderError();
      // render an error here.
      console.log(omdbData);
    }
  });
}

function renderMovie(data) {
  $('.result').show(); 
  $('#title').html(data.Title);
  $('#year').html(data.Year);
  $('#actors').html(data.Actors);
  $('#poster').attr('src', data.Poster);
  $('.error').hide();
  // this shows the div with class "result"
  // we aren't done here! we need some more code to show the data and the

}

function renderError() {
  $('.error').show();
}
