// Data-module.js

var jsondata;

jsondata = [
    { "id": "2", "parent": "#", "text": "???" },
     { "id": "3", "parent": "2", "text": " Default4" },
     { "id": "4", "parent": "3", "text": " Building" },
     { "id": "5", "parent": "4", "text": " 1NP" },
     { "id": "6", "parent": "5", "text": " 1.01" },
     { "id": "7", "parent": "6", "text": " IfcBuildingElementProxy" },
     { "id": "8", "parent": "6", "text": " IfcFlowFitting" },
     { "id": "9", "parent": "6", "text": " IfcFlowTerminal" },
     { "id": "10", "parent": "6", "text": " IfcFurnishingElement" },
     { "id": "11", "parent": "10", "text": " di5_Satni_skrin" },
     { "id": "12", "parent": "11", "text": " di5_Satni_skrin" },
     { "id": "13", "parent": "12", "text": " 3242602" },
     { "id": "14", "parent": "5", "text": " 1.02" },
     { "id": "15", "parent": "14", "text": " IfcBuildingElementProxy" },
     { "id": "16", "parent": "15", "text": " Kování - rozetové1" },
     { "id": "17", "parent": "15", "text": " MEP_odpad_zástupce" },
     { "id": "18", "parent": "15", "text": " Radiator-Armat-Plus-600" },
     { "id": "19", "parent": "18", "text": " 50" },
     { "id": "20", "parent": "19", "text": " 2804653" },
     { "id": "21", "parent": "19", "text": " 2804767" },
     { "id": "22", "parent": "15", "text": " Vypínač jednopólový" },
     { "id": "23", "parent": "15", "text": " Zásuvka jednoduchá" },
     { "id": "24", "parent": "14", "text": " IfcFlowFitting" },
     { "id": "25", "parent": "14", "text": " IfcFlowTerminal" },
     { "id": "26", "parent": "25", "text": " Kuchyně - dřez - 1" },
     { "id": "27", "parent": "26", "text": " Rozměr 577x532x221" },
     { "id": "28", "parent": "27", "text": " 2801486" },
     { "id": "29", "parent": "25", "text": " Stropní svítidlo na závěsu" },
     { "id": "30", "parent": "25", "text": " VE_Air Terminal_Diffuser_MEPcontent_Barcol-Air_Plenumbox Round_VFB" },
     { "id": "31", "parent": "14", "text": " IfcFurnishingElement" },
     { "id": "32", "parent": "31", "text": " di5_Satni_skrin" },
     { "id": "33", "parent": "32", "text": " di5_Satni_skrin" },
     { "id": "34", "parent": "33", "text": " 3243150" },
     { "id": "35", "parent": "33", "text": " 3243522" },
     { "id": "36", "parent": "31", "text": " di5_Sedacka" },
     { "id": "37", "parent": "36", "text": " di5_Sedacka" },
     { "id": "38", "parent": "37", "text": " 3246504" },
     { "id": "39", "parent": "37", "text": " 3248499" },
     { "id": "40", "parent": "31", "text": " di5_Stul_jidelni a 4 zidle" },
     { "id": "41", "parent": "40", "text": " di5_Stul_jidelni a 4 zidle" },
     { "id": "42", "parent": "41", "text": " 3245657" },
     { "id": "43", "parent": "31", "text": " di5_Stul_konferencni" },
     { "id": "44", "parent": "43", "text": " di5_Stul_konferencni" },
     { "id": "45", "parent": "44", "text": " 3247358" },
     { "id": "46", "parent": "31", "text": " Furniture 1" },
     { "id": "47", "parent": "46", "text": " Furniture 1" },
     { "id": "48", "parent": "47", "text": " 2808572" },
     { "id": "49", "parent": "5", "text": " 1.03" },
     { "id": "50", "parent": "5", "text": " 1.04" },
     { "id": "51", "parent": "50", "text": " IfcBuildingElementProxy" },
     { "id": "52", "parent": "51", "text": " Kování - rozetové1" },
     { "id": "53", "parent": "51", "text": " Radiator-Armat-Plus-600" },
     { "id": "54", "parent": "53", "text": " 50" },
     { "id": "55", "parent": "54", "text": " 2804266" },
     { "id": "56", "parent": "50", "text": " IfcFlowFitting" },
     { "id": "57", "parent": "50", "text": " IfcFlowMovingDevice" },
     { "id": "58", "parent": "50", "text": " IfcFurnishingElement" },
     { "id": "59", "parent": "58", "text": " di5_postel_dvouluzko" },
     { "id": "60", "parent": "59", "text": " di5_postel_dvouluzko" },
     { "id": "61", "parent": "60", "text": " 3239819" },
     { "id": "62", "parent": "58", "text": " di5_Satni_skrin" },
     { "id": "63", "parent": "62", "text": " di5_Satni_skrin" },
     { "id": "64", "parent": "63", "text": " 3238637" },
     { "id": "65", "parent": "63", "text": " 3239026" },
     { "id": "66", "parent": "5", "text": " 1.05" },
     { "id": "67", "parent": "66", "text": " IfcBuildingElementProxy" },
     { "id": "68", "parent": "67", "text": " Kování - rozetové1" },
     { "id": "69", "parent": "67", "text": " Radiator-Armat-Plus-600-bez hostitele" },
     { "id": "70", "parent": "69", "text": " Radiator-Armat-Plus-600-bez hostitele" },
     { "id": "71", "parent": "70", "text": " 2807778" },
     { "id": "72", "parent": "70", "text": " 2808146" },
     { "id": "73", "parent": "66", "text": " IfcFlowFitting" },
     { "id": "74", "parent": "66", "text": " IfcFlowMovingDevice" },
     { "id": "75", "parent": "66", "text": " IfcFurnishingElement" },
     { "id": "76", "parent": "75", "text": " di5_postel_jednoluzko" },
     { "id": "77", "parent": "76", "text": " di5_postel_jednoluzko" },
     { "id": "78", "parent": "77", "text": " 3249381" },
     { "id": "79", "parent": "75", "text": " di5_Satni_skrin" },
     { "id": "80", "parent": "79", "text": " di5_Satni_skrin" },
     { "id": "81", "parent": "80", "text": " 3242532" },
     { "id": "82", "parent": "75", "text": " di5_Stul_pracovni_s_zidli" },
     { "id": "83", "parent": "82", "text": " di5_Stul_pracovni_s_zidli" },
     { "id": "84", "parent": "83", "text": " 3242323" },
     { "id": "85", "parent": "5", "text": " 1.06" },
     { "id": "86", "parent": "5", "text": " 1.07" },
     { "id": "87", "parent": "5", "text": " 1.08" },
     { "id": "88", "parent": "5", "text": " No IfcSpace" },
     { "id": "89", "parent": "88", "text": " IfcBuildingElementProxy" },
     { "id": "90", "parent": "89", "text": " M_Exhaust Diffuser - Hosted" },
     { "id": "91", "parent": "90", "text": " Angle Filter - 700 L/s" },
     { "id": "92", "parent": "91", "text": " 2670831" },
     { "id": "93", "parent": "89", "text": " S4R_Barcol Air_BK rond FR-90" },
     { "id": "94", "parent": "89", "text": " Vypínač jednopólový" },
     { "id": "95", "parent": "89", "text": " Zásuvka jednoduchá" },
     { "id": "96", "parent": "88", "text": " IfcCovering" },
     { "id": "97", "parent": "96", "text": " No family" },
     { "id": "98", "parent": "96", "text": " Vícevrstvý strop" },
     { "id": "99", "parent": "98", "text": " H02 SDK podhled" },
     { "id": "100", "parent": "99", "text": " 3169483" },
     { "id": "101", "parent": "99", "text": " 3180983" },
     { "id": "102", "parent": "98", "text": " H03 SDKi podhled" },
     { "id": "103", "parent": "102", "text": " 3139197" },
     { "id": "104", "parent": "88", "text": " IfcDoor" },
     { "id": "105", "parent": "104", "text": " Jednokřídlé1" },
     { "id": "106", "parent": "105", "text": " D01 800x2000_Obložka" },
     { "id": "107", "parent": "106", "text": " 2762645" },
     { "id": "108", "parent": "106", "text": " 2762647" },
     { "id": "109", "parent": "105", "text": " D03 700x2000_Obložka" },
     { "id": "110", "parent": "105", "text": " D04 700x2000_Obložka" },
     { "id": "111", "parent": "110", "text": " 2762649" },
     { "id": "112", "parent": "105", "text": " D05 700x2000_Obložka" },
     { "id": "113", "parent": "112", "text": " 2762653" },
     { "id": "114", "parent": "105", "text": " D06 800x2000_Obložka" },
     { "id": "115", "parent": "88", "text": " IfcFlowController" },
     { "id": "116", "parent": "88", "text": " IfcFlowFitting" },
     { "id": "117", "parent": "88", "text": " IfcFlowSegment" },
     { "id": "118", "parent": "88", "text": " IfcFlowTerminal" },
     { "id": "119", "parent": "88", "text": " IfcFurnishingElement" },
     { "id": "120", "parent": "119", "text": " di5_Satni_skrin" },
     { "id": "121", "parent": "120", "text": " di5_Satni_skrin" },
     { "id": "122", "parent": "121", "text": " 3242937" },
     { "id": "123", "parent": "88", "text": " IfcRailing" },
     { "id": "124", "parent": "123", "text": " Zábradlí" },
     { "id": "125", "parent": "124", "text": " Zábradlí lodžie 900 mm" },
     { "id": "126", "parent": "125", "text": " 2762728" },
     { "id": "127", "parent": "125", "text": " 2762732" },
     { "id": "128", "parent": "88", "text": " IfcSlab" },
     { "id": "129", "parent": "128", "text": " Podlaha" },
     { "id": "130", "parent": "129", "text": " P03 Dlažba koupelny" },
     { "id": "131", "parent": "130", "text": " 3139366" },
     { "id": "132", "parent": "130", "text": " 3139396" },
     { "id": "133", "parent": "129", "text": " P04 Dřevěné lamely byt" },
     { "id": "134", "parent": "133", "text": " 3069919" },
     { "id": "135", "parent": "133", "text": " 3069952" },
     { "id": "136", "parent": "133", "text": " 3139345" },
     { "id": "137", "parent": "129", "text": " P05 Dlažba byt" },
     { "id": "138", "parent": "137", "text": " 3139292" },
     { "id": "139", "parent": "129", "text": " P06 Epoxidová stěrka" },
     { "id": "140", "parent": "139", "text": " 3139237" },
     { "id": "141", "parent": "88", "text": " IfcWallStandardCase" },
     { "id": "142", "parent": "141", "text": " Základní stěna" },
     { "id": "143", "parent": "142", "text": " pk04 Keramický obklad" },
     { "id": "144", "parent": "143", "text": " 2762844" },
     { "id": "145", "parent": "143", "text": " 2762845" },
     { "id": "146", "parent": "143", "text": " 2762847" },
     { "id": "147", "parent": "143", "text": " 2762848" },
     { "id": "148", "parent": "143", "text": " 2762849" },
     { "id": "149", "parent": "88", "text": " IfcWindow" },
     { "id": "150", "parent": "149", "text": " Dvířka MEIBES" },
     { "id": "151", "parent": "149", "text": " Francouzské okno dvojkřídlé" },
     { "id": "152", "parent": "151", "text": " L27 1700 x 2340 (800/900) P" },
     { "id": "153", "parent": "151", "text": " L34 2250 x 2340 (800/1450) L" },
     { "id": "154", "parent": "153", "text": " 2762796" },
     { "id": "155", "parent": "149", "text": " Francouzské okno jednokřídlé" },
     { "id": "156", "parent": "149", "text": " Okno jednokřídlé s bočním světlíkem a nadsvětlíkem1" },
     { "id": "157", "parent": "156", "text": " L01 2000 x 1500" },
     { "id": "158", "parent": "157", "text": " 2762738" },
     { "id": "159", "parent": "157", "text": " 2762740" },
     { "id": "160", "parent": "4", "text": " 1NP_S" },
     { "id": "161", "parent": "160", "text": " No IfcSpace" },
     { "id": "162", "parent": "161", "text": " IfcCovering" },
     { "id": "163", "parent": "161", "text": " IfcFlowFitting" },
     { "id": "164", "parent": "161", "text": " IfcFlowSegment" },
     { "id": "165", "parent": "161", "text": " IfcSlab" },
     { "id": "166", "parent": "165", "text": " Podlaha" },
     { "id": "167", "parent": "166", "text": " S05 Lodžie" },
     { "id": "168", "parent": "167", "text": " 2762808" },
     { "id": "169", "parent": "167", "text": " 2762819" },
     { "id": "170", "parent": "161", "text": " IfcWall" },
     { "id": "171", "parent": "170", "text": " Základní stěna" },
     { "id": "172", "parent": "171", "text": " OP01Š Obvodový plášť - kontaktní zateplovací systém, zdivo 250mm" },
     { "id": "173", "parent": "172", "text": " 2762642" },
     { "id": "174", "parent": "172", "text": " 2762658" },
     { "id": "175", "parent": "171", "text": " OP12Š Obvodový plášť - kontaktní zateplovací systém, zdivo 120mm" },
     { "id": "176", "parent": "175", "text": " 2762659" },
     { "id": "177", "parent": "175", "text": " 2762736" },
     { "id": "178", "parent": "171", "text": " W02 Vnitřní nenosná stěna 120mm" },
     { "id": "179", "parent": "178", "text": " 2762828" },
     { "id": "180", "parent": "161", "text": " IfcWallStandardCase" },
     { "id": "181", "parent": "180", "text": " Základní stěna" },
     { "id": "182", "parent": "181", "text": " OP01 Obvodový plášť - kontaktní zateplovací systém, zdivo 250mm" },
     { "id": "183", "parent": "182", "text": " 2762643" },
     { "id": "184", "parent": "182", "text": " 2762657" },
     { "id": "185", "parent": "181", "text": " pk02 SDK předstěna 150mm" },
     { "id": "186", "parent": "185", "text": " 2762830" },
     { "id": "187", "parent": "181", "text": " pk11 SDK předstěna 100mm" },
     { "id": "188", "parent": "181", "text": " W02 Vnitřní nenosná stěna 120mm" },
     { "id": "189", "parent": "188", "text": " 2762636" },
     { "id": "190", "parent": "188", "text": " 2762638" },
     { "id": "191", "parent": "188", "text": " 2762639" },
     { "id": "192", "parent": "188", "text": " 2762737" },
     { "id": "193", "parent": "188", "text": " 2762829" },
     { "id": "194", "parent": "181", "text": " W02j Vnitřní nenosná stěna 120mm" },
     { "id": "195", "parent": "194", "text": " 2762634" },
     { "id": "196", "parent": "194", "text": " 2762637" },
     { "id": "197", "parent": "194", "text": " 2762640" },
     { "id": "198", "parent": "181", "text": " W08j Vnitřní nenosná stěna 70mm" },
     { "id": "199", "parent": "181", "text": " W23 Vnitřní nenosná stěna 190mm" },
     { "id": "200", "parent": "199", "text": " 2762635" },
     { "id": "201", "parent": "181", "text": " Z01 Zateplení stěny 120mm" },
     { "id": "202", "parent": "201", "text": " 2762793" },
     { "id": "203", "parent": "201", "text": " 2762794" },
     { "id": "204", "parent": "181", "text": " Z01Š Zateplení stěny 120mm - šedá omítka" },
     { "id": "205", "parent": "204", "text": " 2762734" },
     { "id": "206", "parent": "204", "text": " 2762735" },
     { "id": "207", "parent": "181", "text": " Z02 Nos na lodžiích" },
     { "id": "208", "parent": "207", "text": " 2762725" },
     { "id": "209", "parent": "207", "text": " 2762795" },
     { "id": "210", "parent": "4", "text": " -1PP" },
];

