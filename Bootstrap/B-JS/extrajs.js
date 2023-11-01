$(".examT").click(function() {
         $("#examClass1").show();
         $("#showallsubjects").show();
     });
     function testPage() {
        $("#photography-portfolios-b").load("cbt_exam.html");
        }

     function getPage(urlpage) {
            $.ajax({
                type:"GET",
                url:urlpage,
                dataType:"html",

                success:function(data) {
                    $("body").html(data);
                },
                error:function(e) {
                    console.error(e.message);
                }
            });
        }
     function getExamTypeForCode(code)
        {
            for (i = 0; i < subjectsJSON.length; i++) {
                    if (subjectsJSON[i].code === code)
                        return subjectsJSON[i].examtype;
                }
        }
       function replaceAll(str, find, replace) {
            return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }

        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
      var mytopicList = [];
        var topicList;
        var mydeleteSave;
        var initialized_subject = false;
         var slider;
         var lblname;
        var examObj = {};
        var examStarted = true;
        var timeElapsed = false;
        var interval = 1000;
        var correctAnswers = 0;
        var examSettings;
        var myslider = null;
        examObj['QuestionSet'] = [];
        examObj['timeUsed'] = 0;
        examObj['timeLeft'] = 5;

        var donealert = false;
          var initialize_faculty = false;
     var onready_faculty = (function() {
	if(initialize_faculty == true)
		return;
        initialize_faculty = true;
         dopost({"url" : api_link + "/loadxmlfile.php",
                        "type":"POST",
                        "data":{"path":"/jamb/faculties.xml"},
                        "success":function(response){
			try{
                        var res = JSON.parse(response);
			exams['combinations']['UTME'] = [];
			$.each(res.facultytable.faculty, function(i,item){
			exams['combinations']['UTME'][exams['combinations']['UTME'].length]=item.facultyname;
            if(exams['combinations'].hasOwnProperty(item.facultyname))
            {
                for(var idx in exams['combinations'][item.facultyname])
                {
                    subjectsJSON[subjectsJSON.length]={"class":item.facultyname,"code":exams['combinations'][item.facultyname].code,"examtype":"OLEVEL","subject" : exams['combinations'][item.facultyname].subject};
                }
            }
            else
            subjectsJSON[subjectsJSON.length]={"class":item.facultyname,"code":"BF06","examtype":"OLEVEL","subject" : "ENGLISH LANGUAGE"};

                        });}catch(e){console.error(e.message);}
                        },
                        "error":function(){}
                       });
     })

        var onready_subject = (function() {

            if (initialized_subject)
                return;
            initialized_subject = true;
             $('a[data-toggle="tooltip"]').tooltip({
                animated: 'fade',
                placement: 'bottom',
                container: 'body'
            });
            setItem("examid","0");
            mydeleteSave = deleteSaveExam;

            dopost({
                "url": api_link + "/subjects.php",
                "data": {
                    //"userid": getItem("userid"),
                    "folder": "books"
                },
                "type": "POST",
                "error": loadingerr,
                "success": function(response) {

                    try {
                        subjectsJSON = JSON.parse(response);
                        subjectsJSON = subjectsJSON.subjects;
                        for (var idx in subjectsJSON) {
                            var exmclass = subjectsJSON[idx].examtype.toLowerCase();
                            exmclass = replaceAll(exmclass, ".", '');
                            exmclass = replaceAll(exmclass, " ", '_');
                            exmclass = '.examtype_' + exmclass;
                            $(exmclass).css('display', 'block');
                        }
                        onready_curriculum();
                    } catch (e) {
                        initialized_subject = false;
                        console.error(e.message);
                        window.setTimeout(onready_subject, 150);
                    }

                }
            });
            if(queryString('mode')=='game')
                {
                    fnShowTabs();
                }
            window.setTimeout(function() {

                checkStatus();
                //notifyStudent();

            }, 50);
            window.setTimeout(function() {
                //viewScore();
            }, 200);


            window.setTimeout(function() {
                populateUTME();
            }, 1000);


            $('#viewResult').click(function() {
                $('#score').modal({
                    show: true
                })
            });

            //             $('#confirmUser').click(function() {
            //                $('#score').modal({
            //                    show: true
            //                })
            //            });
            $('#testScore').click(function() {
                $('#result').modal({
                    show: true
                })
            });



        });
        $(document).ready(
            function() {
                window.setTimeout(function() {
                    onready_subject();

                }, 150)
            }
        );


     function fnShowTabs(save) {
            $('#back').hide();
            $("#examinst").show(500);
            $("#examshow").show();
            $("#examconfigure").show(500);
            $("#examsetup").hide(500);
            if (typeof(save) == "undefined") {
                processedActions.examinst = $("#examinst").html();
                processedActions.examshow = $("#examshow").html();
                processedActions.examconfigure = $("#examconfigure").html();
                processedActions.examsetup = $("#examsetup").html();
                insertintohistory(fnShowTabs, [false]);
            } else {
                $("#examinst").html(processedActions.examinst);
                $("#examshow").html(processedActions.examshow);
                $("#examconfigure").html(processedActions.examconfigure);
                $("#examsetup").html(processedActions.examsetup);
                setButtonAction();
            }
        }

        function checkAll(ele) {
            var checkboxes = document.getElementsByTagName('input');
            if (ele.checked) {
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].type == 'checkbox') {
                        checkboxes[i].checked = true;
                    }
                }
            } else {
                for (var i = 0; i < checkboxes.length; i++) {
                    console.log(i)
                    if (checkboxes[i].type == 'checkbox') {
                        checkboxes[i].checked = false;
                    }
                }
            }
        }
        var curriculumData = null;
        var name, email;

        function displayContent(mytopicList) {
            $('.box-content').show();

            try {

                $('#class').html(mytopicList["class"]);
                $('#subject').html(mytopicList["subject"]);
                $('#theme').html(mytopicList["theme"]);
                $('#topic').html(mytopicList["topic"]);
                if(mytopicList["performance objectives"]!="")
                    {
                $('#perform').html(mytopicList["performance objectives"]);
                    }
                else {
                    $("#po").hide();
                }
                if(mytopicList["students' activities"]!="")
                    {
                $('#student_act').html(mytopicList["students' activities"]);
                    }
                else {
                    $("#st").hide();
                }
                if(mytopicList["teachers' activities"]!="")
                    {
                $('#teacher_act').html(mytopicList["teachers' activities"]);
                    }
                else {
                    $("#tc").hide();
                }

                        $('#content').html(mytopicList["content"]);


                if(mytopicList["evaluation guide"]!="")
                    {
                $('#evaluation').html(mytopicList["evaluation guide"]);
                    }
                else {
                    $("#ev").hide();
                }
                if(mytopicList["teaching and learning materials"]!="")
                    {
                $('#aids').html(mytopicList["teaching and learning materials"]);
                    }
                else {
                    $("#ap").hide();
                }

            } catch (e) {
                console.error(e.message + response);
            }

        }
        $('#close').click(function() {
            $('.mainTable').hide();
        });
        var myval;
        var curList;
        var myListobj;

        function dochange(obj) {

            try {
                switch (obj.id) {
                    case "classList":
                        var subjectList = $("#subjectList");
                        subjectList.html("<option>Select Subject</option>");
                        $("#themeList").html("<option>Select Theme</option>");
                        $("#topicList").html("<option>Select Sub-Theme/Topic</option>");
                        var classval = obj[obj.selectedIndex].text;
                        for (var subjects in curriculumData['data'][classval]) {
                            var option = $("<option/>");
                            option.text(subjects);
                            subjectList.append(option);
                        }
                        break;
                    case "subjectList":
                        myListobj = $("#themeList");
                        myListobj.html("<option>Select Theme</option>");
                        $("#topicList").html("<option>Select Sub-Theme/Topic</option>");

                        myval = obj[obj.selectedIndex].text;
                        curList = curriculumData['data'][$("#classList option:selected").text()][myval];

                        var data = {
                            "class": $("#classList option:selected").text(),
                            "subject": myval
                        };
                        if (curList.length > 0) {
                            for (var listval in curriculumData['data'][$("#classList option:selected").text()][myval]) {
                                var option = $("<option/>");
                                option.text(listval);
                                myListobj.append(option);
                            }
                        } else {

                            dopost({
                                "type": "POST",
                                "url": api_link + "/curriculum.php",
                                "data": data,
                                //'userid': getItem('userid'),
                                "success": function(response) {
                                    var inData = JSON.parse(response);

                                    try {
                                        curriculumData['data'][$("#classList option:selected").text()][myval] = inData.data;
                                        var classList = $("#classList");
                                        var classnameList = {};
                                        for (var classes in inData.data) {
                                            var option = $("<option/>");
                                            if (!classnameList.hasOwnProperty(classes)) {
                                                classnameList[classes] = null;
                                                option.text(classes);
                                                myListobj.append(option);
                                            }

                                        }
                                    } catch (e) {
                                        console.error(e.message);
                                    }

                                },
                                "error": loadingerr

                            })
                        }
                        break;
                    case "themeList":
                        var topicList = $("#topicList");
                        $("#topicList").html("<option>Select Sub-Theme/Topic</option>");
                        var curList = curriculumData['data'][$("#classList option:selected").text()][$("#subjectList option:selected").text()][$("#themeList option:selected").text()];
                        for (var topics in curList) {
                            var option = $("<option/>");
                            option.text(topics);
                            topicList.append(option);
                        }
                        break;
                    case "topicList":
                        var curList = curriculumData['data'][$("#classList option:selected").text()][$("#subjectList option:selected").text()][$("#themeList option:selected").text()][$("#topicList option:selected").text()];
                        displayContent(curList);
                        break;
                }
            } catch (e) {
                doalert("Please select from " + obj.id);
            }
        }


        var initialized_curriculum = false;
        var onready_curriculum = (function() {
            if (initialized_curriculum)
                return;
            initialized_curriculum = true;
            //checkStatus();
            //notifyStudent();
            var useralias = getItem('useralias');

            var data = {
                "action": "fetch_subjects"
            }
            dopost({
                "type": "POST",
                "url": api_link + "/curriculum.php",
                "data": data,
                "success": function(response) {

                    try {
                        curriculumData = JSON.parse(response);
                        var classList = $("#classList");
                        var classnameList = {};
                        for (var classes in curriculumData['data']) {
                            var option = $("<option/>");
                            if (!classnameList.hasOwnProperty(classes)) {
                                classnameList[classes] = null;
                                option.text(classes);
                                classList.append(option);
                            }

                        }
                        onready_faculty();
                    } catch (e) {
                        initialized_curriculum = false;
                        console.error(e.message);
                        window.setTimeout(onready_curriculum, 300);
                    }

                },
                "error": loadingerr

            })


        });



    </script>
    <script>
          var fbutton,name, email;

        function loadJambCourse(txt) {
            switch (txt) {
                case 'UTME':
                    populateUTME();
                    break;
                case 'WAEC/NECO Preparatory':
                    populateGroup(txt);
                    break;
                case "S.S.S.":
                    populateGroup(txt);
                    break;
                case 'J.S.S.':
                    populateGroup(txt);
                    break;
                case 'PRIMARY':
                    populateGroup(txt);
                    break;
                case 'ABILITY TEST':
                    populateGroup(txt);
                    break;
                default:
                    doalert('Please select an exam type.');
                    break;
            }
            return;

        }
        var globalSubject;
        function loadTopics(subject, scode, obj, save) {
            var sclass = $("#jambCourse").val();
            var scat = $("#jambExamType").val();
            $('.conexam').show();
            $('.sub').hide();

            $("#jambSubjectCode").val(scode);
            $("#jambSubject").val(subject);
            globalSubject = subject;
            if (typeof(save) == "undefined") {
                insertintohistory(loadTopics, [subject, scode, obj, false]);
            }
            dopost({
                "url": api_link + "/fetch_topics.php",
                "type": "POST",
                "data": {
                    "subject": scode,
                    "class": sclass,
                    //'userid':getItem('userid'),
                    "category": scat
                },
                "success": function(response) {

                    try {
                        json = JSON.parse(response);
                        if (json.hasOwnProperty("topics")) {
                            var topicList = $("#examClass1");
                            topicList.html("");
                            var subjspan = $('<div />');
                            subjspan.html(globalSubject);
                            subjspan.css('text-transform','captalize');
                            subjspan.css('color','#2a7c11');
                            subjspan.css('font-weight','bolder');
                            subjspan.css('padding-left','15px')
                            topicList.append(subjspan);
                            var h5 = $("<h5/>");
                            h5.addClass("h5");
                            h5.css('margin-left', '-7px');
                            var h51 = '<input type="checkbox" onchange="checkAll(this)" name="chk[]" /> Select All Topics';
                            h5.html(h51);
                            var topicDiv = $("<div/>");
                            topicDiv.addClass("curriculumBox");
                            topicDiv.css("max-height", "250px");
                            topicDiv.css("overflow-y", "scroll");
                            topicDiv.append(h5);
                            var offset = 0;
                            for (i = 0; i < json.topics.length; i++) {


                                var checkdiv = $("<div/>");
                                checkdiv.addClass("checkbox checkbox-primary");
                                var checkinput = $("<input/>");
                                checkinput.attr("id", "topicCon" + i);
                                checkinput.addClass("selectTopic");
                                var txt = $('<div/>');
                                txt = txt.html(json.topics[i]);

                                if( txt.find('[themeheader]').length==0){
                                   checkinput.attr("type", "checkbox");
                                   checkinput.attr("value", i + 1 + offset);
                                    checkinput.on("click",function(evt){if($(document).find("input.mythemeheader:checked").length==0){setItem('theme','');}});
                                    setItem('theme','');
                                }
                                else
                                    {

                                        checkinput.attr("type", "radio");
                                        checkinput.attr("name", "topicThemes");
                                        checkinput.addClass("mythemeheader");
                                        checkinput.on('click',function(evt){
                                            var themeheader = $(this.parentNode).find("[themeheader]").attr("themeheader");
                                            $(document).find("[theme]").each(function(){
                                               // console.log(this.parentNode.parentNode.innerHTML);
                                                if($(this).attr("theme")==themeheader)
                                                    {
                                                        setItem('theme',themeheader);
                                                        $(this.parentNode.parentNode).show();
                                                    }
                                                else
                                                    {
                                                        $(this.parentNode.parentNode).hide();
                                                       $(this.parentNode.parentNode).find('.selectTopic').each(function(){
                                                           $(this).prop('checked', false);
                                                       });
                                                    }

                                            });
                                        });
                                        offset--;
                                    }

                                checkinput.attr("valueStr", json.topics[i]);
                                var checklabel = $("<label/>");
                                checklabel.addClass("label");
                                checklabel.attr("for", "topicCon" + i);
                                checklabel.css("text-align", "justify");

                                checklabel.html(json.topics[i]);
                                checkdiv.append(checkinput);
                                checkdiv.append(checklabel);
                                topicDiv.append(checkdiv);
                                topicList.append(topicDiv);

                            }
                            var examControl = '<br /><div style="max-width:100%;"><div class="list-group-item list-group-item-danger">Time:<br /><br /><span><span id="ex6TimeSliderHrs">00</span>Hrs : <span id="ex6TimeSliderMin">15</span>Min</span><br /><input id="timeslider" type="text" data-slider-min="15" style="width:100%" data-slider-max="120" data-slider-step="1" data-slider-value="15"/&t<span id="ex6CurrentSliderValLabel"></span></div><div class="list-group-item list-group-item-danger">No of Question:&nbsp; <span id="ex6SliderVal">5</span><br /><input id="jambQNumber" style="width:100%" type="text" data-slider-min="5" data-slider-max="50" data-slider-step="1" data-slider-value="5"/&t<span id="ex6CurrentSliderValLabel"></span></div><br /><button class="btn btn-sm btn-primary" data-target="#" data-toggle="modal" onclick="saveopenExam(true);" style="margin-right:5px !important;" id="svGame"><span class="glyphicon glyphicon-save"></span>Save Game</button><a href="#examOpen" onclick="startNewExam();" data-target="#examOpen" data-toggle="modal"  class="btn btn-sm btn-primary" id="stExam"><span class="glyphicon glyphicon-ok"></span> Start Exam</a></div>';
                            var controlExam = $("<div/>");
                            controlExam.html(examControl);
                            topicList.append(controlExam);
                            if(queryString('mode')=='game')
                                {
                                    $('#stExam').hide();
                                    $('#svExam').hide();
                                }
                            else
                            {
                                $('#stGame').hide();
                                $('#svGame').hide();

                            }
                            slider = new Slider("#jambQNumber");
                            slider.on("slide", function(slideEvt) {
                                $("#ex6SliderVal").text(slideEvt.value);
                            });

                            $("#jambQNumber").on("slide", function(slideEvt) {
                                $("#ex6SliderVal").text(slideEvt.value);
                            });

                            $("#jambQNumber").on('slideStop', function(slideEvt) {
                                $("#ex6SliderVal").text(slideEvt.value);
                            });

                            $("#timeslider").slider();
                            $("#timeslider").on("slide", function(slideEvt) {
                                var minSlider = (parseInt(slideEvt.value) % 60) + "";
                                var hrSlider = (((parseInt(slideEvt.value)) - (parseInt(slideEvt.value) % 60)) / 60) + "";
                                minSlider = minSlider.length == 1 ? ("0" + minSlider) : minSlider;
                                hrSlider = hrSlider.length == 1 ? ("0" + hrSlider) : hrSlider;
                                $("#ex6TimeSliderMin").text(minSlider);
                                $("#ex6TimeSliderHrs").text(hrSlider);
                            });

                            $("#timeslider").on('slideStop', function(slideEvt) {
                                var minSlider = (parseInt(slideEvt.value) % 60) + "";
                                var hrSlider = (((parseInt(slideEvt.value)) - (parseInt(slideEvt.value) % 60)) / 60) + "";
                                minSlider = minSlider.length == 1 ? ("0" + minSlider) : minSlider;
                                hrSlider = hrSlider.length == 1 ? ("0" + hrSlider) : hrSlider;
                                $("#ex6TimeSliderMin").text(minSlider);
                                $("#ex6TimeSliderHrs").text(hrSlider);
                            });
                        } else {
                            doalert("No Topic Found");
                            window.location.href = "setup.html";
                        }

                    } catch (e) {
                        console.error(e.message);
                    }
                },
                "error": loadingerr
            });

        }



        function getClassSubjects(strData) {
            var ret = [];
            var classList = {};
            for (var rowNo in subjectsJSON) {
                if (strData.indexOf(subjectsJSON[rowNo].class) != -1)
                    classList[subjectsJSON[rowNo].subject] = '';
            }
            for (var rowNo in classList) {
                ret[ret.length] = rowNo;
            }
            return ret;
        }

        function populateGroup(grp) {
            var courseDesc = '';
            var grp2 = '';
            var subjectsJSON2 = subjectsJSON;
            switch (grp) {
                case 'WAEC/NECO Preparatory':
                    courseDesc = 'Group:';
                    grp2 = '';
                    subjectsJSON2 = [{
                        "examtype": "WAEC/NECO Preparatory",
                        "class": "ALL SUBJECTS"
                    }];

                    //grp = "O'LEVEL";
                    break;
                case "S.S.S.":
                    courseDesc = 'Class:';
                    grp2 = '';
                    grp = "O'LEVEL";
                    break;
                case 'J.S.S.':
                    courseDesc = 'Class:';
                    grp2 = '';
                    break;
                case 'PRIMARY':
                    courseDesc = 'Class:';
                    grp2 = '';
                    break;
                case 'ABILITY TEST':
                    courseDesc = 'Class:';
                    grp2 = '';
                    //grp = 'ABILITY TEST';
                    break;
                default:
                    courseDesc = 'Course:';
                    grp2 = '';
                    break;
            }
            $("#courseDesc").html(courseDesc);
            var jambCourse = $("#jambCourse");
            jambCourse.empty();
            var classList = {};
            var topicList = $('#examClass1').html("");
            for (var rowNo in subjectsJSON2) {
                if (grp.indexOf(subjectsJSON2[rowNo].examtype) != -1)
                    classList[subjectsJSON2[rowNo].class] = '';
            }
            if (classList.length === 0)
                classList[grp] = '';
            var comblist = [];
            for (var rowName in classList) {
                var option = $("<option/>");
                option.val(rowName).text(rowName);
                jambCourse.append(option);
                comblist[comblist.length] = rowName;
            }
            /*

            jambCourse.text("");
            for (var rows in subjectsJSON)
            {
              var option = $("<option/>");
              option.val(combination).text(combination);
              jambCourse.append(option);
            }
            */
            jambCourse.find('option:first').attr('selected', 'selected');
            $("#jambCourse-button").find('span:first').html(comblist[0]);
            $("#jambClassListView").css('display', 'none');
            $("#jambCourse").trigger('change');

        }

        function populateUTME() {
            var jambCourse = $("#jambCourse");
            jambCourse.html("<option>Select Subject</option>")
            jambCourse.empty();
            jambCourse.text("");
            var comblist = [];
            for (var combination in exams['combinations']) {
                var option = $("<option/>");
                option.val(combination).text(combination);
                jambCourse.append(option);
                comblist[comblist.length] = combination;
            }
            $("#courseDesc").html('UTME Course:');
            jambCourse.find('option:first').attr('selected', 'selected');
            $("#jambCourse-button").find('span:first').html(comblist[0]);
            $("#jambClassListView").css('display', 'none');
            $("#jambCourse").trigger('change');
        }
        function getExamSettings(){
        var examSettings = {
                "userid": "guest",
                "category": "OLEVEL",
                //"category": $('#jambExamType').val(),
                //"course": $("#jambCourse").val(),
                "course": "",
                "subject": $("#jambSubject").val(),
                "code": $("#jambSubjectCode").val(),
                "questionNo": $("#ex6SliderVal").text(), // $("#jambQNumber option:selected").text(),
                //"timed": $("#examTimed option:selected").text(),
                "hour": $("#ex6TimeSliderHrs").text(),
                "minute": $("#ex6TimeSliderMin").text(),

                "topic": $("#examClass1").text()
            };
            var topic = "";
            mytopicList = [];
            $('.selectTopic:checkbox:checked').each(function() {
                topic += "#" + $(this).val();
                mytopicList[mytopicList.length]=$(this).attr('valueStr');
            });
            examSettings.topic = topic;
            return examSettings;
        }
        function startNewExam() {
            setItem('examSettings', JSON.stringify(getExamSettings()));
            //window.location.href="exam.html";
            var examSettings = JSON.parse(getItem('examSettings'));

//        var exam_initialized = false;
//        var onready_exam = (function() {
//            if (exam_initialized)
//                return;
//            exam_initialized = true;
             //var $scrollbar = $("#infoSyllabus");

                //$scrollbar.tinyscrollbar();

            //checkStatus();
            //notifyStudent();

            /*Pause and Resume*/
            //$('#resumeexam').hide();
            $("div.checkbox").click(function() {
                $(this).find('input:radio').attr('checked', true);
            });

            $('#pauseexam').click(function() {
                interval = 0;
                $('div.pauExam').css('display', 'none');
                $('div.examPauseDiv').css('display', 'block');
                //$('#resumeexam').css('display','block');
                $('#pauseexam').css('display', 'none');
                $('#examP').css('display', 'none');
            });
            $('#resumeexam').click(function() {
                interval = 1000;
                $('div.pauExam').css('display', 'block');
                $('div.examPauseDiv').css('display', 'none');
                $('#pauseexam').css('display', 'block');
                $('#examP').css('display', 'block');
                //$('#resumeexam').css('display','none');
            });

            $('#viewAnswer').hide();

            var theme = getItem('theme');
            if (theme == "" || theme == null) {
                $('#themediv').css('display', 'none');
            } else {
                $('#subtheme').html(theme);

            }
            //viewSideFirends();
            $('#endExamButton').click(function() {
                $('#confirmDelete').modal({
                    show: true
                })
            });
            $('#openBtn').click(function() {
                $('#confirmDelete').modal({
                    show: true
                })
            });
            $('#confirmEnd').click(function() {
                endExam();
                $('#endExam').modal({
                    show: true
                })
            });
            try {

                $.blockUI({
                    message: 'Fetching questions please wait....'
                });

              dopost({
                        "type": "POST",
                        "url": api_link + "/fetchexam.php",
                        "data": {
                            "category":"ALL SUBJECTS",
                            "subject": examSettings.code,
                            "modulename": examSettings.subject,
                            "questions": examSettings.questionNo,
                            "course": "ALL SUBJECTS",
                            "syllabus": examSettings.topic,
                            'userid': "guest",
                            "timeallowed": ((parseInt(examSettings.minute) * 60) + (parseInt(examSettings.hour) * 3600))
                        },
                        "success": function(response) {
                            $.unblockUI('hide');
                            try {
                                var json = JSON.parse(response);
                                if (json.hasOwnProperty('status'))
                                    doalert(json.status);
                                if (json.length > 0) {
                                        var examSettings2 = getExamSettings();
                                    json.name = examSettings2.subject;
                                    $('#examP span:eq(0)').html(examSettings2.category);
                                    $('#examP span:eq(1)').html("All SUBJECTS");
                                    $('#examP span:eq(2)').html(json.name);
                                    $('#examP span:eq(3)').html(json.length);
                                    $('#examP1 span:eq(0)').html(examSettings2.category);

                                    $('#examP1 span:eq(1)').html(examSettings2.course);
                                    $('#examP1 span:eq(2)').html(json.name);
                                    $('#examP1 span:eq(3)').html(json.length);
                                    var timeallowed = getTimeAllowed(json.timeleft);
                                    examObj['timeLeft'] = json.timeleft;
                                    window.setInterval("doCounter();", interval);
                                    $('#examP span:eq(4)').html(timeallowed);
                                    $('#examP1 span:eq(4)').html(timeallowed);
                                    var d = new Date();
                                    $('#endInfo tr:eq(0) td:eq(1)').html(d.toLocaleTimeString());
                                    $('#endInfo tr:eq(2) td:eq(1)').html(json.name);
                                    $('#endInfo tr:eq(7) td:eq(1)').html(json.length);

                                    var testcontent = {};
                                    for (var id in json.rows) {
                                        if (json.rows[id].syllabus != '')
                                            testcontent[json.rows[id].syllabus] = 0;
                                        json.rows[id].qnumber = parseInt(json.rows[id].qnumber);
                                        json.rows[id].qlocation = parseInt(json.rows[id].qlocation);
                                    }
                                    var ul = $('<ul/>');
                                    for (var mycontent in testcontent) {
                                        var li = $('<li/>');
                                        li.html(mycontent);
                                        ul.append(li);
                                    }
                                    $('#endInfo tr:eq(8) td:eq(1)').append(ul);
                                    $('#endInfo tr:eq(9) td:eq(1)').html(timeallowed);

                                    //$('#questionList').html('');


                                    var html = '';
                                    html += '<div id="main">';
                                    html += '<div id="container" class="cf">';
                                    html += '<section class="slider">';
                                    html += '<div class="flexslider">';
                                    html += '<ul class="slides">';

                                    $(".subject").html(json.name);
                                    $(".classExam").html("ALL SUBJECTS");

                                    for (var id in json.rows) {
                                        var span = $('<div/>');
                                        span.attr('onclick', 'myslider.flexslider(' + id + ');');

                                        span.css('cursor', 'pointer');
                                        span.css('display', 'inline-block');
                                        span.html(parseInt(id) + 1);
                                        $('#questionList').append('&nbsp;');
                                        $('#questionList').append(span);
                                        var noanswered = $('#answeredcount');
                                        noanswered.val(json.rows[id].answer);
                                        examObj.QuestionSet[examObj.QuestionSet.length] = {
                                            "qlocation": json.rows[id].qlocation,
                                            "answer": '',
                                            "correct_answer": json.rows[id].correct_answer,
                                            "topics": json.rows[id].syllabus,
                                            "subject": json.rows[id].modulename,
                                            "timeallowed": json.rows[id].timeallowed
                                        };


                                        html += '<li>';
                                        html += '<div data-lastcheck="" data-offset="10" data-type="user-timeline" id="post-list">';
                                        html += '<div id="post-13119" user-timeline="" add-blog="" 0="" class="well animated zoomIn post-media user-post-1">';
                                        html += ' <div class="post-header clearfix"><div class="header-object"><h4 style="color:red !important; font-size:1em !important;">' + (parseInt(id) + 1) + '</h4></div><div class="header-body"><h3 class="title"><p style="text-transform:capitalize !important; color:green">' + json.rows[id].instruction + '</p></h3></div></div>';

                                        html += '<div class="post-body"><div class="media blog-in-post"><div class="media-object pull-left"><i class="icon ion-clipboard"></i></div><div class="media-body" style="text-align:justify">' + json.rows[id].question + '<div class="examDiagram">' + json.rows[id].diagram + '</div></div></div></div>';

                                        html += '<hr>';
                                        html += '<div class="post-replies" id="13119-post-replies" data-limit="3" data-offset="3" data-type="post" data-type-id="13119">';
                                        html += '<fieldset>';
                                        if (json.rows[id].optiona != '')
                                            html += '<div class="checkbox checkbox-success" onclick="doAnswer(' + "'optiona" + json.rows[id].qlocation + "'" + ')"><input type="radio" qnumber="' + (parseInt(id)) + '" name="examoption' + json.rows[id].qlocation + '" id="optiona' + json.rows[id].qlocation + '"  value="A"><label for="optiona' + json.rows[id].qlocation + '">&nbsp;<span style="color:#0F5333; font-size:12pt;">A.</span>&nbsp; ' + json.rows[id].optiona + '</label></div>';

                                        if (json.rows[id].optionb != '')
                                            html += '<div class="checkbox checkbox-success" onclick="doAnswer(' + "'optionb" + json.rows[id].qlocation + "'" + ')"><input type="radio" qnumber="' + (parseInt(id)) + '" name="examoption' + json.rows[id].qlocation + '" id="optionb' + json.rows[id].qlocation + '" value="B"><label for="optionb' + json.rows[id].qlocation + '">&nbsp;<span style="color:#0F5333; font-size:12pt;">B.</span>&nbsp; ' + json.rows[id].optionb + '</label></div>';

                                        if (json.rows[id].optionc != '')
                                            html += '<div class="checkbox checkbox-success" onclick="doAnswer(' + "'optionc" + json.rows[id].qlocation + "'" + ')"><input type="radio" qnumber="' + (parseInt(id)) + '" name="examoption' + json.rows[id].qlocation + '" id="optionc' + json.rows[id].qlocation + '" value="C"><label for="optionc' + json.rows[id].qlocation + '">&nbsp;<span style="color:#0F5333; font-size:12pt;">C.</span>&nbsp; ' + json.rows[id].optionc + '</label></div>';

                                        if (json.rows[id].optiond != '')
                                            html += '<div class="checkbox checkbox-success" onclick="doAnswer(' + "'optiond" + json.rows[id].qlocation + "'" + ')"><input type="radio" qnumber="' + (parseInt(id)) + '" name="examoption' + json.rows[id].qlocation + '" id="optiond' + json.rows[id].qlocation + '" value="D"><label for="optiond' + json.rows[id].qlocation + '">&nbsp;<span style="color:#0F5333; font-size:12pt;">D.</span>&nbsp; ' + json.rows[id].optiond + '</label></div>';

                                        if (json.rows[id].optione != '')
                                            html += '<div class="checkbox checkbox-success" onclick="doAnswer(' + "'optione" + json.rows[id].qlocation + "'" + ')"><input type="radio" qnumber="' + (parseInt(id)) + '" name="examoption' + json.rows[id].qlocation + '" id="optione' + json.rows[id].qlocation + '" value="E"><label for="optione' + json.rows[id].qlocation + '">&nbsp;<span style="color:#0F5333; font-size:12pt;">E.</span>&nbsp; ' + json.rows[id].optione + '</label></div>';
                                        html += '</fieldset></div></div>';
                                        if (json.rows[id].answer == '')
                                            json.rows[id].answer = '<span style="color:#2E68BC !important">The correct answer is option <strong>[' + json.rows[id].correct_answer + ']</strong></span>';
                                        html += '<label style="display:none; color:#880000;" class="mycorrectanswer">' + json.rows[id].answer + '</label>';
                                        html += '</span>';
                                        html += '</li>';



                                    }

                                    html += '</ul></div></div></section></div></div>';
                                    console.log(html);
                                    $('#mainslide').html(html);


                                    myslider = $('.flexslider').flexslider({
                                        animation: "slide",
                                        animationLoop: false,
                                        start: function(slider) {
                                            $("#prevButton").hide();
                                            //                                                $(document).on('click', '.next', function() {
                                            //                                                    $('.flex-direction-nav .flex-next:first').trigger('click');
                                            //                                                    return false;
                                            //                                                });
                                            //                                                $(document).on('click', '.prev', function() {
                                            //                                                    $('.flex-direction-nav .flex-prev:first').trigger('click');
                                            //                                                    return false;
                                            //                                                });
                                        },
                                        end: function() {
                                            $("#nextButton").hide();
                                        }
                                    });


                                } else {
                                    if (!json.hasOwnProperty('status'))
                                        doalert('No questions found');
                                }

                            } catch (e) {

                                console.log(e.message);
                                //exam_initialized = false;
                                //window.setTimeout(onready_exam, 300);
                            }

                        },
                        "fail": function(xReq, statusText) {

                            doalert(statusText);
                        }
                    });
            } catch (e) {
                console.error(e.message);
            }
        }
