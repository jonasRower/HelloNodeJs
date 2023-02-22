
class SQLDotazy{
    constructor(){
    

    }


    vratpPleJedinecnychRodicu(jsondata){

        var radek;
        var rodic;
        var rodicJeJizDuplicitni;

        var poleJedinecnychRodicu = [];
        poleJedinecnychRodicu.push('#');

        for (var i = 0; i < Object.values(jsondata).length; i++) {
            radek = Object.values(jsondata)[i];
            rodic = radek.parent;

            rodicJeJizDuplicitni = poleJedinecnychRodicu.includes(rodic);
            if(rodicJeJizDuplicitni == false){
                poleJedinecnychRodicu.push(rodic);
            }
        }

        return(poleJedinecnychRodicu);

    }


    vratPolePolozekPatriciPodJednohoRodice(jsondata, rodicPozad){

        var radek;
        var rodic;
        var polozka;
        var poleIndexuRadku = [];

        for (var i = 0; i < Object.values(jsondata).length; i++) {
            radek = Object.values(jsondata)[i];
            rodic = radek.parent;
            polozka = radek.text;

            if(rodic == rodicPozad){
                poleIndexuRadku.push(polozka);
            }

        }    

        return(poleIndexuRadku);

    }


    vratNazevRodice(jsondata, idPozad){

        var nazevPolozky;
        var radek;
        var rodic;
        var id;

        for (var i = 0; i < Object.values(jsondata).length; i++) {
            radek = Object.values(jsondata)[i];
            rodic = radek.parent;
            id = radek.id;

            if(id == idPozad){
                nazevPolozky = radek.text;
                break;
            }

        }

        return(nazevPolozky)

    }


    //vraci string pro vytvoreni tabulky s vice radky (ale jednim sloupcem)

    vratTeloCreateTableViceRadku(nazevTabulky){

        var SQLquery;

        SQLquery = 'CREATE TABLE IF NOT EXISTS `' + nazevTabulky + '` (`' + nazevTabulky + '` varchar(45));';

        return(SQLquery);

    }   
    

    //vraci string pro vytvoreni tabulky s jednim radkem (ale vice radky)

    vratTeloCreateTableJedenRadek(nazevRodice, polePolozekJedenRodic){

        var SQLquery;
        var polozka;
        var posledniZnak;

        if(polePolozekJedenRodic[0] == '0'){
            this.vratTeloCreateTableViceRadku(nazevRodice);
        }

        SQLquery = 'CREATE TABLE IF NOT EXISTS `' + nazevRodice + '` (';

        for (var i = 0; i < polePolozekJedenRodic.length; i++) {
            polozka = polePolozekJedenRodic[i];
            SQLquery = SQLquery + '\n      `' +  polozka + '` varchar(45)';
            if(i == polePolozekJedenRodic.length-1){
                SQLquery = SQLquery + ');'
            }
            else {
                SQLquery = SQLquery + ','
            }
        }

        posledniZnak = SQLquery.slice(SQLquery.length-1)

        //pokud vygeneruje nesmysl, nastavi ho na undefined
        if(posledniZnak != ';'){
            SQLquery = undefined;
        }

        return(SQLquery);

    }


    vratTeloCreateTable(nazevRodice, polePolozekJedenRodic){

        var SQLquery;

        if(polePolozekJedenRodic[0] == '0'){
            SQLquery = this.vratTeloCreateTableViceRadku(nazevRodice);
        }
        else {
            SQLquery = this.vratTeloCreateTableJedenRadek(nazevRodice, polePolozekJedenRodic);
        }

        return(SQLquery);

    }    

    
    //nazev sloupce = nazev tabulky
    //polozky v jednotlivych sloupcich jsou polozky na radcich
    
    vratTeloInsertIntoViceRadku(nazevSloupce, polozky){

        var SQLquery;
        var polozka;

        SQLquery = 'INSERT INTO `' + nazevSloupce + '` (`' + nazevSloupce + '`) VALUES';

        for (var i = 0; i < polozky.length; i++) {
            polozka = polozky[i];
            SQLquery = SQLquery + '\n      (`' + polozka + '`)';

            if(i == polozky.length-1){
                SQLquery = SQLquery + ');'
            }
            else {
                SQLquery = SQLquery + ','
            }
        }    

        return(SQLquery);

    }


