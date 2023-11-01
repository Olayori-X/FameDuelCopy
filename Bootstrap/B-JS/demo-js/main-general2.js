var courses=null;
var courses_faculties=null;
var schools=null;
var courses_schools=null;
var faculties=null;
var global_fn;
function decodehtml(text){
var decoded = $('<div/>').html(text).text();
return decoded;
}
function loadxml(xml,fn){
    global_fn = fn;
    switch(xml){
        case "courses":
            if(courses===null){
                $.blockUI({"message":"<img src='img/loader.gif'>"})
                dopost({"url" : api_link + "/loadxmlfile.php",
                        "type":"POST",
                        "data":{"path":"/jamb/courses.xml"},
                        "success":function(response){
                            $.unblockUI('hide');
                            // console.log(response);

                            try{
                                json = JSON.parse(response);
                            }catch(e){
                                response+="]}}}";
                            }

                            courses = JSON.parse(response.replace(/@/g , ""));
                            //console.log("displaying courses");
                            // console.log(response);
                            if(typeof global_fn === 'function'){
                                global_fn();
                            }
                            if(schools===null)
                                loadxml("schools");
                        },
                        "error":function(){}
                       });

            } else{
                if(typeof global_fn === 'function'){
                    global_fn();
                }

            }
            break;
        case "schools":
            if(schools===null){
                dopost({"url" : api_link + "/loadxmlfile.php",
                        "type":"POST",
                        "data":{"path":"/jamb/schools.xml"},
                        "success":function(response2){
                            // console.log("schools below");
                            console.log(response2);
                            schools = JSON.parse(response2.replace(/@/g , ""));
                            correctSchoolsJSON();
                            if(typeof global_fn === 'function'){
                                global_fn();
                                //console.log(response2);
                                //  JSON.parse(response.replace(/@/g , ""))
                            }

                        },
                        "error":function(){}
                       });
            }else {
                if(typeof global_fn === 'function'){
                    global_fn();
                }

            }
            break;

        case "courses-schools":
            if(courses_schools===null){
                $.blockUI({"message":"<img src='img/loader.gif'>"})
                dopost({"url" : api_link + "/loadxmlfile.php",
                        "type":"POST",
                        "data":{"path":"/jamb/courses-schools.xml"},
                        "success":function(response3){
                            $.unblockUI('hide');
                            /*  console.log("courses schools below");
                            //console.log(response3);*/
                            courses_schools = JSON.parse(response3.replace(/@/g , ""));
                            if(typeof global_fn === 'function'){
                                global_fn();
                            }else {
                                if(schools===null){
                                    loadxml("schools");
                                }
                            }
                            //console.log(response3);
                        },
                        "error":function(){}
                       });
            }else{
                if(typeof global_fn === 'function'){
                    global_fn();
                }  else  {
                    if(schools===null){
                        loadxml("schools");
                    }
                }
            }
            break;
        case "faculties":
            if(faculties===null){
                dopost({"url" : api_link + "/loadxmlfile.php",
                        "type":"POST",
                        "data":{"path":"/jamb/faculties.xml"},
                        "success":function(response){
                            faculties = JSON.parse(response);
                            if(typeof global_fn === 'function'){
                                global_fn();
                                //  console.log(response);
                            }

                        },
                        "error":function(){}
                       });
            }else{
                if(typeof global_fn === 'function'){
                    global_fn();
                }

            }
            break;
        case "courses-faculties":
            if(courses_faculties===null){
                $.blockUI({"message":"<img src='img/loader.gif'>"})
                dopost({"url" : api_link + "/loadxmlfile.php",
                        "type":"POST",
                        "data":{"path":"/jamb/courses-faculties.xml"},
                        "success":function(response2){
                            $.unblockUI('hide');
                            //faculties
                            //  var res = response2.replace("@", "");
                            courses_faculties = JSON.parse(response2.replace(/@/g , ""));
                            if(typeof global_fn === 'function'){
                                global_fn();
                            }  else  {
                                if(faculties===null){
                                    loadxml("faculties");
                                }

                            }
                            // console.log(courses_faculties);
                        },
                        "error":function(){}
                       });
            } else {
                if(typeof global_fn === 'function'){
                    global_fn();
                }  else  {
                    if(faculties===null){
                        loadxml("faculties");
                    }

                }
            }
            break;
    }

}
function correctSchoolsJSON()
{
    try{
                    if(schools.hasOwnProperty('schooltable'))
                            {
                                if(schools.schooltable.hasOwnProperty('type'))
                                {
                                    for(var idx in schools.schooltable['type'])
                                    {
                                        if(schools.schooltable['type'][idx].hasOwnProperty('category'))
                                        {
                                            if(schools.schooltable['type'][idx]['category'].constructor != [].constructor)
                                            {
                                                var xx = [];
                                                xx.push(schools.schooltable['type'][idx]['category']);
                                                schools.schooltable['type'][idx]['category'] = xx
                                            }

                                        }
                                    }
                                }
                            }
    }catch(e){console.error(e.message);}
}
! function(a) {
    "use strict";
    jQuery(document).on("ready", function() {

        dopost({"url" : api_link + "/loadxmlfile.php",
                "type":"POST",
                "data":{"path":"/jamb/schools.xml"},
                "success":function(response2){

                    schools = JSON.parse(response2.replace(/@/g , ""));
                    correctSchoolsJSON();
                    if(typeof global_fn === 'function'){
                        global_fn();
                        //console.log(response2);
                        //  JSON.parse(response.replace(/@/g , ""))
                    }

                },
                "error":function(){}
               });


        var dtype;
        var sindex;
        var selected_index;
        var course_cat,course_id;
        var courses_in_faculty = [];
        var courses_in_faculty_to_display = [];
        var selected_faculty_id;


        $('#schoolContent').on('click', '.school_type', function(e){
            e.preventDefault();
            var selected_index = $(this).attr('href');
            $('#InstitutionsInSchoolCategory').html('');
            $.each(schools.schooltable.type[selected_index].category, function(index,item){
                $('#InstitutionsInSchoolCategory').append('<a href="'+ index +'" class="category_item" dtype="'+selected_index+'"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+ item.name +'</li><a>');
            });
            $( "#schoolContent" ).hide( "slow", function() {
                // Animation complete.
                $("#back_to_e_brochure1").hide();
                $( "#back2" ).show();
                $( "#back3" ).hide();
                $( "#InstitutionsInSchoolCategory" ).show( "slow");
            });

        });

        $('#InstitutionsInSchoolCategoryContainer').on('click', '.category_item', function(e){
            e.preventDefault();

            var selected_index2 = $(this).attr('href');
            var dtype2 = $(this).attr('dtype');
            $('#InstitutionsInSchoolCategory2').html('');
            /*if(schools.schooltable.type[dtype2].category.constructor == {}.constructor)
            {
                var xx = [];
                xx.push(schools.schooltable.type[dtype2].category);
                schools.schooltable.type[dtype2].category = xx;
            }*/
            $.each(schools.schooltable.type[dtype2].category[selected_index2].school, function(index,item){
                $('#InstitutionsInSchoolCategory2').append('<a href="'+ index +'" class="school_item" dtype="'+dtype2+'" sindex="'+selected_index2+'"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+ item.schoolabbreviation +' | '+ item.schoolname +' | '+ item.state  +'</li><a>');
            });
            $( "#InstitutionsInSchoolCategory" ).hide( "slow", function() {
                // Animation complete.
                $("#back_to_e_brochure1").hide();
                $( "#back2" ).hide();
                $( "#back3" ).show();
                $( "#InstitutionsInSchoolCategory2" ).show( "slow");
            });
        });

        function fn_courses_schools_2(){
            //console.log("in fn_courses_schools_2");
            // console.log(courses);

            $('#InstitutionsInSchoolCategory3').html("");
            $.each(courses_schools.coursesschoollinks.link, function(index,item){
                //href="0"  dtype="2" sindex="0"
                if(item.schoolID == dtype+":"+sindex+":"+selected_index){
                    var exploded = item.courseID.split(":");
                    //console.log(item.courseID);

                    try{
                        if (typeof courses.coursetable.category[exploded[0]].course[exploded[1]].course !== 'undefined' || courses.coursetable.category[exploded[0]].course[exploded[1]].course !== null) {
                            $('#InstitutionsInSchoolCategory3').append('<a href="'+ exploded[1] +'" cat_id="'+ exploded[0] +'" class="course_item2"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+ courses.coursetable.category[exploded[0]].course[exploded[1]].course +'</li><a>');
                        }
                    }catch(e){
                    console.error(e.message);}
                }
            });

            $( "#InstitutionsInSchoolCategory2" ).hide( "slow", function() {
                // Animation complete.
                $("#back_to_e_brochure1").hide();
                $( "#back2" ).hide();
                $( "#back3" ).hide();
                $( "#back4" ).show();
                $( "#InstitutionsInSchoolCategory3" ).show( "slow");
            });
        }
        function fn_exploded(){
            if(courses_schools===null){
                loadxml("courses-schools",fn_courses_schools_2);
            } else{
                fn_courses_schools_2();
            }

        }
        function fn_courses_schools(){
            if(courses === null){
                loadxml("courses",fn_exploded);
            } else{
                fn_exploded();
            }
        }

        $('#InstitutionsInSchoolCategoryContainer').on('click', '.school_item', function(e){
            e.preventDefault();

            selected_index = $(this).attr('href');
            dtype = $(this).attr('dtype');
            sindex = $(this).attr('sindex');
            //alert( dtype +" "+sindex + " "+selected_index);

            var courses_in_institution = [];
            $('#InstitutionsInSchoolCategory3').html('');
            if(courses_schools===null){
                loadxml("courses-schools",fn_courses_schools);
            }else{
                fn_courses_schools();
            }
        });

        $('#browse_by_school_section').on('click', '#back2', function(f){
            f.preventDefault();
            $( "#InstitutionsInSchoolCategory" ).hide( "slow", function() {
                // Animation complete.

                $( "#schoolContent" ).show( "slow");
                $( "#back2" ).hide();
                $( "#back3" ).hide();
                $( "#back4" ).hide();
                $( "#back_to_e_brochure1" ).show();
            });
        });
        $('#browse_by_school_section').on('click', '#back3', function(f){
            f.preventDefault();
            $( "#InstitutionsInSchoolCategory2" ).hide( "slow", function() {
                // Animation complete.

                $( "#InstitutionsInSchoolCategory" ).show( "slow");

                $( "#back2" ).show();
                $( "#back3" ).hide();
                $( "#back4" ).hide();
                $( "#back_to_e_brochure1" ).hide();
            });
        });

        $('#browse_by_school_section').on('click', '#back4', function(f){
            f.preventDefault();
            $( "#InstitutionsInSchoolCategory3" ).hide( "slow", function() {
                // Animation complete.
                $( "#InstitutionsInSchoolCategory2" ).show( "slow");
                $( "#back2" ).hide();
                $( "#back3" ).show();
                $( "#back4" ).hide();
                $( "#back_to_e_brochure1" ).hide();
            });
        });

        $('#browse_by_faculty_section').on('click', '#back_to_faculty_list', function(f){
            f.preventDefault();
            $( "#coursesInFacultyContainer" ).hide( "slow", function() {
                // Animation complete.
                $( "#back_to_e_brochure2" ).show();
                $( "#back_to_faculty_list" ).hide();
                $( "#facultyContent" ).show( "slow");
            });
        });
        $('body').on('click', '.course_item2', function(f){
            f.preventDefault();
            var course_id = $(this).attr('href');
            var cat_id = $(this).attr('cat_id');
            //alert(course_id);
            //alert($(this).find('li').text());
            var e = "#table_view";
            b = "browse_by_faculty_btn";
            showCourseBrochure(e, b, course_id, "browse_by_school_section",cat_id);

        });

        function fn_courses_faculties() {
            courses_in_faculty = [];
            //find all the courses in courses_faculties variable aboe with current faculty id
            $.each(courses_faculties.coursesfacultylinks.link, function(i,item){
                //console.log("i is "+ i+" item is "+item);
                if(item.facultyID == selected_faculty_id){
                    //console.log(item);
                    var exploded = item.courseID.split(":");
                    // courses_in_faculty.push(item.courseID.replace("1:", ""));
		    if(jQuery.inArray(exploded[1], courses_in_faculty) == -1){
                        courses_in_faculty.push(exploded[1]);
                    }

                }
            });

            if(courses === null){
                loadxml("courses",fn_courses);
            }  else{
                fn_courses();
            }
        }

        function fn_courses(){
            // $('#coursesInFaculty').html(''); // added this line


            //console.log("in fn_courses");
            // console.log(courses_in_faculty);
            var clist = {};
            for(var idx in courses.coursetable.category){
                //console.log("in for loop");

                $.each(courses.coursetable.category[idx].course, function(index,item){
                    //if the index of this courses table is in the courses array above
                    /*   if(courses_in_faculty.indexOf(index) != -1){
                    //console.log("Present");
                    }*/
                    $.each(courses_in_faculty, function(index2,item2){
                        if(index == item2){
                            //console.log(item.course);
                            //console.log(item.coursename);
                            // $('#coursesInFaculty div ul').append('<a href="'+ index +'" class="course_item"><div class="tile col-6-6"><div class="icon-and-title"><i class="ion-ios-photos-outline"></i><div class="title"><h6>'+ item.coursename +'</h6></div></div></div><a>');

                            $('#coursesInFaculty').append('<a href="'+ index +'" class="course_item" cat_id="'+ idx +'"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+ item.course +'</li><a>');
                        }
                    });
                });
            }


            $( "#facultyContent" ).hide( "slow", function() {
                // Animation complete.
                $( "#back_to_e_brochure2" ).hide();
                $( "#back_to_faculty_list" ).show();
                $( "#coursesInFacultyContainer" ).show( "slow");
            });
        }


        $('#coursesInFaculty').on('click', '.course_item', function(f){
            f.preventDefault();
            var course_id = $(this).attr('href');
            var cat_index = $(this).attr('cat_id');

            //alert($(this).find('li').text());
            var e = "#table_view";
            b = "browse_by_faculty_btn";
            showCourseBrochure(e, b, course_id, "browse_by_faculty_section", cat_index);

        });


        $('#courses_in_school_section').on('click', '#back5', function(f){

            f.preventDefault();
            var course_id = $(this).attr('href');
            var cat_index = $(this).attr('cat_id');
            //alert($(this).find('li').text());
            var e = "#table_view";
            b = "browse_by_faculty_btn";
            showCourseBrochure(e, b, course_id,"browse_by_school_section_back",cat_index);

        });

        $('#facultyContent').on('click', '.faculty_item', function(e){
            e.preventDefault();
            // alert( $(this).find('h6').text());
            selected_faculty_id = $(this).attr('href');

            $('#coursesInFaculty').html(''); // new added line
            if(courses_faculties === null){
                loadxml("courses-faculties",fn_courses_faculties);
            }  else{
                fn_courses_faculties();
            }
        });

        function showCourseBrochure(b, c, course_id_2, section, course_cat_2) {
            //console.log(section);
            try{
             $.blockUI({"message":"<img src='img/loader.gif'>"})
            if(section == "browse_by_school_section"){
                $('#back_to_faculty').hide();
                $('#back_to_school').show();
                $('#back_to_course').hide();
            }else if(section == "browse_by_faculty_section"){
                $('#back_to_faculty').show();
                $('#back_to_school').hide();
                $('#back_to_course').hide();
            }else if(section == "browse_by_course_section"){
                $('#back_to_course').show();
                $('#back_to_faculty').hide();
                $('#back_to_school').hide();
            }

            var d = "#btm-tile",
                e = "#btm-launcher",
                f = "#tile-menu",
                g = "#launcher-menu",
                h = "div#intro",
                i = "section.section",
                j = "div.section-intro",
                k = "#btm-launcher",
                l = "#btm-tile",
                m = "div.side-panel";
            a(d).find("button").prop("disabled", !0), a(e).find("button").prop("disabled", !0), a('[data-toggle="tooltip"]').tooltip("hide"), a(f).addClass("fadeOut"), a(g).addClass("fadeOut"), setTimeout(function() {
                a(f).addClass("hidden"), a(g).addClass("hidden")
            }, 900), a(b).hasClass("hidden") ? (a("#" + c).clone().insertAfter(".loader-content").delay(3e3).queue(function() {
                a(this).remove(), a(this).dequeue()
            }), a(m).addClass("fadeOutRightBig"), setTimeout(function() {
                a(m).addClass("hidden").removeClass("fadeOutRightBig")
            }, 400), a(h).fadeIn().removeClass("fadeOut"), setTimeout(function() {
                a(h).addClass("fadeOut").delay(500).fadeOut()
            }, 1800), a(j).addClass("slideOutUp"), a(k).addClass("slideOutDown"), a(l).addClass("slideOutDown"), setTimeout(function() {
                a(i).addClass("animated fadeOut")
            }, 700), setTimeout(function() {
                a(i).addClass("hidden").removeClass("animated fadeOut"), a(j).addClass("hidden").removeClass("slideOutUp"), a(k).addClass("hidden").removeClass("slideOutDown"), a(l).addClass("hidden").removeClass("slideOutDown")
            }, 1200), setTimeout(function() {
                a(b).removeClass("hidden"), a(b).find(j).removeClass("hidden"), a(k).removeClass("hidden"), a(l).removeClass("hidden"), H(), a(b).find("#map").length && J(), a(d).find("button").prop("disabled", !1), a(e).find("button").prop("disabled", !1)
            }, 1500)) : (a(d).find("button").prop("disabled", !1), a(e).find("button").prop("disabled", !1));

            //console.log(course_id);
            //console.log(courses.coursetable.category[1].course[course_id]);
            $('#back5').attr("href", course_id);

            course_cat = course_cat_2;
            course_id = course_id_2;

            var chk_index;
            if (course_cat) {
                //do something
                chk_index = course_cat;
            }else{
                chk_index = 1;
            }




            $('#coursename').html('');

            // $('#coursename').html(courses.coursetable.category[chk_index].course[course_id].coursename);
            console.log("course_cat" + course_cat);
            //console.log("course_id" + course_id);
            $('#coursename').html(courses.coursetable.category[course_cat].course[course_id].course);
            $('#courseabbreviation').html('');
            // $('#courseabbreviation').html("COURSES ABBREVIATION: "+courses.coursetable.category[1].course[course_id].courseabbreviation);
            $('#coursecode').html('');
            //$('#coursecode').html("COURSE CODE: "+courses.coursetable.category[chk_index].course[course_id].coursecode);
            // $('#requirements').html('');
            $('#req_direct_entry').html('');
            // $('#req_direct_entry').html(courses.coursetable.category[chk_index].course[course_id].requirements.replace(/(?:\r\n|\r|\n)/g, '<br />'));
            $('#req_direct_entry').html(courses.coursetable.category[course_cat].course[course_id].req_direct_entry.replace(/(?:\r\n|\r|\n)/g, '<br />'));

            $('#req_utme_entry').html('');
            $('#req_utme_entry').html(courses.coursetable.category[course_cat].course[course_id].req_utme_entry.replace(/(?:\r\n|\r|\n)/g, '<br />'));
            $('#utme_subjects').html(courses.coursetable.category[course_cat].course[course_id].utme_subjects.replace(/(?:\r\n|\r|\n)/g, '<br />'));


            $('#waiver').html('');
            $('#waiver').html(courses.coursetable.category[course_cat].course[course_id].remarks.replace(/(?:\r\n|\r|\n)/g, '<br />'));
            $('#institutions').html('');

            //console.log("course is check: "+course_id);
            var institutions_offering_course = [];
            var institutions_offering_course2 = [];
            var fn2 = function(item){
                $('#institutions').append('<li place="fn2" class="show_courses_in_school animated fadeInLeft delay1-'+Math.random() * (9 - 3) + 3+'s"><a href="'+item.schoolID+'" abbr="'+ schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolname +'">'+ schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolabbreviation +'</a></li>');
            };

            var fn = function(){
                var clist = {};
                try{
                    $.unblockUI('hide');
                    $.each(courses_schools.coursesschoollinks.link, function(index,item){

                        if (course_cat) {
                            if(item.courseID == course_cat+":"+course_id){

                                var exploded = item.schoolID.split(":");
                                //["0:5:3", "0:0:8", "0:0:2", "0:5:35", "0:0:4", "0:3:7", "0:0:15", "0:2:6", "0:2:6", "0:4:0", "0:4:0"]
                                //0 - type index, 5 - category, 3 - school .. school.schoolname, school.schoolabbreviation etc
                                // institutions_offering_course.push(   schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolabbreviation);
                                institutions_offering_course2.push(item.schoolID);
                                var map = item;
                                var abbr = schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolname;
                                var abbr2 = schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolabbreviation;
                                var infoDiv = $('<div/>');
                                infoDiv.html(item.info);
                                var info = infoDiv.text();
                                info = $.trim(info.replace(/[^-a-z0-9\x20\/]/gi,''));
                                map["abbr"] = abbr;
                                map["abbr2"] = abbr2;
                                if(!clist.hasOwnProperty(info))
                                    clist[info] = [];
                                clist[info].push(map);
                                //$('#institutions').append('<li place="fn.1" class="show_courses_in_school animated fadeInLeft delay1-'+Math.random() * (9 - 3) + 3+'s"><a href="'+item.schoolID+'" abbr="'+ abbr +'">'+ abbr2 +'</a></li>');

                            }

                        }/*else{
                            if(item.courseID == "1:"+course_id){

                                var exploded = item.schoolID.split(":");
                                //["0:5:3", "0:0:8", "0:0:2", "0:5:35", "0:0:4", "0:3:7", "0:0:15", "0:2:6", "0:2:6", "0:4:0", "0:4:0"]
                                //0 - type index, 5 - category, 3 - school .. school.schoolname, school.schoolabbreviation etc
                                // institutions_offering_course.push(   schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolabbreviation);
                                institutions_offering_course2.push(item.schoolID);

                                //                                fn2(item);
                                $('#institutions').append('<li place="fn.2" class="show_courses_in_school animated fadeInLeft delay1-'+Math.random() * (9 - 3) + 3+'s"><a href="'+item.schoolID+'" abbr="'+ schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolname +'">'+ schools.schooltable.type[exploded[0]].category[exploded[1]].school[exploded[2]].schoolabbreviation +'</a></li>');
                            }

                        }*/

                    });
                }catch(e){console.error(e.message);}
                var orderList = [];
                for(var idx in clist)
                    orderList.push(idx);
                orderList.sort();
                for(var idxKey in orderList)
                {
                    var idx = orderList[idxKey];
                    var ul;
                    if(idx!="")
                    ul = $("<ul/>");
                    else
                    ul = $('#institutions');
                    ul.css("list-style","none");
                    ul.css("padding-left","0");
                    for(var idx2 in clist[idx])
                    {
                        var item = clist[idx][idx2];
                       ul.append('<li place="fn.1" class="show_courses_in_school animated fadeInLeft delay1-'+Math.random() * (9 - 3) + 3+'s"><a href="'+item.schoolID+'" abbr="'+ item.abbr +'">'+ item.abbr2 +'</a></li>');
                    }
                    if(idx!=""){
                        var li = $('<li/>');
                        li.html(ul.html()+clist[idx][0].info);
                        //li.append(ul);
                        $('#institutions').append(li);
                    }

                }
            };
            if(courses_schools===null){
                loadxml("courses-schools",fn);
            } else{
                fn();
            }


            // console.log(institutions_offering_course);
            //console.log(institutions_offering_course2);


        }catch(e){console.error(e.message);}
        }

        $('#table_view').on('click', '.show_courses_in_school', function(f){
            f.preventDefault();
            var school_id = $(this).find('a').attr('href');
            var schoolname = $(this).find('a').attr('abbr');


            //alert($(this).find('li').text());
            var e = "#courses_in_school_section";
            b = "browse_by_faculty_btn";
            showCoursesInSchool(e, b, school_id, schoolname);
        });

        function showCoursesInSchool(b, c, school_id, schoolname) {

            var d = "#btm-tile",
                e = "#btm-launcher",
                f = "#tile-menu",
                g = "#launcher-menu",
                h = "div#intro",
                i = "section.section",
                j = "div.section-intro",
                k = "#btm-launcher",
                l = "#btm-tile",
                m = "div.side-panel";
            a(d).find("button").prop("disabled", !0), a(e).find("button").prop("disabled", !0), a('[data-toggle="tooltip"]').tooltip("hide"), a(f).addClass("fadeOut"), a(g).addClass("fadeOut"), setTimeout(function() {
                a(f).addClass("hidden"), a(g).addClass("hidden")
            }, 900), a(b).hasClass("hidden") ? (a("#" + c).clone().insertAfter(".loader-content").delay(3e3).queue(function() {
                a(this).remove(), a(this).dequeue()
            }), a(m).addClass("fadeOutRightBig"), setTimeout(function() {
                a(m).addClass("hidden").removeClass("fadeOutRightBig")
            }, 400), a(h).fadeIn().removeClass("fadeOut"), setTimeout(function() {
                a(h).addClass("fadeOut").delay(500).fadeOut()
            }, 1800), a(j).addClass("slideOutUp"), a(k).addClass("slideOutDown"), a(l).addClass("slideOutDown"), setTimeout(function() {
                a(i).addClass("animated fadeOut")
            }, 700), setTimeout(function() {
                a(i).addClass("hidden").removeClass("animated fadeOut"), a(j).addClass("hidden").removeClass("slideOutUp"), a(k).addClass("hidden").removeClass("slideOutDown"), a(l).addClass("hidden").removeClass("slideOutDown")
            }, 1200), setTimeout(function() {
                a(b).removeClass("hidden"), a(b).find(j).removeClass("hidden"), a(k).removeClass("hidden"), a(l).removeClass("hidden"), H(), a(b).find("#map").length && J(), a(d).find("button").prop("disabled", !1), a(e).find("button").prop("disabled", !1)
            }, 1500)) : (a(d).find("button").prop("disabled", !1), a(e).find("button").prop("disabled", !1));

	    var myId=[];
            var item_course_ids = [];
            $.each(courses_schools.coursesschoollinks.link, function(index,item){
                if(item.schoolID == school_id){
		  //console.log("courseID : " + item.courseID);
		  //console.log("schoolID : " + item.schoolID);
		  //console.log("in schoolID : " + school_id);
		  myId = item.courseID.split(":");
		  //item.courseID.replace("0:", "")
                    if(jQuery.inArray(myId, item_course_ids) == -1){
                        item_course_ids.push(myId);
                    }
                }
            });
            //  console.log(school_id);
            // console.log(item_course_ids);
            //$('#back5').attr( "href", item.courseID );


            $('#course_name').html('');
            $('#course_name').html("Courses offered by "+schoolname);
            $('#courses_in_school_content').html('');

            for(var idx in courses.coursetable.category){
                $.each(courses.coursetable.category[idx].course, function(index,item){
                    //if the index of this courses table is in the courses array above
                    /*   if(courses_in_faculty.indexOf(index) != -1){
                    //console.log("Present");
                }*/
                    $.each(item_course_ids, function(index2,item2){
                        if(index == item2[1] && idx==item2[0]){
                            // console.log(item.coursename);
                            // $('#coursesInFaculty div ul').append('<a href="'+ index +'" class="course_item"><div class="tile col-6-6"><div class="icon-and-title"><i class="ion-ios-photos-outline"></i><div class="title"><h6>'+ item.coursename +'</h6></div></div></div><a>');

                            // $('#coursesInFaculty').append('<a href="'+ index +'" class="course_item"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+ item.coursename +'</li><a>');

                            $('#courses_in_school_content').append('<a href="'+ index +'" cat_id="'+ idx +'" class="course_item2"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+item.course  +'</li><a>');
                        }
                    });
                });

	    }

        }
        function fn_faculties_disp(){
            $.each(faculties.facultytable.faculty, function(i,item){
                $('#facultyContent').append('<a href="'+ i +'" class="faculty_item"><div class="tile col-6-6"><div class="icon-and-title"><i class="ion-ios-photos-outline"></i><div class="title"><h6>'+ item.facultyname +'</h6></div></div></div><a>');

            });
            $( "#coursesInFacultyContainer" ).hide( "slow", function() {
                // Animation complete.
                $( "#facultyContent" ).show( "slow");
            });

        }
        function displayFacultyContent() {
            $('#facultyContent').html('');
            if(faculties==null)
                loadxml("faculties",fn_faculties_disp);
            else
                fn_faculties_disp();
        }
        function fn_schools_disp(){
            $.each(schools.schooltable.type, function(i,item){

                $('#schoolContent').append('<a href="'+ i +'" class="school_type"><div class="tile col-6-6"><div class="icon-and-title"><i class="ion-ios-photos-outline"></i><div class="title"><h6>'+ item.name +'</h6></div></div></div><a>');

            });
        }
        function displaySchoolContent() {
            //console.log(response);

            $('#schoolContent').html('');
            if(schools===null)    {
                loadxml("schools",fn_schools_disp);
            } else{
                fn_schools_disp();
            }
        }
        function fn_courses_disp(){
            $.each(courses.coursetable.category, function(i,item){
                $('#courseContent').append('<a href="'+i+'" class="courses_category1"><div class="tile col-6-6"><div class="icon-and-title"><i class="ion-ios-book-outline"></i><div class="title"><h6>'+item.name+'</h6></div></div></div></a>');
            });
        }
        function displayCourseContent() {

            $('#courseContent').html('');
            if(courses==null)
                loadxml("courses",fn_courses_disp);
            else
                fn_courses_disp();
        }
        $('#browse_by_course_section').on('click', '.courses_category1', function(f){
            f.preventDefault();
            var cat_id = $(this).attr('href');
            $('#courseContent2').html('');
            $.each(courses.coursetable.category[cat_id].course, function(i,item){
                $('#courseContent2').append('<a href="'+ i +'" class="courses_category2" cat_id="'+cat_id+'"><li class="animated fadeInLeft delay1-'+Math.random() * (6 - 3) + 3+'s">'+ item.course +'</li><a>');
            });
            $( "#courseContent" ).hide( "slow", function() {
                // Animation complete.
                $("#back_to_e_brochure3").hide();
                $( "#back_to_course_category" ).show();
                $( "#courseContent2" ).show( "slow");
            });

        });

        $('#browse_by_course_section').on('click', '.courses_category2', function(f){
            f.preventDefault();
            var course_id = $(this).attr('href');
            var course_cat = $(this).attr('cat_id');
            //alert($(this).find('li').text());
            var e = "#table_view";
            b = "browse_by_faculty_btn";
            showCourseBrochure(e, b, course_id, "browse_by_course_section", course_cat);

        });


        $('#browse_by_course_section').on('click', '#back_to_course_category', function(f){
            f.preventDefault();
            $( "#courseContent2" ).hide( "slow", function() {
                // Animation complete.
                $( "#back_to_e_brochure3" ).show();
                $( "#back_to_course_category" ).hide();
                $( "#courseContent" ).show( "slow");
            });
        });

        function b() {
            a("button#menu-tile-btn").on("click", function() {
                var b = "#tile-menu";
                a(b).hasClass("hidden") ? a(b).removeClass("fadeOut hidden") : (a(b).addClass("fadeOut"), setTimeout(function() {
                    a(b).addClass("hidden")
                }, 900))
            }), a("#tile-menu").find(".slide-flex").css({
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
                "flex-direction": "column",
                height: "100%"
            }), a("#big-tile-slider").pogoSlider({
                autoplayTimeout: 4e3,
                autoplay: !0,
                displayProgress: !1,
                preserveTargetSize: !1,
                targetWidth: 1e3,
                generateNav: !1,
                generateButtons: !1,
                targetHeight: 300,
                responsive: !1,
                pauseOnHover: !0
            }).data("plugin_pogoSlider")
        }

        function c() {
            a("button#menu-launcher-btn").on("click", function() {
                var c = "#launcher-menu";
                a(c).hasClass("hidden") ? a(c).removeClass("fadeOut hidden") : (a(c).addClass("fadeOut"), setTimeout(function() {
                    a(c).addClass("hidden")
                }, 900)), b.update(!0)
            });
            var b = new Swiper("#launcher-slider", {
                speed: 600,
                observer: !0,
                observeParents: !0,
                a11y: !0,
                slidesPerView: 1,
                paginationClickable: !0,
                onInit: function() {
                    a("#launcher-slider").find(".swiper-slide-next").find(".overlay-btn").fadeOut()
                },
                onSlideChangeStart: function() {
                    a("#launcher-slider .swiper-slide-next,#launcher-slider .swiper-slide-prev").find(".overlay-btn").fadeOut()
                },
                onSlideChangeEnd: function() {
                    a("#launcher-slider").find(".swiper-slide-active").find(".overlay-btn").fadeIn()
                },
                pagination: ".swiper-pagination-launcher",
                keyboardControl: !0
            });
            a('[data-toggle="tooltip"]').tooltip({
                trigger: "focus hover"
            })
        }

        function d() {
            a("#animated-text-service").typed({
                stringsElement: a("#typed-strings-service"),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: !0,
                backDelay: 500,
                loop: !0,
                loopCount: !1,
                showCursor: !0,
                attr: null,
                contentType: "html"
            })
        }

        function g() {
            a("#animated-text-gallery").typed({
                stringsElement: a("#typed-strings-gallery"),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: !0,
                backDelay: 500,
                loop: !0,
                loopCount: !1,
                showCursor: !0,
                attr: null,
                contentType: "html"
            })
        }

        function k() {
            a("button#side-tile,button.social-centre-launcher").on("click", function() {
                var b = ".side-panel";
                a(b).hasClass("hidden") ? a(b).removeClass("fadeOutRightBig hidden") : (a(b).addClass("fadeOutRightBig"), setTimeout(function() {
                    a(b).addClass("hidden")
                }, 400))
            })
        }

        function l() {
            a(".timeline-image,.interest-image,.project-preview,.gear-preview,.whats-hot-preview,.screenshot-preview,.product-preview,.services-image,.details-image,.desktop,.swiper-slide,.about-image,.feature-image,.place-preview-image,.coming-preview,.error-preview,.clients-block,.gallery-preview,.bg-data-call").each(function() {
                a(this).attr("data-image-bg") && a(this).attr("data-image-overlay") && a(this).css({
                    background: "linear-gradient(" + a(this).data("image-overlay") + "," + a(this).data("image-overlay") + "), url(" + a(this).data("image-bg") + ") center center / cover no-repeat"
                }), a(this).attr("data-solid-bg") && a(this).css({
                    background: a(this).data("solid-bg")
                }), a(this).attr("data-gradient-color-one") && a(this).attr("data-gradient-color-two") && a(this).attr("data-gradient-color-three") && a(this).css({
                    background: "linear-gradient(220deg," + a(this).data("gradient-color-one") + "," + a(this).data("gradient-color-two") + "," + a(this).data("gradient-color-three") + ")",
                    "background-size": "600% 600%",
                    "-webkit-animation": "gradientWave 38s ease infinite",
                    animation: "gradientWave 38s ease infinite"
                })
            })
        }

        function m() {
            a("#home-slider").find(".content").height(a(window)[0].innerHeight)
        }

        function n(a) {
            a = a || document.documentElement, document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }

        function p(b) {
            a(b).hasClass("hidden") && a(".counter-numbers").countTo("restart")
        }

        function r(b) {
            new Audio(q).play(), a('<div id="quick-notification" class="notification-wrapper animated fadeOutRight delay8s"><div class="notification animated fadeInRight"><div class="icon animated rollIn"><i class="ion-android-notifications"></i></div><div class="message animated fadeInLeft delay0-4s">+html(text)+</div></div></div>').appendTo("body").find(".message").html(b).delay(8200).fadeOut(600, function() {
                a("#quick-notification").remove()
            })
        }

        function x() {
            function d() {
                if (b !== !1) {
                    var c = a(".clients-logos").find("img:first-child");
                    c.animate({
                        "margin-left": "-150px"
                    }, 2e3, function() {
                        c.remove().css({
                            "margin-left": "0px"
                        }), a(".clients-logos").find("img:last").after(c)
                    })
                }
            }
            var b = !0,
                c = 1800;
            setInterval(d, c), a(document).on({
                mouseenter: function() {
                    b = !1
                },
                mouseleave: function() {
                    b = !0
                }
            }, ".clients-logos")
        }

        function y() {
            a(".popup-image").magnificPopup({
                type: "image",
                tLoading: "",
                image: {
                    titleSrc: function(a) {
                        return a.el.attr("title") + "<small>" + a.el.attr("data-subtitle") + "</small>"
                    }
                },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                    },
                    open: function() {
                        a(".mfp-title").addClass("animated fadeInLeft delay0-5s")
                    }
                },
                closeOnContentClick: !0,
                midClick: !0
            })
        }

        function z() {
            a(".popup-modal").magnificPopup({
                type: "inline",
                preloader: !1,
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = this.st.el.attr("data-effect")
                    }
                },
                midClick: !0
            })
        }

        function A() {
            a("a.gallery-link").on("click", function() {
                a(this).next().magnificPopup("open")
            }), a(".gallery").each(function() {
                a(this).magnificPopup({
                    delegate: "a",
                    type: "image",
                    tLoading: "",
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0
                    },
                    image: {
                        titleSrc: function(a) {
                            return a.el.attr("title") + "<small>" + a.el.attr("data-subtitle") + "</small>"
                        }
                    },
                    fixedContentPos: !1,
                    mainClass: "mfp-zoom-in",
                    removalDelay: 160,
                    callbacks: {
                        open: function() {
                            a(".mfp-title").addClass("animated fadeInLeft delay0-5s"), a.magnificPopup.instance.next = function() {
                                var b = this;
                                b.wrap.removeClass("mfp-image-loaded"), setTimeout(function() {
                                    a.magnificPopup.proto.next.call(b)
                                }, 120)
                            }, a.magnificPopup.instance.prev = function() {
                                var b = this;
                                b.wrap.removeClass("mfp-image-loaded"), setTimeout(function() {
                                    a.magnificPopup.proto.prev.call(b)
                                }, 120)
                            }
                        },
                        imageLoadComplete: function() {
                            var a = this;
                            setTimeout(function() {
                                a.wrap.addClass("mfp-image-loaded")
                            }, 16)
                        }
                    },
                    closeOnContentClick: !0,
                    midClick: !0
                })
            })
        }

        function B() {
            a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-zoom-in",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            })
        }

        function C() {
            var b = "form#mail-form",
                c = "#send-button";
            a(b).on("submit", function(d) {
                d.preventDefault();
                var e = a(this);
                a(c).addClass("btn-progress"), a(c).attr("disabled", "disabled");
                var f = e.serialize(),
                    g = a("#g-recaptcha-response").val();
                "" === g ? (event.preventDefault(), r("Please Submit Re-captcha"), a(c).removeClass("btn-progress"), a(c).removeAttr("disabled", "disabled")) : a.ajax({
                    type: "POST",
                    url: "php/mail_handler.php",
                    data: f
                }).done(function() {
                    a(c).removeClass("btn-progress"), r("Message Sent. Thanks for your Message, I will contact you soon."), a(b)[0].reset(), grecaptcha.reset(), a(c).removeAttr("disabled", "disabled")
                }).fail(function() {
                    a(c).removeClass("btn-progress").fadeIn(500), r("Sending Failed. Please Try Again"), a(c).removeAttr("disabled", "disabled")
                })
            })
        }

        function F() {
            a(D).ajaxChimp({
                url: "http://trimatrixlab.us14.list-manage.com/subscribe/post?u=1534b72985e1d9ad8605bccdb&id=750451a215",
                callback: G
            }), a(D).on("submit", function(b) {
                a(E).addClass("btn-progress"), a(E).attr("disabled", "disabled")
            })
        }

        function G(b) {
            var c;
            try {
                var d = b.msg.split(" - ", 2);
                if (void 0 === d[1]) c = b.msg;
                else {
                    var e = parseInt(d[0], 10);
                    c = e.toString() === d[0] ? d[1] : b.msg
                }
            } catch (a) {
                c = b.msg
            }
            r(c), "success" === b.result ? (a(D)[0].reset(), a(E).removeClass("btn-progress"), a(E).removeAttr("disabled", "disabled")) : (a(E).removeClass("btn-progress"), a(E).removeAttr("disabled", "disabled"))
        }

        function H() { //added this line comment below
            //   s.update(!0), v.update(!0), w.update(!0), t.update(!0), u.update(!0)
        }


        function I(b, c, dopost_response) {
            var d = "#btm-tile",
                e = "#btm-launcher",
                f = "#tile-menu",
                g = "#launcher-menu",
                h = "div#intro",
                i = "section.section",
                j = "div.section-intro",
                k = "#btm-launcher",
                l = "#btm-tile",
                m = "div.side-panel";
            a(d).find("button").prop("disabled", !0), a(e).find("button").prop("disabled", !0), a('[data-toggle="tooltip"]').tooltip("hide"), a(f).addClass("fadeOut"), a(g).addClass("fadeOut"), setTimeout(function() {
                a(f).addClass("hidden"), a(g).addClass("hidden")
            }, 900), a(b).hasClass("hidden") ? (a("#" + c).clone().insertAfter(".loader-content").delay(3e3).queue(function() {
                a(this).remove(), a(this).dequeue()
            }), a(m).addClass("fadeOutRightBig"), setTimeout(function() {
                a(m).addClass("hidden").removeClass("fadeOutRightBig")
            }, 400), a(h).fadeIn().removeClass("fadeOut"), setTimeout(function() {
                a(h).addClass("fadeOut").delay(500).fadeOut()
            }, 1800), a(j).addClass("slideOutUp"), a(k).addClass("slideOutDown"), a(l).addClass("slideOutDown"), setTimeout(function() {
                a(i).addClass("animated fadeOut")
            }, 700), setTimeout(function() {
                a(i).addClass("hidden").removeClass("animated fadeOut"), a(j).addClass("hidden").removeClass("slideOutUp"), a(k).addClass("hidden").removeClass("slideOutDown"), a(l).addClass("hidden").removeClass("slideOutDown")
            }, 1200), setTimeout(function() {
                a(b).removeClass("hidden"), a(b).find(j).removeClass("hidden"), a(k).removeClass("hidden"), a(l).removeClass("hidden"), H(), a(b).find("#map").length && J(), a(d).find("button").prop("disabled", !1), a(e).find("button").prop("disabled", !1)
            }, 1500)) : (a(d).find("button").prop("disabled", !1), a(e).find("button").prop("disabled", !1))
        }

        function J() {
            var a = {
                lat: -25.363,
                lng: 131.044
            },
                b = new google.maps.Map(document.getElementById("map"), {
                    zoom: 4,
                    center: a
                });
            new google.maps.Marker({
                position: a,
                map: b,
                icon: "img/svg/map-marker.svg",
                title: "Location!"
            })
        }

        a("#tile-menu,#launcher-menu").backgroundBlur({
            imageURL: "img/polygon/3.jpg",
            blurAmount: 10,
            imageClass: "bg-blur"
        }), m(), a("button.full-screen").on("click", function() {
            n()
        });
        var q = "https://notificationsounds.com/message-tones/your-turn-491/download/mp3",
            s = new Swiper("#home-slider", {
                nextButton: ".swiper-button-next-home",
                prevButton: ".swiper-button-prev-home",
                pagination: ".swiper-pagination-home",
                paginationClickable: !0,
                a11y: !0,
                grabCursor: !0,
                speed: 1e3,
                onInit: function() {
                    a("#home-slider").find(".swiper-slide-next").find(".slide-content").fadeOut()
                },
                onSlideChangeStart: function() {
                    a("#home-slider .swiper-slide-next,#home-slider .swiper-slide-prev").find(".slide-content").fadeOut()
                },
                onSlideChangeEnd: function() {
                    a("#home-slider").find(".swiper-slide-active").find(".slide-content").show()
                }
            }),
            t = new Swiper("#service-slider", {
                pagination: ".swiper-pagination-serv",
                a11y: !0,
                keyboardControl: !0,
                observer: !0,
                speed: 1e3,
                observeParents: !0,
                autoHeight: !0,
                paginationClickable: !0
            }),
            u = new Swiper("#team-slider", {
                pagination: ".swiper-pagination-team",
                a11y: !0,
                keyboardControl: !0,
                paginationClickable: !0,
                speed: 1e3,
                observer: !0,
                freeMode: !0,
                observeParents: !0
            }),
            v = new Swiper(".swiper-container-gallery", {
                pagination: ".swiper-pagination-gallery",
                a11y: !0,
                observer: !0,
                speed: 1e3,
                freeMode: !0,
                observeParents: !0,
                keyboardControl: !0,
                paginationClickable: !0
            }),
            w = new Swiper("#clients-slider", {
                pagination: ".swiper-pagination-clients",
                a11y: !0,
                observer: !0,
                speed: 1e3,
                observeParents: !0,
                keyboardControl: !0,
                autoHeight: !0,
                paginationClickable: !0
            }),
            D = "form#mc-form",
            E = "#mc-subscribe";
        a(window).on("resize", function() {
            m(), H()
        }), a("div#intro").hide(), a("nav.nav-launcher,nav.nav-tile,#launcher-menu,#tile-menu").addClass("hidden"), a("#home-slider").find(".slide-content").addClass("hidden"), b(), c(), d(), g(), k(), l(), x(), y(), z(), A(), B(), C(), F(), a("body").on("click", "button", function() {
            var b = this.id;
            // var c = this.attr('nav');
            if ("tile-home" == b || "launcher-home" == b || "btm-nav-home" == b || a(this).hasClass("btn-close") || "btm-tile-home" == b) {
                var c = "#general-home";
                I(c, b)
            } else if ("tile-about" == b || "launcher-about" == b) {
                var d = "#general-about";
                I(d, b)
            } else if ("tile-feature" == b || "launcher-feature" == b || "btm-nav-feat" == b || "btm-tile-feat" == b) {
                var e = "#e-brochure";
                I(e, b)
            } else if ("browse_by_school_btn" == b) {

                displaySchoolContent();
                var e = "#browse_by_school_section";
                I(e, b)
            } else if ("browse_by_faculty_btn" == b) {

                displayFacultyContent();
                var e = "#browse_by_faculty_section";
                I(e, b)
            } else if ("browse_by_course_btn" == b) {
                displayCourseContent();
                var e = "#browse_by_course_section";
                I(e, b)
            }  else if ("back_to_e_brochure1" == b) {
                var e = "#e-brochure";
                I(e, b)
            }   else if ("back_to_e_brochure2" == b) {
                var e = "#e-brochure";
                I(e, b)
            }   else if ("back_to_e_brochure3" == b) {
                var e = "#e-brochure";
                I(e, b)
            }  else if ("back_to_faculty" == b) {
                var e = "#browse_by_faculty_section";
                I(e, b)
            } else if ("back_to_school" == b) {
                var e = "#browse_by_school_section";
                I(e, b)
            } else if ("back_to_course" == b) {
                var e = "#browse_by_course_section";
                I(e, b)
            } else if ("tile-recent-works" == b || "launcher-recent-works" == b || "btm-tile-recent" == b) {
                var f = "#general-recent-works";
                I(f, b)
            } else if ("tile-team" == b || "launcher-team" == b) {
                var g = "#general-team";
                I(g, b)
            } else if ("tile-services" == b || "launcher-services" == b || "btm-nav-serv" == b) {
                var h = "#general-service";
                I(h, b)
            } else if ("tile-portfolios" == b || "launcher-portfolios" == b || "btm-nav-port" == b || "btm-tile-port" == b) {
                var i = "#general-portfolios";
                I(i, b)
            } else if ("tile-blog" == b || "launcher-blog" == b || "btm-nav-blog" == b) {
                var j = "#general-blog";
                I(j, b)
            } else if ("tile-clients" == b || "launcher-clients" == b) {
                var k = "#general-clients";
                I(k, b), p(k)
            } else if ("tile-pricing" == b || "launcher-pricing" == b || "btm-nav-pric" == b) {
                var l = "#general-pricing";
                I(l, b)
            } else if ("tile-subscribe" == b || "launcher-subscribe" == b || "btm-nav-subs" == b) {
                var m = "#general-subscribe";
                I(m, b)
            } else if ("tile-map" == b || "launcher-map" == b) {
                var n = "#general-map";
                I(n, b)
            } else if ("tile-contact" == b || "launcher-contact" == b || "btm-nav-cont" == b || "btm-tile-contact" == b) {
                var o = "#general-contact";
                I(o, b)
            }
        }), jQuery(window).on("load", function() {

            a("section.section").addClass("hidden"), a("div#pre-loader").addClass("animated fadeOut").delay(200).fadeOut(), a('section[id$="-home"],nav[class*="nav-"]').removeClass("hidden"), a("#home-slider").find(".slide-content").removeClass("hidden"), setTimeout(function() {
                r("Hi, Welcome to Desktop. Lets Explore, Shall We!")
            }, 6e3)
        })
    })
}(jQuery);


