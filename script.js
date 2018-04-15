/* incercare de a obtine cursul bnr */

var cursURL = 'http://www.bnr.ro/nbrfxrates.xml';
var xmlData = $.parseXML( cursURL );
var $xml = $( xmlData );
var $eur = $xml.find('EUR');

console.log($eur);
