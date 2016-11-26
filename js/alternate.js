$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: animal,
            format: "jason"
        },
        function (data) {

        }
        );