//        $(document).ready(
//            function() {
//                window.setTimeout(onready_exam, 150);
//            }
//        );






        function startNewGame() {
            var examSettings = {
                "userid": getItem('userid'),
                "category": $('#jambExamType').val(),
                "course": $("#jambCourse").val(),
                "subject": $("#jambSubject").val(),
                "code": $("#jambSubjectCode").val(),
                "questionNo": $("#ex6SliderVal").text(),
                //"timed": $("#examTimed option:selected").text(),
                "hour": $("#ex6TimeSliderHrs").text(),
                "minute": $("#ex6TimeSliderMin").text(),
                "topic": $("#examClass1").text()
            };
            var topic = "";
            $('.selectTopic:checkbox:checked').each(function() {
                topic += "#" + $(this).val();
            });
            examSettings.topic = topic;

            setItem('examSettings', JSON.stringify(examSettings));
            window.location.href = "games.html";

            //doalert(JSON.stringify(examSettings));
        }

      function loadSubjects(strData, useSubjectList, elid, obj, save) {
            $('#back').show();
            var container = $("#cont");
            var jambSubject = $("#examClass1");
            jambSubject.html("");
            var combinations = exams['combinations'];
            var comblist = [];

            var topicList = $('#topicList').html("");
            var nxtid = '';
            if (typeof(save) == "undefined") {
                insertintohistory(loadSubjects, [strData, useSubjectList, elid, obj, false]);
            }
            console.log();
            $('#' + elid).val(strData);
            if (elid === 'jambExamType') {
                if (strData === 'ALL SUBJECTS'/* || strData === 'ABILITY TEST'*/|| strData === 'TEACHER DEVELOPMENT') {
                    nxtid = 'jambSubject';
                    $("#jambSubject").val("");
                    $("#jambCourse").val("ALL SUBJECTS");
                } else {
                    nxtid = 'jambCourse';
                    $("#jambSubject").val("");
                    $("#jambCourse").val("");
                }
            }
            if (elid === 'jambCourse') {
                $("#jambSubject").val("");
                nxtid = 'jambSubject';
                $('.cla').hide();
                $('.sub').show();
                $('.conexam').hide();
            }


            setItem(elid, strData);
            var divClass;
            if (useSubjectList == true) {

                var mydat = {};
                for (i = 0; i < subjectsJSON.length; i++) {
                    if (subjectsJSON[i].examtype === strData || subjectsJSON[i].class === strData)
                        mydat[subjectsJSON[i].subject] = subjectsJSON[i].code;
                }
                for (var x in mydat) {
                    comblist[comblist.length] = {
                        "subject": x,
                        "code": mydat[x],
                        "examtype" : getExamTypeForCode(mydat[x])
                    };

                }
                                //doalert(JSON.stringify({"comblist":comblist}));
            } else {

                if (combinations.hasOwnProperty(strData)) {

                    if (isCategory(strData))
                        comblist = getCategoryClasses(strData);
                    else
                        comblist = combinations[strData];
                } else
                    comblist = getClassSubjects(strData === "ALL SUBJECTS" ? "S.S.S. 1" : strData);
            }
            if (comblist.length > 0) {
                jambSubject.empty();
                jambSubject.text("");

                for (var i = 0; i < comblist.length; i++) {
                    var classDiv = $("<div/>");
                    console.log(JSON.stringify(comblist[i]));
                    classDiv.addClass("col-md-3 animated zoomIn delay1s");
                    classDiv.css("height", "140px");
                   // var br = $("<br />");
                    var menuItem = $("<div/>");
                    menuItem.addClass("square-tile");

                    var examA = $("<a/>");
                    examA.addClass("newExam");
                    examA.attr('href', '#');
                    examA.attr('examtype', strData);
                    var myexamtype = "";
                        var objexamtype = "";
                        try{
                        myexamtype = comblist[i].hasOwnProperty("examtype") ? comblist[i].examtype : "";
                        objexamtype = $(obj).attr('examtype');
                        }catch(e){
                        console.error(e.message);
                        }
                        if(myexamtype != objexamtype && typeof(objexamtype) != 'undefined')
                        {
                            console.log(objexamtype + " != " + myexamtype);
                           // continue;
                        }

                    if (nxtid !== 'jambSubject') {
                        if (combinations.hasOwnProperty(comblist[i]))
                            examA.attr('onclick', 'loadSubjects("' + (comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i]) + '",false,"' + nxtid + '",this)');
                        else
                            examA.attr('onclick', 'loadSubjects("' + (comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i]) + '",true,"' + nxtid + '",this)');
                    } else {
                        if (combinations.hasOwnProperty(comblist[i]))
                            examA.attr('onclick', 'loadTopics("' + comblist[i].subject + '","' + comblist[i].code + '",this)');
                        else
                            examA.attr('onclick', 'loadTopics("' + comblist[i].subject + '","' + comblist[i].code + '",this)');

                    }

                    var examIcon = $("<i/>");
                    examIcon.addClass("ion-clipboard");
                    examIcon.css("color","#777");
                    var examCon = $("<p/>");
                    examCon.addClass("animated zoomIn");
                    examCon.css("color","#000");
                    //examCon.css("height","50px");
                    examCon.css("font-size","9pt");
                    examCon.html((comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i])).text((comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i]));

                    examA.append(examIcon);
                    examA.append(examCon);
                    menuItem.append(examA);
                    classDiv.append(menuItem);
                    jambSubject.append(classDiv);

                }
            }
        }


