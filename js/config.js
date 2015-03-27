// for navigator language
var lang = window.navigator.language;
// you can change the language
 var lang = 'fr';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Quebec,Canada',
    'units':'metric',
    'lang':lang
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

// compliments:
var morning = [
            'Bon matin, bel homme!',
            'Profites bien de ta journée!',
            'Bien dormi?'
        ];
        
var afternoon = [
            'Bonjour, mon beau!',
            'Tu paraît bien!',
            'Tu sembles en forme!'
        ];
       
var evening = [
            'Wow, tu es hot!',
            'Tu es beau!',
            'Bonne soirée, sexy!'
        ];
