  var myval;
        var curList;
        var myListobj;
        var initialized_advert = false;
        var onready_adverts = function () {
            return;
            if (initialized_advert) return;
            initialized_advert = true;
            var data = {
                "adverts": ["home", "brochure", "syllabus", "exam", "others"]
            }
            dopost({
                "type": "POST"
                , "url": api_link + "/getadverts.php"
                , "data": data
                , "success": function (response) {
                    try {
                        var out = {};
                        advertImages = JSON.parse(response);
                        for (var page in advertImages) {
                            var advertlist = [];
                            advertlist = advertImages[page];
                            switch (page) {
                            case "home":
                                break;
                            case "brochure":
                                break;
                            case "syllabus":
                                break;
                            case "exam":
                                break;
                            case "others":
                                break;
                            default:
                                advertlist = [];
                            }
                            var advertDiv = $('<div/>');
                            if (advertlist.length == 0) {
                                advertDiv.addClass('slider');
                                advertDiv.html('<img src="img/backgrounds/bf2.jpg" /><img src="img/backgrounds/bf3.jpg"/>');
                            }
                            else {
                                advertDiv.addClass('slider');
                                //var ul = $('<div/>');
                                //ul.addClass('swiper-wrapper');
                                for (var idx in advertImages[page]) {
                                    // var li = $("<div/>");
                                    //li.addClass("swiper-slide");
                                    //li.css('cursor','pointer');
                                    var img = $("<img/>");
                                    img.attr('src', advertImages[page][idx]["image"]);
                                    if (advertImages[page][idx]["link"] != "") {
                                        img.attr('website', advertImages[page][idx]["link"]);
                                        img.attr('onclick', "openBFUrl($(this).attr('website'));");
                                    }
                                    //li.append(img);
                                    //ul.append(li);
                                    advertDiv.append(img);
                                }
                                //advertDiv.append(ul);
                            }
                            out[page] = advertDiv;
                        }
                        console.log("TESTING DEBUG");
                        firstSlide(out['home'], out['brochure'], out['syllabus'], out['exam'], out['others']);
                    }
                    catch (e) {
                        initialized_advert = false;
                        console.error(e.message);
                        window.setTimeout(onready_adverts, 300);
                    }
                }
                , "error": loadingerr
            });
        };


 var initialize_faculty = false;
        var onready_faculty = (function () {
            return;
            if (initialize_faculty == true) return;
            initialize_faculty = true;
            dopost({
                "url": api_link + "/loadxmlfile.php"
                , "type": "POST"
                , "data": {
                    "path": "/jamb/faculties.xml"
                }
                , "success": function (response) {
                    try {
                        var res = JSON.parse(response);
                        exams['combinations']['UTME'] = [];
                        $.each(res.facultytable.faculty, function (i, item) {
                            exams['combinations']['UTME'][exams['combinations']['UTME'].length] = item.facultyname;
                            if (exams['combinations'].hasOwnProperty(item.facultyname)) {
                                for (var idx in exams['combinations'][item.facultyname]) {
                                    subjectsJSON[subjectsJSON.length] = {
                                        "class": item.facultyname
                                        , "code": exams['combinations'][item.facultyname].code
                                        , "examtype": "OLEVEL"
                                        , "subject": exams['combinations'][item.facultyname].subject
                                    };
                                }
                            }
                            else subjectsJSON[subjectsJSON.length] = {
                                "class": item.facultyname
                                , "code": "BF06"
                                , "examtype": "OLEVEL"
                                , "subject": "ENGLISH LANGUAGE"
                            };
                        });
                    }
                    catch (e) {
                        console.error(e.message);
                    }
                }
                , "error": function () {}
            });
        })