    vratTeloInsertIntoJedenRadek(nazevRodice, sloupce, polozky){

        var SQLquery;
        var polozka;
        var sloupec;
        var posledniZnak;
       

        SQLquery = 'INSERT INTO `' + nazevRodice + '` (';

        //zapise nazvy sloupcu
        for (var i = 0; i < sloupce.length; i++) {
            sloupec = sloupce[i];
            SQLquery = SQLquery + ' `' +  sloupec;
            if(i == sloupce.length-1){
                SQLquery = SQLquery + '`) VALUES \n('
            }
            else {
                SQLquery = SQLquery + '`, '
            }
        }

        //zapise polozky
        for (var i = 0; i < polozky.length; i++) {
            polozka = polozky[i];
            SQLquery = SQLquery + ' `' +  polozka;
            if(i == sloupce.length-1){
                SQLquery = SQLquery + ');'
            }
            else {
                SQLquery = SQLquery + ','
            }
        }

        posledniZnak = SQLquery.slice(SQLquery.length-1)

        //pokud vygeneruje nesmysl, nastavi ho na undefined
        if(posledniZnak != ';'){
            SQLquery = undefined;
        }

        return(SQLquery);


    }    


    vratTeloInsertInto(nazevRodice, sloupce, polozky){

        var SQLquery;

        if(sloupce[0] == '0'){
            //pokud je nazev sloupce cislo, pak preusporada data v tabulce
            SQLquery = this.vratTeloInsertIntoViceRadku(nazevRodice, polozky);
        }
        else {
            SQLquery = this.vratTeloInsertIntoJedenRadek(nazevRodice, sloupce, polozky);
        }

        return(SQLquery);

    }


    rozdelPolozkyNaNazvySloupcuAPolozky(polePolozekJedenRodic){

        var polozkaOrig;
        var polozkaOrigPole;
        var nazevSloupce;
        var polozka;
        var polePolozek = [];
        var poleNazvuSloupcu = [];
        var obsahujePolozkaNazevSloupce;
        var data;

        for (var i = 0; i < polePolozekJedenRodic.length; i++) {
            polozkaOrig = polePolozekJedenRodic[i];
            obsahujePolozkaNazevSloupce = polozkaOrig.includes(" :" );
            if(obsahujePolozkaNazevSloupce == true){
                polozkaOrigPole = polozkaOrig.split(" : ");
                polozka = polozkaOrigPole[1];
                nazevSloupce = polozkaOrigPole[0];
                
                polePolozek.push(polozka);
                poleNazvuSloupcu.push(nazevSloupce);
            }
            
        }  
        
        console.log(polePolozekJedenRodic);

        data = { "NazvySloupcu" : poleNazvuSloupcu, 
                 "Polozky" : polePolozek };


        return (data);

    }


    vratSQLquery(jsondata, poleJedinecnychRodicu){

        var idRodice;
        var polePolozekJedenRodic = [];
        var nazevRodice;
        var data;
        var nazvySloupcu;
        var polozky;

        var SQLCreateTable;
        var SQLInsertInto;

        var SQLquery = "";
        

        for (var i = 0; i < poleJedinecnychRodicu.length; i++) {
            
            idRodice = poleJedinecnychRodicu[i];
            nazevRodice = this.vratNazevRodice(jsondata, idRodice);
            polePolozekJedenRodic = this.vratPolePolozekPatriciPodJednohoRodice(jsondata, idRodice);
            data = this.rozdelPolozkyNaNazvySloupcuAPolozky(polePolozekJedenRodic);

            nazvySloupcu = data.NazvySloupcu;
            polozky = data.Polozky;

            
            SQLCreateTable = this.vratTeloCreateTable(nazevRodice, nazvySloupcu);
            SQLInsertInto = this.vratTeloInsertInto(nazevRodice, nazvySloupcu, polozky);


            //prida dotazy do jedne promenne
            if(SQLCreateTable != undefined){
                SQLquery = SQLquery + SQLCreateTable + '\n\n\n';
            }
            if(SQLInsertInto != undefined){
                SQLquery = SQLquery + SQLInsertInto + '\n\n\n';
            }    

        }   

        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log(SQLquery);
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        
        return(SQLquery);

    }

}

export const ziskejSQL = ((jsondata) =>  {

    var poleJedinecnychRodicu = [];
    var SQLquery;

    var vytvorSQLDotazy = new SQLDotazy();

    poleJedinecnychRodicu = vytvorSQLDotazy.vratpPleJedinecnychRodicu(jsondata);
    SQLquery = vytvorSQLDotazy.vratSQLquery(jsondata, poleJedinecnychRodicu);

    return(SQLquery);

});















