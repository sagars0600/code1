$(document).ready(function(){
    $('#myModel').modal('show');
});

$(window).on('load',function(){
    setTimeout(function(){
        $('#myModel').modal('hide')
},3000);
});

