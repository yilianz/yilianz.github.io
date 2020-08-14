

/*
document.querySelector('nav a').addEventListener('click',
function(){
    alert("here");
    var content = this.textContent;
    var E = document.getElementsByTagName('aside');
    E.textContent = content;
   
});

*/

//update the side bar and main content
$('#about').show();

$('nav a').click(function(){
    var content= $(this).html();
    var links = $(this).attr('href');
    $('aside').fadeOut(400,function(){
        $('aside').html(content);
        $('aside').fadeIn(3000);
    });
      
     $('main > div').hide();
     $('main').show();
     $(links).show();
});