/*
export const ziskejJSON2 = ((r) =>  {
    return jsondata;
});

*/


var jsonArray2 = 
{
    "json_data": {
                "data": "Hello World"
                },
    "plugins": ["themes", "json_data", "crrm"]
}

var jsonArray3 = 
{
    "json_data": {
        "data": [
            {
            "data": "Hello",
            "attr": {
                "id": "root.id"
            },
            "children": [{
                "data": "Hello World",
                "attr": {
                    "id": "node_1"
                },
                "children": []}
                ]},
            ]
    },
    "plugins": ["themes", "json_data", "crrm"]
}


var jsonArrayB = 
{
    "json_data": {
        "data": [
            {
            "data": "Hello",
            "attr": {
                "id": "node_1",
                "id2": "node_1"
                },
                "children": [{
                    "data": "Hello World",
                    "attr": {
                        "id1": "node_2",
                        "id2": "node_2",
                        "id3": "node_2"
                    },
                    "children": []}
                ]},
            ]
    },
    "plugins": ["themes", "json_data", "crrm"]
}


var jsonArrayC = 
{
    "json_data": {
        "data": [
            {
            "data": "Hello",
            "attr": {
                "id": "node_1",
                "id2": "node_1"
            },
            "children": [{
                "data": "Hello World",
                "attr": {
                    "id1": "node_2",
                    "id2": "node_2",
                    "id3": "node_2"
                },
                "children": []}
                ]
            },
            ]
    },
    "plugins": ["themes", "json_data", "crrm"]
}


var jsonArray_ = 
{
    "json_data": {
        "data": [
            {
            "data": "Hello",
            "attr": {
                "id": "node_1",
                "id2": "node_1"
            },
            "children": [{
                "attrQ": {
                    "id1": "node_2",
                    "id2": "node_2",
                    "id3": "node_2"
                },
                "data": "Hello World",
                "attr": {
                    "id1": "node_2",
                    "id2": "node_2",
                    "id3": "node_2"
                },
                "children": []}
                ]
            },
            ]
    },
    "plugins": ["themes", "json_data", "crrm"]
}


var jsonArray_a = 

