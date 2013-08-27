;(function($){

  var userName = 'WellingGuzman',
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

  $.getJSON(repoURL, function (data) {
    var repos = data;

    $('#repos-count').text(repos.length);

    $.each(repos, function(index, repo){
      showRepo(repo);
    });

  });

  $.getJSON(gistsURL, function (data) {
    var gists = data;
    if ( gists )
      $('#gists-count').text(gists.length);
  });

})(jQuery);