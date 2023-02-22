

import { ziskejJSON2, ziskejJSONZkraceny, vytvorTabulku, debug } from './mainTree.js';
import { ziskejSQL } from './vratSQLScript.js';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

var jsondata;


app.get('/SQLTable/:name', function(req, res){

    var nazevTabulky;
    var nazvySloupcu;
    nazevTabulky = req.params.name;
});

//posila data pro vykresleni stromu
app.get('/vykresliStrom/:country', function(req, res) {

    var jsonArray;
    var country;

    country = req.params.country;


    if(country = "1"){
        jsonArray = [{"name":"Canada","topLevelDomain":[".ca"],"alpha2Code":"CA","alpha3Code":"CAN","callingCodes":["1"],"capital":"Ottawa","altSpellings":["CA"],"region":"Americas","subregion":"Northern America","population":36155487,"latlng":[60.0,-95.0],"demonym":"Canadian","area":9984670.0,"gini":32.6,"timezones":["UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:00","UTC-03:30"],"borders":["USA"],"nativeName":"Canada","numericCode":"124","currencies":[{"code":"CAD","name":"Canadian dollar","symbol":"$"}],"languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"},{"iso639_1":"fr","iso639_2":"fra","name":"French","nativeName":"français"}],"translations":{"de":"Kanada","es":"Canadá","fr":"Canada","ja":"カナダ","it":"Canada","br":"Canadá","pt":"Canadá","nl":"Canada","hr":"Kanada","fa":"کانادا"},"flag":"https://restcountries.eu/data/can.svg","regionalBlocs":[{"acronym":"NAFTA","name":"North American Free Trade Agreement","otherAcronyms":[],"otherNames":["Tratado de Libre Comercio de América del Norte","Accord de Libre-échange Nord-Américain"]}],"cioc":"CAN"}];   
    }
    if(country = "2"){
        jsonArray = [{"name":"Germany","topLevelDomain":[".de"],"alpha2Code":"DE","alpha3Code":"DEU","callingCodes":["49"],"capital":"Berlin","altSpellings":["DE","Federal Republic of Germany","Bundesrepublik Deutschland"],"region":"Europe","subregion":"Western Europe","population":81770900,"latlng":[51.0,9.0],"demonym":"German","area":357114.0,"gini":28.3,"timezones":["UTC+01:00"],"borders":["AUT","BEL","CZE","DNK","FRA","LUX","NLD","POL","CHE"],"nativeName":"Deutschland","numericCode":"276","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"de","iso639_2":"deu","name":"German","nativeName":"Deutsch"}],"translations":{"de":"Deutschland","es":"Alemania","fr":"Allemagne","ja":"ドイツ","it":"Germania","br":"Alemanha","pt":"Alemanha","nl":"Duitsland","hr":"Njemačka","fa":"آلمان"},"flag":"https://restcountries.eu/data/deu.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"GER"}];
    }    
    if(country = "3"){
        jsonArray = [{"name":"Sweden","topLevelDomain":[".se"],"alpha2Code":"SE","alpha3Code":"SWE","callingCodes":["46"],"capital":"Stockholm","altSpellings":["SE","Kingdom of Sweden","Konungariket Sverige"],"region":"Europe","subregion":"Northern Europe","population":9894888,"latlng":[62.0,15.0],"demonym":"Swedish","area":450295.0,"gini":25.0,"timezones":["UTC+01:00"],"borders":["FIN","NOR"],"nativeName":"Sverige","numericCode":"752","currencies":[{"code":"SEK","name":"Swedish krona","symbol":"kr"}],"languages":[{"iso639_1":"sv","iso639_2":"swe","name":"Swedish","nativeName":"svenska"}],"translations":{"de":"Schweden","es":"Suecia","fr":"Suède","ja":"スウェーデン","it":"Svezia","br":"Suécia","pt":"Suécia","nl":"Zweden","hr":"Švedska","fa":"سوئد"},"flag":"https://restcountries.eu/data/swe.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"SWE"}];
    } 
    if(country = "4"){
        jsonArray = [{"name":"Turkey","topLevelDomain":[".tr"],"alpha2Code":"TR","alpha3Code":"TUR","callingCodes":["90"],"capital":"Ankara","altSpellings":["TR","Turkiye","Republic of Turkey","Türkiye Cumhuriyeti"],"region":"Asia","subregion":"Western Asia","population":78741053,"latlng":[39.0,35.0],"demonym":"Turkish","area":783562.0,"gini":39.0,"timezones":["UTC+03:00"],"borders":["ARM","AZE","BGR","GEO","GRC","IRN","IRQ","SYR"],"nativeName":"Türkiye","numericCode":"792","currencies":[{"code":"TRY","name":"Turkish lira","symbol":null}],"languages":[{"iso639_1":"tr","iso639_2":"tur","name":"Turkish","nativeName":"Türkçe"}],"translations":{"de":"Türkei","es":"Turquía","fr":"Turquie","ja":"トルコ","it":"Turchia","br":"Turquia","pt":"Turquia","nl":"Turkije","hr":"Turska","fa":"ترکیه"},"flag":"https://restcountries.eu/data/tur.svg","regionalBlocs":[],"cioc":"TUR"}];
    } 
    if(country = "5"){
        jsonArray = [{"name":"Peru","topLevelDomain":[".pe"],"alpha2Code":"PE","alpha3Code":"PER","callingCodes":["51"],"capital":"Lima","altSpellings":["PE","Republic of Peru"," República del Perú"],"region":"Americas","subregion":"South America","population":31488700,"latlng":[-10.0,-76.0],"demonym":"Peruvian","area":1285216.0,"gini":48.1,"timezones":["UTC-05:00"],"borders":["BOL","BRA","CHL","COL","ECU"],"nativeName":"Perú","numericCode":"604","currencies":[{"code":"PEN","name":"Peruvian sol","symbol":"S/."}],"languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],"translations":{"de":"Peru","es":"Perú","fr":"Pérou","ja":"ペルー","it":"Perù","br":"Peru","pt":"Peru","nl":"Peru","hr":"Peru","fa":"پرو"},"flag":"https://restcountries.eu/data/per.svg","regionalBlocs":[{"acronym":"PA","name":"Pacific Alliance","otherAcronyms":[],"otherNames":["Alianza del Pacífico"]},{"acronym":"USAN","name":"Union of South American Nations","otherAcronyms":["UNASUR","UNASUL","UZAN"],"otherNames":["Unión de Naciones Suramericanas","União de Nações Sul-Americanas","Unie van Zuid-Amerikaanse Naties","South American Union"]}],"cioc":"PER"}];
    } 
    if(country = "6"){
        jsonArray = [{"name":"Mexico","topLevelDomain":[".mx"],"alpha2Code":"MX","alpha3Code":"MEX","callingCodes":["52"],"capital":"Mexico City","altSpellings":["MX","Mexicanos","United Mexican States","Estados Unidos Mexicanos"],"region":"Americas","subregion":"Central America","population":122273473,"latlng":[23.0,-102.0],"demonym":"Mexican","area":1964375.0,"gini":47.0,"timezones":["UTC-08:00","UTC-07:00","UTC-06:00"],"borders":["BLZ","GTM","USA"],"nativeName":"México","numericCode":"484","currencies":[{"code":"MXN","name":"Mexican peso","symbol":"$"}],"languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],"translations":{"de":"Mexiko","es":"México","fr":"Mexique","ja":"メキシコ","it":"Messico","br":"México","pt":"México","nl":"Mexico","hr":"Meksiko","fa":"مکزیک"},"flag":"https://restcountries.eu/data/mex.svg","regionalBlocs":[{"acronym":"PA","name":"Pacific Alliance","otherAcronyms":[],"otherNames":["Alianza del Pacífico"]},{"acronym":"NAFTA","name":"North American Free Trade Agreement","otherAcronyms":[],"otherNames":["Tratado de Libre Comercio de América del Norte","Accord de Libre-échange Nord-Américain"]}],"cioc":"MEX"}];
    }


    jsondata = ziskejJSON2(jsonArray);
    var SQLquery = ziskejSQL(jsondata);
    res.send({ jsondata: jsondata, SQLquery: SQLquery });

});


//posila data na konzoli
//pouze debug
app.get('/debug', function(req, res) {
    var dataDebug;

    dataDebug = debug(0);
    res.send({ dataDebug: dataDebug });

});


app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});