[
    {
        "name": "Canada",
        "topLevelDomain": [
            ".ca"
        ],
        "alpha2Code": "CA",
        "alpha3Code": "CAN",
        "callingCodes": [
            "1"
        ],
        "capital": "Ottawa",
        "altSpellings": [
            "CA"
        ],
        "region": "Americas",
        "subregion": "Northern America",
        "population": 36155487,
        "latlng": [
            60.0,
            -95.0
        ],
        "demonym": "Canadian",
        "area": 9984670.0,
        "gini": 32.6,
        "timezones": [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:30"
        ],
        "borders": [
            "USA"
        ],
        "nativeName": "Canada",
        "numericCode": "124",
        "currencies": [
            {
                "code": "CAD",
                "name": "Canadian dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "translations": {
            "de": "Kanada",
            "es": "Canadá",
            "fr": "Canada",
            "ja": "カナダ",
            "it": "Canada",
            "br": "Canadá",
            "pt": "Canadá",
            "nl": "Canada",
            "hr": "Kanada",
            "fa": "کانادا"
        },
        "flag": "https://restcountries.eu/data/can.svg",
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherAcronyms": [],
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "cioc": "CAN"
    }
]


var arrayCollection = [
    {"id": "0", "parent": "#", "text": "dataStart"},
    {"id": "0-0", "parent": "0", "text": "data"},
    {"id": "0-0-0-0", "parent": "0-0", "text": "data:Hello"},
    {"id": "0-0-0-1", "parent": "0-0", "text": "attr"},
    {"id": "0-0-0-1-0", "parent": "0-0-0-1", "text": "id:root.id"},
    {"id": "0-0-0-2", "parent": "0-0", "text": "children"},
    {"id": "0-0-0-2-0-0", "parent": "0-0-0-2", "text": "data:Hello World"},
    {"id": "0-0-0-2-0-1", "parent": "0-0-0-2", "text": "attr"},
    {"id": "0-0-0-2-0-1-0", "parent": "0-0-0-2-0-1", "text": "id:node_1"},
    {"id": "0-0-0-2-0-2", "parent": "0-0-0-2", "text": "children"},
];


class jsonDataStore {
    constructor(){

        this.jsonArray = 
        [
            {
                "name": "Canada",
                "topLevelDomain": [
                    ".ca"
                ],
                "alpha2Code": "CA",
                "alpha3Code": "CAN",
                "callingCodes": [
                    "1"
                ],
                "capital": "Ottawa",
                "altSpellings": [
                    "CA"
                ],
                "region": "Americas",
                "subregion": "Northern America",
                "population": 36155487,
                "latlng": [
                    60.0,
                    -95.0
                ],
                "demonym": "Canadian",
                "area": 9984670.0,
                "gini": 32.6,
                "timezones": [
                    "UTC-08:00",
                    "UTC-07:00",
                    "UTC-06:00",
                    "UTC-05:00",
                    "UTC-04:00",
                    "UTC-03:30"
                ],
                "borders": [
                    "USA"
                ],
                "nativeName": "Canada",
                "numericCode": "124",
                "currencies": [
                    {
                        "code": "CAD",
                        "name": "Canadian dollar",
                        "symbol": "$"
                    }
                ],
                "languages": [
                    {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                    },
                    {
                        "iso639_1": "fr",
                        "iso639_2": "fra",
                        "name": "French",
                        "nativeName": "français"
                    }
                ],
                "translations": {
                    "de": "Kanada",
                    "es": "Canadá",
                    "fr": "Canada",
                    "ja": "カナダ",
                    "it": "Canada",
                    "br": "Canadá",
                    "pt": "Canadá",
                    "nl": "Canada",
                    "hr": "Kanada",
                    "fa": "کانادا"
                },
                "flag": "https://restcountries.eu/data/can.svg",
                "regionalBlocs": [
                    {
                        "acronym": "NAFTA",
                        "name": "North American Free Trade Agreement",
                        "otherAcronyms": [],
                        "otherNames": [
                            "Tratado de Libre Comercio de América del Norte",
                            "Accord de Libre-échange Nord-Américain"
                        ]
                    }
                ],
                "cioc": "CAN"
            }
        ]

    }    
}



class dataJSONjsTree{
    constructor(urovnePole){
        this.urovnePole = urovnePole;
        this.jsTreeData = [];
    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
       // console.log("      " + nazevPromenne + "     :     " + nazevMetody);
      //  console.log(promenna);
    }

    getData(){
        return(this.jsTreeData);
    }

    dataJSONjsTreeStart(){

        console.log(this.urovnePole);

        var radekJsTreeKZapisu;
        var vypisujStavajiciUroven;
        var obsahujeCorrected;
        

        //vypise uvodni radek do jsTree
        this.vypisUvodniRadekDoJsTree();

        
        for (var i = 0; i < this.urovnePole.length; i++) { 
 
            //vypise stavajici uroven jen pokud rodic neni array
            vypisujStavajiciUroven = this.vypisovatStavajiciUroven(i);
            //vypisujStavajiciUroven = true;
            if(vypisujStavajiciUroven == true){
                radekJsTreeKZapisu = this.vratRadekDoJsTree(i);

                

                obsahujeCorrected = this.idObsahujeCorrected(radekJsTreeKZapisu.id);
                if(obsahujeCorrected == false){
                    this.jsTreeData.push(radekJsTreeKZapisu);
                }
            }
        }

       // console.log(this.urovnePole.length);
        console.log("###############################################################");
        console.log("this.jsTreeData:");
        console.log(this.jsTreeData);
        console.log("###############################################################");
   

        //this.vykresliJsTree();

    }

    vypisUvodniRadekDoJsTree(){

        var radekJSONjsTreeKZapisu;
        radekJSONjsTreeKZapisu = {"id": "0", "parent": "#", "text": "JSON"};
        this.jsTreeData.push(radekJSONjsTreeKZapisu);

    }

    vratRadekDoJsTree(index){

        var uroven;
        var klic;
        var hodnota;
        var datovyTyp;
        var index;
        var rodic;
        var rodicovskaUroven;
        var radekJSONjsTree;
        var text;
        
        uroven = this.urovnePole[index].uroven;
        klic = this.urovnePole[index].klic;
        hodnota = this.urovnePole[index].data;
        datovyTyp = this.urovnePole[index].datovyTyp;
        rodicovskaUroven = this.najdiRodicovskouUroven(uroven);


        text = klic + " : " + hodnota;

        if(datovyTyp == 'object'){
            text = klic;
        }
        if(datovyTyp == 'array'){
            text = klic;
        }


        //pokud dalsi rodic rodicovske Urovne (prarodic) je array
        //pak je potreba vratit prarodice a nikoliv rodice
        rodic = this.potvrdRodicovskouUroven(rodicovskaUroven);
        //rodic = rodicovskaUroven;

        radekJSONjsTree = {"id": uroven, "parent": rodic, "text": text}

        return(radekJSONjsTree);

    }


    vypisovatStavajiciUroven(index){

        var aktualniUroven;
        var rodicovskaUroven;
        var indexRodicovskeUrovne;
        var datovyTypRodice;
        var datovyTypAktualni;
        var vypisujStavajiciUroven;

        var obsahujeCorrected;
        var klicUrovne;
        vypisujStavajiciUroven = false;

        obsahujeCorrected = this.urovenObsahujeCorrected(index);
        if(obsahujeCorrected == false){

            aktualniUroven = this.urovnePole[index].uroven;
            rodicovskaUroven = this.najdiRodicovskouUroven(aktualniUroven);
            indexRodicovskeUrovne = this.vratIndexPodleUrovne(rodicovskaUroven);

            vypisujStavajiciUroven = true;

            //pokud rodice nenalezne, pak aktualni uroven nemuze vypsat
            if(this.urovnePole[indexRodicovskeUrovne] != undefined){
                
                datovyTypRodice = this.urovnePole[indexRodicovskeUrovne].datovyTyp;
                
                if(datovyTypRodice == "array"){
                    datovyTypAktualni = this.urovnePole[index].datovyTyp;
                    
                    if(datovyTypAktualni == "object"){
                        vypisujStavajiciUroven = false;
                    }
                }
            }
            //nastavi take na false, pokud klic je undefined
            if(this.urovnePole[index].klic == undefined){
                vypisujStavajiciUroven = false;
            }

        }

       
        return(vypisujStavajiciUroven);

    }

    //stara data obcas obsahuji corrected, je potreba tyto radky ignorovat
    urovenObsahujeCorrected(index){

        var aktualniUroven;
        var nCorr;
        var obsahujeCorrected;

        aktualniUroven = this.urovnePole[index].uroven;
        nCorr = aktualniUroven.search("Corrected");
        if(nCorr > -1){
            obsahujeCorrected = true;
        }
        else {
            obsahujeCorrected = false; 
        }
      
        return(obsahujeCorrected);
    }

    idObsahujeCorrected(text1){

        var nCorr;
        var obsahujeCorrected;

        nCorr = text1.search("corrected");

        if(nCorr > -1){
            obsahujeCorrected = true;
        }
        else {
            obsahujeCorrected = false; 
        }

        return(obsahujeCorrected);

    }

    najdiRodicovskouUroven(aktualniUroven){

        var instanceCiziTrida;
        var rodicovskaUroven;
        instanceCiziTrida = new dataJSONurovne();
        rodicovskaUroven = instanceCiziTrida.zjistiPredchoziUroven(aktualniUroven)

        return(rodicovskaUroven);
    }

    
    vratIndexPodleUrovne(hledanaUroven){
    // v poli this.urovnePole nalezne pozadovanou uroven
    // a vrati index hledaneho radku

        var uroven;
        var hledanyIndex;

        for (var i = 0; i < this.urovnePole.length; i++) {
            uroven = this.urovnePole[i].uroven;
            if(uroven == hledanaUroven){
                hledanyIndex = i;
            }
        }    

        return(hledanyIndex);

    }


    potvrdRodicovskouUroven(rodicovskaUroven){
    // pokud prarodicovska uroven je array, vrati prarodicovskou uroven
    // jinak vrati stavajici (rodicovskou)

        var prarodicovskaUroven;
        var indexPrarodice;
        var indexRodice;
        var datovyTypPrarodice;
        var datovyTypRodice;
        var pozadovanaUroven;    
        
        prarodicovskaUroven = this.najdiRodicovskouUroven(rodicovskaUroven);
        indexPrarodice = this.vratIndexPodleUrovne(prarodicovskaUroven);
        indexRodice = this.vratIndexPodleUrovne(rodicovskaUroven);

        //ve vsech pripadech vraci rodicovskou uroven
        pozadovanaUroven = rodicovskaUroven;

        //mimo uvedene podminky, vraci prarodicovskou uroven
        if(this.urovnePole[indexPrarodice] != undefined){
            
            //pokud nalezne prarodicovskou uroven, rozhoduje se podle datoveho typu
            datovyTypPrarodice = this.urovnePole[indexPrarodice].datovyTyp;

            if(datovyTypPrarodice == "array"){
                
                //nalezne-li shodu, zkouma datovy typ rodice
                datovyTypRodice = this.urovnePole[indexRodice].datovyTyp;
                if(datovyTypRodice == "object"){

                    //pak prepise pozadovanou uroven na prarodicovskou
                    pozadovanaUroven = prarodicovskaUroven;
                }
            }

        }

        return(pozadovanaUroven);
    }

    
    zjistiPredchoziUroven(posledniUroven){

        var urovneSplit;
        var pocetUrovni;
        var predposledniUroven;
        urovneSplit = posledniUroven.split("-");
        pocetUrovni = urovneSplit.length;
        predposledniUroven = "";

        for (var i = 0; i < pocetUrovni - 1; i++) {
            predposledniUroven = predposledniUroven + urovneSplit[i];
            if(i < pocetUrovni - 2){
                predposledniUroven = predposledniUroven + "-";
            }
        }

        return(predposledniUroven);

    }


    vykresliJsTree(){
        $('#jstree').jstree({
            'core': {
                'data': this.jsTreeData
            }
        });
    }

}



//########################################################

class dataJSONurovne {
//pripravi data z jsonArray a vystupem je pole s urovnemi

    constructor(parentJSON){
        this.parentJSON = parentJSON;

        this.dataJSON = [];

        //tridni promenne pro ukladani dat mezi metodami
        this.poslednihodnotyObjektu;
        this.posledniUroven;

        //zjisti delku pole a ulozi ji jako pocet smycek
        this.maxPocetCyklu = 10;

        //index hlavni vetve;
        this.indexHlavniVetve;

    }

    getData(){
        return(this.dataJSON);
    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
        //console.log(promenna);
    }

    zapisData(hodnotyObjektu, index, predchoziUroven, zapisujSourozence){

        var potomek;
        var key;
        var level;
        var zapisRadek;
        var dataType;
        var objektDelka;
        var delka;
        var klice;


        //je-li predchoziUroven = _0, 
        //pak je metoda volana pro zapis prvniho radku
        //je to kvuli tomu, abych rozpoznal, ze musim prepsat level
        if (predchoziUroven == "_0"){
            level = "0-" + this.indexHlavniVetve;
        }
        else {
            if (zapisujSourozence == false){
                level = predchoziUroven + "-" + index;
            }
            else {  //if zapisujSourozence == true - sesterska uroven = rodicovska + index
                predchoziUroven = this.zjistiPredchoziUroven(predchoziUroven);
                level = predchoziUroven + "-" + index;
            }
        }
        

        //vypisujDataDoKonzole(nazevPromenne, promenna);
        

        //objektDelka = Object.keys(hodnotyObjektu)[0].length;
        klice = this.vratPoleKlicu(hodnotyObjektu);


        potomek = Object.values(hodnotyObjektu)[index];
        //if (potomek == "node_1"){
        //    level = "0-0-0-0-1-1";
        //}
        key = Object.keys(hodnotyObjektu)[index];
        dataType = this.vratDatovyTypObjektu(potomek);
        zapisRadek = {uroven: level, klic: key, datovyTyp: dataType, data: potomek, poleKlicu: klice};
        this.dataJSON.push(zapisRadek);

        
        //this.vypisData(hodnotyObjektu);

        //this.vypisujDataDoKonzole("potomek", potomek ,"zapisData");

        return(level);

    }    

    //zapise pole klicu, tak aby mohl zpetne dopocitat pocet sourozencu
    vratPoleKlicu(hodnotyObjektu){

        var pocetKlicu;
        var poleKlicu = [];
        var klic;

        //this.vypisujDataDoKonzole("hodnotyObjektu", hodnotyObjektu, "vratPoleKlicu");

        pocetKlicu = Object.keys(hodnotyObjektu).length;
        for (var i = 0; i < pocetKlicu; i++) {
            klic = Object.keys(hodnotyObjektu)[i];
            poleKlicu.push(klic);
        }

        return(poleKlicu);

    }


    vypisData(hodnotyObjektu){
    }



    vratDatovyTypObjektu(hodnotyObjektu){
        
        var dataType;
        var constrStr;
        var nA;

        dataType = typeof(hodnotyObjektu);
        if (dataType == 'object'){

            constrStr = "" + hodnotyObjektu.__proto__.constructor;
            nA = constrStr.search("Array");
            if (nA > -1){
                //pokud je Array, pak prepise na datovy typ array
                dataType = 'array';
            }
            else {
                //jinak necha object
                (dataType == 'object')
            }
        }

        return(dataType);

    }


    vyhledejHodnotyObjektu(hledanaUroven){

        var uroven;
        var dataObjektu;

        for (var i = 0; i < this.dataJSON.length; i++) {

            uroven = this.dataJSON[i].uroven;
            if(hledanaUroven == uroven){
                dataObjektu = this.dataJSON[i].data;
                break;
            }
        }
        
        return(dataObjektu);

    }


    zjistiZdaMaObjektPotomka(hodnotyObjektu){
        // pokud je datovy typ = Object, pak ma jeste potomka

        var typObjektu;
        var existujePotomek;
        typObjektu = typeof(hodnotyObjektu);

        if(typObjektu != 'object'){
            existujePotomek = false;
        } 
        else {
            existujePotomek = true;
        }

        return(existujePotomek);

    }

    //asi je to spatne tady ... nedojede to na cyklus, a potom se nenastavi data
    zjistiZdaMaObjektPotomka2(hodnotyObjektu){

        var constrStr;
        var nO;
        var nA;
        var existujePotomek;

        var pot;
        var t;
        

        if(hodnotyObjektu == undefined){
            existujePotomek = false;
        }
        else {

            constrStr = "" + hodnotyObjektu.__proto__.constructor;
            nO = constrStr.search("Object");
            nA = constrStr.search("Array");
            if (nO > -1){
                existujePotomek = true;
            }
            else {
                if(nA > -1){
                    existujePotomek = true;
                    
                }
                else {
                    existujePotomek = false;
                }    
            }

        }

        return(existujePotomek);
    }


    zjistiPredchoziUroven(posledniUroven){

        var urovneSplit;
        var pocetUrovni;
        var predposledniUroven;
        urovneSplit = posledniUroven.split("-");
        pocetUrovni = urovneSplit.length;
        predposledniUroven = "";

        for (var i = 0; i < pocetUrovni - 1; i++) {
            predposledniUroven = predposledniUroven + urovneSplit[i];
            if(i < pocetUrovni - 2){
                predposledniUroven = predposledniUroven + "-";
            }
        }

        return(predposledniUroven);

    }


    zjistiPocetSourozencu(uroven){

        var indexHledaneUrovne;
        var poleKlicuUrovne;
        var pocetSourozencu;
        indexHledaneUrovne = this.podleZadaneUrovneVratIndex(uroven);

        poleKlicuUrovne = this.dataJSON[indexHledaneUrovne].poleKlicu;
        pocetSourozencu = poleKlicuUrovne.length;

        return(pocetSourozencu);
        
    }


    zjistiZdaMaSourozence(hodnotyObjektu, posledniZapsanyIndex, predchoziUroven){
    // tato metoda vraci true, pokud existuje sourozenec
        var pocetObjektu;
        var existujeSourozenec;
        var maPotomka;
        
        
        var hodnoty2;
        var predchoziUroven2;
        var d2;

        var rodicovskaUroven;
        var objektRodicovskeUrovne;
        var delkaRodicovskehoObjektu;

        var pocetSourozencu;


        maPotomka = this.zjistiZdaMaObjektPotomka2(hodnotyObjektu);
   

        


        //if(maPotomka == true){
            //if(posledniZapsanyIndex == 2){
     
           // }
       // }

        /*
        if(maPotomka == false){
            
            //console.log("---- TADY JSEM ---");
            existujeSourozenec = false; //  - tady je chyba, najit zpusob jak detekovat sourozence
            
           // if(predchoziUroven == "0-0-0-0-1-0"){
            console.log(" %%%%%%%%%% TADY JSEM %%%%%%%%%%% ");
            console.log(hodnotyObjektu);
            
            
            rodicovskaUroven = this.zjistiPredchoziUroven(predchoziUroven);
            objektRodicovskeUrovne = this.vyhledejHodnotyObjektu(rodicovskaUroven);
            console.log(rodicovskaUroven);

            //pokud se nachazi v 1. cyklu
            if(objektRodicovskeUrovne == undefined){
                existujeSourozenec = false;
            } //v dalsich urovnich  
            else{
                delkaRodicovskehoObjektu = Object.values(objektRodicovskeUrovne).length;
                console.log(rodicovskaUroven);
                console.log(posledniZapsanyIndex);
                console.log(delkaRodicovskehoObjektu);

                if(delkaRodicovskehoObjektu > posledniZapsanyIndex){
                    existujeSourozenec = true;
                }
                else {
                    existujeSourozenec = false;
                }

            }   

            //}

            //Test
            //existujeSourozenec = true;

            //funkce dale detekuje a zapise sourozence potomka
            //this.detekujSourozenceBezPotomka(hodnotyObjektu);
        } 
        */
        //else {
        

        //pocetObjektu = this.vratPocetObjektuNejblizsiVyssiUrovne(predchoziUroven);   
        //pocetObjektu = Object.values(hodnotyObjektu).length
        pocetObjektu = Object.values(hodnotyObjektu).length

        if (maPotomka == true){

            pocetObjektu = Object.values(hodnotyObjektu).length
            //pocetObjektu = this.zjistiPocetSourozencu(predchoziUroven);
            //if(predchoziUroven == "0-0-0-0-1"){
                //pocetObjektu = 3;
            //}
            
        } 
        else {

            pocetSourozencu = this.zjistiPocetSourozencu(predchoziUroven);

            if (pocetSourozencu > posledniZapsanyIndex){
                existujeSourozenec = true;
            }
            else {
                existujeSourozenec = false;
            }


            pocetObjektu = -1;


            //rodicovskaUroven = this.zjistiPredchoziUroven(predchoziUroven);
            //objektRodicovskeUrovne = this.vyhledejHodnotyObjektu(rodicovskaUroven);
            //if(objektRodicovskeUrovne != undefined){
            //    pocetObjektu = Object.values(objektRodicovskeUrovne).length
            //}
        }

        if(pocetObjektu > posledniZapsanyIndex){
            existujeSourozenec = true;
        }
        else {
            existujeSourozenec = false;
        }


        if(maPotomka ==true){
            if(pocetObjektu == 2){
                //existujeSourozenec = true;
            }
        }

        return(existujeSourozenec);
    }

    zjistiPosledniZaspanyIndex(posledniUroven){
    // napr z urovne "0-0-0-1-3" vrati 3
        var urovneSplit;
        var posledniIndex;

        urovneSplit = posledniUroven.split("-");
        posledniIndex = urovneSplit[urovneSplit.length-1];

        return(posledniIndex);
    }

    zjistiPocetUrovni(uroven){
    //napr. pro "0-0-0" vrati 3, protoze se jedna o 3. uroven
    
        var urovneSplit;
        var pocetUrovni;
        urovneSplit = uroven.split("-");
        pocetUrovni = urovneSplit.length;

        return(pocetUrovni);

    }

    zjistiPosledniIndexPotomka(urovenRodice){
    //napr. pro urovenRodice "0-0-0" vyhleda potomka napr: "0-0-0-2"
    //a vrati index = 3, protoze posledni je 2 a 3 je volna

        var maximalniIndex;
        var posledniIndexUrovne;
        var uroven;
        var pocetUrovni;
        var pocetUrovniRodice;
        var pocetUrovniPotomka;

        maximalniIndex = 0;
        pocetUrovniRodice = this.zjistiPocetUrovni(urovenRodice);
        pocetUrovniPotomka = pocetUrovniRodice + 1;


        for (var i = 0; i < this.dataJSON.length; i++) {
            uroven = this.dataJSON[i].uroven;
            pocetUrovni = this.zjistiPocetUrovni(uroven);
            if(pocetUrovni == pocetUrovniPotomka){
                posledniIndexUrovne = this.zjistiPosledniZaspanyIndex(uroven);
                if(posledniIndexUrovne > maximalniIndex){
                    maximalniIndex = posledniIndexUrovne;
                }
            }
        }
        
        return(maximalniIndex);
    }

    zapisNovaData(hodnotyObjektu, prvniIndex, predchoziUroven, MaxPocetCyklu){
        //zatim MaxPocetCyklu nastavuji rucne, v budoucnosti dat while

        var maPotomka;           //indikuje zda existuje potomek, ci nikoliv
        var indexStart;
        var ukonciProgram;
        var index;
        ukonciProgram = false;
        var poleKlicu = [];
        var pocetKlicu;
        var potomek;

        var hodnotyObjektuOrig;
        var predchoziUrovenOrig;
        hodnotyObjektuOrig = hodnotyObjektu;

        predchoziUrovenOrig = predchoziUroven;
        var f;
        var f1;
        f = false;
        f1 = false;
        
        for (var i = 0; i < MaxPocetCyklu; i++) {

            if(i == 0){
                //prochazi predem danou vetev na dane urovni rodice - prvni uroven
                indexStart = prvniIndex;
                pocetKlicu = prvniIndex + 1;    //zajisti aby byl spusten pouze 1 cyklus
                index = prvniIndex;
           
                
                //this.zapisData(hodnotyObjektu, index, predchoziUroven);
                predchoziUroven = this.zapisData(hodnotyObjektu, index, predchoziUroven, false);
                hodnotyObjektu = this.vyhledejHodnotyObjektu(predchoziUroven);
            }
            else {
                //projde vsechny vetve (sourozence) na dcerinne urovni 
                indexStart = 0;
                index = 0;

            
                potomek = Object.values(hodnotyObjektu)[index];

                
                //pocet klicu stanovi z pole klicu
                poleKlicu = this.vratPoleKlicu(hodnotyObjektu);
                pocetKlicu = poleKlicu.length;


                predchoziUroven = this.zapisSourozence(hodnotyObjektu, predchoziUroven);
                hodnotyObjektu = this.vyhledejHodnotyObjektu(predchoziUroven);

            }

            //this.vypisujDataDoKonzole("hodnotyObjektu", hodnotyObjektu, "zapisNovaData");
            //pokud nenajde hodnotyObjektu , pak je na konci programu
            if(hodnotyObjektu == undefined){
                ukonciProgram = true;
                //ukonci program
                break;
            }

            
            maPotomka = this.zjistiZdaMaObjektPotomka2(hodnotyObjektu);

            if(maPotomka == false){
                //pokud potomek neni, pak ukonci smycku
                this.poslednihodnotyObjektu = hodnotyObjektu;
                this.posledniUroven = predchoziUroven;

                break;
            }   
            
        }  
        
        //this.vypisujDataDoKonzole("", "konec cyklu", "zapisNovaData");
        //pouze kdyz ukoncuje program vraci true, jinak false
        return(ukonciProgram);

    }

    zapisSourozence(hodnotyObjektu, predchoziUroven){

        var poleKlicu = [];
        var pocetKlicu;
        var zapisSesterskouUroven;
        var maPotomka;

        
        poleKlicu = this.vratPoleKlicu(hodnotyObjektu);
        pocetKlicu = poleKlicu.length;

        pocetKlicu = this.vratPocetObjektuStavajiciUrovne(predchoziUroven)
        
        //prepise aby cyklus bezel alespon nultym cyklem
        if(pocetKlicu == -1){
            pocetKlicu = 1;
        }


        for (var i = 0; i < pocetKlicu; i++) {
            if(i == 0){
                zapisSesterskouUroven = false;
            }
            else {
                zapisSesterskouUroven = true;
            }
            
            predchoziUroven = this.zapisData(hodnotyObjektu, i, predchoziUroven, zapisSesterskouUroven);
        }

        return(predchoziUroven);

    }

    vratIndexSourozence(predchoziUroven, hodnotyObjektu){
  

        var posledniZapsanyIndex;
        var indexSourozence;
        var maSourozence;

        var maximalniIndexSourozence;
        var hledanyIndexSourozence;

        var pocetSourozencu;

        for (var i = 0; i < this.maxPocetCyklu; i++) {

            hledanyIndexSourozence = 0;

            // pokud predchozi uroven je prazdna, pak skonci
            if(predchoziUroven == ""){
                break;
            }

            // pokud predchozi uroven je undefined, pak skonci taky
            if(predchoziUroven == undefined){
                break;
            }

            // pokud je hodnotyObjektu = undefined, pak taky skonci
            if(hodnotyObjektu == undefined){
                break;
            }


            //zjisti posledni zapsany index
            posledniZapsanyIndex = this.zjistiPosledniZaspanyIndex(predchoziUroven);

            posledniZapsanyIndex = parseInt(posledniZapsanyIndex);
             

            //jelikoz hleda sourozence je potreba uvazovat sousedni index ( + 1)
            indexSourozence = posledniZapsanyIndex + 1;
                   
            //mmmm
            pocetSourozencu = this.zjistiPocetSourozencu(predchoziUroven);

            if (pocetSourozencu > indexSourozence){
                maSourozence = true;
            }
            else {
                maSourozence = false;
            }

            
            // zjisti zda na sourozeneckem indexu je sourozenec
            maSourozence = this.zjistiZdaMaSourozence(hodnotyObjektu, indexSourozence, predchoziUroven);
            //maSourozence = true;
            
         


            // pokud sourozence nenalezne, hleda predchozi uroven
            if(maSourozence == false){
                predchoziUroven = this.zjistiPredchoziUroven(predchoziUroven);
         
                hodnotyObjektu = this.vyhledejHodnotyObjektu(predchoziUroven);
      
            } 
            else {
                // pokud sourozence nalezne, pak dopocita data a ukonci cyklus
                maximalniIndexSourozence = this.zjistiPosledniIndexPotomka(predchoziUroven);
                maximalniIndexSourozence = parseInt(maximalniIndexSourozence);
    

                //vrati jako argument
                hledanyIndexSourozence = maximalniIndexSourozence + 1

                //preda data do tridy
                this.poslednihodnotyObjektu = hodnotyObjektu;
                this.posledniUroven = predchoziUroven;

                break;
            }
        }    

        return(hledanyIndexSourozence);

    }


    //vrati pocet objektu 
    //stavajici nebo nejblizsi vyssi urovne k zadane urovni
    vratPocetObjektuNejblizsiVyssiUrovne(vychoziUroven){
        
        var pocetObjektuDaneUrovne;
        var uroven;

        uroven = vychoziUroven;

        for (var i = 0; i < this.dataJSON.length; i++) {
            pocetObjektuDaneUrovne = this.vratPocetObjektuStavajiciUrovne(uroven);
            
            if(pocetObjektuDaneUrovne > -1){
                break;
            }
            
            uroven = this.zjistiPredchoziUroven(uroven);
        }

        return(pocetObjektuDaneUrovne);

    }



    //detekuje, zda stavajici uroven je typu objekt
    //pokud ano, pak vrati pocet sub-objektu
    //pokud ne, vrati -1
    vratPocetObjektuStavajiciUrovne(stavajiciUroven){

        var indexUrovne;
        var datovyTypUrovne;
        var pocetObjektu;

        var rodicovskaUroven;
        var datatovyTypRodice;

        datovyTypUrovne = this.vratDatovyTypUrovne(stavajiciUroven);
        indexUrovne = this.podleZadaneUrovneVratIndex(stavajiciUroven);
        
        rodicovskaUroven = this.zjistiPredchoziUroven(stavajiciUroven);
        datatovyTypRodice = this.vratDatovyTypUrovne(rodicovskaUroven);



        //pocet objektu nastavi na -1, nebo je prepise
        //pocetObjektu = -1;
        pocetObjektu = Object.values(this.dataJSON[indexUrovne]).length;

        //prepisuje  je v pripade, ze se jedna o objekt, nebo arary
        if(datovyTypUrovne == "object"){
            pocetObjektu = -1;
        }

        if(datovyTypUrovne == "array"){
            pocetObjektu = -1;
        }


        return(pocetObjektu);

    }


    vratDatovyTypUrovne(uroven){

        var indexUrovne;
        var datovyTypUrovne;

        indexUrovne = this.podleZadaneUrovneVratIndex(uroven);
        datovyTypUrovne = this.dataJSON[indexUrovne].datovyTyp;

        return(datovyTypUrovne);

    }

    podleZadaneUrovneVratIndex(hledanaUroven){
    // prohleda this.dataJSON 
    // a vrati pozadovany index ktery odpovida dane urovni  

        var hledanyIndex;
        var uroven;

        hledanyIndex = -1;

        for (var i = 0; i < this.dataJSON.length; i++) {
            uroven = this.dataJSON[i].uroven;
            if(uroven == hledanaUroven){
                hledanyIndex = i;
                break;
            }

        }

        return(hledanyIndex);

    }


    hlavniSmyckaProgramu(hodnotyObjektu, pocatecniUroven){

        var hodnotyObjektuOrig;
        var predchoziUroven;
        var ukoncitProgram;
        var prvniIndex = 0;
        var nultaUroven;        //indikuje zda se nachazi na nulte urovni
        var delkaObjektuOrig;

        if (pocatecniUroven == "0"){
            predchoziUroven = "0-" + this.indexHlavniVetve;
        }
        else{
            predchoziUroven = pocatecniUroven;
        }

        //this.vypisujDataDoKonzole("predchoziUroven", predchoziUroven ,"hlavniSmyckaProgramu");
        //this.vypisujDataDoKonzole("hodnotyObjektu", hodnotyObjektu ,"hlavniSmyckaProgramu");

        //pripravi si kopii objektu,
        //tak aby ji mohl pouzit pro nultou uroven
        hodnotyObjektuOrig = hodnotyObjektu;

        //na true se prepne pouze pokud objekt typu:
        //["themes", "json_data", "crrm"] je na nulte pozici
        nultaUroven = false;


        //for (var i = 0; i < this.maxPocetCyklu; i++) {
        for (var i = 0; i < 10; i++) {

            //pokud i > 0 - pak index sourozence musi byt > 0
            //jinak ukoci hlavni smycku
            if(i > 0){
                if(prvniIndex == 0){
                    break;
                }
            }
            
            //zapise data do pole
            ukoncitProgram = this.zapisNovaData(hodnotyObjektu, prvniIndex, predchoziUroven, this.maxPocetCyklu );

            //ukoncitProgram = ukoncit smycku
            if(ukoncitProgram == true){
                break;
            }

            //preda data do dalsi metody
            predchoziUroven = this.posledniUroven;
            hodnotyObjektu = this.poslednihodnotyObjektu;

            //vrati index sourozence, pokud nebylo nastaveno
            //nultaUroven = true v predchozim cyklu
            prvniIndex = this.vratIndexSourozence(this.posledniUroven, this.poslednihodnotyObjektu);
           

            //protoze neexistuje -1. uroven, je treba aby kod bezel jinou cestou
            //nastavuje se v okamziku, kdy jsou splneny obe podminky nize
         
            if(i == 0){
                if(prvniIndex == 0){
                    nultaUroven = true;   
                }
            }    

            //preda data do dalsi metody
            predchoziUroven = this.posledniUroven;
            hodnotyObjektu = this.poslednihodnotyObjektu;
                
        }

        //pokud je objekt typu ["themes", "json_data", "crrm"] 
        //na nulte urovni, pak je potreba vypsat data na kodu nezavisle vyse
        //kod bezi obdobne, jen se nevola this.vratIndexSourozence a s tim souvisejici priprava dat
        
        if(nultaUroven == true){
            
            hodnotyObjektu = hodnotyObjektuOrig; 
            delkaObjektuOrig = hodnotyObjektuOrig.length;

            //index na pozici 0 byl jiz zapsan, proto pocitam od 1
            //prvniIndex je zde stanoven jako citac, 
            //zatimco v kodu vyse pomoci metody a sloziteho postupu
            for (var s = 1; s < delkaObjektuOrig; s++) {
                prvniIndex = s
                //ukoncitProgram = this.zapisNovaData(hodnotyObjektu, prvniIndex, predchoziUroven, this.maxPocetCyklu );
            }
        }

     
        
    }



    pripravData(){

        var hodnotyObjektu;
        var pocetHlavnichVetvi;
        var hlavniObjekt;

        hlavniObjekt = this.parentJSON;
        
       // console.log(this.parentJSON);
        pocetHlavnichVetvi = Object.keys(hlavniObjekt).length;
        
        for (var i = 0; i < pocetHlavnichVetvi; i++) { 
        //for (var i = 0; i < 1; i++) {

            //index vetve ulozi jako clenskou promennou
            this.indexHlavniVetve = i;

            //zapise uvodni radek do pole
            this.zapisData(hlavniObjekt, i, "_0", false)

            //ziska vetev objektu
            hodnotyObjektu = Object.values(hlavniObjekt)[i];
            //this.vypisujDataDoKonzole("hodnotyObjektu", hodnotyObjektu ,"bbbb");

            //zavola hlavni program pro danou vetev
            this.hlavniSmyckaProgramu(hodnotyObjektu, "0");
        }
        
        //this.vypisujDataDoKonzole("dataJSON", this.dataJSON ,"dataJSON");
       // console.log("#######################################");   

       // var klicExistuje;
        //this.nactiPoleKlicu();
        //klicExistuje = this.overExistenciKlice("id2");
        //this.vypisujDataDoKonzole("klicExistuje", klicExistuje ,"pripravData");

    }


    //##########################################################
    //                  OPRAVA DAT
    //##########################################################
    //
    // nektere sourozenecke polozky chybi, tento kod dodatecne doplnuje sourozence
    // prohledava this.dataJSON pole klicu na kazdem radku porovnava s klici a pripadne je dopisuje

/*
    nactiPoleKlicu(){
    //pro kazdy radek this.dataJSON vrati pole klicu jako pole []

        var poleKlicu = [];

        for (var i = 0; i < this.dataJSON.length; i++) { 
            poleKlicu = this.dataJSON[i].poleKlicu;

            this.proverExistenciPoleKlicu(poleKlicu);
        }
    }


    proverExistenciPoleKlicu(poleKlicu){
    //proleze polem klicu a proveri zda vsechny klice existuji
    
        var klic;
        var klicExistuje;

        for (var i = 0; i < poleKlicu.length; i++) { 
            klic = poleKlicu[i];
            klicExistuje = this.overExistenciKlice(klic);
            this.vypisujDataDoKonzole("klic", klic ,"nactiPoleKlicu");
            this.vypisujDataDoKonzole("i", i ,"nactiPoleKlicu");
            this.vypisujDataDoKonzole("klicExistuje", klicExistuje ,"nactiPoleKlicu");
        }   
    }


    overExistenciKlice(klicZadany){
    //najde radek se zadanym klicem, pokud radek najde, vrati true, jinak false

        var klic;
        var klicNalezen;

        klicNalezen = false;
        for (var i = 0; i < this.dataJSON.length; i++) { 

            klic = this.dataJSON[i].klic;

            if(klic == klicZadany){
                klicNalezen = true;
                break;
            }
        }

        return(klicNalezen);

    }

    */

}


class opravaJSONurovne{
    constructor(dataJSON, parentJSON){
        this.parentJSON = parentJSON;
        this.dataJSON = dataJSON;
        this.dataJSONnew = []

    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
       // console.log(promenna);
    }

    getData(){
        return(this.dataJSONnew);
    }

    opravaStart(){

        //console.log(this.dataJSON);
        this.hlavniSmycka();

    }

    najdiRodicovskouUroven(aktualniUroven){

        var instanceCiziTrida;
        var rodicovskaUroven;
        instanceCiziTrida = new dataJSONurovne();
        rodicovskaUroven = instanceCiziTrida.zjistiPredchoziUroven(aktualniUroven)

        return(rodicovskaUroven);
    }

    potvrdZeSeJednaOSourozeneckeUrovne(prvniUroven, druhaUroven){

        var jednaSeOSourozeneckeUrovne;

        //prvniUroven = "0-0-0-0-0";
        //druhaUroven = "0-0-0-0-1";

        var rodicKPrvniUrovni;
        var rodicKDruheUrovni;

        rodicKPrvniUrovni = this.najdiRodicovskouUroven(prvniUroven);
        rodicKDruheUrovni = this.najdiRodicovskouUroven(druhaUroven);

        if(rodicKPrvniUrovni == rodicKDruheUrovni){
            jednaSeOSourozeneckeUrovne = true;
        }
        else {
            jednaSeOSourozeneckeUrovne = false;
        }

        //this.vypisujDataDoKonzole("prvniUroven", prvniUroven ,"potvrdZeSeJednaOSourozeneckeUrovne");
        //this.vypisujDataDoKonzole("druhaUroven", druhaUroven ,"potvrdZeSeJednaOSourozeneckeUrovne");
        //this.vypisujDataDoKonzole("jednaSeOSourozeneckeUrovne", jednaSeOSourozeneckeUrovne ,"potvrdZeSeJednaOSourozeneckeUrovne");

        return(jednaSeOSourozeneckeUrovne);
        
    }


    //k jednotlivym klicum dopise nove urovne
    //bez ohledu na to, zda byly nalezeny ci nikoliv
    najdiVsechnyUrovnePotomkaKRodici(rodicovskaUroven, poleKlicu){

        var pocetKlicu;
        var urovenPotomka;
        var urovnePotomku = [];

        for (var i = 0; i < poleKlicu.length; i++) { 
            urovenPotomka = rodicovskaUroven + "-" + i;
            urovnePotomku.push(urovenPotomka);
        }

        return(urovnePotomku);

    }

    hlavniSmycka(){

        var aktualniUroven;
        var hledejOd;
        var poleKlicu;
        var poleKlicuBoolean;

        //promenne, ktere jsou naplneny v pripade, ze je detekovan cyhbejici klic
        var chybejiciKlic;
        var rodicovskaUroven;
        var objektRodicovskeUrovne;
        var urovnePotomku;

        //###########################################################################
        //
        // vytvori nove pole s vynechanymi polozkami

        hledejOd = 0;
        for (var i = 0; i < this.dataJSON.length; i++) { 

            aktualniUroven = this.dataJSON[i].uroven;
            poleKlicu = this.dataJSON[i].poleKlicu;
            if(poleKlicu != undefined){
                poleKlicuBoolean = this.vyhledejVsechnySourozence(aktualniUroven, poleKlicu);
                //mel by jeste k  tomu vracet poleKlicuUrovni, abych dokazal zjistit ktera uroven je false

                chybejiciKlic = this.detekujChybejiciKlice(poleKlicuBoolean);
                if(chybejiciKlic == true){
                    rodicovskaUroven = this.najdiRodicovskouUroven(aktualniUroven);
                    objektRodicovskeUrovne = this.vratObjektDaneUrovne(rodicovskaUroven);
                    urovnePotomku = this.najdiVsechnyUrovnePotomkaKRodici(rodicovskaUroven, poleKlicu);
                    //this.vypisujDataDoKonzole("urovnePotomku", urovnePotomku ,"hlavniSmycka");
                    
                    this.zapisOpravenaData(urovnePotomku, objektRodicovskeUrovne);

                }
            }
        }    

        //slouci data
        //this.slucData();
        //this.oznacDuplicitniPolozky();

        //console.log(this.dataJSON);
    }

    //###########################################################################
    //
    //slouci data z puvodniho this.dataJSON a opraveneho this.dataJSONnew

    slucData(){

        this.dataJSON = this.dataJSON.concat(this.dataJSONnew);

    }

    //########################################################################x
    //
    // nyni je pole s vynechanymi polozkami slouceno s polem puvodnim
    // nektere polozky jsou zapsany duplicitne - ty puvodni jsou ponechany,
    //                                   + doplneny s novym popisem corrected....

    oznacDuplicitniPolozky(){

        var uroven;
        var urovenOznacText;
        var urovenOznac;
        var indexDuplicitni;

        
        for (var i = 0; i < this.dataJSON.length; i++) { 
            uroven = this.dataJSON[i].uroven;

            indexDuplicitni = this.vratRadekDuplicitniPolozky(uroven, i);
            if(indexDuplicitni > -1){
                urovenOznacText = "_corrected_line_" + indexDuplicitni;
                urovenOznac = uroven + urovenOznacText;

                this.dataJSON[i].uroven = urovenOznac;
            }
        }
    }

    vratRadekDuplicitniPolozky(hledanaUroven, indexOriginalni){
    //indexOriginalni indikuje index kde je nalezena originalni polozka

        var uroven;
        var indexDuplicitni;
        indexDuplicitni = -1;

        for (var i = 0; i < this.dataJSON.length; i++) { 

            //indexOriginalni je potreba preskocit (abych neporovnaval polozku samu se sebou)
            if(i != indexOriginalni){
                uroven = this.dataJSON[i].uroven;
                if(hledanaUroven == uroven){
                    indexDuplicitni = i;
                    break;
                }
            }
        }

        return(indexDuplicitni);

    }



    zapisOpravenaData(urovnePotomku, rodicovskyObjekt){

        var urovenNova;
        var objektNovy;
        var radekNovy;
        var key;
        var dataType;
        var klice;

        var instanceCiziTrida = new dataJSONurovne();
        klice = instanceCiziTrida.vratPoleKlicu(rodicovskyObjekt);

        //this.vypisujDataDoKonzole("urovnePotomku", urovnePotomku ,"zapisOpravenaData");
        //this.vypisujDataDoKonzole("urovnePotomku.length;", urovnePotomku.length ,"zapisOpravenaData");

        
        for (var i = 0; i < urovnePotomku.length; i++) { 
            
            urovenNova = urovnePotomku[i];
            objektNovy = Object.values(rodicovskyObjekt)[i];
            key = Object.keys(rodicovskyObjekt)[i];
            
            dataType = instanceCiziTrida.vratDatovyTypObjektu(objektNovy);
            radekNovy = {uroven: urovenNova, klic: key, datovyTyp: dataType, data: objektNovy, poleKlicu: klice};
        
            //zapise opraveny radek jako posledni radek
            this.dataJSONnew.push(radekNovy);

        }
    }

    zapisRadek(urovenNova, objekt){

        var potomek;
        var radekNovy;
        var key;
        var dataType;
        var instanceCiziTrida;

        //dataJSONurovne

        instanceCiziTrida = new dataJSONurovne();

        key = Object.keys(hodnotyObjektu)[i];
        dataType = this.vratDatovyTypObjektu(potomek);
        radekNovy = {uroven: level, klic: key, datovyTyp: dataType, data: potomek, poleKlicu: klice};
        
        //zapise opraveny radek jako posledni radek
        this.dataJSON.push(zapisRadek);

    }


    //vrati true pokud alespon jeden klic v poleKlicu chybi
    detekujChybejiciKlice(poleKlicuBoolean){

        var poleKlicuBoolean;
        var klicBoolean;
        var chybejiciKlic;

        chybejiciKlic = false;

        for (var i = 1; i < poleKlicuBoolean.length; i++) { 

            klicBoolean = poleKlicuBoolean[i];
            if(klicBoolean == false){
                chybejiciKlic = true;
                break;
            }
        }

        return(chybejiciKlic);
    }


    //pootevira dane urovne a vrati objekt dle pozadovane cesty
    vratObjektDaneUrovne(urovenZdroj){
        
        var urovenPredka;
        var posledniIndex;
        var polePredku;

        var objektPredka;
        var objektPotomka;


        //his.vypisujDataDoKonzole("urovenZdroj", urovenZdroj ,"vratObjektDaneUrovne");

        polePredku = this.vratPolePredku(urovenZdroj);
        objektPredka = this.parentJSON;

        
        for (var i = 1; i < polePredku.length; i++) { 
            urovenPredka = polePredku[i];
            posledniIndex = this.zjistiPosledniZapsanyIndex(urovenPredka);
            objektPotomka = this.vratObjektPotomka(objektPredka, posledniIndex);
            
            //data do dalsiho cyklu
            objektPredka = objektPotomka;
        }

        return(objektPotomka);

    }

    vratPoleUrovniVsechPoromku(rodicovskaUroven, rodicovskyObjekt){

        pocetKlicuPotomka

    }

    //z rodicovskeho objektu a indexu potomka, vrati objekt potomka
    vratObjektPotomka(objektRodice, indexPotomka){

        var objektPotomka;
        objektPotomka = Object.values(objektRodice)[indexPotomka];

        return(objektPotomka);

    }


    //vrati pole vsech predku od pozadovane urovne
    vratPolePredku(aktualniUroven){

        var aktualniUroven;
        var rodicovskaUroven;
        var polePredku = [];

        polePredku.push(aktualniUroven);
        rodicovskaUroven = aktualniUroven;

        for (var i = 0; i < this.dataJSON.length; i++) { 
            rodicovskaUroven = this.najdiRodicovskouUroven(rodicovskaUroven);

            if (rodicovskaUroven == ""){
                break;
            }
            polePredku.push(rodicovskaUroven);
        }

        //aby bylo pole pouzitelne, vraci ho v opacnem poradi
        polePredku = polePredku.reverse();

        return(polePredku);
        
    }


    zjistiPosledniZapsanyIndex(uroven){

        var instanceCiziTrida;
        var posledniIndex;
        instanceCiziTrida = new dataJSONurovne();
        posledniIndex = instanceCiziTrida.zjistiPosledniZaspanyIndex(uroven);

        return(posledniIndex);
    }

    //vrati pole klicu - true/false, kde boolean znaci, zda sourozence (klic) nasel ci nenasel
    vyhledejVsechnySourozence(aktualniUroven, poleKlicu){

        var sourozeneckaUroven;
        var druhySourozenec;
        var hledejOd;

        //true/false detekuje existenci sourozence k originalnim datum
        var poleKlicuBoolean;          
        var pocetKlicu;

        var zapisujNaPozici;
        var klicHledaneUrovne;

        pocetKlicu = poleKlicu.length;

        //poleKlicu prednastaveno na false pro vsechny polozky
        poleKlicuBoolean = this.pripravPoleKlicuBoolean(pocetKlicu);

        //v prvnim cyku hledam od indexu 0, v dalsich cyklech od hledejOd
        hledejOd = 0;

        for (var i = 0; i < pocetKlicu; i++) { 
           
            sourozeneckaUroven = this.vratSourozeneckouUroven(aktualniUroven, hledejOd);

            druhySourozenec = sourozeneckaUroven.druhySourozenec;
            hledejOd = sourozeneckaUroven.druhySourozenecNaIndexu + 1;

            //nezapisuje se True/False na spravnou pozici
            if(druhySourozenec != ""){

                klicHledaneUrovne = this.vratKlicPodleUrovne(druhySourozenec);
                zapisujNaPozici = poleKlicu.indexOf(klicHledaneUrovne);

                poleKlicuBoolean[zapisujNaPozici] = true;
                //this.vypisujDataDoKonzole("i", i ,"nactiPoleKlicu");
                //this.vypisujDataDoKonzole("klicHledaneUrovne", klicHledaneUrovne ,"nactiPoleKlicu");
                //this.vypisujDataDoKonzole("aktualniUroven", aktualniUroven ,"nactiPoleKlicu");
                //this.vypisujDataDoKonzole("druhySourozenec", druhySourozenec ,"nactiPoleKlicu");
                //this.vypisujDataDoKonzole("hledejOd", hledejOd ,"nactiPoleKlicu");
            }   
        }   
        
        //this.vypisujDataDoKonzole("poleKlicuBoolean", poleKlicuBoolean ,"vyhledejVsechnySourozence");

        return(poleKlicuBoolean);

    }

    vratKlicPodleUrovne(hledanaUroven){

        var uroven;
        var klicHledaneUrovne;
        //hledanaUroven = "0-0-0-0-1-0";

        klicHledaneUrovne = "";
        
        for (var i = 0; i < this.dataJSON.length; i++) {   

            uroven = this.dataJSON[i].uroven;
            if(uroven == hledanaUroven){
                klicHledaneUrovne = this.dataJSON[i].klic;
                break;
            }
        }   
        
        return(klicHledaneUrovne);
    }


    pripravPoleKlicuBoolean(pocetKlicu){
    // nastavi poleKlicuBoolean tak = [false, false, false, ...] tak aby souhlasila velikost pole    

        var poleKlicuBoolean = [];

        for (var i = 0; i < pocetKlicu; i++) {
            poleKlicuBoolean.push(false);
        }

        return(poleKlicuBoolean);

    }

    vratSourozeneckouUroven(prvniSourozenec, hledejOd) {

        var druhySourozenec;
        var uroven;
        var jednaSeOSourozence;
        var druhySourozenecNaIndexu;    //index druheho sourozence, aby vedel od jakeho indexu ma pokracovat
        var vratData;

        druhySourozenec = "";

        for (var i = hledejOd; i < this.dataJSON.length; i++) { 

            uroven = this.dataJSON[i].uroven;
            jednaSeOSourozence = this.potvrdZeSeJednaOSourozeneckeUrovne(prvniSourozenec, uroven);
            if(jednaSeOSourozence == true){
                druhySourozenec = uroven;
                druhySourozenecNaIndexu = i;
                break;
            }
            
        }  
        
        //nenajde-li sourozence pak nastavi 
        //druhySourozenecNaIndexu = i a tim padem se dalsi volani nespusti
        if(druhySourozenec == ""){
            druhySourozenecNaIndexu = i;
        }

        vratData = {"druhySourozenec": druhySourozenec, "druhySourozenecNaIndexu": druhySourozenecNaIndexu };
        return(vratData);
    }

}


//oprava vyhledava polozky, kde chybeji potomci
//soucasne potomky doplnuje
class opravaJSONurovne2{
    constructor(dataJSON, parentJSON){
        this.parentJSON = parentJSON;
        this.dataJSON = dataJSON;
        this.dataJSONnew = []

        this.instanceOrig = new dataJSONurovne(parentJSON);
        this.instanceOprava1 = new opravaJSONurovne(dataJSON, parentJSON);
        this.jsTreeJSONdata = new dataJSONjsTree(dataJSON)
    

    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
        //console.log(promenna);
    }

    getData(){
        return(this.dataJSONnew);
    }

    oprava2Start(){

        //vyhodnoceni chyby je zde - oprava prostrednictvim tridy dataJSONurovne
        this.vratDataZJSONUrovne();

    }

    // v metode je for cyklus prochazejici radky dat a hledajici objekty, ktere nemaji potomky
    // objekty vsak potomky maji a to je chyba
    // jedna se tedy o dat. typ "object" a uroven nesmi byt oznacena jako corrected
    // po pruchodu vsemi podminkami se vola smycka v procedure hlavniho programu (dataJSONurovne)

    vratDataZJSONUrovne(){

        var uroven;
        var datovyTypUrovne;
        var UrovenMaPotomka;
        var obsahujeCorrected;
        var objektChybejicihoPotomka;
        var doplnenaData;

        for (var i = 0; i < this.dataJSON.length; i++) { 
            uroven = this.dataJSON[i].uroven;
            datovyTypUrovne = this.dataJSON[i].datovyTyp;

            //podurovne chybeji u datoveho typu "object", hledam jej
            if(datovyTypUrovne == "object"){
                obsahujeCorrected = this.jsTreeJSONdata.idObsahujeCorrected(uroven);
                
                //uroven nesmi obsahovat "corrected" - jedna se o stara nepouzivana data
                if(obsahujeCorrected == false){
                    UrovenMaPotomka = this.zjistiZdaMaUrovenPotomka(uroven);

                    //chybejici potomek je tedy u potomka, ktery ma sice potomka
                    //ale v datech se tvari jako ze neni
                    if(UrovenMaPotomka == false){
                        //jedna se o rodice chybejiciho potomka
                        objektChybejicihoPotomka = this.instanceOprava1.vratObjektDaneUrovne(uroven)
         
                        //this.vypisujDataDoKonzole("objektChybejicihoPotomka", objektChybejicihoPotomka ,"oprav2Start");
                        //this.vypisujDataDoKonzole("uroven", uroven ,"oprav2Start");
                                  
                        //volam hlavni program - jiz hotovou proceduru
                        this.instanceOrig.zapisNovaData(objektChybejicihoPotomka, 0, uroven, 10 );
                        this.instanceOrig.hlavniSmyckaProgramu(objektChybejicihoPotomka, uroven);
                        
                        doplnenaData = this.instanceOrig.getData();
                        this.dataJSONnew = this.dataJSONnew.concat(doplnenaData);

                    }     
                } 
            }
        }
    }

    zjistiZdaMaUrovenPotomka(urovenRodice){

        var rodicKPrvniUrovni;
        var urovenMaPotomka;
        var uroven;

        urovenMaPotomka = false;

        for (var i = 0; i < this.dataJSON.length; i++) { 
            uroven = this.dataJSON[i].uroven;
            rodicKPrvniUrovni = this.instanceOprava1.najdiRodicovskouUroven(uroven);
            if(rodicKPrvniUrovni == urovenRodice){
                urovenMaPotomka = true;
                break;
            }
            
        }
        return(urovenMaPotomka);
    }

}

class slucData{

    constructor(staraData, novaData){
        this.staraData = staraData;
        this.novaData = novaData;
        this.dataNew = []
    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
        //console.log(promenna);
    }

    getData(){
        return(this.dataNew);
    }

    //###########################################################################
    //
    //slouci data z puvodniho this.dataJSON a opraveneho this.dataJSONnew

    slucData(){

        //slouci data
        this.dataNew = this.staraData.concat(this.novaData);

        //oznaci duplicitni polozky
        this.oznacDuplicitniPolozky();

    }

    //########################################################################x
    //
    // nyni je pole s vynechanymi polozkami slouceno s polem puvodnim
    // nektere polozky jsou zapsany duplicitne - ty puvodni jsou ponechany,
    //                                   + doplneny s novym popisem corrected....

    oznacDuplicitniPolozky(){

        var uroven;
        var urovenOznacText;
        var urovenOznac;
        var indexDuplicitni;

        
        for (var i = 0; i < this.dataNew.length; i++) { 
            uroven = this.dataNew[i].uroven;

            indexDuplicitni = this.vratRadekDuplicitniPolozky(uroven, i);
            if(indexDuplicitni > -1){
                urovenOznacText = "_corrected_line_" + indexDuplicitni;
                urovenOznac = uroven + urovenOznacText;

                this.dataNew[i].uroven = urovenOznac;
            }
        }
    }

    vratRadekDuplicitniPolozky(hledanaUroven, indexOriginalni){
    //indexOriginalni indikuje index kde je nalezena originalni polozka

        var uroven;
        var indexDuplicitni;
        indexDuplicitni = -1;

        for (var i = 0; i < this.dataNew.length; i++) { 

            //indexOriginalni je potreba preskocit (abych neporovnaval polozku samu se sebou)
            if(i != indexOriginalni){
                uroven = this.dataNew[i].uroven;
                if(hledanaUroven == uroven){
                    indexDuplicitni = i;
                    break;
                }
            }
        }

        return(indexDuplicitni);

    }
}


//trida ziskava data pro tabulky koncovych dat
class tabulkyKoncovychDat{

    constructor(jsTreeJSONdata){
        //data ,ktera jsou pouzita pro nacitani stromu
        this.jsTreeJSONdata = jsTreeJSONdata;
        this.seznamTabulek = [];
    }


    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
       // console.log(promenna);
    }    


    // spusti program
    vytvorTabulkyStart(nazevTabulky){

        var indexTabulky;
        var obsahTabulky;

        //vrati seznam tabulek do this.seznamTabulek
        this.vratSeznamTabulek();
        this.vypisujDataDoKonzole("!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!");

        obsahTabulky = this.naplnPrislusnouTabulkuDaty(nazevTabulky);

        //debug
        //obsahTabulky = this.seznamTabulek

        /*
        for (var i = 0; i < this.seznamTabulek.length; i++) { 
            nazevTabulky = this.seznamTabulek[i];
            obsahTabulky = this.naplnPrislusnouTabulkuDaty(nazevTabulky);
            this.vypisujDataDoKonzole("obsahTabulky", obsahTabulky ,"naplnPrislusnouTabulkuDaty");
        }
        */

        return (obsahTabulky);

    }

    vratSeznamTabulek(){

        var text;
        var jednaSeODataTabulky;
        
        for (var i = 0; i < this.jsTreeJSONdata.length; i++) { 
            text = this.jsTreeJSONdata[i].text;
            jednaSeODataTabulky = this.detekujZeSeJednaOKoncovaData(text);
            if(jednaSeODataTabulky == true){
                this.vytvorSeznamTabulek(i);
            }
        }
    }

    // u dat kde je napr.  --> "id : node_1" --> vrati true
    detekujZeSeJednaOKoncovaData(text){

        var n;
        var jednaSeODataTabulky;

        jednaSeODataTabulky = "";

        if(text != undefined){
            n = text.search(":");
            if(n > -1){
                jednaSeODataTabulky = true;
            }  
            else{
                jednaSeODataTabulky = false;
            }  
        }
        
        return(jednaSeODataTabulky);
    }

    vytvorSeznamTabulek(index){

        var parent;
        parent = this.jsTreeJSONdata[index].parent;

        if(this.seznamTabulek.includes(parent) == false){
            this.seznamTabulek.push(parent);
        }
        
    }

    naplnPrislusnouTabulkuDaty(nazevTabulky){

        var text;
        var parent;
        var obsahTabulky = [];
        var jednaSeODataTabulky;
        var radekTabulky;
        var prvniRadekTabulky;

        //vlozi do tabulky jeho nazev
        prvniRadekTabulky = {"nazevTabulky" : nazevTabulky};
        obsahTabulky.push(prvniRadekTabulky);

        //vlozi do tabulky ostatni radky
        for (var i = 0; i < this.jsTreeJSONdata.length; i++) { 
            text = this.jsTreeJSONdata[i].text;
            jednaSeODataTabulky = this.detekujZeSeJednaOKoncovaData(text);
            if(jednaSeODataTabulky == true){
                parent = this.jsTreeJSONdata[i].parent;
                if(parent == nazevTabulky){
                    radekTabulky = this.vratRadekTabulky(text)
                    obsahTabulky.push(radekTabulky);
                }
            }
        }

        return(obsahTabulky);

    }

    vratRadekTabulky(text){

        var sloupce;
        var textSloupce;
        var sloupecA;
        var sloupecB;
        sloupce = text.split(":");

        sloupecA = sloupce[0].replace(" ","");
        sloupecB = sloupce[1].replace(" ","");

        textSloupce = {"sloupecA" : sloupecA, "sloupecB" : sloupecB};

        return(textSloupce);

    }


    vytvorPoleSTabulkou(){
        var radekSNazvemTabulky;
        var beznyRadek;
        var tabulka = [];

        radekSNazvemTabulky = {tabulka:"0-0-0-0-2-0-0"};
        beznyRadek = {sloupecA:"id1", sloupecB: "node_2"};
        tabulka.push(radekSNazvemTabulky);
        beznyRadek = {sloupecA:"id1", sloupecB: "node_2"};
        tabulka.push(beznyRadek);
        beznyRadek = {sloupecA:"id1", sloupecB: "node_2"};
        tabulka.push(beznyRadek);
        
    }

}

