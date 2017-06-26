
$(document).ready(function(){



    $("#formFileSubmit_avec").click(function(e){
        e.preventDefault();

        $.ajax({
                url: $("#url_serca_direct_avec").val(),
                json: true,
                async: true,
                type : 'GET',  
                tryCount : 0,
                retryLimit : 4,
                timeout: 7000, // pose une limite de temps sur les appels, en dessus de ce temps le servce distant est Ko
                crossDomain: true,
                success : function(qualificationResult) {
                    $("#form_group_serca_direct_avec_resultat").show();
                    $("#form_group_serca_direct_avec_resultat_text").text('OK' + JSON.stringify(qualificationResult, undefined, 2));
                },
                error : function(xhr, textStatus, errorThrown ) {
                    $("#form_group_serca_direct_avec_resultat").show();
                    $("#form_group_serca_direct_avec_resultat_text").text('Erreur (voir les anomalies javascript dans le navigateur):' + textStatus + ' ' + JSON.stringify(errorThrown));        
                }
            });
    });


    $("#formFileSubmit_sans").click(function(e){
        e.preventDefault();

        $.ajax({
                url: $("#url_serca_direct_sans").val(),
                json: true,
                async: true,
                type : 'GET',  
                tryCount : 0,
                retryLimit : 4,
                timeout: 7000, // pose une limite de temps sur les appels, en dessus de ce temps le servce distant est Ko
                crossDomain: true,
                success : function(qualificationResult) {
                    $("#form_group_serca_direct_sans_resultat").show();
                    $("#form_group_serca_direct_sans_resultat_text").text('OK' + JSON.stringify(qualificationResult, undefined, 2));
                },
                error : function(xhr, textStatus, errorThrown ) {
                    $("#form_group_serca_direct_sans_resultat").show();
                    $("#form_group_serca_direct_sans_resultat_text").text('Erreur (voir les anomalies javascript dans le navigateur):' + textStatus + ' ' + JSON.stringify(errorThrown));       
                }
            });
    });

});