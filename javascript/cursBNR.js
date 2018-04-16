/* incercare de a obtine cursul bnr */

//var cursURL = 'http://www.bnr.ro/nbrfxrates.xml';


//var xmlData = $.parseXML(cursURL);
//console.log(curs);

var x;
$.get( 'http://www.bnr.ro/nbrfxrates.xml', function(data){
    x = data;
    console.log(x); // will give you the contents.
});

//var xmlData = $.parseXML( cursURL );
//var $xml = $( xmlData );
//var $eur = $xml.find('EUR');

//console.log($eur);