//Odebere (skryje) posledni uroven ze stromu 
//data jsou ulozena v tabulkach
class odstranPosledniUrovenZeStromu{

    constructor(jsTreeOrig){
        //jsTreeTab jsou data pro vykresleni stromu, avsak bez posledni urovne
        // - ktera je v tabulkach
        this.jsTreeTab = [];

        //jsTreeOrig jsou originalni data
        this.jsTreeOrig = jsTreeOrig;

    }

   // jsTreeTabStart(){
   //     this.vypisujDataDoKonzole("jsTreeTab", this.jsTreeTab ,"jsTreeTabStart");
   // }

    getData(){
        return(this.jsTreeTab);
    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
        //console.log(promenna);
    } 

    //vytvori this.jsTreeTab
    vytvorNovaData(){

        var text;
        var radek;
        var maSeRadekVymazat;

        for (var i = 0; i < this.jsTreeOrig.length; i++) { 
            radek = this.jsTreeOrig[i];
            text = radek.text;
            maSeRadekVymazat = this.detekujRadekKOdstraneni(text);
            if(maSeRadekVymazat != true){
                this.jsTreeTab.push(radek);
            }
        }

        
    }


    detekujRadekKOdstraneni(text){

        var n;
        var radekOdstranit;

        if(text != undefined){
            n = text.search(":");
            if(n > -1){
                radekOdstranit = true;
            }  
            else{
                radekOdstranit = false;
            }  
        }
        
        return(radekOdstranit);

    }

