$(document).ready(function(){
    $('#myform').on('submit', function(e){
        console.log('aa');
        e.preventDefault();
        var details = $('#myform').serialize();
        $.post('data.txt', details, function(data){
            $('#myform').html(data);
        })
    })
}
)