$(document).on("click", "a", function(){
    if( $(this).attr('href') == "/" ){
        window.location = "/?sk=h_chr";
    }
});