    vykresliJsTree(){
        $('#jstree').jstree({
            'core': {
                'data': this.jsTreeTab
            }
        });
    }

}

//prida tabulku na pozadovanou uroven
class pridejTabulkuDoStromu{

    constructor(jsTreeTab){
        //jsTreeTab jsou data zkracenehostromu (bez poslednich urovni)
        this.jsTreeTab = jsTreeTab;

        //jsTreeNew jsou data s pridanou tabulkou
        this.jsTreeNew = [];

    }

    vypisujDataDoKonzole(nazevPromenne, promenna, nazevMetody){
        //console.log("      " + nazevPromenne + "     :     " + nazevMetody);
        //console.log(promenna);
    } 

    getData(){
        return(this.jsTreeNew);
    }

    pridejTabulkuNaPozadovanouUroven(){

        var uroven;
        var tabulka = [];
        var indexKamVkladatData;
        var radkyKZapisu;

        uroven = "0-0-0-0-2-0-0";
        tabulka[0] = {nazevTabulky: "0-0-0-0-2-0-0"};
        tabulka[1] = {sloupecA: "id1", sloupecB: "node_2"}
        tabulka[2] = {sloupecA: "id2", sloupecB: "node_2"};
        tabulka[3] = {sloupecA: "id3", sloupecB: "node_2"};

        indexKamVkladatData = this.vratPozadovanyIndexKamVkladatData(uroven);
        radkyKZapisu = this.vytvorRadkyKZapisu(tabulka);
        this.vlozitRadky(radkyKZapisu, indexKamVkladatData);

        this.vypisujDataDoKonzole("jsTreeTab", this.jsTreeTab ,"pridejTabulkuNaPozadovanouUroven");
        this.vypisujDataDoKonzole("indexKamVkladatData", indexKamVkladatData ,"pridejTabulkuNaPozadovanouUroven");
        this.vypisujDataDoKonzole("radkyKZapisu", radkyKZapisu ,"pridejTabulkuNaPozadovanouUroven");
    }

