$(document).ready(function(){
    $('#myform').on('submit', function(e){
        e.preventDefault();
        var details = $('#myform').serialize();
        $.post('data.txt', details, function(data){
            $('#myform').html(data);
        })
    })
}
)