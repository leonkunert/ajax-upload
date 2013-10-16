$('body').on('change', '#dropzone', function() {
            // Post-Daten vorbereiten
            var data = new FormData();
            for (var i = 0; i < this.files.length; i++) {
                data.append('file'+i, this.files[i]);
            };
            data.append('funktion', 'upload_file');
            data.append('json', 'true');
            // Ajax-Call
            $.ajax({
                url: '/modules/kaufcontainer/kaufcontainer.php',
                data: data,
                type: 'POST',
                processData: false,
                contentType: false,
                success: function(result) {
                    console.log(result);
                    if(result.success) {
                        display_picture(result.data);
                    } else {
                        console.log(result.error);
                    }
                }
            });
        });