    vlozitRadky(radkyKZapisu, vlozitZaIndex){

        var pocetRadku;
        var i1;
        var i2;
        var radek;

        i1 = -1
        i2 = -1
        pocetRadku = this.jsTreeTab.length + radkyKZapisu.length;

        for (var i = 0; i < pocetRadku + 1; i++) { 

            if(i < vlozitZaIndex-1){
                i1 = i1 + 1;
                radek = this.jsTreeTab[i1];
                this.jsTreeNew.push(radek);
            }

            if(i >= vlozitZaIndex){
                if(i2 < radkyKZapisu.length-1){
                    i2 = i2 + 1;
                    radek = radkyKZapisu[i2];
                    this.jsTreeNew.push(radek);
                } 
                else{
                    i1 = i1 + 1;
                    radek = this.jsTreeTab[i1];
                    this.jsTreeNew.push(radek);
                }
            }

        }

        
        this.vypisujDataDoKonzole("vlozitZaIndex", vlozitZaIndex ,"vlozitRadky");
        this.vypisujDataDoKonzole("this.jsTreeNew", this.jsTreeNew ,"vlozitRadky");

    }

    vratPozadovanyIndexKamVkladatData(pozadovanaUroven){

        var id;
        var hledanyIndex;
        var hledanyIndex = -1;

        for (var i = 0; i < this.jsTreeTab.length; i++) { 
            id = this.jsTreeTab[i].id
            if(id == pozadovanaUroven){
                hledanyIndex = i;
            }
        }
        
        return(hledanyIndex);

    }

