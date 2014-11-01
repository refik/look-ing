$(function() {
  $('.typeahead').typeahead({
    minLength: 3,
    highlight: true
  },
  {
    name: 'my-dataset',
    source: function(query, cb) {
        console.log(query);
        console.log(cb);
        cb([
            {value: 'kart bocu'},
            {value: 'yeni kart acma'},
            {value: 'baska banka karti borcu odeme'},
        ]);
    }
  });

  $("#content_in").keyup(function(){
    icaughtit = $("#content_in").val();
    showSmartBar(icaughtit);
  });

  function showSmartBar(value) {
    $('#smart-bar').parent().parent().show();
    $('#smart-bar').focus();
    $('#smart-bar').val(value);
    $("#content_div").remove()
  }
});