function syllabusSubjects(strData, useSubjectList, elid, obj, save) {
            $('#back').show();
            var container = $("#cont");
            var jambSubject = $("#showallsubjects");
            jambSubject.html("");
            var combinations = exams['combinations'];
            var comblist = [];

            var topicList = $('#topicList').html("");
            var nxtid = '';
            if (typeof(save) == "undefined") {
                insertintohistory(loadSubjects, [strData, useSubjectList, elid, obj, false]);
            }
            console.log();
            $('#' + elid).val(strData);
            if (elid === 'jambExamType') {
                if (strData === 'ALL SUBJECTS'/* || strData === 'ABILITY TEST'*/|| strData === 'TEACHER DEVELOPMENT') {
                    nxtid = 'jambSubject';
                    $("#jambSubject").val("");
                    $("#jambCourse").val("ALL SUBJECTS");
                } else {
                    nxtid = 'jambCourse';
                    $("#jambSubject").val("");
                    $("#jambCourse").val("");
                }
            }
            if (elid === 'jambCourse') {
                $("#jambSubject").val("");
                nxtid = 'jambSubject';
                $('.cla').hide();
                $('.sub').show();
                $('.conexam').hide();
            }


            setItem(elid, strData);
            var divClass;
            if (useSubjectList == true) {

                var mydat = {};
                for (i = 0; i < subjectsJSON.length; i++) {
                    if (subjectsJSON[i].examtype === strData || subjectsJSON[i].class === strData)
                        mydat[subjectsJSON[i].subject] = subjectsJSON[i].code;
                }
                for (var x in mydat) {
                    comblist[comblist.length] = {
                        "subject": x,
                        "code": mydat[x],
                        "examtype" : getExamTypeForCode(mydat[x])
                    };

                }
                                //doalert(JSON.stringify({"comblist":comblist}));
            } else {

                if (combinations.hasOwnProperty(strData)) {

                    if (isCategory(strData))
                        comblist = getCategoryClasses(strData);
                    else
                        comblist = combinations[strData];
                } else
                    comblist = getClassSubjects(strData === "ALL SUBJECTS" ? "S.S.S. 1" : strData);
            }
            if (comblist.length > 0) {
                jambSubject.empty();
                jambSubject.text("");

                for (var i = 0; i < comblist.length; i++) {
                    var classDiv = $("<div/>");
                    console.log(JSON.stringify(comblist[i]));
                    classDiv.addClass("col-md-3 animated zoomIn delay1s");
                    classDiv.css("height", "140px");
                   // var br = $("<br />");
                    var menuItem = $("<div/>");
                    menuItem.addClass("square-tile");

                    var examA = $("<a/>");
                    examA.addClass("newExam");
                    examA.attr('href', '#');
                    examA.attr('examtype', strData);
                    var myexamtype = "";
                        var objexamtype = "";
                        try{
                        myexamtype = comblist[i].hasOwnProperty("examtype") ? comblist[i].examtype : "";
                        objexamtype = $(obj).attr('examtype');
                        }catch(e){
                        console.error(e.message);
                        }
                        if(myexamtype != objexamtype && typeof(objexamtype) != 'undefined')
                        {
                            console.log(objexamtype + " != " + myexamtype);
                           // continue;
                        }

                    if (nxtid !== 'jambSubject') {
                        if (combinations.hasOwnProperty(comblist[i]))
                            examA.attr('onclick', 'loadSubjects("' + (comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i]) + '",false,"' + nxtid + '",this)');
                        else
                            examA.attr('onclick', 'loadSubjects("' + (comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i]) + '",true,"' + nxtid + '",this)');
                    } else {
                        if (combinations.hasOwnProperty(comblist[i]))
                            examA.attr('onclick', 'loadTopics("' + comblist[i].subject + '","' + comblist[i].code + '",this)');
                        else
                            examA.attr('onclick', 'loadTopics("' + comblist[i].subject + '","' + comblist[i].code + '",this)');

                    }

                    var examIcon = $("<i/>");
                    examIcon.addClass("ion-clipboard");
                    examIcon.css("color","#777");
                    var examCon = $("<p/>");
                    examCon.addClass("animated zoomIn");
                    examCon.css("color","#000");
                    //examCon.css("height","50px");
                    examCon.css("font-size","9pt");
                    examCon.html((comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i])).text((comblist[i].hasOwnProperty("subject") ? comblist[i].subject : comblist[i]));

                    examA.append(examIcon);
                    examA.append(examCon);
                    menuItem.append(examA);
                    classDiv.append(menuItem);
                    jambSubject.append(classDiv);

                }
            }
        }

        function examTimeInterval() {
            bootbox.dialog({
                message: "Time up! Click ok to view result",
                title: "Joint Admissions and Matriculation Board (JAMB)",
                buttons: {
                    success: {
                        label: "Ok",
                        className: "btn-primary btn-sm",
                        callback: function() {
                            endExam();
                            $('#endExam').modal({
                                show: true
                            });
                        }
                    }

                }
            });
        }



        function doCounter() {
            if (examStarted && !timeElapsed) {
                examObj['timeUsed'] = parseInt(examObj['timeUsed']) + (parseInt(interval) / 1000);
                examObj['timeLeft'] = parseInt(examObj['timeLeft']) - (parseInt(interval) / 1000);
                $('#examTime').html(getTimeAllowed(parseInt(examObj['timeLeft'])));
                $('#progressbar').css('width', parseInt((parseInt(examObj['timeUsed']) / (parseInt(examObj['timeLeft']) + parseInt(examObj['timeUsed']))) * 100) + '%');


                if (examObj['timeLeft'] == 0) {
                    timeElapsed = true;
                    examTimeInterval();

                } else if (parseInt(examObj['timeLeft']) <= 300 && !donealert) {
                    donealert = true;
                    doalert('You have less than <span style=color:red>five (5) minutes</span> remaining');
                }

            }

        }

        function queryString(sVar) {
            return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
        }

        function getTimeAllowed(inTime) {
            var innerTimeGone = parseInt(inTime) * 1000;
            var hourPart = "00";
            var minutePart = "00";
            var secondsPart = "00";
            //get the hour part of the time
            if (innerTimeGone / (60 * 60 * 1000) > 0) {
                hourPart = String(innerTimeGone / (60 * 60 * 1000));
                if (hourPart.indexOf(".") != -1) {
                    hourPart = hourPart.substring(0, hourPart.indexOf("."));
                }
                while (hourPart.length < 2)
                    hourPart = "0" + hourPart;
            }
            hourPart = hourPart + ":";
            //get the minute part of the time
            var remainingTimeFromHour = innerTimeGone % (60 * 60 * 1000);
            if (remainingTimeFromHour / (60 * 1000) > 0) {
                minutePart = String(remainingTimeFromHour / (60 * 1000));
                if (minutePart.indexOf(".") != -1) {
                    minutePart = minutePart.substring(0, minutePart.indexOf("."));
                }
                while (minutePart.length < 2)
                    minutePart = "0" + minutePart;
            }
            minutePart = minutePart + ":";
            //get the seconds part of the time
            var remainingTimeFromMinutes = remainingTimeFromHour % (60 * 1000);
            if (remainingTimeFromMinutes / 1000 > 0) {
                secondsPart = String(remainingTimeFromMinutes / 1000);
                if (secondsPart.indexOf(".") != -1) {
                    secondsPart = secondsPart.substring(0, secondsPart.indexOf("."));
                }
                while (secondsPart.length < 2)
                    secondsPart = "0" + secondsPart;
            }
            return (hourPart + minutePart + secondsPart);

        }

        function doAnswer(id) {
            if (examStarted && !timeElapsed) {
                var obj = $('#' + id);
                var qnumber = obj.attr('qnumber');

                if (examObj.QuestionSet.hasOwnProperty(qnumber)) {

                    if (examObj.QuestionSet[qnumber] != null) {

                        if (examObj.QuestionSet[qnumber].hasOwnProperty('answer')) {

                            if (obj.is(':checked')) {

                                examObj.QuestionSet[qnumber].answer = obj.val();
                                var divs = $('#questionList div:eq(' + (parseInt(qnumber)) + ')');
                                divs.css('background', '#09c');
                                divs.css('border-radius', '5px');
                                divs.css('border', '#000 1px solid');
                                divs.css('padding', '1px 1px 1px 1px');
                                divs.css('color', '#ffffff');
                            }

                        }
                    }
                }
            }
        }

        function getQuestIDStr(strData, strExamType) {
            var subjectCodes = [{
                    "subject": "AGRICULTURAL SCIENCE",
                    "examtype": "J.S.S.",
                    "code": "UBEAGRICSCIENCE"
                }, {
                    "subject": "AGRICULTURAL SCIENCE",
                    "examtype": "O'LEVEL",
                    "code": "BF0D"
                }, {
                    "subject": "AGRICULTURAL SCIENCE",
                    "examtype": "PRIMARY",
                    "code": "PRIAGRICSC"
                },

                {
                    "subject": "BASIC SCIENCE AND TECHNOLOGY",
                    "examtype": "J.S.S.",
                    "code": "UBEINTEGRATEDSCIENCE"
                }, {
                    "subject": "BASIC SCIENCE AND TECHNOLOGY",
                    "examtype": "PRIMARY",
                    "code": "BASICSCTECH"
                },

                {
                    "subject": "BASIC TECHNOLOGY",
                    "examtype": "J.S.S.",
                    "code": "UBEINTROTECH"
                },

                {
                    "subject": "BIOLOGY",
                    "examtype": "O'LEVEL",
                    "code": "BF02"
                },

                {
                    "subject": "BUSINESS STUDIES",
                    "examtype": "J.S.S.",
                    "code": "UBEBUSINESSSTUDIES"
                },

                {
                    "subject": "CARPENTRY AND JOINERY",
                    "examtype": "O'LEVEL",
                    "code": "CARPENTRY_AND_JOINERY"
                }, {
                    "subject": "CHEMISTRY",
                    "examtype": "O'LEVEL",
                    "code": "BF03"
                },

                {
                    "subject": "CHRISTIAN RELIGIOUS STUDIES",
                    "examtype": "J.S.S.",
                    "code": "UBECRK"
                }, {
                    "subject": "CHRISTIAN RELIGIOUS STUDIES",
                    "examtype": "O'LEVEL",
                    "code": "BF04"
                }, {
                    "subject": "CHRISTIAN RELIGIOUS STUDIES",
                    "examtype": "PRIMARY",
                    "code": "PRICRK"
                },

                {
                    "subject": "CIVIC EDUCATION",
                    "examtype": "J.S.S.",
                    "code": "JSS_CIVIC_EDUCATION"
                }, {
                    "subject": "CIVIC EDUCATION",
                    "examtype": "O'LEVEL",
                    "code": "SSS_CIVIC_EDUCATION"
                }, {
                    "subject": "CIVIC EDUCATION",
                    "examtype": "PRIMARY",
                    "code": "PRI_CIVIC_EDUCATION"
                }, {
                    "subject": "CLOTHING AND TEXTILES",
                    "examtype": "O'LEVEL",
                    "code": "CLOTHING_AND_TEXTILES"
                }, {
                    "subject": "COMMERCE",
                    "examtype": "O'LEVEL",
                    "code": "BF0B"
                }, {
                    "subject": "COMPUTER STUDIES",
                    "examtype": "J.S.S.",
                    "code": "UBECOMPUTERSTUDIES"
                }, {
                    "subject": "COMPUTER STUDIES",
                    "examtype": "O'LEVEL",
                    "code": "SSSCOMPUTERSTUDIES"
                }, {
                    "subject": "COMPUTER STUDIES",
                    "examtype": "PRIMARY",
                    "code": "PRICOMPUTERSTUDIES"
                }, {
                    "subject": "CULTURAL AND CREATIVE ARTS",
                    "examtype": "J.S.S.",
                    "code": "FINEARTS"
                }, {
                    "subject": "ECONOMICS",
                    "examtype": "O'LEVEL",
                    "code": "BF05"
                }, {
                    "subject": "ENGLISH LANGUAGE",
                    "examtype": "J.S.S.",
                    "code": "UBEENGLISH"
                }, {
                    "subject": "ENGLISH LANGUAGE",
                    "examtype": "O'LEVEL",
                    "code": "BF06"
                }, {
                    "subject": "ENGLISH LANGUAGE",
                    "examtype": "PRIMARY",
                    "code": "PRIENG"
                }, {
                    "subject": "FINANCIAL ACCOUNTING",
                    "examtype": "O'LEVEL",
                    "code": "BF01"
                }, {
                    "subject": "FOODS AND NUTRITION",
                    "examtype": "O'LEVEL",
                    "code": "FOODS_AND_NUTRITION"
                }, {
                    "subject": "FRENCH",
                    "examtype": "J.S.S.",
                    "code": "UBEFRENCH"
                }, {
                    "subject": "FRENCH",
                    "examtype": "PRIMARY",
                    "code": "PRIFRENCH"
                }, {
                    "subject": "FURTHER MATHEMATICS",
                    "examtype": "O'LEVEL",
                    "code": "FURTHERMATHS"
                }, {
                    "subject": "GEOGRAPHY",
                    "examtype": "O'LEVEL",
                    "code": "GEOGRAPHY"
                }, {
                    "subject": "GOVERNMENT",
                    "examtype": "O'LEVEL",
                    "code": "BF07"
                }, {
                    "subject": "HAUSA LANGUAGE",
                    "examtype": "O'LEVEL",
                    "code": "SSS_HAUSA"
                }, {
                    "subject": "HISTORY",
                    "examtype": "O'LEVEL",
                    "code": "BF0C"
                }, {
                    "subject": "HOME ECONOMICS",
                    "examtype": "J.S.S.",
                    "code": "UBEHOMEECONOMICS"
                }, {
                    "subject": "HOME ECONOMICS",
                    "examtype": "PRIMARY",
                    "code": "PRIHOMEECONS"
                }, {
                    "subject": "IGBO LANGUAGE",
                    "examtype": "O'LEVEL",
                    "code": "SSS_IGBO"
                }, {
                    "subject": "LITERATURE IN ENGLISH",
                    "examtype": "O'LEVEL",
                    "code": "BF08"
                }, {
                    "subject": "MATHEMATICS",
                    "examtype": "J.S.S.",
                    "code": "UBEMATHS"
                }, {
                    "subject": "MATHEMATICS",
                    "examtype": "O'LEVEL",
                    "code": "BF09"
                }, {
                    "subject": "MATHEMATICS",
                    "examtype": "PRIMARY",
                    "code": "PRIMATHS"
                }, {
                    "subject": "METAL WORK",
                    "examtype": "O'LEVEL",
                    "code": "METAL_WORK"
                }, {
                    "subject": "PHYSICAL AND HEALTH EDUCATION",
                    "examtype": "J.S.S.",
                    "code": "UBEPHYSICALEDUCATION"
                }, {
                    "subject": "PHYSICAL AND HEALTH EDUCATION",
                    "examtype": "PRIMARY",
                    "code": "PRIPHE"
                }, {
                    "subject": "PHYSICS",
                    "examtype": "O'LEVEL",
                    "code": "BF0A"
                }, {
                    "subject": "QUANTITATIVE ANALYSIS",
                    "examtype": "PRIMARY",
                    "code": "UBEQUANTITATIVE"
                }, {
                    "subject": "SOCIAL STUDIES",
                    "examtype": "J.S.S.",
                    "code": "UBESOCIALSTUDIES"
                }, {
                    "subject": "SOCIAL STUDIES",
                    "examtype": "PRIMARY",
                    "code": "PRISOCST"
                }, {
                    "subject": "TECHNICAL DRAWING",
                    "examtype": "O'LEVEL",
                    "code": "TECHNICAL_DRAWING"
                }, {
                    "subject": "VERBAL APTITUDE",
                    "examtype": "PRIMARY",
                    "code": "UBEVERBALAPTITUDE"
                }, {
                    "subject": "VISUAL ARTS",
                    "examtype": "O'LEVEL",
                    "code": "VISUAL_ARTS"
                }, {
                    "subject": "YORUBA LANGUAGE",
                    "examtype": "O'LEVEL",
                    "code": "SSS_YORUBA"
                }
            ];
            for (var idx in subjectCodes) {
                if (subjectCodes[idx].subject === strData && subjectCodes[idx].examtype === strExamType)
                    return subjectCodes[idx].code;
            }
            return '';
        }

        function describeQuestion(qlocation) {
            var questID = $('#qID');
            questID.html(examSettings.code + qlocation);
        }

        function addQuestReport() {
            var fullname = getItem('name');
            var bfversion = getItem('bfversion');
            var questID = $('#qID');
            var comment = $('#comment').val();

            dopost({
                "url": api_link + "/reportquestion.php",
                "data": {
                    "fullname": fullname,
                    "questioncode": questID.html(),
                    "userid": "steve",
                    'host': window.location.host,
                    'useralias': "Steve Tamuno",
                    'usercomment': comment
                },
                "type": "POST",
                "success": function(response) {
                    try {
                        var json = JSON.parse(response);
                        doalert(json.status);


                    } catch (e) {
                        $.unblockUI();
                        console.error("Report cannot be added..." + e.message);
                    }
                },

                "error": function(jqXHR, textStatus) {
                    //$.mobile.loading('hide');
                    $.unblockUI();
                    doalert("Report not added");
                }
            });

        }

        function getQuestExamType(strData) {
            var examTypes = [{
                "examtype": "J.S.S.",
                "class": "J.S.S. 1"
            }, {
                "examtype": "J.S.S.",
                "class": "J.S.S. 2"
            }, {
                "examtype": "J.S.S.",
                "class": "J.S.S. 3"
            }, {
                "examtype": "O'LEVEL",
                "class": "S.S.S. 1"
            }, {
                "examtype": "O'LEVEL",
                "class": "S.S.S. 2"
            }, {
                "examtype": "O'LEVEL",
                "class": "S.S.S. 3"
            }, {
                "examtype": "PRIMARY",
                "class": "PRIMARY 1"
            }, {
                "examtype": "PRIMARY",
                "class": "PRIMARY 2"
            }, {
                "examtype": "PRIMARY",
                "class": "PRIMARY 3"
            }, {
                "examtype": "PRIMARY",
                "class": "PRIMARY 4"
            }, {
                "examtype": "PRIMARY",
                "class": "PRIMARY 5"
            }, {
                "examtype": "PRIMARY",
                "class": "PRIMARY 6"
            }, {
                "examtype": "O'LEVEL",
                "class": "ALL SUBJECTS"
            }, {
                "examtype": "ABILITY TEST",
                "class": "ABILITY TEST"
            }];
            for (var idx in examTypes) {
                if (examTypes[idx].class === strData)
                    return examTypes[idx].examtype;
            }
            return '';

        }

        function getQuestID(strData) {
            var ret = "";
            var retCourse = getQuestExamType(examSettings.subject);
            switch (examSettings.retCourse) {
                case "UTME":
                    ret = getQuestIDUTME(strData);
                    break;
                default:
                    ret = getQuestIDStr(strData, retCourse);
                    break;
            }
            return ret;
        }

        function getQuestIDUTME(strData) {
            var exam_modules = exams['modules'];
            for (i = 0; i < exam_modules.length; i++) {
                if (exam_modules[i].module_name === strData)
                    return exam_modules[i].folder_name;
            }
            return "";
        }


        function endExam() {
            var examSettings = JSON.parse(getItem('examSettings'));
            var wrongAnswers = 0;
            var omittedQuestions = 0;

            var d = new Date();
            if (examStarted) {
                for (var x in examObj.QuestionSet) {
                    if (examObj.QuestionSet[x] != null) {
                        if (examObj.QuestionSet[x] != null) {
                            if (examObj.QuestionSet[x].hasOwnProperty("answer") && examObj.QuestionSet[x].hasOwnProperty("correct_answer")) {
                                correctAnswers += (examObj.QuestionSet[x].answer === examObj.QuestionSet[x].correct_answer ? 1 : 0);
                                wrongAnswers += (examObj.QuestionSet[x].answer != examObj.QuestionSet[x].correct_answer && examObj.QuestionSet[x].answer != '' ? 1 : 0);
                                omittedQuestions += (examObj.QuestionSet[x].answer === '' ? 1 : 0);
                                if (examObj.QuestionSet[x].answer != examObj.QuestionSet[x].correct_answer && examObj.QuestionSet[x].answer != '') {
                                    var divs = $('#questionList div:eq(' + x + ')');
                                    divs.css('background', '#CB0000');
                                    divs.css('border-radius', '5px');
                                    divs.css('border', '#000 1px solid');
                                    divs.css('padding', '1px 1px 1px 1px');

                                } else {
                                    if (examObj.QuestionSet[x].answer != '') {
                                        var divs = $('#questionList div:eq(' + x + ')');
                                        divs.css('background', 'blue');
                                        divs.css('border-radius', '5px');
                                        divs.css('border', '#000 1px solid');
                                        divs.css('padding', '1px 1px 1px 1px');

                                    } else {
                                        var divs = $('#questionList div:eq(' + x + ')');
                                        divs.css('background', '#444');
                                        divs.css('border-radius', '5px');
                                        divs.css('color', '#fff')
                                        divs.css('border', 'red 1px solid');
                                        divs.css('padding', '1px 1px 1px 1px');
                                    }

                                }
                            }
                        }
                    }

                }


                $('#endInfo tr:eq(1) td:eq(1)').html(d.toLocaleTimeString());
                $('#endInfo tr:eq(3) td:eq(1)').html(getTimeAllowed(examObj.timeUsed));
                $('#endInfo tr:eq(4) td:eq(1)').html(correctAnswers);
                $('#endInfo tr:eq(5) td:eq(1)').html(wrongAnswers);
                $('#endInfo tr:eq(6) td:eq(1)').html(omittedQuestions);

                examStarted = false;
                $('#endExamButton').css('visibility', 'hidden');
                $('#viewAnswer').css('display', 'block');
                $('#pauseexam').css('display', 'none');
                $('#next1').css('visibility', 'hidden');
                $('.mycorrectanswer').css('display', 'block');
                $('.mycorrectanswer').css('color', 'red');


                dopost({
                    "url": api_link + "/fetchlist.php",
                    "type": "POST",
                    "data": {
                        "userid": "guest",
                        "maxquest": examObj.QuestionSet.length,
                        "source": getItem("Source"),
                        "timeused": examObj['timeUsed'],
                        "jambcourse": (getItem('class') === '' || getItem('class') === 'undefined' ? getItem('class') : getItem('class')),
                        "name": getItem("name"),
                        "photo": getItem("photo"),
                        "moduleid": examSettings.code,
                        "modulename": examSettings.subject,
                        "questions": examObj.QuestionSet,
                        "examid": getItem("examid"),
                        "action": "saveexam"
                    },
                    "success": function(response) {

                        try {
                            var json = JSON.parse(response);
                            var sumResult = (correctAnswers / examObj.QuestionSet.length) * 100 / 1;
                            //sumResult = (sumResult).toFixed(2);
                            if (json.statuscode == 0) {
                                //var booklink = window.location.href="enotes.html";
                                //var videolink = window.location.href = "videos.html";
                                if (sumResult.between(0, 20)) {
                                    doalert("<div class='alert alert-danger sum' style='border-radius:10px'><img src='img/bad.png' width='50' height='50' />Sorry, you have scored really poorly " + "<span style='color:red'>" + sumResult.toFixed(2) + '%' + "</span>" + " Thank you!</div>");
                                }
                                if (sumResult.between(21, 40)) {
                                    doalert("<div class='alert alert-danger sum' style='border-radius:10px'><img src='img/bad.png' width='50' height='50' />Sorry, you have scored poorly " + "<span style='color:red'>" + sumResult.toFixed(2) + '%' + "</span>" + " Thank you</div>");
                                }
                                if (sumResult.between(41, 60)) {
                                    doalert("<div class='alert alert-warning sum' style='border-radius:10px'><img src='img/bad.png' width='50' height='50' />You scored " + "<span style='color:orange'>" + sumResult.toFixed(2) + '%' + "</span>" + " Better luck next time. Thank you!</div>");
                                }
                                if (sumResult.between(61, 80)) {
                                    doalert("<div class='alert alert-success sum' style='border-radius:10px'><img src='img/success.png' width='50' height='50' /> Well done! You scored " + "<span style='color:blue'>" + sumResult.toFixed(2) + '%' + "</span>" + " You can do better next time. Thank you!</div>");
                                }
                                if (sumResult.between(81, 100)) {
                                    doalert("<div class='alert alert-success sum' style='border-radius:10px'><img src='img/success.png' width='50' height='50' /> Wow! You scored " + "<span style='color:blue'>" + sumResult.toFixed(2) + '%' + "</span>" + " Take up more difficult test next time. Thank you!</div>");
                                }
                            } else {
                                doalert(json.status);
                            }
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                });



            }
        }




        $(function() {
            $(".flex-next").addClass("glyphicon glyphicon-fast-forward");
        });

        $("#prevButton").click(function() {
            $("#nextButton").show();
        });

        $("#nextButton").click(function() {
            $("#prevButton").show();
        });

        $(window).bind('keydown', function(e) {
            //e.preventDefault();
            if (e.keyCode == 37)
                myslider.flexslider('prev');
            else if (e.keyCode == 39)
                myslider.flexslider('next');
            $("#prevButton").show();
        });

        Number.prototype.between = function(first, last) {
            return (first < last ? this >= first && this <= last : this >= last && this <= first);
        }



        function book1() {
            window.location.href="books/BF0A/content.html";
        }
         function book2() {
            window.location.href="books/BF0B/content.html";
        }
        function book3() {
            window.location.href="books/BF06/content.html";
        }
        function book4() {
            window.location.href="books/BF09/content.html";
        }
        function book5() {
            window.location.href="books/BF0D/content.html";
        }
        function book6() {
            window.location.href="books/BF01/content.html";
        }
        function book7() {
            window.location.href="books/BF02/content.html";
        }
        function book8() {
            window.location.href="books/BF03/content.html";
        }

         function career1() {
            window.location.href="career_guide/ARTS/content.html";
        }
         function career2() {
            window.location.href="career_guide/EDUCATION/content.html";
        }
        function career3() {
            window.location.href="career_guide/ENGINEERING/content.html";
        }
        function career4() {
            window.location.href="career_guide/LAW/content.html";
        }
        function career5() {
            window.location.href="career_guide/MANAGEMENT_SCIENCE/content.html";
        }
        function career6() {
            window.location.href="career_guide/MEDICAL_SCIENCES/content.html";
        }
        function career7() {
            window.location.href="career_guide/SCIENCE/content.html";
        }
        function career8() {
            window.location.href="career_guide/SOCIAL_SCIENCES/content.html";
        }