    vytvorRadkyKZapisu(tabulka){

        var radkyKZapisu = [];
        var radekKZapisu;

        for (var i = 1; i < tabulka.length; i++) { 
            radekKZapisu = this.vratRadekKZapisu(tabulka, i)
            radkyKZapisu.push(radekKZapisu);
        }  
        
        return(radkyKZapisu);

    }

    vratRadekKZapisu(tabulka, i){

        var id;
        var parent;
        var text;
        var hodnota;
        var klic;

        var radek;

        parent = tabulka[0].nazevTabulky;
        id = parent + "-" + (i-1);
        klic = tabulka[i].sloupecA;
        hodnota = tabulka[i].sloupecB;
        text = klic + " : " + hodnota;

        radek = {"id": id, "parent": parent, "text": text};

        return(radek);
 
    }


    vykresliJsTree(){
        /*
        $('#jstree').jstree({
            'core': {
                'data': this.jsTreeNew
            }
        });
        */
    }


}



export const ziskejJSON2 = ((jsonArray) =>  {

//export function vykresliStrom(){

    //#####################
    //START PROGRAMU
    //#####################

    var data2;

    //inicializuje tridu s daty
    //var dataJSON = new jsonDataStore();
    //var jsonArray = dataJSON.jsonArray;

    console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
    console.log(jsonArray);
    console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");

    //puvodni kod
    var urovneDataPole;
    var urovneJSONData = new dataJSONurovne(jsonArray);
    urovneJSONData.pripravData();
    urovneDataPole = urovneJSONData.getData();

    //oprava chyby
    var urovneDataPoleOprava;
    var opravaUrovneJSONData = new opravaJSONurovne(urovneDataPole, jsonArray);
    opravaUrovneJSONData.opravaStart();
    urovneDataPoleOprava = opravaUrovneJSONData.getData();

    //slouceni dat bez chyby a s opravou chyby
    var sloucit = new slucData(urovneDataPole, urovneDataPoleOprava);
    sloucit.slucData();
    urovneDataPole = sloucit.getData();

    ///oprava chyby2
    var urovneDataPoleOprava2;
    var opravaUrovneJSONData2 = new opravaJSONurovne2(urovneDataPole, jsonArray);
    opravaUrovneJSONData2.oprava2Start();
    urovneDataPoleOprava2 = opravaUrovneJSONData2.getData();

    //opet sloucime data
    var sloucit = new slucData(urovneDataPole, urovneDataPoleOprava2);
    sloucit.slucData();
    urovneDataPole = sloucit.getData();

    //co ktera oprava znamena - staci jen zakomentovat a spustit
    // strom bude vykreslen, ale s chybejicimi vetvemi
    //oprava chyby  - opravaStart()
    var urovneDataPoleOprava;
    var opravaUrovneJSONData = new opravaJSONurovne(urovneDataPole, jsonArray);
    opravaUrovneJSONData.opravaStart();
    urovneDataPoleOprava = opravaUrovneJSONData.getData();

    //slouceni dat bez chyby a s opravou chyby
    var sloucit = new slucData(urovneDataPole, urovneDataPoleOprava);
    sloucit.slucData();
    urovneDataPole = sloucit.getData();



    //generuje JSON pro vykresleni JSTree
    var jsTreeData;
    var jsTreeJSONdata = new dataJSONjsTree(urovneDataPole);
    jsTreeJSONdata.dataJSONjsTreeStart();
    jsTreeData = jsTreeJSONdata.getData();

    //console.log(jsTreeJSONdata);


    //######################################
    //vytvari tabulky
    //kod je pripraven na nodeJS - uvnitr se ziskavaji jednotlive tabulky
    var tabulka;
    var jsTreeTabulky = new tabulkyKoncovychDat(jsTreeData);
    jsTreeTabulky.vytvorTabulkyStart("");


    //############################################
    // skryje posledni uroven
    // vytvori 2. JSON pro vykresleni stromu (zkraceny)
    // odstrani pouze pozadovane urovne z jsTreeData
    var jsTreeZkracData;
    var jsTreeZkrac = new odstranPosledniUrovenZeStromu(jsTreeData);
    jsTreeZkrac.vytvorNovaData();
    jsTreeZkracData = jsTreeZkrac.getData();
    //jsTreeZkrac.vykresliJsTree();

    //console.log(jsTreeZkracData);


    //##############################################################
    // Pro zobrazeni/skryti vsech urovni je potreba odkoment./zakom.
    // radek 184 (priblizne), kde je:
    // this.vykresliJsTree();

    //##############################################################
    // doplni tabulku do stromu na pozadovanou uroven
    
    var jsTreedoplnData;
    var jsTreedopln = new pridejTabulkuDoStromu(jsTreeZkracData);
    jsTreedopln.pridejTabulkuNaPozadovanouUroven();
    jsTreedoplnData = jsTreedopln.getData();
    //jsTreedopln.vykresliJsTree();
    
    //return(this.jsTreeNew);

    //data2 = jsondata;
    //data2 = HlavniStromJSON();

    //plna data
    data2 = jsTreeData;

    //Zkracena data
    //data2 = jsTreedoplnData;

    return (data2);

});


