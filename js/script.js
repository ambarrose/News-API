console.log('script');

$.ajax({
  url : 'https://newsapi.org/v2/top-headlines?category=general&from=2021-08-04&to=2021-08-04&apiKey=98b960c227f34ff1bb26af1ac0b7b058',
  data: 'json',
  type: 'GET',
  success: function(data){
    console.log(data);
    document.getElementById('objects').innerHTML = '';
    var i;
    for (i=0;i<data.articles.length;i++){
      var a= data.articles[i];
      console.log('working');

        document.getElementById('objects').innerHTML +=
        '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
          '<div class="card mx-1 my-1 bg-dark" style="border: 2px solid #47a3d0;" >' +
            '<div class="card-body text-light">'+
              '<h5 class="card-title text-light mb-3">'+ a.source.name+'</h5>'+
              '<img style="width:100%; height:auto" src ="' + a.urlToImage + '">'+
              '<p class="card-text text-light mt-3">'+
                a.title + '<br>'+ '<hr>' +
                a.description + '<br><br>'+
                a.content + '<br>'+

            '</div>'+
          '</div>'+
        '</div>';
    }
    // for loop
  },
  error : function(){
    console.log('error');
  }
});
// put in click function
$('#click').click(function () {
  console.log('clicked');
  var country = document.getElementById('newsSelect1').value;
  var category = document.getElementById('newsSelect2').value;
  console.log(country);
    // Calling the function
    updateNews(country);
    updateNews2(category);
});
	function updateNews (country)  {

    $.ajax({
      url : 'https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=98b960c227f34ff1bb26af1ac0b7b058',
      data: 'json',
      type: 'GET',
      success: function(data){
        console.log(data);
        document.getElementById('objects').innerHTML = '';
        var i;
        for (i=0;i<data.articles.length;i++){
          var a= data.articles[i];
          console.log('country1');

            document.getElementById('objects').innerHTML +=
            '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
              '<div class="card mx-1 my-1 bg-dark" style="border: 2px solid #47a3d0;" >' +
                '<div class="card-body text-light">'+
                  '<h5 class="card-title text-light mb-3">'+ a.source.name+'</h5>'+
                  '<img style="width:100%; height:auto" src ="' + a.urlToImage + '">'+
                  '<p class="card-text text-light mt-3">'+
                    a.title + '<br>'+ '<hr>' +
                    a.description + '<br><br>'+
                    a.content + '<br>'+

                '</div>'+
              '</div>'+
            '</div>';
        }
        // for loop
      },
      error : function(){
        console.log('error');
      }
    });

  }
  // country filter ends

  function updateNews2 (category)  {

    $.ajax({
      url : 'https://newsapi.org/v2/top-headlines?category='+category+'&apiKey=98b960c227f34ff1bb26af1ac0b7b058',
      data: 'json',
      type: 'GET',
      success: function(data){
        console.log(data);
        document.getElementById('objects').innerHTML = '';
        var i;
        for (i=0;i<data.articles.length;i++){
          var a= data.articles[i];
          console.log('working');

            document.getElementById('objects').innerHTML +=
            '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
              '<div class="card mx-1 my-1 bg-dark" style="border: 2px solid #47a3d0;" >' +
                '<div class="card-body text-light">'+
                  '<h5 class="card-title text-light mb-3">'+ a.source.name+'</h5>'+
                  '<img style="width:100%; height:auto" src ="' + a.urlToImage + '">'+
                  '<p class="card-text text-light mt-3">'+
                    a.title + '<br>'+ '<hr>' +
                    a.description + '<br><br>'+
                    a.content + '<br>'+

                '</div>'+
              '</div>'+
            '</div>';
        }
        // for loop
      },
      error : function(){
        console.log('error');
      }
    });

  }
