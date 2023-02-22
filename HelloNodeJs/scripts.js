
$(function() {

    //tlacitko pro vykresleni stromu (GET)
    $('#btn1').on('click', function() {

        var $country = $("#country").val();

        ziskejDataProVykresleniStromu($country);
    });


});


function ziskejDataProVykresleniStromu(country){
   
    var urlCountry;
    urlCountry = '/vykresliStrom/' + country;

    $.ajax({
        //url: '/vykresliStrom/1',
        url: urlCountry,
        contentType: 'application/json',
        success: function(response) {

            //ziska data (JSON) pro vykresleni stromu
            console.log("ziskejDataProVykresleniStromu");
            console.log(response.jsondata);

            vykresliStrom(response.jsondata);
            zapisDataDoTextArea(response.SQLquery);
        }
    });
}


//-----------------------------------------------------------------
//funkce pro vykresleni stromu
function vykresliStrom(vykresliJsTreeData){

    try{
        $('#SimpleJSTree').jstree(true).refresh();
    }
    catch (e){
        console.log("probiha 1. vykresleni stromu, nelze nic refreshnout")
    }
    finally {
        $('#SimpleJSTree').jstree({
            'core': {
            'data': vykresliJsTreeData
            }
        });
    } 
}

function zapisDataDoTextArea(SQLquery){

    $('#textarea').val(SQLquery);

}