export const ziskejJSONZkraceny = ((jsTreeData) =>{

    //############################################
    // skryje posledni uroven
    // vytvori 2. JSON pro vykresleni stromu (zkraceny)
    // odstrani pouze pozadovane urovne z jsTreeData
    var jsTreeZkracData;
    var jsTreeZkrac = new odstranPosledniUrovenZeStromu(jsTreeData);
    jsTreeZkrac.vytvorNovaData();
    jsTreeZkracData = jsTreeZkrac.getData();

    return (jsTreeZkracData);

});


export const vytvorTabulku = ((jsTreeData, idTabulky) =>{

    //######################################
    //vrati data pro vykresleni konkretni tabulky
    var tabulkyData;
    var jsTreeTabulky = new tabulkyKoncovychDat(jsTreeData);
    tabulkyData = jsTreeTabulky.vytvorTabulkyStart(idTabulky);

    return(tabulkyData)

}); 



//export const ziskejJSON = ((r) =>  {
//    return this.jsTreeNew;
//})

/*
//#####################
//START PROGRAMU
//#####################

//puvodni kod
var urovneDataPole;
var urovneJSONData = new dataJSONurovne(jsonArray);
urovneJSONData.pripravData();
urovneDataPole = urovneJSONData.getData();

//oprava chyby
var urovneDataPoleOprava;
var opravaUrovneJSONData = new opravaJSONurovne(urovneDataPole, jsonArray);
opravaUrovneJSONData.opravaStart();
urovneDataPoleOprava = opravaUrovneJSONData.getData();

//slouceni dat bez chyby a s opravou chyby
var sloucit = new slucData(urovneDataPole, urovneDataPoleOprava);
sloucit.slucData();
urovneDataPole = sloucit.getData();

///oprava chyby2
var urovneDataPoleOprava2;
var opravaUrovneJSONData2 = new opravaJSONurovne2(urovneDataPole, jsonArray);
opravaUrovneJSONData2.oprava2Start();
urovneDataPoleOprava2 = opravaUrovneJSONData2.getData();

//opet sloucime data
var sloucit = new slucData(urovneDataPole, urovneDataPoleOprava2);
sloucit.slucData();
urovneDataPole = sloucit.getData();

//co ktera oprava znamena - staci jen zakomentovat a spustit
// strom bude vykreslen, ale s chybejicimi vetvemi
//oprava chyby  - opravaStart()
var urovneDataPoleOprava;
var opravaUrovneJSONData = new opravaJSONurovne(urovneDataPole, jsonArray);
opravaUrovneJSONData.opravaStart();
urovneDataPoleOprava = opravaUrovneJSONData.getData();

//slouceni dat bez chyby a s opravou chyby
var sloucit = new slucData(urovneDataPole, urovneDataPoleOprava);
sloucit.slucData();
urovneDataPole = sloucit.getData();



//generuje JSON pro vykresleni JSTree
var jsTreeData;
var jsTreeJSONdata = new dataJSONjsTree(urovneDataPole);
jsTreeJSONdata.dataJSONjsTreeStart();
jsTreeData = jsTreeJSONdata.getData();

//console.log(jsTreeJSONdata);


//######################################
//vytvari tabulky
//kod je pripraven na nodeJS - uvnitr se ziskavaji jednotlive tabulky
var tabulka;
var jsTreeTabulky = new tabulkyKoncovychDat(jsTreeData);
jsTreeTabulky.vytvorTabulkyStart();


//############################################
// skryje posledni uroven
// vytvori 2. JSON pro vykresleni stromu (zkraceny)
// odstrani pouze pozadovane urovne z jsTreeData
var jsTreeZkracData;
var jsTreeZkrac = new odstranPosledniUrovenZeStromu(jsTreeData);
jsTreeZkrac.vytvorNovaData();
jsTreeZkracData = jsTreeZkrac.getData();
//jsTreeZkrac.vykresliJsTree();

//console.log(jsTreeZkracData);


//##############################################################
// Pro zobrazeni/skryti vsech urovni je potreba odkoment./zakom.
// radek 184 (priblizne), kde je:
// this.vykresliJsTree();

//##############################################################
// doplni tabulku do stromu na pozadovanou uroven
var jsTreedoplnData;
var jsTreedopln = new pridejTabulkuDoStromu(jsTreeZkracData);
jsTreedopln.pridejTabulkuNaPozadovanouUroven();
jsTreedoplnData = jsTreedopln.getData;
jsTreedopln.vykresliJsTree();
*/