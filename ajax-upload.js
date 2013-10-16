$form_div.on("click", ".insert", function() {
            validate_form(function() {
                var typ          = $("#typ").val(),
                    bezeichnung  = $("#bezeichnung").val(),
                    beschreibung = $("#beschreibung").val(),
                    preis        = $("#preis").val();
                add_container({
                    "typ":typ,
                    "bezeichnung": bezeichnung,
                    "beschreibung":beschreibung,
                    "preis":preis
                });
                $form_div.slideUp();
                clear_form();
            });
        });
