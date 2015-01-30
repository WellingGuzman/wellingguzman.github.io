;(function($){

  var userName = 'WellingGuzman',
      userURL = 'https://api.github.com/users/'+userName,
      repoURL = 'https://api.github.com/users/'+userName+'/repos?type=public',
      gistsURL = 'https://api.github.com/users/'+userName+'/gists?type=public';

  function showRepo( repo ) {
    var repos = $("#repositories");

    var item = '<li><a href="'+repo.html_url+'">';
        item+= '<span class="repo-name">' + repo.name + '</span>';
        if ( repo.language )
          item+= '<span class="repo-lang">' + repo.language + '</span>';
        item+= '<span class="repo-info">' + repo.description+'</span>';
        item+= '</a></ul>';

    repos.append( item );
  }
  
  $.getJSON(userURL, function (user) {
    if ( user )
      $('#header h1').text(user.name);
  });

  $.getJSON(repoURL, function (repos) {
    $('#repos-count').text(repos.length);

    $.each(repos, function(index, repo){
      showRepo(repo);
    });

  });

  $.getJSON(gistsURL, function (gists) {
    if ( gists )
      $('#gists-count').text(gists.length);
  });

})(jQuery);
