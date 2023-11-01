/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

 function replaceAll(str, find, replace) {
            return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }

var advertImages = {};
var curriculumData = null;
   var jambregid = "5202829271";
   var jambuser = "DEMO USER";
    var jambcenter = "DEMO CENTER";
function queryString(sVar) {

            var ret = unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
            return decodeURIComponent(ret.replace(/\+/, ' ').replace(/\%20/, ' ').replace(/\%23/, /\#/));
    }
var appIsActivated = false;
var retrievedRegID;
var retrievedPin="";
var custRegPin;
var bf_version = 'Platinum';
var bf_version_admin = 'Enterprise';
var activation_status = '';
var subscription_status = '';
var copyright = 'Copyright © 2016';
var api_link = "http://" + window.location.host + "/php/api/";
var varappisonline = true;
var trans_advertise_here = 'Advertise here';
var chatDo = 1;
var baseUrl = '';
var chatSpeed = 5000;
var userBoxes = [];
var activityTime = 60000;
var siteName = 'cliqlite';
var doAjaxify = false;
var maxPostImage = 8;
var updateSpeed = 10000;
var isLogin = 'true';
var imgIndicator = 'assets/images/loading.gif';
//time_ago translation
var trans_ago = 'ago';
var trans_from_now = 'from now';
var trans_any_moment = 'any moment now';
var trans_less_than_minute = 'less than a minute';
var trans_about_minute = 'about a minute';
var trans_minutes = 'minutes';
var trans_about_hour = 'about an hour';
var trans_hours = 'hours';
var trans_about = 'About';
var trans_a_day = 'a day';
var trans_days = 'days';
var trans_about_month = 'about a month';
var trans_months = 'months';
var trans_about_year = 'about a year';
var trans_years = 'years';

var emoticons = ['<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/big_smile.png\' title=\'Smile\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/bad_smile.png\' title=\'Bad Smile\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/amazing.png\' title=\'Amazing\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/anger.png\' title=\'Anger\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/bad_egg.png\' title=\'Bad Egg\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/beaten.png\' title=\'Beaten\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/black_heart.png\' title=\'Black Heart\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/cry.png\' title=\'Cry\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/happy.png\' title=\'Happy\'/>',
    '<img width=\'16\' height=\'16\' src=\'default/assets/images/emoticons/electric_shock.png\' title=\'Electric Shock\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/girl.png\' title=\'Girl\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/exciting.png\' title=\'Exciting\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/eyes_droped.png\' title=\'Eyes droped\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/greedy.png\' title=\'Greedy\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/haha.png\' title=\'Haha\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/horror.png\' title=\'Horror\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/money.png\' title=\'Money\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/nothing.png\' title=\'Nothing\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/nothing_to_say.png\' title=\'Nothing to say\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/red_heart.png\' title=\'Red heart\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/scorn.png\' title=\'Scorn\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/shame.png\' title=\'Shame\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/shocked.png\' title=\'Shocked\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/super_man.png\' title=\'Super Man\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/the_iron_man.png\' title=\'Iron Man\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/grimace.png\' title=\'Tongue\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/unhappy.png\' title=\'Unhappy\'/>',
    '<img width=\'16\' height=\'16\' src=\'assets/images/emoticons/victory.png\' title=\'Victory\'/>',
];

var subjectsJSON = [];
var notifyExamSettings = {};
var exams = {
    "modules": [{
        "id": "176",
        "module_name": "ACCOUNTANCY",
        "folder_name": "BF01",
        "module_id": "164",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "379",
        "module_name": "CLOTHING AND TEXTILE",
        "folder_name": "CLOTHING_AND_TEXTILE",
        "module_id": "367",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "380",
        "module_name": "FINE ARTS",
        "folder_name": "FINEARTS",
        "module_id": "368",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "381",
        "module_name": "FRENCH",
        "folder_name": "FRENCH",
        "module_id": "369",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "179",
        "module_name": "AGRICULTURAL SCIENCE",
        "folder_name": "BF0D",
        "module_id": "167",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "182",
        "module_name": "BIOLOGY",
        "folder_name": "BF02",
        "module_id": "170",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "185",
        "module_name": "CHEMISTRY",
        "folder_name": "BF03",
        "module_id": "173",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "191",
        "module_name": "CHRISTIAN RELIGIOUS KNOWLEDGE",
        "folder_name": "BF04",
        "module_id": "179",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "188",
        "module_name": "COMMERCE",
        "folder_name": "BF0B",
        "module_id": "176",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "227",
        "module_name": "COMPUTER STUDIES",
        "folder_name": "SSSCOMPUTERSTUDIES",
        "module_id": "215",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "194",
        "module_name": "ECONOMICS",
        "folder_name": "BF05",
        "module_id": "182",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "197",
        "module_name": "ENGLISH LANGUAGE",
        "folder_name": "BF06",
        "module_id": "185",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "221",
        "module_name": "FOODS AND NUTRITION",
        "folder_name": "FOODS_AND_NUTRITION",
        "module_id": "209",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "200",
        "module_name": "FURTHER MATEMATICS",
        "folder_name": "FURTHERMATHS",
        "module_id": "188",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "203",
        "module_name": "GEOGRAPHY",
        "folder_name": "GEOGRAPHY",
        "module_id": "191",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "206",
        "module_name": "GOVERNMENT",
        "folder_name": "BF07",
        "module_id": "194",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "209",
        "module_name": "HISTORY",
        "folder_name": "BF0C",
        "module_id": "197",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "212",
        "module_name": "LITERATURE-IN-ENGLISH",
        "folder_name": "BF08",
        "module_id": "200",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "215",
        "module_name": "MATHEMATICS",
        "folder_name": "BF09",
        "module_id": "203",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "318",
        "module_name": "PHYSICS",
        "folder_name": "BF0A",
        "module_id": "206",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "324",
        "module_name": "HAUSA",
        "folder_name": "SSS_HAUSA",
        "module_id": "313",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "325",
        "module_name": "YORUBA",
        "folder_name": "SSS_YORUBA",
        "module_id": "314",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "326",
        "module_name": "IGBO",
        "folder_name": "SSS_IGBO",
        "module_id": "315",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "327",
        "module_name": "CIVIC EDUCATION",
        "folder_name": "SSS_CIVIC_EDUCATION",
        "module_id": "316",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": ""
    }, {
        "id": "224",
        "module_name": "TECHNICAL DRAWING",
        "folder_name": "TECHNICAL_DRAWING",
        "module_id": "212",
        "exam_category": "100",
        "exam_class": "100",
        "module_icon": "",

    }],


    "combinations": {
        "ALL SUBJECTS": [{
            "subject": "ACCOUNTANCY",
            "code": "ACCOUNTANCY"
        }, {
            "subject": "AGRICULTURAL SCIENCE",
            "code": "BF0D"
        }, {
            "subject": "BIOLOGY",
            "code": "BF02"
        }, {
            "subject": "CARPENTRY AND JOINERY",
            "code": "CARPENTRY_AND_JOINERY"
        }, {
            "subject": "CLOTHING AND TEXTILES",
            "code": "CLOTHING_AND_TEXTILES"
        }, {
            "subject": "CHEMISTRY",
            "code": "BF03"
        }, {
            "subject": "CHRISTIAN RELIGIOUS KNOWLEDGE",
            "code": "BF04"
        }, {
            "subject": "CIVIC EDUCATION",
            "code": "SSS_CIVIC_EDUCATION"
        }, {
            "subject": "COMMERCE",
            "code": "BF0B"
        }, {
            "subject": "COMPUTER STUDIES",
            "code": "SSSCOMPUTERSTUDIES"
        }, {
            "subject": "FINE ARTS",
            "code": "FINEARTS"
        }, {
            "subject": "FOOD AND NUTRITION",
            "code": "FOOD_AND_NUTRITION"
        }, {
            "subject": "FRENCH",
            "code": "FRENCH"
        }, {
            "subject": "FURTHER MATHEMATICS",
            "code": "FURTHERMATHS"
        }, {
            "subject": "ECONOMICS",
            "code": "BF05"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "GEOGRAPHY",
            "code": "GEOGRAPHY"
        }, {
            "subject": "GOVERNMENT",
            "code": "BF07"
        }, {
            "subject": "HAUSA",
            "code": "SSS_HAUSA"
        }, {
            "subject": "HISTORY",
            "code": "BF0C"
        }, {
            "subject": "IGBO",
            "code": "SSS_IGBO"
        }, {
            "subject": "LITERATURE-IN-ENGLISH",
            "code": "BF08"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }, {
            "subject": "METAL WORK",
            "code": "METAL_WORK"
        }, {
            "subject": "PHYSICS",
            "code": "BF0A"
        }, {
            "subject": "TECHNICAL DRAWING",
            "code": "TECHNICAL_DRAWING"
        },  {
            "subject": "YORUBA",
            "code": "SSS_YORUBA"
        }, {
            "subject": "VISUAL ART",
            "code": "VISUAL_ART"
        }
, {
"subject": "AUTOMOBILE MECHANICS",
"code": "AUTOMOBILE_MECHANICS"
}, {
"subject": "BASIC ELECTRONICS",
"code": "BASIC_ELECTRONICS"
}, {
"subject": "BASIC ELECTRONICS",
"code": "BASIC_ELECTRONICS"
}, {
"subject": "BOOK KEEPING",
"code": "BOOK_KEEPING"
}, {
"subject": "TEACHER DEVELOPMENT CONTENT",
"code": "TDC"
}],
        "TEACHER DEVELOPMENT" : ["TDC"],
        "UTME": ["FACULTY OF ADMINISTRATION",
            "FACULTY OF AGRICULTURE",
            "FACULTY OF ARTS",
            "FACULTY OF EDUCATION",
            "FACULTY OF ENGINEERING",
            "FACULTY OF LAW",
            "FACULTY OF MEDICINE",
            "FACULTY OF SCIENCES",
            "SOCIAL SCIENCES"
        ],
        "PRIMARY": ["PRIMARY 1", "PRIMARY 2", "PRIMARY 3", "PRIMARY 4", "PRIMARY 5", "PRIMARY 6"],
        "OLEVEL": ["S.S.S. 1", "S.S.S. 2", "S.S.S. 3"],
        "J.S.S.": ["J.S.S. 1", "J.S.S. 2", "J.S.S. 3"],
        "ABILITY TEST": [{
            "subject": "BRAIN TEASERS",
            "code": "BFTEASER"
        }, {
            "subject": "CURRENT AFFAIRS",
            "code": "CURRENT_AFFAIRS"
        }, {
            "subject": "DRIVING TEST",
            "code": "DRIVINGTEST"
        }, {
            "subject": "INTRODUCTION TO ICT",
            "code": "ICT"
        }],

        "Faculty of Administration": [{
            "subject": "FINE ARTS",
            "code": "FINEARTS"
        }, {
            "subject": "FRENCH",
            "code": "FRENCH"
        }, {
            "subject": "ECONOMICS",
            "code": "BF05"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "GEOGRAPHY",
            "code": "GEOGRAPHY"
        }, {
            "subject": "GOVERNMENT",
            "code": "BF07"
        }, {
            "subject": "HISTORY",
            "code": "BF0C"
        }, {
            "subject": "LITERATURE-IN-ENGLISH",
            "code": "BF08"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }, {
            "subject": "PHYSICS",
            "code": "BF0A"
        }],

        "Faculty of Agriculture": ["AGRICULTURAL SCIENCE", {
            "subject": "BIOLOGY",
            "code": "BF02"
        }, {
            "subject": "CHEMISTRY",
            "code": "BF03"
        }, {
            "subject": "ECONOMICS",
            "code": "BF05"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "GEOGRAPHY",
            "code": "GEOGRAPHY"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }, {
            "subject": "PHYSICS",
            "code": "BF0A"
        }],
        "Faculty of Arts": [{
            "subject": "ACCOUNTANCY",
            "code": "ACCOUNTANCY"
        }, {
            "subject": "AGRICULTURAL SCIENCE",
            "code": "BF0D"
        }, {
            "subject": "CHRISTIAN RELIGIOUS KNOWLEDGE",
            "code": "BF04"
        }, {
            "subject": "COMMERCE",
            "code": "BF0B"
        }, {
            "subject": "FINE ARTS",
            "code": "FINEARTS"
        }, {
            "subject": "FRENCH",
            "code": "FRENCH"
        }, {
            "subject": "ECONOMICS",
            "code": "BF05"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "GEOGRAPHY",
            "code": "GEOGRAPHY"
        }, {
            "subject": "GOVERNMENT",
            "code": "BF07"
        }, {
            "subject": "HAUSA",
            "code": "SSS_HAUSA"
        }, {
            "subject": "HISTORY",
            "code": "BF0C"
        }, {
            "subject": "IGBO",
            "code": "SSS_IGBO"
        }, {
            "subject": "LITERATURE-IN-ENGLISH",
            "code": "BF08"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }, {
            "subject": "YORUBA",
            "code": "SSS_YORUBA"
        }],
        "Faculty of Education": [{
            "subject": "ACCOUNTANCY",
            "code": "ACCOUNTANCY"
        }, {
            "subject": "AGRICULTURAL SCIENCE",
            "code": "BF0D"
        }, {
            "subject": "BIOLOGY",
            "code": "BF02"
        }, {
            "subject": "CHEMISTRY",
            "code": "BF03"
        }, {
            "subject": "CHRISTIAN RELIGIOUS KNOWLEDGE",
            "code": "BF04"
        }, {
            "subject": "COMMERCE",
            "code": "BF0B"
        }, {
            "subject": "FINE ARTS",
            "code": "FINEARTS"
        }, {
            "subject": "FRENCH",
            "code": "FRENCH"
        }, {
            "subject": "ECONOMICS",
            "code": "BF05"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "GEOGRAPHY",
            "code": "GEOGRAPHY"
        }, {
            "subject": "GOVERNMENT",
            "code": "BF07"
        }, {
            "subject": "HAUSA",
            "code": "SSS_HAUSA"
        }, {
            "subject": "HISTORY",
            "code": "BF0C"
        }, {
            "subject": "IGBO",
            "code": "SSS_IGBO"
        }, {
            "subject": "LITERATURE-IN-ENGLISH",
            "code": "BF08"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }, {
            "subject": "YORUBA",
            "code": "SSS_YORUBA"
        }],
        "Faculty of Engineering": [{
            "subject": "AGRICULTURAL SCIENCE",
            "code": "BF0D"
        }, {
            "subject": "BIOLOGY",
            "code": "BF02"
        }, {
            "subject": "CHEMISTRY",
            "code": "BF03"
        }, {
            "subject": "ECONOMICS",
            "code": "BF05"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "GEOGRAPHY",
            "code": "GEOGRAPHY"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }, {
            "subject": "PHYSICS",
            "code": "BF0A"
        }],
        "Faculty of Law": [{
                "subject": "ACCOUNTANCY",
                "code": "ACCOUNTANCY"
            }, {
                "subject": "AGRICULTURAL SCIENCE",
                "code": "BF0D"
            }, {
                "subject": "CHRISTIAN RELIGIOUS KNOWLEDGE",
                "code": "BF04"
            }, {
                "subject": "COMMERCE",
                "code": "BF0B"
            }, {
                "subject": "FINE ARTS",
                "code": "FINEARTS"
            }, {
                "subject": "FRENCH",
                "code": "FRENCH"
            }, {
                "subject": "ECONOMICS",
                "code": "BF05"
            }, {
                "subject": "ENGLISH LANGUAGE",
                "code": "BF06"
            }, {
                "subject": "GEOGRAPHY",
                "code": "GEOGRAPHY"
            }, {
                "subject": "GOVERNMENT",
                "code": "BF07"
            }, {
                "subject": "HAUSA",
                "code": "SSS_HAUSA"
            }, {
                "subject": "HISTORY",
                "code": "BF0C"
            }, {
                "subject": "IGBO",
                "code": "SSS_IGBO"
            }, {
                "subject": "LITERATURE-IN-ENGLISH",
                "code": "BF08"
            }, {
                "subject": "MATHEMATICS",
                "code": "BF09"
            }, {
                "subject": "YORUBA",
                "code": "SSS_YORUBA"
            }

        ],
        "Faculty of Medicine": [{
            "subject": "BIOLOGY",
            "code": "BF02"
        }, {
            "subject": "CHEMISTRY",
            "code": "BF03"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "PHYSICS",
            "code": "BF0A"
        }],
        "Faculty of Sciences": [{
            "subject": "BIOLOGY",
            "code": "BF02"
        }, {
            "subject": "CHEMISTRY",
            "code": "BF03"
        }, {
            "subject": "ENGLISH LANGUAGE",
            "code": "BF06"
        }, {
            "subject": "PHYSICS",
            "code": "BF0A"
        }, {
            "subject": "MATHEMATICS",
            "code": "BF09"
        }],
        "Faculty of Social Sciences": [{
                "subject": "ACCOUNTANCY",
                "code": "ACCOUNTANCY"
            }, {
                "subject": "AGRICULTURAL SCIENCE",
                "code": "BF0D"
            }, {
                "subject": "CHRISTIAN RELIGIOUS KNOWLEDGE",
                "code": "BF04"
            }, {
                "subject": "COMMERCE",
                "code": "BF0B"
            }, {
                "subject": "FINE ARTS",
                "code": "FINEARTS"
            }, {
                "subject": "FRENCH",
                "code": "FRENCH"
            }, {
                "subject": "ECONOMICS",
                "code": "BF05"
            }, {
                "subject": "ENGLISH LANGUAGE",
                "code": "BF06"
            }, {
                "subject": "GEOGRAPHY",
                "code": "GEOGRAPHY"
            }, {
                "subject": "GOVERNMENT",
                "code": "BF07"
            }, {
                "subject": "HAUSA",
                "code": "SSS_HAUSA"
            }, {
                "subject": "HISTORY",
                "code": "BF0C"
            }, {
                "subject": "IGBO",
                "code": "SSS_IGBO"
            }, {
                "subject": "LITERATURE-IN-ENGLISH",
                "code": "BF08"
            }, {
                "subject": "MATHEMATICS",
                "code": "BF09"
            },  {
                "subject": "YORUBA",
                "code": "SSS_YORUBA"
            }

        ]
    }
};

var jambSubjects = [
    {"code":"BF06","subject":"USE OF ENGLISH"},
    {"code":"BF05","subject":"ECONOMICS"},
    {"code":"BF02","subject":"BIOLOGY"},
    {"code":"BF09","subject":"MATHEMATICS"}

];
    var processedActions = {"current":0,"pool":[]};
    function insertintohistory(fn,args) {
            if (typeof(fn)=="function")
            {
                processedActions.pool[processedActions.pool.length] = {"args" : args,"fn" : fn};
                processedActions.current = processedActions.pool.length;
            }
        }

        function loadfromhistory() {
            if (processedActions.current > 1) {
                var curAct = processedActions.pool[processedActions.current - 2];
                processedActions.current -= 1;
                for(i=0;i<(processedActions.pool.length-processedActions.current);i++)
                processedActions.pool.pop();
                curAct.fn.apply(this,curAct.args);
                //eval("var fnRunProcessedActions=" + curAct + "; fnRunProcessedActions();");
            }
        }

function gameDesc() {
    //doalert("<span style='color:red'>You Must Configure Exam to Play a Game</span> <br />STEPS:<br /> Go to Take Exam <br /> Start New Exam <br /> Configure Exam and <br />Click on Start as Game");
    window.location.href="setup.html?mode=game";
}

function signUpAlert() {
    doalert('Login or Create an account to start using BrainFriend Platinum');
}

function gameLink() {
        bootbox.dialog({
          message: "<span style='color:red'>You Must Configure Exam to Play a Game</span> <br />STEPS:<br /> Choose a Category <br /> Choose a Class <br /> Choose a Subject <br /> Configure Exam (Topic, Time, No of Question) and <br />Click on Play Game button <br />Select a game of your choice to start",
          title: "Game Configuration",
          buttons: {
            danger: {
            label: "Cancel",
            className: "btn-danger btn-sm active",
            callback: function() {
              }
            },
            success: {
              label: "Configure Exam",
              className: "btn-primary btn-sm",
              callback: function() {
                gameDesc();
              }
            }

          }
        });
}
function termsCon() {

 doalert($('#termsdiv').html());
}

function licenseDialog() {
     if(getItem("name")=="guest")
            {
               updateProfileAlert();
            }
    else {
     dopost({
   "url": api_link + "/license.php",
        "type": "POST",
        "data" : {"userid":getItem('userid'),"action":'retrieve'},
        "success": function(response) {
             try {
                 var json = JSON.parse(response);
                 retrievedPin = '';
                 retrievedRegID = '';
                if(json.hasOwnProperty('details'))
                {
                 if(json.details.hasOwnProperty('pin') && json.details.hasOwnProperty('regid'))
                     {
                       retrievedPin = json.details.pin;
                       retrievedRegID = json.details.regid;
                         bf_version = json.details.flavour;
                      activation_status = json.details.activated;
                         if(activation_status == 1)
                         {
                             appIsActivated = true;
                             activation_status = '<span style=color:blue>Activated</span>';
                         }
                         else
                         {
                             appIsActivated = false;
                             activation_status = '<span style=color:red>Not Activated</span>';
                         }
                     }
                }

             var lmodal;


            if($('#mainContent').length == 0)
                lmodal = $('<div/>');
            else
                {
                    lmodal = $('#mainContent');
                    lmodal.html('');
                }
             lmodal.attr('id','mainContent');
             lmodal.attr("data-backdrop","static");
             lmodal.attr("data-keyboard","false");
             lmodal.addClass('modal fade');
             //lmodal.attr('id','mainlincese');
             var modaldia = $('<div/>');
             modaldia.addClass('modal-dialog modal-sm');
             modaldia.css('max-width','400px');
             var modalcon = $('<div/>');
             modalcon.addClass('modal-content');
             modalcon.css('border','4px solid #1051AF');
             var modalhead = $('<div/>');
             modalhead.addClass('modal-header');
             modalhead.css('background','url("assets/images/bannerbg.jpg") repeat');
             var closebutt = $('<button/>');
             closebutt.addClass('close');
             closebutt.attr('data-dismiss','modal');
             closebutt.attr('aria-hidden','true');
             closebutt.html('X');
             var titleh3 = $('<h3/>');
             titleh3.addClass('modal-title h3-responsive text-center');
             titleh3.css('color','#fff');
             titleh3.html("Activation");

             var modalBody = $('<div/>');
             modalBody.addClass('modal-body');
             var bodyimg = $('<img/>');
             bodyimg.attr('src','assets/css/bfplatinum.png');
             bodyimg.attr('height','50');
             var bodyp = $('<p/>');
             bodyp.html('<br /> BrainFriend Version : <span style=color:red; font-family:happy monkey>'+bf_version+'</span> <br />Activation Status : <span style=font-family:happy monkey>'+activation_status+'</span><br /><br />To activate BrainFriend or to change from one edition to another, enter your PIN.');
//             var h4 = $('<h3/>');
//             h4.css('color','red');
//             h4.html('Note:');
//             var p2 = $('<p/>');
//             p2.html('You can change to PRIMARY, JSS, Olevel or a combination of all.');
             var input = $('<input/>');
             input.attr('id','pin');
             input.attr('type','text');
             input.addClass('form-control');
            if(retrievedPin=='')
             input.attr('placeholder','Enter PIN');
            else
             input.attr('placeholder','Leave blank to use existing PIN');
             //input.attr('value',retrievedPin);
             var modalfooter = $('<div/>');
             modalfooter.addClass('modal-footer');
             var cancelBut = $('<a/>');
             cancelBut.attr('href','#');
             cancelBut.attr('data-dismiss','modal');
             cancelBut.addClass('btn btn-sm btn-danger');
             cancelBut.html('Cancel');
             var okButt = $('<a/>');
             okButt.attr('href','#');
             okButt.attr('data-dismiss','modal');
             okButt.attr('id','regLicense');
             okButt.attr('onclick','loadCustInfo($("#pin").val())');
             okButt.addClass('btn btn-sm btn-primary');
             okButt.html('Ok');
             var pinBuy = $('<a/>');
             pinBuy.attr('onclick','openBFUrl(1);');
             pinBuy.attr('href','#');
             pinBuy.addClass('btn btn-sm btn-primary');
             pinBuy.html('Buy Pin');
             modalhead.append(closebutt);
             modalhead.append(titleh3);
             modalBody.append(bodyimg);
             modalBody.append(bodyp);
//             modalBody.append(h4);
//             modalBody.append(p2);
             modalBody.append(input);
             modalfooter.append(pinBuy);
             modalfooter.append(cancelBut);
             modalfooter.append(okButt);
             modalcon.append(modalhead);
             modalcon.append(modalBody);
             modalcon.append(modalfooter);
             modaldia.append(modalcon);

                 lmodal.append(modaldia);
                 lmodal.modal();

                    }
                    catch(e) {
                        console.error('Error'+e.message);

                    }
                        }
                    });
    }

                }
function loadCustInfo(userpin) {
if(retrievedPin!="" && userpin=="")
    userpin = retrievedPin;
    custRegPin = userpin;
    var data = {'userid':getItem("userid"),'pin':userpin,'action':'custid'};
    dopost({
        "url": api_link + "/license.php",
        "type": "POST",
        "data" : data,
        "success": function(response) {
            try {
                var json = JSON.parse(response);

              var regMain;
                if($('#SecondLicenseForm').length == 0)
                    regMain = $('<div/>');
                else
                    {
                        regMain = $('#SecondLicenseForm');
                        regMain.html('');
                    }
                regMain.addClass("modal fade");
                regMain.attr('id','SecondLicenseForm');
                regMain.attr("data-backdrop","static");
                regMain.attr("data-keyboard","false");
                var regCustForm = '<div class="modal-dialog modal-sm" style="max-width:500px;"><div class="modal-content" style="border:4px solid #1051AF"><div class="modal-header" style="background:url(assets/images/bannerbg.jpg) repeat"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button><h3 class="modal-title h3-responsive" style="color:#fff !important;">Customer Registration</h3></div><div class="container"></div><div class="modal-body"><p>Fullname</p><label style="color:#5AC43C;">'+getItem('name')+'</label><br /><p>Customer ID</p><label style="color:#5AC43C;">'+json.custid+'</label><br /><p>Registration ID</p><input type="text" name="regId" id="CustregId" class="form-control" placeholder="Enter Registration ID" /></div><p style="font-size:10pt !important; padding-left:10px !important;">Click on <b>Fetch Reg. ID</b> OR send <b>BRAINFRIEND#'+json.custid+'</b> to <br /><i class="fa fa-phone"></i> <b>08149041620 (MTN)</b>, <b>08119059805 (GLO)</b> or <b>08182500108 (EMTS)</b><br /> to activate. OR Visit <a href="#" style="color:blue !important; font-weight:bolder !important;" onclick="openBFUrl(2);">http://www.brainfriendonline.com</a></p><div class="modal-footer" style="background:url(assets/images/bannerbg.jpg) repeat"><a href="#" class="btn btn-sm btn-primary" id="fetchregId" onclick="fetchRegID(&quot;'+json.custid+'&quot;);">Fetch Reg. ID</a><a href="#" data-dismiss="modal" class="btn btn-sm btn-danger" id="lcancel">Cancel</a><a href="#" data-dismiss="modal" class="btn btn-sm btn-primary" id="reg" onclick="retCustInfo($(&quot;#CustregId&quot;).val());">Activate</a><a href="#" id="lclose" style="display:none" data-dismiss="modal" class="btn btn-sm btn-primary">Close</a></div></div></div>';
                var formContent = $("<div/>");
                formContent.html(regCustForm);
                regMain.append(formContent);
                regMain.modal();
                if(custRegPin == retrievedPin && retrievedRegID != "" && appIsActivated == true) {
                regMain.find('#CustregId').val(retrievedRegID);
                regMain.find('#reg').hide();
                regMain.find('#fetchregId').hide();
                }
                else {
                   regMain.find('#reg').show();
                    regMain.find('#fetchregId').show();
                }
                 if(json.activated==1)
                    appIsActivated = true;
                 else
                    appIsActivated = false;

            } catch (e) {
                console.error(e.message);
            }

        }

    })
}

function fetchRegID(custID) {

     var data = {
                 "data":
                    {
                'userid':getItem("userid"),
                 'customername':getItem('name'),
                 'phoneno':getItem('phone'),
                 'serialid':custID
                    },
                 "type":'POST'
                };
    dopost({
        "url": api_link + "/fetchregid.php",
        "type": "POST",
        "data" : data,
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                if(json.statuscode == 0) {
                    var cusregid = $('#CustregId');
                    if(cusregid.length>0)
                    {
                        cusregid.val(json.regid);
                    }
                    retCustInfo(json.regid);
                    var fetchregid = $('#fetchregId');
                    if(fetchregid.length>0)
                        {
                          fetchregid.hide();
                          $('#lclose').show();
                          $('#lcancel').hide();
                          $('#reg').hide();
                        }
                }
                else
                {
                    doalert(json.status);
                }

            } catch (e) {
                console.error(e.message);
            }

        }

    });

}

function isCategory(strDataIn) {
    var strData;
    if(strDataIn=='J.S.S.')
        strData='J.S.S';
    else
        strData=strDataIn;

    try{

        var subjects = subjectsJSON;
        for(var idx in subjects)
        {
            if(subjects[idx].hasOwnProperty('examtype'))
            {
                if(subjects[idx].examtype==strData)
                    return true;
            }
        }
        }catch(e){}
        return false;
}

function getCategoryClasses(strDataIn) {
    var strData;
    if(strDataIn=='J.S.S.')
        strData='J.S.S';
    else
        strData=strDataIn;

     try
    {
    var classholder = {};

        var subjects = subjectsJSON;
        for(var idx in subjects)
        {
            if(subjects[idx].hasOwnProperty('class') && subjects[idx].hasOwnProperty('examtype'))
            {
                if(subjects[idx].examtype==strData)
                    classholder[subjects[idx]['class']]='';
            }
        }
        var $ret=[];
        for(var idx in classholder)
            $ret[$ret.length]=idx;
        return $ret;


        }catch(e){
        console.error(e.message);
        }
        return false;
}

function downloadUrl() {
   var urltodownload = window.location.href="download.html";
}
function retCustInfo(userpin) {

 var data = {'useralias':getItem('useralias'), 'userid':getItem('userid'), 'regid':userpin,'action':'regid'};
 dopost({
   "url": api_link + "/license.php",
        "type": "POST",
        "data" : data,
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                if(json.statuscode==0)
                    {
                        testDemo(json.status);

                    }
                else
                    {
                        doalert(json.status);
                    }
                 if(json.activated==1)
                    appIsActivated = true;
                 else
                    appIsActivated = false;

            }
        catch(e)
            {
                console.error(e.message);
            }

        }
 })

}

var sessionid = getItem('sessionid');
var userid = getItem('userid');
var login_userid = "";
var spage = getItem('spage');
var loadingerr = function(jqXHR, textStatus) {
    $.unblockUI();
    doalert("Error Connecting...");



};

function changeLicense() {
    $('.license').on( 'click', function(e) {
        e.preventDefault();
        licenseDialog();
    });

}


function licenseIcon() {
    var iconMain = $("#iconDiv");
    var iconA = '<a href="#" onClick="changeLicense();"><i class="fa fa-key fa-2x navbutton2color"></i><br /><span>License</span></a>';
    var iconChild = $("<div/>");
    iconChild.html(iconA);
    iconMain.append(iconChild);

}

function licenseMobile() {
    var iconMain = $("#iconMobile");
    var iconA = '<a href="#" onClick="changeLicense();"><i class="fa fa-key"></i><span>License</span></a>';
    iconMain.append(iconA);

}

function doalert(a, extra) {

     var modalBody;
    if($('#doalertdiv').length == 0)
        modalBody = $('<div/>');
    else
        {
            modalBody = $('#doalertdiv');
            modalBody.html('');
        }

    modalBody.attr('id','doalertdiv');
    modalBody.attr("data-backdrop","static");
    modalBody.attr("data-keyboard","false");
    modalBody.css('z-index','9999');
    modalBody.addClass('modal');
    modalBody.addClass('fade');
    var modalDialog = $('<div/>');
    modalDialog.addClass('modal-dialog');
    modalDialog.css('max-width', '500px');
    modalDialog.css('max-height', '300px');
    modalDialog.attr('data-toggle', 'modal');
    var modalContent = $('<div/>');
    modalContent.addClass('modal-content');
    modalContent.css('border','4px solid #ccc');
    var modalHeader = $('<div/>');
    modalHeader.addClass('modal-header');
    modalHeader.css('background','#ccc');
    //modalHeader.css('background','#0F5333');
    //modalHeader.css('color','#ffffff');
    //var modalButton = $('<button/>');
    //var buttonModal = '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    //modalButton.html(buttonModal);
    var closeButton = $('<div/>');
    var buttonClose = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>';
    closeButton.html(buttonClose);
    var modalTitle = $('<div/>');
    var titleModal = $('<h3/>');
    titleModal.addClass('modal-title h3-responsive text-center');
    titleModal.html("JAMB");
    titleModal.css('color','#444');

    modalTitle.css('line-height', '0.1');
    modalTitle.append(titleModal);
    var modalText = $('<div/>');
    modalText.addClass('modal-body');
    modalText.css('max-height', '300px');
    modalText.css('max-width', '500px');
    modalText.css('overflow-y', 'scroll');
    //    modalText.css('border', '5px solid #0F5333');
    var textCon = $('<p/>');
    textCon.html(a);
    textCon.css('color', '#000000');
    var modalFooter = $('<div/>');
    modalFooter.css('background','#ccc');
    var footerModal = '<div class="modal-footer"><button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Ok</button>';
    modalFooter.html(footerModal);

    modalHeader.append(closeButton);
    modalHeader.append(modalTitle);
    modalContent.append(modalHeader);
    modalContent.append(modalText);
    modalText.append(textCon);
    modalContent.append(modalFooter);
    modalDialog.append(modalContent);
    modalBody.append(modalDialog);
    modalBody.modal();
}

function appisonline() {
    return varappisonline;
}

function checkStatus(myaction) {
    var  mylocation = window.location.href;
    if(myaction=='login' && mylocation.indexOf('file://')!=0)
        {
            login();
            return;
        }
var noalert = false;
    try{

//                $('#sidebar').mmenu({
//
//                });
//                $('#sidebar-trigger').click(function() {
//                    $('#sidebar').trigger('open.mm');
//                });
//
//                $('#sidebar a').click(function() {
//                    $('#sidebar').trigger('close.mm');
//                });
//
//        $("#sidebar").mmenu();
//            $("#mm-blocker").off( "mousedown" ).off( "touchstart" );
//            $("#sidebar-trigger").click(function( ev ) {
//               ev.preventDefault();
//               if ($("html").hasClass( "mm-opened" )) {
//                  $("#sidebar").trigger( "close" );
//               } else {
//                  $("#sidebar").trigger( "open" );
//               }
//        });
//        $(document).click(function (e) {
//            $("#sidebar").trigger( "close" );
//        });

            if(mylocation.indexOf('file://')!=0)
                {
                    if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
                        var sel = $("select");
                        if(sel.length>0)
                        {
                        sel.attr('onfocus','this.size=10;');
                        sel.attr('onblur','this.size=1;');
                        var onchange = sel.attr('onchange');
                        sel.attr('onchange','this.size=1; this.blur();'+onchange);
                        }

                    }
                }
            if(mylocation.indexOf('file://')==0)
                {

                        var sel = $("select");
                        if(sel.length>0)
                        {
                        sel.attr('onfocus','this.size=10;');
                        sel.attr('onblur','this.size=1;');
                        var onchange = sel.attr('onchange');
                        sel.attr('onchange','this.size=1; this.blur();'+onchange);
                        }
                }


    /*var docHeight = parseInt($(window).height() * 0.8);
    var containerHeight = $('.page-content').height();
    var containerTop = $('.page-content').position().top;
    var containerPos = containerTop + containerHeight;
    var spaceLeft = docHeight - containerPos - 40;
    if (spaceLeft>0) {
        var newContainerHeigth = spaceLeft + containerHeight;
    $('.page-content').css('height', newContainerHeigth + 'px');
    }*/ }catch(e){

    console.error(e.message);}

//    var docHeight = $(window).height();
//    var footerHeight = $('#footer').height();
//    var footerTop = $('#footer').position().top + footerHeight;
//
//    if (footerTop < docHeight) {
//    $('#footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
//    }
    var editHome = function(el){
        if(el.length>0)
        {
            el.on('click',gotoHomePage);
            el.attr('href','#');
        }
    };

    editHome($('.brand-logo'));
    editHome($(".navbar-brand"));
    editHome($(".nvhome"));
var statusData = {
                   "userid":getItem('userid'),
                   "myaction":myaction,
                   "useralias":(myaction=='login'?$("#name").val():'')
                };

    dopost({
        url: api_link + "/status.php",
        type: "POST",
        data: statusData,
        error: function(jqXHR, exception) {
            //alert('offline');
            $('.offline').css('display', 'none');
            $('.homeOffline').show();
            varappisonline = false;
        },
        success: function(response) {

            try {
                var json = JSON.parse(response);
                if(json.hasOwnProperty("address"))
                    {
                        var addresses = json.address.join(", ");
                        if(json.address.length==0)
                            {
                                $("#ipadd").hide();
                            }
                        else
                            {
                                $("#ipaddress").html(addresses);
                                $("#ipaddress").css("color","red");
                            }
                    }
                var myaction = "";
                if(json.hasOwnProperty("myaction"))
                    myaction = json.myaction;
                if (json.status === 'offline') {
                    $('.offline').css('display', 'none');
                     $('div.hm').css('height','100%');
                    $('.homeOffline').show();
                    varappisonline = false;
                } else {
                    $('.offline').css('display', 'block');
                    $('.offline2').css('display','block');
                    $('.dn').css('display', 'none');
                    $('.homeOffline').hide();
                    $('div.hmheight').css('height','100%');
                    $('div.hm').css('height','100%');
                    varappisonline = false;
                }

                var current_page = window.location.href;

                if(myaction == "login")
                    {
                        if(json.activated == 0)
                            activationForm(json);
                        else
                            login();
                    }
                else
                    {
                        if(json.activated == 0)
                        {
                            var activeStatus;
                            appIsActivated = false;
                            activeStatus = $('.activationStatus').html('Not Activated');
                            activeStatus.css('color','red');
                            activeStatus.css('font-weight','bold');
                            activeStatus.css('font-size','10pt');
                        }
                        else
                        {
                            appIsActivated = true;
                            $('.licensename').html(getItem('name'));
                            activeStatus = $('.activationStatus').html('Activated');
                            activeStatus.css('color','#1354B2');
                            activeStatus.css('font-weight','bold');
                            activeStatus.css('font-size','10pt');
                        }

                        if(json.activated==0 && getItem('activationalert')!='done'  && (current_page.indexOf('/home.html')>0 || current_page.indexOf('/teacher.html')>0 || current_page.indexOf('/admin.html')>0))
                        {
                            doalert("This Version of BrainFriend has not been Activated.<br><a href=# onclick='licenseDialog();' data-dismiss='modal'><span style='font-size:12pt !important; font-weight:bold; color:#ff0000;'>Click here</span></a> to activate.");
                            getItem('activationalert','done');



                        }



                    }

//                 if(getItem("useralias")=="guest")
//                            {
//                               updateProfileAlert();
//                            }

                if(json.hasOwnProperty('subscription'))
                    {
                    if(parseInt(json.subscription.DaysLeft) < 6 && !noalert && (current_page.indexOf('/home.html')>0))
                        {
                            noalert = true;
                            doalert('This Version of BrainFriend is expiring in <span style="color:red !important">'+json.subscription.DaysLeft+'</span> days time, please renew your subscription.');
                        }
                    }

                if(json.activated==0 && (current_page.indexOf('/resourceshelf.html')>0))
                    {
                        doalert("<span style='color:red; font-weight:bold'>License</span> is required to view this page");
                    }
                 if(json.activated==0 && getItem('activationalert')!='done' && (current_page.indexOf('/counselling.html')>0))
                    {
                        doalert("<span style='color:#006633; font-weight:bold'>License</span> is required to view this page <a href=# onclick='licenseDialog();' data-dismiss='modal'><span style='font-size:12pt !important; font-weight:bold; color:#ff0000;'>Click here</span></a> to get your license.");
                        getItem('activationalert','done');
                    }

                if($(".profileimg").length>0)
                    {
                        if(json.profileimage != "")
                            {
                                $(".profileimg").attr('src',json.profileimage);
                            }
                    }
                if($(".loginimg").length>0)
                    {
                        if(json.profileimage != "")
                            {
                                $(".loginimg").attr('src',json.profileimage);
                            }
                    }
            } catch (e) {
                $('.offline').css('display', 'none');
                $('.homeOffline').show();
                varappisonline = false;
                //doalert("Error " + response + e.message);
            }
            //alert('Online')
            varappisonline = true;
        }
    });
}

function jsontotable(json, id, empty, inobj, repeatnames) {
    var options = null;
    if (typeof inobj !== 'undefined')
        options = inobj;
    else
        options = $("#" + id);
    if ((typeof empty === 'undefined' ? true : empty) === true)
        options.html("");
    var x = 1;
    var sz = "";
    var szhead = "";
    var nohead = true;
    $.each(json, function() {
        var thead = $("<thead />");
        var tbody = $("<tbody />");
        var tr0 = $("<tr />");
        var tr = $("<tr />");
        var td = $("<td />");
        var th = $("<th />");
        td.html("");
        //tr.append(td);
        th.html("");
        th.attr("data-priority", "persist");
        //tr0.append(th);
        x++;
        for (var myitem in this) {
            if (this.hasOwnProperty(myitem)) {
                if (this[myitem].constructor === {}.constructor)
                    sz = "";
                else
                    sz = this[myitem];
            } else
                sz = "";
            szhead = myitem;
            if (szhead !== "") {
                th = $("<th />");
                td = $("<td />");
                th.html(szhead);
                var constr = this[myitem].constructor;
                if (this[myitem].constructor === {}.constructor && this[myitem].constructor !== "test".constructor) {
                    var outarr = [];

                    outarr[0] = this[myitem];
                    td.append(jsontotable(outarr, id, false, $("<table />"), repeatnames));
                } else {
                    if (constr.toString().indexOf("HTML") !== -1) {
                        td.html('<b class="ui-table-cell-label">' + ((typeof(repeatnames) === 'undefined' ? false : repeatnames) == true ? szhead : '') + '</b>');
                        td.append(this[myitem]);

                    } else
                        td.html('<b class="ui-table-cell-label">' + ((typeof(repeatnames) === 'undefined' ? false : repeatnames) == true ? szhead : '') + '</b>' + sz);

                }

                tr.append(td);
                tr0.append(th);

            }
        }
        //if(x<=2)
        //options.append(tr0);
        thead.append(tr0);
        if (nohead) {
            options.append(thead);
            nohead = false;
        }
        options.append(tr);
    });
    return options;
}

function fetchlist(listname, id, useid, retfn) {
    fetchlistex(listname, id, useid, retfn);
}

function fetchlistex(listname, id, useid, retfn, extra) {
    var data = {};
    data["action"] = listname;
    if (typeof(useid) !== "undefined") {
        if (useid === true) {
            data["userid"] = userid;
            data["sessionid"] = sessionid;
            data["spage"] = spage;
        }
    }
    if (typeof(extra) !== "undefined") {
        if (extra.constructor === {}.constructor) {
            for (var extraobj in extra) {
                if (extra.hasOwnProperty(extraobj))
                    data[extraobj] = extra[extraobj];
            }
        }
    }
    $.blockUI({
        message: 'Connecting to server...'
    });

    dopost({
        "url": api_link + "/fetchlist.php",
        "data": data,
        "type": "POST",
        "success": function(response) {
            $.unblockUI('hide');
            try {
                var json = JSON.parse(response);
                if (typeof(retfn) === 'function') {
                    $.unblockUI('hide');
                    if (typeof id === 'undefined')
                        return;
                    retfn(json, id);
                } else {
                    if (typeof id === 'undefined')
                        return;
                    var options = $("#" + id);
                    options.html("");
                    var x = 1;
                    var sz = "";
                    var szhead = "";
                    var nohead = true;
                    $.each(json, function() {
                        var thead = $("<thead />");
                        var tbody = $("<tbody />");
                        var tr0 = $("<tr />");
                        var tr = $("<tr />");
                        var td = $("<td />");
                        var th = $("<th />");
                        var colstart = 1;
                        td.html(x);
                        tr.append(td);
                        th.html("S/NO");
                        th.attr("data-priority", "persist");
                        th.attr("data-colstart", "1");
                        tr0.append(th);
                        x++;
                        for (var myitem in this) {
                            colstart++;
                            if (this.hasOwnProperty(myitem))
                                sz = this[myitem];
                            else
                                sz = "";
                            szhead = myitem;
                            if (szhead !== "") {
                                th = $("<th />");
                                td = $("<td />");
                                th.html(szhead);
                                th.attr("data-colstart", colstart);
                                td.html('<b class="ui-table-cell-label">' + szhead + '</b>' + sz);
                                tr.append(td);
                                tr0.append(th);

                            }
                        }
                        thead.append(tr0);
                        if (nohead) {
                            options.append(thead);
                            nohead = false;
                        }
                        options.append(tr);
                    });

                }
            } catch (e) {
                $.unblockUI();
                console.error("Parse error. Please Ignore this " + response + e.message);
                //resetItems();

            }

        },
        "error": loadingerr
    });


}

function firstSlide(slhome, slebrochure, slsyllabus, slexam, slothers) {
    var mslide, mslide1, mslide2, mslide11, mslide12, mslide3, mslide4, mslide5;
    
    //application process
    mslide = slothers;
    mslide.find('img').each(function () {$(this).attr('style', 'height:140px !important; width:340px !important;'); });
    //home
    mslide1 = slhome;
    mslide1.find('img').each(function () {$(this).attr('style', 'height:220px !important; width:680px !important;'); });

    //cbtguide
    mslide2 = slothers;
    mslide2.find('img').each(function () {$(this).attr('style', 'height:250px !important; width:455px !important;'); });
    //brochure
    mslide11 = slebrochure;
    mslide11.find('img').each(function () {$(this).attr('style', 'height:240px !important; width:720px !important;'); });
    //syllabus
    mslide12 = slsyllabus;
    mslide12.find('img').each(function () {$(this).attr('style', 'height:240px !important; width:720px !important;'); });
    //verification process
    mslide3 = slothers;
    mslide3.find('img').each(function () {$(this).attr('style', 'height:170px !important; width:360px !important;'); });
    //postexam
    mslide4 = slothers;
    mslide4.find('img').each(function () {$(this).attr('style', 'height:170px !important; width:360px !important;'); });
    //tips
    mslide5 = slothers;
    mslide5.find('img').each(function () {$(this).attr('style', 'height:170px !important; width:360px !important;'); });
//$(".swiper-container").show();
    var maincon = $("#slidecon");
    maincon.append(mslide);
    var third = $("#thirdslide");
    third.append(mslide1);
    var fourth = $("#fourthslide");
    fourth.append(mslide2);
    var brochureadvert = $("#brochureadvert");
    brochureadvert.append(mslide11);
    var syllabusadvert = $("#syllabusadvert");
    syllabusadvert.append(mslide12);
    var second = $("#secondslide");
    var mnslide3 = $("<div />");
    second.append(mslide3);
    var postexam = $("#postexam");
    postexam.append(mslide4);
    var tips = $("#tipsadvert");
    tips.append(mslide5);
    
   
      $('.slider').sss({
slideShow : true
            });

}


function initialize() {
    dopost({
            "type": "POST",
            "url": "getquest.php",
            "data": {
                "subject": "ENGLISH",
                "class": "PRIMARY 1",
                "questions": 12,
                "sylabus": "addition"
            },
            "success": function(response) {
                var json = JSON.parse(response);
                try {
                    question.questionList = [];
                    for (var idx in json.rows) {
                        question.questionList[question.questionList.length] = json.rows[idx].question;
                        question.questionList[question.questionList.length] = !json.rows[idx].hasOwnProperty("optiona") ? "" : json.rows[idx].optiona;
                        question.questionList[question.questionList.length] = !json.rows[idx].hasOwnProperty("optionb") ? "" : json.rows[idx].optionb;
                        question.questionList[question.questionList.length] = !json.rows[idx].hasOwnProperty("optionc") ? "" : json.rows[idx].optionc;
                        question.questionList[question.questionList.length] = !json.rows[idx].hasOwnProperty("optiond") ? "" : json.rows[idx].optiond;

                    }
                    game.prepare();
                } catch (e) {
                    console.error(e.message);
                }

            },
            "fail": function(xReq, statusText) {
                alert(statusText);
            }
        }

    );
}


function loadapplications(id) {
    fetchlist("currentapplications", id);
}

function getadmlist(admsession, admlist, serachtype, searchval, id) {
    $.blockUI({
        message: 'Connecting to server...'
    });
    dopost({
        "url": api_link + "/fetchlist.php",
        "data": {
            "action": "getlist",
            "session": admsession,
            "listname": admlist,
            "searchtype": serachtype,
            "value": searchval
        },
        "type": "POST",
        "success": function(response) {

            try {
                var json = JSON.parse(response);
                var options = $("#" + id);
                options.html("");
                var x = 1;
                var sz = "";
                var szhead = "";
                var nohead = true;
                $.each(json, function() {
                    var thead = $("<thead />");
                    var tbody = $("<tbody />");
                    var tr0 = $("<tr />");
                    var tr = $("<tr />");
                    var td = $("<td />");
                    var th = $("<th />");
                    td.html(x);
                    tr.append(td);
                    th.html("S/NO");
                    th.attr("data-priority", "persist");
                    th.attr("data-colstart", "1");
                    tr0.append(th);
                    x++;
                    var colstart = 1;
                    for (var myitem in this) {
                        colstart++;
                        sz = "";
                        szhead = "";
                        switch (myitem) {
                            case "exam_no":
                                szhead = "Reg. Number";
                                sz = this[myitem];
                                break;
                            case "ume":
                                szhead = "UTME Score";
                                sz = this[myitem];
                                break;
                            case "test_score":
                                szhead = "Test Score";
                                sz = this[myitem];
                                break;
                            case "composite_score":
                                szhead = "Composite Score";
                                sz = this[myitem];
                                break;
                            case "listname":
                                szhead = "List Name";
                                sz = this[myitem];
                                break;
                            case "last_name":
                                szhead = "Student Name";
                                sz = this.last_name + ", " + this.first_name + " " + this.other_names;
                                break;
                        }
                        if (szhead !== "") {
                            th = $("<th />");
                            td = $("<td />");
                            th.html(szhead);
                            th.attr("data-colstart", colstart);
                            td.html('<b class="ui-table-cell-label">' + szhead + '</b>' + sz);
                            tr.append(td);
                            tr0.append(th);

                        }
                    }
                    thead.append(tr0);
                    //tbody.append(tr);
                    //options.append(thead);
                    if (nohead) {
                        options.append(thead);
                        nohead = false;
                    }
                    options.append(tr);
                });
                $.unblockUI('hide');
                $('#collapsible_res').trigger('expand');
            } catch (e) {
                $.unblockUI();
                console.error("Parse error. Please login.." + e.toString());
                resetItems();
            }

        },
        "error": loadingerr
    });

}

function loadadmsessions(id) {
    $.blockUI({
        message: 'Connecting to server...'
    });
    dopost({
        "url": api_link + "/fetchlist.php",
        "data": {
            "action": "getsessions"
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                var options = $("#" + id);
                options.empty();
                options.append($("<option />").val("ALL SESSIONS").text("ALL SESSIONS"));

                $.each(json, function() {
                    options.append($("<option />").val(this.session).text(this.session));
                });
                $.unblockUI('hide');
            } catch (e) {
                $.unblockUI();
                console.error("Parse error. Please login..." + e.toString());
                resetItems();
            }

        },
        "error": loadingerr
    });

}

function loadadmlistnames(sess, id) {
    $.blockUI({
        message: 'Connecting to server...'
    });
    dopost({
        "url": api_link + "/fetchlist.php",
        "data": {
            "action": "getnames",
            "session": sess
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                var options = $("#" + id);
                options.empty();
                options.append($("<option />").val("ALL LISTS").text("ALL LISTS"));

                $.each(json, function() {
                    options.append($("<option />").val(this.name).text(this.name));
                });
                $.unblockUI('hide');
            } catch (e) {
                $.unblockUI('hide');
                alert("Parse error. Please login...." + e.toString());
                resetItems();
            }

        },
        "error": loadingerr
    });


}

function setItem(key, value) {
    //sessionStorage
    if (window.localStorage) {
        window.localStorage.setItem(key, value);
    }


}

function getItem(key, value) {
    if (window.localStorage) {
        return window.localStorage.getItem(key, value);
    }

}

function removeItem(key) {
    if (window.localStorage) {
        window.localStorage.removeItem(key);
    }

}

// function to update user profile
function updateUser(update) {
    var modules = $('#modules').val();
    var jobs = $('#jobs option:selected').val();
    var association = $('#associations').val();
    var fav_musics = $('#fav_musics').val();
    var fav_movies = $('#fav_movies').val();
    var fav_quotes = $('#fav_quotes').val();
    var city = $('#city').val();
    var bio = $('#bio').val();
    var personal_skills = $('#personal_skills').val();
    var religious = $('#religious option:selected').val();
    var interest = $('#interest option:selected').val();
    if (typeof(update) == "undefined")
        update = true;
    dopost({
        "url": api_link + "/user_update.php",
        "data": {
            "userid": userid,
            "modules": modules,
            "jobs": jobs,
            "association": association,
            "fav_musics": fav_musics,
            "fav_movies": fav_movies,
            "fav_quotes": fav_quotes,
            "city": city,
            "bio": bio,
            "personal_skills": personal_skills,
            "religious": religious,
            "interest": interest,
            "update": update == true ? "true" : "false"
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                if (update == true)
                    doalert(json.status);
                else {
                    $('#modules').val(json.data.modules);
                    $("#jobs option").filter(function() {
                        return this.value == json.data.job;
                    }).attr('selected', true);
                    //$('#jobs option:selected').val(json.data.job);
                    $('#associations').val(json.data.association);
                    $('#fav_musics').val(json.data.fav_musics);
                    $('#fav_movies').val(json.data.fav_movies);
                    $('#fav_quotes').val(json.data.fav_quotes);
                    $('#city').val(json.data.city);
                    $('#bio').val(json.data.bio);
                    $('#personal_skills').val(json.data.personal_skills);
                    $("#religious option").filter(function() {
                        return this.value == json.data.religious;
                    }).attr('selected', true);
                    //$('#religious option:selected').val(json.data.religious);
                    //$('#interest option:selected').val(json.data.interest);
                    $("#interest option").filter(function() {
                        return this.value == json.data.interest;
                    }).attr('selected', true);

                }
                /*
                if (parseInt(json.statuscode) == 0) {

                    setItem("modules", modules);
                    setItem("jobs", jobs);
                    setItem("association", association);
                    setItem("fav_musics", fav_musics);
                    setItem("fav_movies", fav_movies);
                    setItem("fav_quotes", fav_quotes);
                    setItem("personal_skills", personal_skills);
                    setItem("religious", religious);
                    setItem("interest", interest);

                }
                */
            } catch (e) {
                $.unblockUI();
                if (update == true)
                    doalert("Profile update Error...");

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            if (update == true)
                doalert("Profile update Error");
        }

    });
}

function viewScoreMark(subject, obj) {
    //var modulename = $('#serialno').val();
//    var correct = $('.examScore').val();
//    var wrong = $('#average').val();


    dopost({
        "url": api_link + "/result_center.php",
        "data": {
            "userid":getItem('userid'),
            "class": getItem('class'),
            "subject": subject,
            //"modulename": getItem("modulename"),
            "name": name
//            "correct": correct,
//            "wrong": wrong
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                viewExamSupervisor(json);

            } catch (e) {
                $.unblockUI();
                console.error("No Result Found...." + response + e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            console.error("No Result" + response + e.message);
        }
    });
}


/*View Result*/
function viewExamSupervisor(json,save) {

    if (typeof(save)=="undefined") {
        insertintohistory(viewExamSupervisor,[json,false]);
    }
    var mainContent = $('#examClass1');
    mainContent.html("");
//    var divChart = $('<div/>');
//    divChart.attr('id','resultChart');
//    divChart.html("TABLE CHART");
    var tableDiv = $("<div />");
    //tableDiv.addClass("table-resp");
    tableDiv.css("padding", "15px");
    //$.each(json, function() {
    var table = $("<table />");
    table.addClass("table");
    table.attr("id","rsChart");
    table.css("border", "1px solid #1051AF");
    table.attr("border", "1");
    table.css("border-collaspe", "collaspe");
    var thead = $("<thead />");
    thead.css("background", "url(assets/images/bannerbg.jpg) repeat");
    thead.css("color", "#fff");
    var theadtr = $("<tr />");
    var th = $("<th />");
    var th1 = $("<th />");
    var th2 = $("<th />");
    var th3 = $("<th />");
    var th4 = $("<th />");
    var th5 = $("<th />");

    th.html("NAME");
    th1.html("SUBJECT");
    th2.html("TEST 1");
    th3.html("TEST 2");
    th4.html("TEST 3");
    th5.html("AVERAGE");
    for (var idx in json.score) {
        var tbody = $("<tbody />");
        var tbodytr = $("<tr />");
        //tbodytr.css("background","#A6C46A");
        var td = $("<td />");
        //td.addClass("nameTD");
        var td1 = $("<td />");
        var td2 = $("<td />");
        var td3 = $("<td />");
        var td4 = $("<td />");
        var td5 = $("<td />");


        td.html(json.score[idx].name);
        td1.html(json.score[idx].modulename);
        td2.html(json.score[idx].scores);
        var scores = json.score[idx].scores;
        var counter = 0;
        var divisor = 0;

        if (scores.myscores.length >= 1) {
            counter += parseInt(scores.myscores[0].correct);
            divisor++;
            td2.html(scores.myscores[0].correct);
        }
        if (scores.myscores.length >= 2) {
            counter += parseInt(scores.myscores[1].correct);
            divisor++;
            td3.html(scores.myscores[1].correct);
        }
        if (scores.myscores.length >= 3) {
            counter += parseInt(scores.myscores[2].correct);
            divisor++;
            td4.html(scores.myscores[2].correct);
        }

        td5.html(divisor > 0 ? parseFloat(Math.round(counter) / divisor).toFixed(2) : 'N/A');
        //td5 = parseFloat(Math.round(counter / divisor)).toFixed(2);
        theadtr.append(th);
        theadtr.append(th1);
        theadtr.append(th2);
        theadtr.append(th3);
        theadtr.append(th4);
        theadtr.append(th5);
        thead.append(theadtr);
        tbodytr.append(td);
        tbodytr.append(td1);
        tbodytr.append(td2);
        tbodytr.append(td3);
        tbodytr.append(td4);
        tbodytr.append(td5);

        tbody.append(tbodytr);
        table.append(thead);
        table.append(tbody);
        tableDiv.append(table);
        mainContent.append(tableDiv);
        //mainContent.append(divChart);
    }

}



function viewResult() {
    var entrytime = $('#entrydate').val();
    var questions = $('#content').val();
    var jambcourse = $('#timeallowed').val();
    var modulename = $('#modulename').val();
    var timeused = $('#timeused').val();
    var correct = $('#correctans').val();
    var wrong = $('#wrongans').val();
    var omitted = $('#omittedques').val();
    var maxquest = $('#totalques').val();

    dopost({
        "url": api_link + "/view_result.php",
        "data": {
            "userid": userid,
            "entrytime": entrytime,
            "questions": questions,
            "jambcourse": jambcourse,
            "modulename": modulename,
            "timeused": timeused,
            "correct": correct,
            "wrong": wrong,
            "omitted": omitted,
            "maxquest": maxquest
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                viewMainResutlt(json);

            } catch (e) {
                $.unblockUI();
                console.error("No Result Found...." + response + e.message);
            }
        },
        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            console.error("No Result" + response + e.message);
        }
    });
}

function viewScore() {
    var modulename = $('#course').val();
    var correct = $('#testScore').val();


    dopost({
        "url": api_link + "/view_score.php",
        "data": {
            "userid": userid,
            "modulename": modulename,
            "correct": correct
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                viewMainScore(json);

            } catch (e) {
                $.unblockUI();
                console.error("No Result Found...." + response + e.message);
            }

        },
        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            console.error("No Result" + response + e.message);
        }
    });
}

function displaymyresult(idx) {
    $(".showResult1").css("display", "none");
    window.setTimeout(function() {
        $('#result' + idx).css("display", "block");
    }, 300);
}

function viewMainScore(json) {

    var scoreContent = $("#viewScore");
    scoreContent.html("");
    for (var idx in json.score) {

        var mainTable = $("<div/>");
        var table = '<table border="1" class="table" id="myTable" style="border:1px solid #ccc; padding:10px !important"><tbody><tr class="success"><th>Subject:</th><td><span id="course">' + json.score[idx].modulename + '</span></td></tr><tr class="info"><td>Score:</td><td><table border="1" class="table" style="border:1px solid #ccc; padding:10px !important"><thead><tr><th>Test</th></tr></thead><tbody><tr class="success"><td><a href="#result" style="color:red !important" onclick="displaymyresult(' + idx + ')" data-toggle="modal">' + json.score[idx].correct + '</a></span> <span id="postedscore"></span></td></tr></tr></tbody></table></td></tr></tbody></table>';
        var buttonposted = $("<button />");
        buttonposted.addClass("btn btn-danger btn-sm");
        buttonposted.attr("onclick","postScoreToCloud(this)");
        buttonposted.attr("title","CLICK HERE TO RE-POST RESULT");
        buttonposted.html("Repost");

        mainTable.html(table);
        if(json.score[idx].pending==1)
            {
                buttonposted.attr("postdata",JSON.stringify(json.score[idx].data));
                mainTable.find("#postedscore").append(buttonposted);
            }
        else {
            mainTable.find("#postedscore").html("");
        }


        scoreContent.append(mainTable);

    }

}

function viewMainResutlt(json) {
    var resultContent = $('#results');
    resultContent.html("");
    for (var idx in json.group) {
        var topics = {};
        //json.group[idx].questions = JSON.parse(json.group[idx].questions);
        for (var item in json.group[idx].questions) {
            topics[json.group[idx].questions[item].topics] = "";
        }
        var ulDiv = $("<div/>");
        var topicList = $("<ul/>");

        topicList.css("padding-left", "10px");
        topicList.css("list-style-type", "circle");
        for (var item in topics) {
            var li = $("<li/>");
            li.html(item);
            topicList.append(li);
        }
        ulDiv.append(topicList);
        json.group[idx].questions = ulDiv.html();
        var maincontent2 = $("<div/>");
        var maincontent = $("<div/>");
        maincontent2.attr("id", "result" + idx);
        maincontent2.css("display", "none");
        maincontent2.addClass("showResult1");
        var content = '<br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-stats"></i>  EXAM DATE</h5><div><span id="entrydate">' + json.group[idx].entrytime + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-folder-open"></i>  EXAM CONTENT</h5><div><span id="content">' + json.group[idx].questions + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-sort-by-alphabet"></i>  CLASS</h5><div><span id="timeallowed">' + json.group[idx].jambcourse + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-sort-by-alphabet"></i>  SUBJECT</h5><div><span id="modulename">' + json.group[idx].modulename + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-time"></i>  TIME USED (MINS)</h5><div><span id="timeused">' + json.group[idx].timeused + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-tasks"></i>  CORRECT ANSWERS</h5><div><span id="correctans">' + json.group[idx].correct + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-random"></i>  WRONG ANSWERS</h5><div><span id="wrongans">' + json.group[idx].wrong + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-transfer"></i>  OMITTED QUESTIONS</h5><div><span id="omittedques">' + json.group[idx].omitted + '</span></div></div><br /><div class="curriculumBox"><h5><i class="glyphicon glyphicon-compressed"></i>  TOTAL QUESTIONS</h5><div><span id="totalques">' + json.group[idx].maxquest + '</span></div></div><br />';


        maincontent.html(content);
        maincontent2.append(maincontent);

        resultContent.append(maincontent2);
    }


}
//function to sign up
function signup(mysrc) {
    var email = $('#email').val();
    pwd = $('#spassword').val();
    var cpwd = $('#cpassword').val();
    var uname = $('#fullname').val();
    var phone = $('#phone').val();
    var school = $('#school').val();
    var schoolCloudId = "";

    var dategrad = $('#dategrad').val();
    var country = $('#country option:selected').val();
    var gender = $('#gender option:selected').val();
    userid = $('#username').val();
    var dobpicker = $('#dobpicker').val();
    if($('#school').val()=="")
        {
         school= $('#cloudselect option:selected').text();
         schoolCloudId = $('#cloudselect option:selected').val();
        }


    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (!filter.test(phone)) {
    doalert('Please provide a valid phone no');
    $('#phone').focus();
    //phone.focus;
    return false;
    }
     if(phone.length < 7) {
      doalert('Phone no must not be less than 7 digits');
         return;
    }
    if(phone.length > 13) {
      doalert('Phone no cannot be greater than 13 digits');
        return;
    }


    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
    doalert('Please provide a valid email address');
    //email.focus;
    $('#email').focus();
    return false;
    }
    if(dategrad < dobpicker)
        {
            doalert('Graduation date cannot be lesser than Birth date');
            return;
        }

    if (email === '' || uname === '' || phone === '' || country === '' || gender === '' || username === '') {
        doalert('Please complete signup form');
        return;
    }

    if (pwd == '') {
        pwd = '123456';
    }
    if (cpwd == '') {
        cpwd = '123456';
    }
    setItem('name', uname);
    setItem('school', school);
    setItem('graduation', dategrad);
    setItem('dob', dobpicker);
    setItem('country', country);
    setItem('email', email);
    setItem('phone', phone);
    setItem('gender', gender);
    setItem('Source', mysrc);
    setItem('spage', 'student');

    if (!$('#terms').is(":checked")) {
        doalert("Please Accept Terms and Condition");
    } else {
        if (pwd != cpwd)
            doalert('Confirmation password does not match');
        else
            dopost({
                "url": api_link + "/signup.php",
                "data": {
                    "userid": userid,
                    "password": pwd,
                    "uname": uname,
                    "phone": phone,
                    "school": school,
                    "schoolcloudid":schoolCloudId,
                    "graduation": dategrad,
                    "email": email,
                    "country": country,
                    "dob": dobpicker,
                    "gender": gender,
                    "source": mysrc
                },
                "type": "POST",
                "success": function(response) {
                    try {
                        var json = JSON.parse(response);
                        doalert(json.status);
                        if (parseInt(json.statuscode) == 0) {
                            setItem('userid', json.userid);
                            setItem('useralias', json.useralias);
                            setItem('photo', '');

                            gotoHomePage();
                        }
                    } catch (e) {
                        $.unblockUI();
                        console.error("Signup Error..." + response + e.message);

                    }
                },
                "error": function(jqXHR, textStatus) {
                    $.unblockUI();
                    doalert("Signup Error");
                }
            });
    }
}

//function to create events
function createEvents() {
    var event_name = $('#eventname').val();
    var details = $('#details').val();
    var category = $('#category option:selected').text();
    var privacy = $('#privacy option:selected').text();
    var event_day = $('#event_day option:selected').text();
    var event_month = $('#event_month option:selected').text();
    var event_year = $('#event_year option:selected').text();
    var hour = $('#hour option:selected').text();
    var min = $('#min option:selected').text();
    var time_format = $('#time_format option:selected').text();
    var location = $('#location').val();

    dopost({
        "url": api_link + "/create_events.php",
        "data": {
            "userid": userid,
            "event_name": event_name,
            "details": details,
            "category": category,
            "privacy": privacy,
            "event_period": event_day + '-' + event_month + '-' + event_year,
            //"when": when.replace(/ 00:00:00/, ''),
            "time": hour + ':' + min + time_format,
            //"time": time.replace(/ 00:00:00/, ''),
            "location": location
        },

        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                addEventMsg(json);
            } catch (e) {
                $.unblockUI();
                console.error("Event not created...." + response + e.message);
            }
        },
        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            console.error("Event not created" + response + e.message);
        }
    });

}

//function to create ads
function createAds() {

    var campaign_name = $('#campaign_name').val();
    var ad_headline = $('#ad_headline').val();
    var display_link = $('#display_link').val();
    var add_text = $('#add_text').val();
    var ads_image = $('#ads_image').val();
    var optimize_for = $('#optimize_for option:selected').val();
    var price = $('#price option:selected').val();
    var location = $('#location').val();
    var gender = $('#gender').val();
    var ad_status = $('#ad_status option:selected').val();

    dopost({
        "url": api_link + "/create_ads.php",
        "data": {
            "userid": userid,
            "campaign_name": campaign_name,
            "ad_headline": ad_headline,
            "display_link": display_link,
            "add_text": add_text,
            "ads_image": ads_image,
            "optimize_for": optimize_for,
            "price": price,
            "location": location,
            "gender": gender,
            "ad_status": ad_status
        },

        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                alert(json.status);
                $('#campaign_name').val(json.data.campaign_name);
                $('#ad_headline').val(json.data.ad_headline);
                $('#display_link').val(json.data.display_link);
                $('#add_text').val(json.data.add_text);
                $('#ads_image').val(json.data.ads_image);
                $('#optimize_for option').filter(function() {
                    return this.value = json.data.optimize_for;
                }).attr('selected', true);
                $('#price option').filter(function() {
                    return this.value = json.data.price;
                }).attr('selected', true);
                $('#location').val(json.data.location);
                $('#gender option').filter(function() {
                    return this.value = json.data.gender;
                }).attr('selected', true);
                $('#ad_status').filter(function() {
                    return this.value = json.data.ad_status;
                }).attr('selected', true);


            } catch (e) {
                $.unblockUI();
                alert("Ad not created....");
            }

        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Ad not created");
        }


    });


}

function login() {
    userid = (document.getElementById('name') ? document.getElementById('name').value : '');
    login_userid = (document.getElementById('name') ? document.getElementById('name').value : '');

            var pwd = (document.getElementById('password') ? document.getElementById('password').value : '');
            if (pwd == '') {
                pwd = '123456';
            }
        if(userid=="")
            {
                userid = getItem('useralias');
            }
    if (userid !== '' && pwd !== '') {
        dopost({
            "url": api_link + "/login.php",
            "data": {
                "userid": userid,
                "password": pwd,
                "myaction": "Login"
            },
            "type": "POST",
            "success": function(response) {
                try {
                    var json = JSON.parse(response);
                    if (json.userid !== "" && json.sessionid !== "") {
                        userid = json.userid;
                        sessionid = json.sessionid;
                        spage = json.spage;
                        if ((spage !== null ? spage.toLowerCase() : '') !== 'student' && (spage !== null ? spage.toLowerCase() : '') !== 'admin' && (spage !== null ? spage.toLowerCase() : '') !== 'teacher') {
                            doalert("Invalid account type. Only student, admin and teacher account is allowed.");
                            resetItems();
                            return;
                        }
                        setItem("photo", json.hasOwnProperty('photo') ? json.photo : '');
                        setItem("name", json.fullname);
                        setItem("Source", json.source);
                        setItem("email", json.email);
                        setItem("gender", json.gender);
                        setItem("dob", json.birth_date);
                        setItem("country", json.country);
                        setItem("phone", json.phoneno);
                        setItem("date_joined", json.date_joined);
                        setItem("last_login", json.last_login);
                        //setItem("bio", json.bio);
                        //setItem("city", json.city);
                        //setItem("sessionid", sessionid);
                        setItem("userid", json.userid);
                        setItem("useralias", json.useralias);
                        setItem("spage", spage);
                        setItem("class", json.class);
                        setItem("category", json.category);
                        setItem("classarm", json.classarm);
                        setItem("studentcloudid",json.studentcloudid);
//                        if(role == 'admin')
//                            window.location.href = "../../admin.html";
//                        if(role == 'teacher')
                            window.location.href = "/view_brochure.html";


                    } else {
                        doalert("Please check your login details or create an account")

                    }
                    //$.mobile.loading('hide');
                    $.unblockUI();
                } catch (e) {
                    //$.mobile.loading('hide');
                    $.unblockUI();
                    doalert("<span style=font-weight:bold; text-align:center>Your Account has been disabled</span>");

                }

            },
            "error": function(jqXHR, textStatus) {
                //$.mobile.loading('hide');
                $.unblockUI();
                doalert("Login Error");
            }
        });

    $.blockUI({
        message: 'Connecting to server...'
    });

    }
    else {
        if(userid == '' || pwd == '') {
         doalert("Please enter your login parameters");
        }

    }

}

//function to view blog

function viewBlog(jdata) {
    var blogid = '';
    var blog_user = '';
    var blog_post = '';
    var blog_category = '';
    if (typeof(jdata) === typeof({})) {
        try {
            blogid = !jdata.hasOwnProperty("blogid") ? "" : jdata.blogid;
            blog_user = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            blog_post = !jdata.hasOwnProperty("post") ? "" : jdata.post;
            blog_category = !jdata.hasOwnProperty("category") ? "" : jdata.category;

        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_blogs.php",
        "data": {
            "blogid": blogid,
            "userid": blog_user,
            "blog_post": blog_post,
            "blog_category": blog_category

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                loadBlogList(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                console.error("Error Viewing Blog" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            doalert("Error Viewing Blog......");
        }

    });

}


function viewGroup(jdata) {
    var communityid = '';
    var group_user = '';
    var community_name = '';
    if (typeof(jdata) === typeof({})) {
        try {
            communityid = !jdata.hasOwnProperty("communityid") ? "" : jdata.communityid;
            group_user = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            community_name = !jdata.hasOwnProperty("community_name") ? "" : jdata.community_name;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_group.php",
        "data": {
            "communityid": communityid,
            "userid": group_user,
            "community_name": community_name


        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                loadGroupList(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                console.error("Error Viewing Communities" + response + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            alert("Error Viewing Communities......");
        }

    });

}

function viewPages(jdata) {
    var pageid = '';
    var page_user = '';
    var description = '';
    if (typeof(jdata) === typeof({})) {
        try {
            pageid = !jdata.hasOwnProperty("pageid") ? "" : jdata.pageid;
            page_user = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            description = !jdata.hasOwnProperty("description") ? "" : jdata.description;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_pages.php",
        "data": {
            "pageid": pageid,
            "userid": page_user,
            "description": description

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                loadPagesList(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                console.error("Error Viewing Pages" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            alert("Error Viewing Pages......");
        }

    });

}

function viewAds(jdata) {
    var adsID = '';
    var userid = '';
    var campaign_name = '';
    var ad_headline = '';
    var display_link = '';
    var add_text = '';
    //var optimize_for = '';
    var price = '';
    var ad_status = '';

    if (typeof(jdata) === typeof({})) {
        try {
            adsID = !jdata.hasOwnProperty("adsID") ? "" : jdata.adsID;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            campaign_name = !jdata.hasOwnProperty("campaign_name") ? "" : jdata.campaign_name;
            ad_headline = !jdata.hasOwnProperty("ad_headline") ? "" : jdata.ad_headline;
            display_link = !jdata.hasOwnProperty("display_link") ? "" : jdata.display_link;
            add_text = !jdata.hasOwnProperty("add_text") ? "" : jdata.add_text;
            //optimize_for = !jdata.hasOwnProperty("optimize_for") ? "" : jdata.optimize_for;
            price = !jdata.hasOwnProperty("price") ? "" : jdata.price;
            ad_status = !jdata.hasOwnProperty("ad_status") ? "" : jdata.ad_status;

        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_ads.php",
        "data": {
            "adsID": adsID,
            "userid": userid,
            "campaign_name": campaign_name,
            "ad_headline": ad_headline,
            "display_link": display_link,
            "add_text": add_text,
            "price": price,
            "ad_status": ad_status

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                loadAdList(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                alert("Error Viewing Ads" + e.message + response);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            alert("Error Viewing Ads......");
        }

    });

}

function loadGroupList(json) {

    var box_content = $("#content");
    box_content.html("");

    for (var idx in json.group) {
        var group_general = $("<div/>");
        var group_object = $("<div/>");
        var image_link = $("<a/>");
        var group_image = $("<img/>");
        var group_body = $("<div/>");
        var group_heading = $("<h3/>");
        var group_link = $("<a/>");
        var link_members = $("<a/>");
        var link_post = $("<a/>");


        group_general.addClass('general-listing');
        group_general.addClass('media');
        group_object.addClass('media-object');
        group_object.addClass('pull-left');
        image_link.addClass('cover');
        group_image.attr('src', 'assets/images/avatar/male.png');
        image_link.attr('href', '#');
        image_link.attr('onclick', 'viewUserProfile("' + json.group[idx].userid + '")');
        group_body.addClass('media-body');
        group_heading.addClass('media-heading');
        //group_heading.html(json.group[idx].description);
        group_link.addClass('cover');
        group_link.attr('onclick', 'viewUserGroup("' + json.group[idx].communityid + '")');
        link_members.html("0 Members |");
        link_post.html(" 0 Posts");

        image_link.append(group_image);
        group_object.append(image_link);
        group_heading.append(group_link);
        group_body.append(group_heading);

        group_body.append(link_members);
        group_body.append(link_post);

        group_general.append(group_object);
        group_general.append(group_body);

        box_content.append(group_general);

        var group_description = trimByWord2(json.group[idx].community_name);
        group_link.html(group_description);

    }

}


function trimByWord2(sentence) {
    var numberOfWords = 15;
    var result = sentence;
    var resultArray = result.split(" ");
    if (resultArray.length > numberOfWords) {
        resultArray = resultArray.slice(0, numberOfWords);
        result = resultArray.join(" ") + " ...";
    }
    return result;
}


function loadBlogList(json) {
    var box_content = $('#box-content');
    box_content.html("");
    //alert("demo is for demo");
    for (var idx in json.posts) {
        var blog_media = $("<div/>");
        var blog_object = $("<div/>");
        var profile_image = $("<img/>");
        //profile_image.addClass('profileimg');
        var image_link = $("<a/>");
        var blog_body = $("<div/>");
        var blog_heading = $("<h5/>");
        var blog_title = $("<a/>");
        var blog_time = $("<span/>");
        var blog_user = $("<a/>");
        var blog_category = $("<a/>");
        var blog_content = $("<p/>");
        var blog_readmore = $("<a/>");
        var post_span = $("<span/>");

        blog_media.addClass('media');
        blog_media.addClass('blog');
        blog_object.addClass('media-object');
        blog_object.addClass('pull-left');
          if(json.posts[idx].hasOwnProperty('profileimage'))
            {
            if(json.posts[idx].profileimage!="")
            profile_image.attr('src',json.posts[idx].profileimage);
                else
            profile_image.attr('src','assets/images/avatar/male.png');
            }
             else
                profile_image.attr('src','assets/images/avatar/male.png');
        image_link.attr('href', '#');
        image_link.attr('onclick', 'viewUserProfile("' + json.posts[idx].userid + '")');
        blog_title.attr('id', 'blogtitle');
        blog_title.attr('href', '#');
        blog_title.attr('onclick', 'viewSingleBlog("' + json.posts[idx].blogid + '")');
        blog_title.html(json.posts[idx].title);
        blog_body.addClass('media-body');
        blog_heading.addClass('media-heading');
        blog_time.addClass('blog-time-info');
        blog_content.addClass('content');
        blog_readmore.attr('href', '#');
        blog_readmore.attr('onclick', 'viewSinglePost("' + json.posts[idx].postid + '")');
        blog_readmore.html("Read more");
        image_link.append(profile_image);
        blog_object.append(image_link);
        //alert("Demo is real");

        blog_heading.append(blog_title);
        blog_body.append(blog_heading);
        var time_info = '<span class="blog-time-info"><span id="time">' + json.posts[idx].entry_time + '</span> by <a href="#" onclick=viewSingleProfile("' + json.posts[idx].userid + '") id="lbluser">' + json.posts[idx].userid + '</a> in <a href="#" onclick=viewSingleCategory("' + json.posts[idx].category + '") id="blogcat">' + json.posts[idx].category + '</a></span>';
        blog_time.html(time_info);
        blog_body.append(blog_time);

        //alert("demo");

        var post_value = trimByWord(json.posts[idx].post);
        post_span.html(post_value);
        //alert("demo1");
        blog_content.append(post_span);
        //blog_content.append(post_value);
        if (post_value.length < json.posts[idx].post.length) {
            blog_content.append(blog_readmore);
            //alert("demo2");
        }
        blog_media.append(blog_object);
        //alert("demo3");
        blog_media.append(blog_body);
        //alert("demo4");
        blog_media.append(blog_content);
        //alert("demo5");
        box_content.append(blog_media);
        //alert("demo6");
    }

    //box_content.enhanceWithin();
}

function trimByWord(sentence) {
    var numberOfWords = 15;
    var result = sentence;
    var resultArray = result.split(" ");
    if (resultArray.length > numberOfWords) {
        resultArray = resultArray.slice(0, numberOfWords);
        result = resultArray.join(" ") + " ...";
    }
    return result;
}


function loadActivityLog(json) {
    var box_content = $('#box-content');
    box_content.html("");
    if (json.hasOwnProperty('activity'))
        for (var idx in json.activity) {
            //var nav_tabs = $("<ul/>");
            //var nav_child = $("<li/>");
            var activity_link = $("<a/>");
            var activity_media = $("<div/>");
            var media_object = $("<div/>");
            var user_image = $("<img/>");
            var media_body = $("<div/>");
            var user_info = $("<h5/>");
            var post_time = $("<span/>");
            var entry_time = '<span class="post-time"> <i class="icon ion-ios7-time-outline"></i> <span>' + json.activity[idx].entry_time + '</span></span>';
            post_time.html(entry_time);
            var user_infoList = '<h5><span></span>' + json.activity[idx].activity + '</h5>';
            user_info.html(user_infoList);
            //var nav_li = ' <li class="active"><a href="activity?type=all">All</a> < /li> < li class = "" > < a href = "activity?type=me" > Mine < /a> < /li> < li class = "" > < a href = "activity?type=friends" > Friends < /a> < /li>';
            //nav_child.html("All");

            //nav_tabs.addClass('nav');
            //nav_tabs.addClass('nav-tabs');
            activity_link.addClass('activity');
            user_image.attr('src', 'assets/images/avatar/male.png');
            user_image.addClass('profileimg');
            activity_link.attr('href', '#');
            activity_link.attr('onclick', 'viewPostedActivity("' + json.activity[idx].userid + '")');
            activity_media.addClass('media');
            media_object.addClass('media-object');
            media_object.addClass('pull-left');
            media_body.addClass('media-body');
            post_time.addClass('post-time');


            // nav_tabs.append(nav_child);
            media_object.append(user_image);
            media_body.append(user_info);
            media_body.append(post_time);
            activity_media.append(media_object);
            activity_media.append(media_body);
            activity_link.append(activity_media);

            //box_content.append(nav_tabs);
            box_content.append(activity_link);

        }

}




function viewAllActivities(jdata) {
    var activity = '';
    var userid = '';
    var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            pageid = !jdata.hasOwnProperty("activity") ? "" : jdata.activity;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) { }
    }


    dopost({
        "url": api_link + "/view_activity.php",
        "data": {
            "activity": activity,
            "userid": userid,
            "entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //doalert(json.status);
                loadActivityLog(json);

            } catch (e) {
                $.unblockUI();
                console.error("Error Viewing Activities" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            doalert("Error Viewing Activities......");
        }

    });

}

//View Activity Log Function



function viewFriends(jdata) {
    var fullname = '';
    var userid = '';
    //var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            fullname = !jdata.hasOwnProperty("fullname") ? "" : jdata.fullname;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            //entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_users.php",
        "data": {
            "fullname": fullname,
            "userid": userid,
            //"entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                listAllUsers(json);

            } catch (e) {
                $.unblockUI();
                //if(update==true)
                console.error("Error Viewing Users" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            doalert("Error Viewing Users......");
        }

    });

}

function viewMaleFriends(jdata) {
    var fullname = '';
    var userid = '';
    //var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            fullname = !jdata.hasOwnProperty("fullname") ? "" : jdata.fullname;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            //entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_male.php",
        "data": {
            "fullname": fullname,
            "userid": userid,
            //"entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                listMale(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //alert("Error Viewing Users" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //alert("Error Viewing Users......");
        }

    });

}

function viewSideFirends(jdata) {
    var fullname = '';
    var userid = '';
    //var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            fullname = !jdata.hasOwnProperty("fullname") ? "" : jdata.fullname;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            //entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/side_online_friends.php",
        "data": {
            "fullname": fullname,
            "userid": userid,
            //"entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                listSideUsers(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //alert("Error Viewing Users" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //alert("Error Viewing Users......");
        }

    });

}


function listSideUsers(json) {

    box_content = $("div.listside");
    box_content.html("");

    for (var idx in json.sideusers) {
        var user_media = $("<div/>");
        var media_object = $("<div/>");


        var link_user = $('<img/>');
        if(json.sideusers[idx].hasOwnProperty('profileimage'))
            {
            if(json.sideusers[idx].profileimage!="")
            link_user.attr('src',json.sideusers[idx].profileimage);
                else
            link_user.attr('src','assets/images/avatar/male.png');
            }
             else
                link_user.attr('src','assets/images/avatar/male.png');
        var media_body = $("<div/>");

        var body_link = $("<a/>");
        var link_body = '<a data-ajaxify="true" href="dujonpratt"><h5 class="media-heading">' + json.sideusers[idx].fullname + ' <br /> <span>@' + json.sideusers[idx].useralias + '</span> </h5></a>';

        body_link.html(link_body);
        var action_button = $("<div/>");
        var follow_button = $("<a/>");
        var add_button = $("<a/>");

        var button_follow = ' <a href="#" class="btn btn-xs btn-success"><i class="fa fa-user-plus" style="color:#fff !important"></i><span>Follow</span></a>';
        follow_button.html(button_follow);

        var button_add = '<a href="#" class="btn btn-xs btn-primary"><i class="fa fa-user" style="color:#fff !important"></i> <span>Add friend</span></a>';
        add_button.html(button_add);

        //var button_action = '<div class="action-buttons"><a data-userid="9862" data-touserid="4923" href="" data-unfollow-title="Unfollow" data-follow-title="Follow" class="btn btn-xs 4923-follow-button  btn-lightblue follow-button "><i class="icon ion-ios7-plus-outline"></i><span>Follow</span></a><a href="" data-userid="9862" data-touserid="4923" data-sent-title="Friend request sent" class="btn btn-xs 4923-add-friend-button add-friend-button btn-blue"><i class="icon ion-ios7-personadd-outline"></i>  <span>Add friend</span></a></div>';
        //action_button.html(button_action);

        user_media.addClass('user');
        user_media.addClass('media');
        user_media.addClass('user-mini');
        user_media.addClass('user-mini-actions');
        media_object.addClass('media-object');
        media_object.addClass('pull-left');
        action_button.addClass('action-button');
        follow_button.addClass('btn-xs');
        add_button.addClass('btn-xs');

        media_object.append(link_user);
        user_media.append(media_object);
        user_media.append(media_body);
        media_body.append(body_link);
        action_button.append(follow_button);
        action_button.append(add_button);
        media_body.append(action_button);

        box_content.append(user_media);
        //box_content.append(media_body);


    }

}

//Display All Male
function listMale(json) {
    var box_content = $('div.maleusers');
    box_content.html("");

    for (var idx in json.friendlist) {
        var media_user = $("<div/>");
        var media_object = $("<div/>");
        var media_link = $("<a/>");
        var user_image = $("<img/>");
        user_image.addClass('profileimage');
        var media_body = $("<div/>");
        var user_link = $("<a/>");
        var media_header = $("<h5/>");
        var action_buttons = $("<div/>");
        var button_follow = $("<a/>");
        var button_add = $("<a/>");

        var user_info = ' <h5 class="media-heading">' + json.friendlist[idx].fullname + '<i title="kchha is online" class="icon ion-record" style="color: #26C281;font-size: 11px"></i> <span>@' + json.friendlist[idx].useralias + '</span> </h5>';
        media_header.html(user_info);

        var user_follow = '<a data-userid="' + userid + '" data-touserid="' + json.friendlist[idx].userid + '" href="" data-unfollow-title="Unfollow" data-follow-title="Follow" class="btn btn-xs 2914-follow-button  btn-lightblue follow-button "><i class="icon ion-ios7-plus-outline"></i><span>Follow</span></a>';
        button_follow.html(user_follow);

        var add_user = '<a href="" data-userid="' + userid + '" data-touserid="' + json.friendlist[idx].userid + '" data-sent-title="Friend request sent" class="btn btn-xs btn-primary"><i class="fa fa-user" style="color:#fff !important"></i> <span>Add friend</span></a>';
        button_add.html(add_user);

        media_user.addClass('user');
        media_user.addClass('media');
        media_object.addClass('media-object');
        media_object.addClass('pull-left');
        media_link.addClass('user-popover');
        if(json.friendlist[idx].hasOwnProperty('profileimage'))
            {
            if(json.friendlist[idx].profileimage!="")
            user_image.attr('src',json.friendlist[idx].profileimage);
                else
            user_image.attr('src','assets/images/avatar/male.png');
            }
             else
                user_image.attr('src','assets/images/avatar/male.png');
       // user_image.attr('src', 'assets/images/avatar/male.png');
        media_body.addClass('media-body');
        media_header.addClass('media-heading');
        action_buttons.addClass('action-buttons');
        //button_follow.addClass('btn');
        button_follow.addClass('btn-xs');
        //button_follow.addClass('2914-follow-button');
        //button_follow.addClass('btn-lightblue');
        // button_follow.addClass('follow-button');
        //button_add.addClass('btn');
        button_add.addClass('btn-xs');
        //button_add.addClass('2914-add-friend-button');
        //button_add.addClass('add-friend-button');
        // button_add.addClass('btn-blue');

        media_object.append(media_link);
        media_link.append(user_image);
        media_body.append(user_link);
        media_body.append(media_header);
        action_buttons.append(button_follow);
        action_buttons.append(button_add);
        media_body.append(action_buttons);

        media_user.append(media_object);
        media_user.append(media_body);

        box_content.append(media_user);
    }
}

function viewFemaleFriends(jdata) {
    var fullname = '';
    var userid = '';
    //var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            fullname = !jdata.hasOwnProperty("fullname") ? "" : jdata.fullname;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            //entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_female.php",
        "data": {
            "fullname": fullname,
            "userid": userid,
            //"entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                listFemale(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //alert("Error Viewing Users" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //alert("Error Viewing Users......");
        }

    });

}

//Display All Female users
function listFemale(json) {
    var box_content = $('div.female');
    box_content.html("");

    for (var idx in json.friendlist) {
        var media_user = $("<div/>");
        var media_object = $("<div/>");
        var media_link = $("<a/>");
        var user_image = $("<img/>");
        user_image.addClass('profileimg');
        var media_body = $("<div/>");
        var user_link = $("<a/>");
        var media_header = $("<h5/>");
        var action_buttons = $("<div/>");
        var button_follow = $("<a/>");
        var button_add = $("<a/>");
         if(json.friendlist[idx].hasOwnProperty('profileimage'))
            {
            if(json.friendlist[idx].profileimage!="")
            user_image.attr('src',json.friendlist[idx].profileimage);
                else
            user_image.attr('src','assets/images/avatar/male.png');
            }
             else
                user_image.attr('src','assets/images/avatar/male.png');

        var user_info = ' <h5 class="media-heading">' + json.friendlist[idx].fullname + '<i title="kchha is online" class="icon ion-record" style="color: #26C281;font-size: 11px"></i> <span>@' + json.friendlist[idx].useralias + '</span> </h5>';
        media_header.html(user_info);

        var user_follow = '<a data-userid="' + userid + '" data-touserid="' + json.friendlist[idx].userid + '" href="" data-unfollow-title="Unfollow" data-follow-title="Follow" class="btn btn-xs 2914-follow-button  btn-lightblue follow-button "><i class="icon ion-ios7-plus-outline"></i><span>Follow</span></a>';
        button_follow.html(user_follow);

        var add_user = '<a href="" data-userid="' + userid + '" data-touserid="' + json.friendlist[idx].userid + '" data-sent-title="Friend request sent" class="btn btn-xs btn-primary"><i class="fa fa-user" style="color:#fff !important"></i> <span>Add friend</span></a>';
        button_add.html(add_user);

        media_user.addClass('user');
        media_user.addClass('media');
        media_object.addClass('media-object');
        media_object.addClass('pull-left');
        media_link.addClass('user-popover');
        user_image.attr('src', 'assets/images/avatar/male.png');
        media_body.addClass('media-body');
        media_header.addClass('media-heading');
        action_buttons.addClass('action-buttons');
        //button_follow.addClass('btn');
        button_follow.addClass('btn-xs');
        //button_follow.addClass('2914-follow-button');
        //button_follow.addClass('btn-lightblue');
        // button_follow.addClass('follow-button');
        //button_add.addClass('btn');
        button_add.addClass('btn-xs');
        //button_add.addClass('2914-add-friend-button');
        //button_add.addClass('add-friend-button');
        // button_add.addClass('btn-blue');

        media_object.append(media_link);
        media_link.append(user_image);
        media_body.append(user_link);
        media_body.append(media_header);
        action_buttons.append(button_follow);
        action_buttons.append(button_add);
        media_body.append(action_buttons);

        media_user.append(media_object);
        media_user.append(media_body);

        box_content.append(media_user);
    }
}



//Display All Users function
function listAllUsers(json) {
    var box_content = $('div.userlist');
    box_content.html("");

    for (var idx in json.friendlist) {
        var media_user = $("<div/>");
        var media_object = $("<div/>");
        var media_link = $("<a/>");
        var user_image = $("<img/>");
        //user_image.addClass('profileimg');
        var media_body = $("<div/>");
        var user_link = $("<a/>");
        var media_header = $("<h5/>");
        var action_buttons = $("<div/>");
        var button_follow = $("<a/>");
        var button_add = $("<a/>");

        if(json.friendlist[idx].hasOwnProperty('profileimage'))
            {
            if(json.friendlist[idx].profileimage!="")
            user_image.attr('src',json.friendlist[idx].profileimage);
                else
            user_image.attr('src','assets/images/avatar/male.png');
            }
             else
                user_image.attr('src','assets/images/avatar/male.png');
        var user_info = ' <h5 class="media-heading">' + json.friendlist[idx].fullname + '<i title="kchha is online" class="icon ion-record" style="color: #26C281;font-size: 11px"></i> <span>@' + json.friendlist[idx].useralias + '</span> </h5>';
        media_header.html(user_info);

        var user_follow = '<a data-userid="' + userid + '" data-touserid="' + json.friendlist[idx].userid + '" href="" data-unfollow-title="Unfollow" data-follow-title="Follow" class="btn btn-xs 2914-follow-button  btn-lightblue follow-button "><i class="icon ion-ios7-plus-outline"></i><span>Follow</span></a>';
        button_follow.html(user_follow);

        var add_user = '<a href="" data-userid="' + userid + '" data-touserid="' + json.friendlist[idx].userid + '" data-sent-title="Friend request sent" class="btn btn-xs btn-primary"><i class="fa fa-user" style="color:#fff !important"></i> <span>Add friend</span></a>';
        button_add.html(add_user);

        media_user.addClass('user');
        media_user.addClass('media');
        media_object.addClass('media-object');
        media_object.addClass('pull-left');
        media_link.addClass('user-popover');
        user_image.attr('src', 'assets/images/avatar/male.png');
        media_body.addClass('media-body');
        media_header.addClass('media-heading');
        action_buttons.addClass('action-buttons');
        //button_follow.addClass('btn');
        button_follow.addClass('btn-xs');
        //button_follow.addClass('2914-follow-button');
        //button_follow.addClass('btn-lightblue');
        // button_follow.addClass('follow-button');
        //button_add.addClass('btn');
        button_add.addClass('btn-xs');
        //button_add.addClass('2914-add-friend-button');
        //button_add.addClass('add-friend-button');
        // button_add.addClass('btn-blue');

        media_object.append(media_link);
        media_link.append(user_image);
        media_body.append(user_link);
        media_body.append(media_header);
        action_buttons.append(button_follow);
        action_buttons.append(button_add);
        media_body.append(action_buttons);

        media_user.append(media_object);
        media_user.append(media_body);

        box_content.append(media_user);
    }
}


function viewSidePages(jdata) {
    var pageid = '';
    var page_user = '';
    var page_name = '';
    if (typeof(jdata) === typeof({})) {
        try {
            pageid = !jdata.hasOwnProperty("pageid") ? "" : jdata.pageid;
            page_user = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            page_name = !jdata.hasOwnProperty("page_name") ? "" : jdata.page_name;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_sidepages.php",
        "data": {
            "pageid": pageid,
            "userid": page_user,
            "page_name": page_name

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                listSidePages(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //alert("Error Viewing Pages" + response + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //alert("Error Viewing Pages......" + response + e.message);
        }

    });

}


function listSidePages(json) {
    var box_content = $("div.pageside");
    box_content.html("");

    for (var idx in json.pagelist) {
        var media_user = $("<div/>");
        var media_object = $("<div/>");
        var object_link = $("<a/>");
        object_link.attr('href', '#');
        var user_image = $("<img/>");
        user_image.attr('src', 'assets/images/avatar/male.png');

        var media_body = $("<div/>");
        var media_header = $("<h5/>");
        var like_icon = $("<p/>");
        var icon_like = '<p><i class="icon ion-thumbsup"></i> 2 <span class="post-like-count-108"> Likes</span></p>';
        like_icon.html(icon_like);

        var action_button = $("<div/>");
        var like_button = $("<a/>");
        var button_like = '<a data-is-login="1" data-status="0" class="btn btn-default btn-xs like-button" data-like="Like" data-unlike="Unlike" data-id="108" data-type="page" href=""><i class="icon ion-ios7-heart"></i> <span>Like</span></a>';
        like_button.html(button_like);

        media_user.addClass('user');
        media_user.addClass('media');
        media_user.addClass('media');
        media_object.addClass('media-object');
        media_object.addClass('pull-left');
        media_body.addClass('media-body');
        media_header.addClass('media-heading');
        media_header.html(json.pagelist[idx].page_name);
        action_button.addClass('action-buttons');
        like_button.addClass('btn-xs');


        object_link.append(user_image);
        media_object.append(object_link);
        media_body.append(media_header);
        media_body.append(like_icon);
        action_button.append(like_button);
        media_body.append(action_button);

        media_user.append(media_object);
        media_user.append(media_body);

        box_content.append(media_user);

    }
}

function viewSideCommunities(jdata) {
    var communityid = '';
    var group_user = '';
    var community_name = '';
    if (typeof(jdata) === typeof({})) {
        try {
            communityid = !jdata.hasOwnProperty("communityid") ? "" : jdata.communityid;
            group_user = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            community_name = !jdata.hasOwnProperty("community_name") ? "" : jdata.community_name;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_sidecommunity.php",
        "data": {
            "communityid": communityid,
            "userid": group_user,
            "community_name": community_name

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                listSideCommunities(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //alert("Error Viewing Communities" + response + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //alert("Error Viewing Communities......" + response + e.message);
        }

    });

}


function listSideCommunities(json) {
    var box_content = $('div.communityside');
    box_content.html("");

    for (var idx in json.community) {
        var media_user = $("<div/>");
        var media_object = $("<div/>");
        var media_link = $("<a/>");
        media_link.attr("href", "#");
        var media_image = $("<img/>");
        media_image.attr("src", "assets/images/avatar/male.png");

        var media_body = $("<div/>");
        var media_header = $("<h5/>");
        var media_members = $("<p/>");
        media_members.html("1 Members");
        var media_post = $("<p/>");
        media_post.html("1 Posts");

        media_user.addClass('user');
        media_user.addClass('media');
        media_user.addClass('media');
        media_object.addClass('media-object');
        media_object.addClass('pull-left');
        media_body.addClass('media-body');
        media_header.addClass('media-heading');
        media_header.html(json.community[idx].community_name);

        media_link.append(media_image);
        media_object.append(media_link);
        media_body.append(media_header);
        media_body.append(media_members);
        media_body.append(media_post);

        media_user.append(media_object);
        media_user.append(media_body);

        box_content.append(media_user);

    }
}

function loadPagesList(json) {

    var box_content = $('#content');

    box_content.html("");



    for (var idx in json.pages) {
        var page_general = $("<div/>");
        var page_object = $("<div/>");
        var image_link = $("<a/>");
        var page_image = $("<img/>");
        var page_body = $("<div/>");
        var page_heading = $("<h5/>");
        var page_link = $("<a/>");
        var page_like = $("<p/>");
        var thumb_like = $("<i/>");
        var span_count = $("<span/>");
        var like_status = $("<a/>");
        var like_icon = $("<i/>");
        var span_like = $("<span/>");

        page_general.addClass('media');
        page_general.addClass('general-listing');
        page_object.addClass('media-object');
        page_object.addClass('pull-left');
        image_link.addClass('cover');
        page_image.attr('src', 'assets/images/avatar/male.png');
        image_link.attr('href', '#');
        image_link.attr('onclick', 'viewUserProfile("' + json.pages[idx].userid + '")');
        page_body.addClass('media-body');
        page_heading.addClass('media-heading');


        //page_heading.html(json.pages[idx].description);
        page_link.addClass('cover');
        page_link.attr('onclick', 'viewUserPage("' + json.pages[idx].pageid + '")');
        //page_link.html(json.posts[idx].title);
        thumb_like.addClass('icon');
        thumb_like.addClass('ion-thumbsup');
        span_count.addClass('post-like-count-358');
        like_status.addClass('btn');
        like_status.addClass('btn-default');
        like_status.addClass('btn-xs');
        like_status.addClass('like-button');
        like_icon.addClass('icon');
        like_icon.addClass('ion-ios7-heart');
        page_like.html("Like");
        span_like.html("Like");


        image_link.append(page_image);
        page_object.append(image_link);
        page_heading.append(page_link);
        //page_heading.append(page_body);
        page_body.append(page_heading);
        thumb_like.append(span_count);
        page_like.append(thumb_like);
        page_body.append(page_like);
        like_icon.append(span_like);
        like_status.append(like_icon);
        page_body.append(like_status);


        //page_body.append(page_object);
        //page_body.append(page_object);



        page_general.append(page_object);
        page_general.append(page_body);

        box_content.append(page_general);


        var page_description = trimByWord1(json.pages[idx].description);
        page_link.html(page_description);

    }


}

function viewHomeLog(jdata) {
    var activity = '';
    var userid = '';
    var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            pageid = !jdata.hasOwnProperty("activity") ? "" : jdata.activity;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_activity.php",
        "data": {
            "activity": activity,
            "userid": userid,
            "entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                loadAllHomeActivities(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //alert("Error Viewing Activities" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //alert("Error Viewing Activities......");
        }

    });

}

function loadAllHomeActivities(json) {
    var box_content = $('#post-13119');
    box_content.html("");

    for (var idx in json.activity) {
        var post_header = $("<div/>");
        var header_object = $("<div/>");
        var user_popover = $("<a/>");
        //var avatar_image = $("<img/>");
        //avatar_image.attr('src','assets/images/avatar/c/100.png');
        //var header_body = $("<div/>");
        //var header_title = $("<h3/>");
        //var link_user = $("<a/>");
        //var post_time = $("<span/>");
        //post_time.html(+ json.activity[idx].entry_time + );
        //var icon_time = $("<i/>");
        //var time_old = $("<span/>");
        /*
              var time_post = ' <span class="post-time">'+ json.activity[idx].entry_time + '<i class="icon ion-ios7-time-outline"></i><span data-hasqtip="322" oldtitle="Thursday, February 26, 2015" title="">6 months ago</span>  <span style="font-weight: bold" data-hasqtip="323" oldtitle="Public" title=""><i class="icon ion-ios7-arrow-thin-right"></i><span class="post-is-edited-13119"></span>Public</span></span>';
              post_time.html(time_post);
              */

        var header_post = '<div class="post-header clearfix"><div class="header-object"><a class="user-popover" data-url="user/popover/1" href="#" data-hasqtip="2629"><img src="assets/images/avatar/c/100.png"></a></div><div class="header-body"><h3 class="title"><a data-ajaxify="true" href="#"></a> <span>@' + json.activity[idx].userid + '</span></h3><span class="post-time"><i class="icon ion-ios7-time-outline">' + json.activity[idx].entry_time + '</i><span data-hasqtip="537" oldtitle="Wednesday, April 22, 2015" title=""></span>  <span style="font-weight: bold" data-hasqtip="538" oldtitle="Public" title=""><i class="icon ion-ios7-arrow-thin-right"></i><span class="post-is-edited-16379"></span>Public</span></span><div class="post-action-dropdown dropdown"><a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href=""><i class="icon ion-ios7-arrow-down"></i></a><ul class="dropdown-menu pull-right"><li><a data-id="16379" href="" class="hide-post">I dont want to see this</a> </li><li><a data-location="post" data-userid="1" class="block-user" href="">Block user</a> </li><li><a href="report/post?url=post/16379">Report post</a></li><li><a href="post/16379">View post</a> </li><li><a data-ajaxify="true" href="ads/create?type=post&amp;id=16379">Boost this post</a></li><li class="divider"></li><li><a href="javascript:void(0)" onclick="return window.open("http://www.facebook.com/sharer.php?u=post/16379","targetWindow", "width=600,height=400")"><i style="display: inline-block;width: 15%;text-align: center" class="icon ion-social-facebook"></i> Share on Facebook</a> </li><li><a href="javascript:void(0)" onclick="return window.open("http://twitter.com/share?url=post/16379","targetWindow", "toolbar=no,location=no,status=no,scrollbar=yes,resizable=no,width=600,height=400")"><i style="display: inline-block;width: 15%;text-align: center" class="icon ion-social-twitter"></i> Share on Twitter</a> </li><li><a href="javascript:void(0)" onclick="return window.open("https://plus.google.com/share?url=post/16379","targetWindow", "toolbar=no,location=no,status=no,scrollbar=yes,resizable=no,width=600,height=400")"><i style="display: inline-block;width: 15%;text-align: center" class="icon ion-social-googleplus"></i> Share on G+</a></li><li><a href="javascript:void(0)" onclick="return window.open("http://www.linkedin.com/shareArticle?mini=true&amp;url=post/16379","targetWindow", "toolbar=no,location=no,status=no,scrollbar=yes,resizable=no,width=600,height=400")"><i style="display: inline-block;width: 15%;text-align: center" class="icon ion-social-linkedin-outline"></i> Share on LinkedIn</a> </li></ul></div></div></div>';

        post_header.html(header_post);

        var span_type = $("<span/>");
        var icon_type = $("<i/>");
        var span_edit = $("<span/>");

        var media_post = $("<div/>");
        var post_content = $("<div/>");
        var blog_post = $("<div/>");
        var blog_object = $("<div/>");
        var icon_clip = $("<i/>");
        var media_blog_body = $("<div/>");
        var media_blog_link = $("<a/>");


        var link_media = '<a data-ajaxify="true" href="#"></a><a href="blog/36638b08-creating-your-very-own-social-network-with-cliqlite/" data-ajaxify="true">' + json.activity[idx].activity + '</a>';
        media_blog_link.html(link_media);

        var post_footer = $("<div/>");
        var share_nav = $("<div/>");

        var nav_share = '<ul class="nav nav-left"><li><a href="" data-is-login="1" class="post-share-button" data-id="13119"><i class="icon ion-reply"></i><span>Share</span></a></li><li><a data-is-login="1" data-status="0" class="like-button" data-like="Like" data-unlike="Unlike" data-id="13119" data-type="post" href=""><i class="icon ion-ios7-heart"></i> <span>Like</span></a></li></ul>';
        share_nav.html(nav_share);

        var nav_count = $("<div/>");
        var count_nav = '<ul class="nav nav-right pull-right"><li><a data-id="13119" data-loading="loading....." class="post-activity-loader" href="shares/13119"></a></li><li><a data-id="13119" data-loading="loading....." class="post-activity-loader" href="likes/post/13119"><i class="icon ion-ios7-heart"></i> <span class="post-like-count-13119">Count Like</span></a></li><li><a href="javascript:void(0)"><i class="icon ion-reply-all"></i> <span class="post-reply-count-13119">Reply Count</span></a></li></ul>';

        nav_count.html(count_nav);

        var post_activity = $("<div/>");
        //post_activity = $("#post-activity-13119");
        post_activity.html("Loading........");

        var media_comment = $("<div/>");
        var comment_media = '<div class="post-replies" id="13119-post-replies" data-limit="3" data-offset="3" data-type="post" data-type-id="13119"><a style="" href="" class="load-more-comment" data-target="#13119-post-replies"><!--<i class="icon ion-chatbox"></i> View more comments--><img class="indicator" src="assets/images/loading.gif"></a><div id="post-13119-reply-lists" class="replies-list"><div id="reply-5498" class="reply media reply-5498" style="display:none;"><div class="media-object pull-left"><a href="hiliev" data-ajaxify="true"></a></div><div class="media-body"><h5 class="media-heading"><a href="hiliev" data-ajaxify="true"></a><span></span></h5><span class="comment-text" id="5498-comment-text"></span><span class="post-time"><!--<i class="icon ion-ios7-time-outline"></i>--> <span data-hasqtip="406" oldtitle="Wednesday, July 1, 2015" title=""></span></span><!--<i style="font-size: 15px;color: #828282" class="icon ion-thumbsup"></i><span id="comment-like-count-5498"></span><a data-target="#comment-like-count-5498" data-is-login="1" data-status="0" class="like-button" data-like="Like" data-unlike="Unlike" data-id="5498" data-type="comment" href=""> <span>Like</span></a>--><!--<a href="">Like</a>--></div></div> </div><div class="media clearfix" style="overflow: visible"><div class="media-body" style="overflow: visible;content:"";display:block;"><form id="reply-form-post-13119" data-type="post" class="clearfix" data-id="13119" enctype="multipart/form-data" action="" method="post"><input data-type="post" data-id="13119" id="13119-reply-input" autocomplete="off" data-target="#13119-hashtag-mention-suggestion" data-text-limit="150" data-counter-target="#13119-text-counter" class="mention " type="text" placeholder="Add a comment"><input type="hidden" name="val[type]" value="post"><input type="hidden" name="val[type_id]" value="13119"><div class="actions"></div><div class="real-comment-form"><textarea data-height="30" style="height: 50px" id="13119-reply-textarea" data-target="#13119-hashtag-mention-suggestion" data-text-limit="150" data-counter-target="#13119-text-counter" class="mention " name="val[text]" placeholder="Add a comment"></textarea><div class="hashtag-mention-suggestion" id="13119-hashtag-mention-suggestion" style="position: relative"><div class="listing"></div></div><div class="reply-footer"><button class="btn btn-success btn-sm">Reply</button><a data-type="post" data-id="13119" href="" class="btn btn-danger btn-sm cancel-reply-form">Cancel</a><a class="emoticon-selector" href="javascript:void(0)" data-hasqtip="2"><img style="display: inline-block;width: 15px;margin: 3px auto" src="assets/images/emoticon.png"></a><div class="" style="display: none"><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":)" class="each-emoticon-selector" data-hasqtip="467" oldtitle="Smile" title=""><img src="assets/images/emoticons/big_smile.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":<)" class="each-emoticon-selector" data-hasqtip="469" oldtitle="Bad Smile" title=""><img src="assets/images/emoticons/bad_smile.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code="-:" class="each-emoticon-selector" data-hasqtip="471" oldtitle="Amazing" title=""><img src="assets/images/emoticons/amazing.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":@" class="each-emoticon-selector" data-hasqtip="473" oldtitle="Anger" title=""><img src="assets/images/emoticons/anger.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":b" class="each-emoticon-selector" data-hasqtip="475" oldtitle="Bad Egg" title=""><img src="assets/images/emoticons/bad_egg.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=")b" class="each-emoticon-selector" data-hasqtip="477" oldtitle="Beaten" title=""><img src="assets/images/emoticons/beaten.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code="(b" class="each-emoticon-selector" data-hasqtip="479" oldtitle="Black Heart" title=""><img src="assets/images/emoticons/black_heart.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":c" class="each-emoticon-selector" data-hasqtip="481" oldtitle="Cry" title=""><img src="assets/images/emoticons/cry.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":-)" class="each-emoticon-selector" data-hasqtip="483" oldtitle="Happy" title=""><img src="assets/images/emoticons/happy.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-e" class="each-emoticon-selector" data-hasqtip="485" oldtitle="Electric Shock" title=""><img src="assets/images/emoticons/electric_shock.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-g" class="each-emoticon-selector" data-hasqtip="487" oldtitle="Girl" title=""><img src="assets/images/emoticons/girl.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ce" class="each-emoticon-selector" data-hasqtip="489" oldtitle="Exciting" title=""><img src="assets/images/emoticons/exciting.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ye" class="each-emoticon-selector" data-hasqtip="491" oldtitle="Eyes droped" title=""><img src="assets/images/emoticons/eyes_droped.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-(g" class="each-emoticon-selector" data-hasqtip="493" oldtitle="Greedy" title=""><img src="assets/images/emoticons/greedy.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ha" class="each-emoticon-selector" data-hasqtip="495" oldtitle="Haha" title=""><img src="assets/images/emoticons/haha.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ho" class="each-emoticon-selector" data-hasqtip="497" oldtitle="Horror" title=""><img src="assets/images/emoticons/horror.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-)m" class="each-emoticon-selector" data-hasqtip="499" oldtitle="Money" title=""><img src="assets/images/emoticons/money.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-)-n" class="each-emoticon-selector" data-hasqtip="501" oldtitle="Nothing" title=""><img src="assets/images/emoticons/nothing.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-)-sn" class="each-emoticon-selector" data-hasqtip="503" oldtitle="Nothing to say" title=""><img src="assets/images/emoticons/nothing_to_say.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-rh" class="each-emoticon-selector" data-hasqtip="505" oldtitle="Red heart" title=""><img src="assets/images/emoticons/red_heart.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-sc" class="each-emoticon-selector" data-hasqtip="507" oldtitle="Scorn" title=""><img src="assets/images/emoticons/scorn.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-sh" class="each-emoticon-selector" data-hasqtip="509" oldtitle="Shame" title=""><img src="assets/images/emoticons/shame.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-s-h" class="each-emoticon-selector" data-hasqtip="511" oldtitle="Shocked" title=""><img src="assets/images/emoticons/shocked.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-sp" class="each-emoticon-selector" data-hasqtip="513" oldtitle="Super Man" title=""><img src="assets/images/emoticons/super_man.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-im" class="each-emoticon-selector" data-hasqtip="515" oldtitle="Iron Man" title=""><img src="assets/images/emoticons/the_iron_man.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":P" class="each-emoticon-selector" data-hasqtip="517" oldtitle="Tongue" title=""><img src="assets/images/emoticons/grimace.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":(" class="each-emoticon-selector" data-hasqtip="519" oldtitle="Unhappy" title=""><img src="assets/images/emoticons/unhappy.png"></a><a data-target="#13119-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":-v" class="each-emoticon-selector" data-hasqtip="521" oldtitle="Victory" title=""><img src="assets/images/emoticons/victory.png"></a></div><span class=" fileupload fileupload-exists" data-provides="fileupload"><a class="btn-file btn"><span class="fileupload-new"><i class="icon ion-android-camera"></i></span><span class="fileupload-exists"><i class="icon ion-android-camera"></i></span><input title="" class="" type="file" name="image"></a></span></div></div></form></div></div></div>';

        media_comment.html(comment_media);

        media_post.append(post_content);
        blog_object.append(icon_clip);
        blog_post.append(blog_object);
        media_blog_body.append(media_blog_link);
        blog_post.append(media_blog_body);
        media_post.append(blog_post);
        post_footer.append(share_nav);
        post_footer.append(nav_count);

        box_content.append(post_header);
        box_content.append(media_post);
        box_content.append(post_footer);
        box_content.append(post_activity);
        box_content.append(media_comment);

        media_post.addClass('post-body');
        post_content.addClass('post-text-content');
        //post_content.html(json.activity[idx].activity);
        blog_post.addClass('media');
        blog_post.addClass('blog-in-post');
        blog_object.addClass('media-object');
        blog_object.addClass('pull-left');
        icon_clip.addClass('icon');
        icon_clip.addClass('ion-clipboard');
        media_blog_body.addClass('media-body');
        post_footer.addClass('post-footer');
        post_activity.addClass('post-activity');
    }
}

function trimByWord1(sentence) {
    var numberOfWords = 15;
    var result = sentence;
    var resultArray = result.split(" ");
    if (resultArray.length > numberOfWords) {
        resultArray = resultArray.slice(0, numberOfWords);
        result = resultArray.join(" ") + " ...";
    }
    return result;
}

function viewProfileLog(jdata) {
    var activity = '';
    var userid = '';
    var entry_time = '';
    if (typeof(jdata) === typeof({})) {
        try {
            pageid = !jdata.hasOwnProperty("activity") ? "" : jdata.activity;
            userid = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            entry_time = !jdata.hasOwnProperty("entry_time") ? "" : jdata.entry_time;


        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_activity.php",
        "data": {
            "activity": activity,
            "userid": userid,
            "entry_time": entry_time

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                loadProfileList(json);
                /* $('#blogtitle').val(json.data.blog_title);
                 $('#blogpost').val(json.data.blog_post);
                 $("#blogcat option").filter(function () {
                     return this.value == json.data.blog_category;
                 }).attr('selected', true);
                 $('#time').val(json.data.entry_time);*/
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                //doalert("Error Viewing Activities" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            //doalert("Error Viewing Activities......");
        }

    });

}


function loadProfileList(json) {
    box_content = $('#post-list');
    box_content.html("");

    for (var idx in json.activity)

    {
        var post_main = $("<div/>");
        var post_header = $("<div/>");
        var header_post = '<div class="post-header clearfix"><div class="header-object"><a class="user-popover" data-url="user/popover/9754" href="#"><img src="assets/images/avatar/male.png" class="profileimg"></a></div><div class="header-body"<h3 class="title"><a data-ajaxify="true" href="stevetams" class="lblname">' + json.activity[idx].userid + '</a> <span><span id="lbluser"></span> </span><i title="Steve Tamuno is online" class="icon ion-record" style="color: #26C281;font-size: 11px"></i></h3><span class="post-time"><i class="icon ion-ios7-time-outline"></i><span title="2015-06-30T08:51:24Z">' + json.activity[idx].entry_time + '</span> <span style="font-weight: bold"><i class="icon ion-ios7-arrow-thin-right"></i><span class="post-is-edited-20116"></span> Friends</span></span><div class="post-action-dropdown dropdown"><a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href=""><i class="icon ion-ios7-arrow-down"></i></a><ul class="dropdown-menu pull-right"><li><a href="report/post?url=post/20116">Report post</a> </li><li><a href="post/20116">View post</a> </li><li><a href="" data-id="20116" class="edit-post-trigger">Edit post</a> </li><li><a data-id="20116" class="delete-post" data-message="Do you really want to delete this post" href="">Remove</a> </li><li><a data-ajaxify="true" href="ads/create?type=post&amp;id=20116">Boost this post</a></li></ul></div></div></div>';
        post_header.html(header_post);
        var post_body = $("<div/>");
        var body_post = '<div class="post-body"><div id="post-text-content-20116" class="post-text-content">' + json.activity[idx].activity + '</div><div id="post-inline-editor-20116" class="post-inline-editor clearfix"<form action="" method="post"><textarea name="text">' + json.activity[idx].activity + '</textarea><div class="pull-right"><button data-text="I love this demo site" data-edited="Edited" data-id="20116" class="save-post-inline-editor btn btn-success btn-xs">Done editing</button><a data-id="20116" class="cancel-post-inline-editor btn btn-default btn-xs">Cancel</a></div></form></div></div>';
        post_body.html(body_post);
        var post_footer = $("<div/>");
        var footer_post = '<div class="post-body"><div id="post-text-content-20116" class="post-text-content">' + json.activity[idx].activity + '</div><div id="post-inline-editor-20116" class="post-inline-editor clearfix"><form action="" method="post"><textarea name="text"></textarea><div class="pull-right"><button data-text="I love this demo site" data-edited="Edited" data-id="20116" class="save-post-inline-editor btn btn-success btn-xs">Done editing</button><a data-id="20116" class="cancel-post-inline-editor btn btn-default btn-xs">Cancel</a></div></form></div></div>';
        //post_footer.html(footer_post);
        var post_activity = $("<div/>");
        post_activity.html("Loading.....");
        var post_comment = $("<div/>");
        var comment_post = ' <div class="post-replies" id="20116-post-replies" data-limit="3" data-offset="3" data-type="post" data-type-id="20116"><div id="post-20116-reply-lists" class="replies-list"></div><div class="media clearfix" style="overflow: visible"><div class="media-body" style="overflow: visible;content:"";display:block;"><form id="reply-form-post-20116" data-type="post" class="clearfix" data-id="20116" enctype="multipart/form-data" action="" method="post"><input data-type="post" data-id="20116" id="20116-reply-input" autocomplete="off" data-target="#20116-hashtag-mention-suggestion" data-text-limit="150" data-counter-target="#20116-text-counter" class="mention " type="text" placeholder="Add a comment"><input type="hidden" name="val[type]" value="post"><input type="hidden" name="val[type_id]" value="20116"><div class="actions"></div><div class="real-comment-form"><textarea data-height="30" style="height: 50px" id="20116-reply-textarea" data-target="#20116-hashtag-mention-suggestion" data-text-limit="150" data-counter-target="#20116-text-counter" class="mention " name="val[text]" placeholder="Add a comment"></textarea><div class="hashtag-mention-suggestion" id="20116-hashtag-mention-suggestion" style="position: relative"><div class="listing"></div></div><div class="reply-footer"><button class="btn btn-success btn-sm">Reply</button><a data-type="post" data-id="20116" href="" class="btn btn-danger btn-sm cancel-reply-form">Cancel</a><a class="emoticon-selector" href="javascript:void(0)"><img style="display: inline-block;width: 15px;margin: 3px auto" src="assets/images/emoticon.png"></a><div class="" style="display: none"><a title="Smile" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":)" class="each-emoticon-selector"><img src="assets/images/emoticons/big_smile.png"></a><a title="Bad Smile" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":<)" class="each-emoticon-selector"><img src="assets/images/emoticons/bad_smile.png"> </a><a title="Amazing" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code="-:" class="each-emoticon-selector"><img src="assets/images/emoticons/amazing.png"> </a><a title="Anger" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":@" class="each-emoticon-selector"><img src="assets/images/emoticons/anger.png"> </a><a title="Bad Egg" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":b" class="each-emoticon-selector"><img src="assets/images/emoticons/bad_egg.png"> </a><a title="Beaten" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=")b" class="each-emoticon-selector"><img src="assets/images/emoticons/beaten.png"> </a><a title="Black Heart" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code="(b" class="each-emoticon-selector"><img src="assets/images/emoticons/black_heart.png"> </a><a title="Cry" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":c" class="each-emoticon-selector"><img src="assets/images/emoticons/cry.png"> </a><a title="Happy" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":-)" class="each-emoticon-selector"><img src="assets/images/emoticons/happy.png"> </a><a title="Electric Shock" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-e" class="each-emoticon-selector"><img src="assets/images/emoticons/electric_shock.png"> </a><a title="Girl" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-g" class="each-emoticon-selector"><img src="assets/images/emoticons/girl.png"> </a><a title="Exciting" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ce" class="each-emoticon-selector"><img src="assets/images/emoticons/exciting.png"> </a><a title="Eyes droped" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ye" class="each-emoticon-selector"><img src="assets/images/emoticons/eyes_droped.png"> </a><a title="Greedy" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-(g" class="each-emoticon-selector"><img src="assets/images/emoticons/greedy.png"> </a><a title="Haha" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ha" class="each-emoticon-selector"><img src="assets/images/emoticons/haha.png"> </a><a title="Horror" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-ho" class="each-emoticon-selector"><img src="assets/images/emoticons/horror.png"> </a><a title="Money" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-)m" class="each-emoticon-selector"><img src="assets/images/emoticons/money.png"> </a><a title="Nothing" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-)-n" class="each-emoticon-selector"><img src="assets/images/emoticons/nothing.png"> </a><a title="Nothing to say" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-)-sn" class="each-emoticon-selector"><img src="assets/images/emoticons/nothing_to_say.png"> </a><a title="Red heart" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-rh" class="each-emoticon-selector"><img src="assets/images/emoticons/red_heart.png"> </a><a title="Scorn" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-sc" class="each-emoticon-selector"><img src="assets/images/emoticons/scorn.png"> </a><a title="Shame" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-sh" class="each-emoticon-selector"><img src="assets/images/emoticons/shame.png"> </a><a title="Shocked" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-s-h" class="each-emoticon-selector"><img src="assets/images/emoticons/shocked.png"> </a><a title="Super Man" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-sp" class="each-emoticon-selector"><img src="assets/images/emoticons/super_man.png"> </a><a title="Iron Man" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=";-im" class="each-emoticon-selector"><img src="assets/images/emoticons/the_iron_man.png"> </a><a title="Tongue" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":P" class="each-emoticon-selector"><img src="assets/images/emoticons/grimace.png"> </a><a title="Unhappy" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":(" class="each-emoticon-selector"><img src="assets/images/emoticons/unhappy.png"> </a><a title="Victory" data-target="#20116-reply-textarea" style="display: inline-block;margin: 5px" href="" data-code=":-v" class="each-emoticon-selector"><img src="assets/images/emoticons/victory.png"> </a></div><span class=" fileupload fileupload-exists" data-provides="fileupload"><a class="btn-file btn"><span class="fileupload-new"><i class="icon ion-android-camera"></i></span><span class="fileupload-exists"><i class="icon ion-android-camera"></i></span><input title="" class="" type="file" name="image"></a></span></div></div></form></div></div></div>';
        post_comment.html(comment_post);

        post_main.addClass("post-media");
        post_main.addClass("user-post-9754");
        post_main.addClass("clearfix");
        post_activity.addClass("post-activity");
        post_activity = $("#post-activity-20116");

        post_main.append(post_header);
        post_main.append(post_body);
        post_main.append(post_footer);
        post_main.append(post_activity);
        post_main.append(post_comment);

        box_content.append(post_main);


    }

}

function loadAdList(json) {
    var box_content = $('#box-content');
    box_content.html("");
    for (var idx in json.ads) {
        var table_content = $('<table/>');
        var ads_head = $('<thead/>');
        var ads_tr = $('<tr/>');
        var ads_th = $('<th/>');
        var ads_tbody = $('<tbody/>');
        var ads_td = $('<td/>');
        ads_tr = '';

        table_content.addClass('table');
        table_content.addClass('table-striped');
        table - content.addClass('table-bordered');

    }

}




function viewUserProfile(viewUser) {

}

function viewSingleBlog() {

}

function viewSinglePost() {

}

function viewSingleCategory() {

}


function click_follow_button(vuserid, vtoUserid, action, obj, e, success) {


    dopost({
        "url": api_link + '/followfriend.php',
        "data": {
            "userid": userid,
            "toUserid": toUserid
        },
        "type": "POST",
        "success": function(response) {
            try {

            } catch (err) {
                $.unblockUI();
                //if(update==true)
                alert("Follow Friend Error..." + response + err.message);
            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            alert("Follow Friend Error");
        }
    })
}
//function to add blog post
function addBlog() {

    //var blogid = $('#blogid').val();
    var title = $('#blogtitle').val();
    var blog_post = $('#blogpost').val();
    var blog_category = $('#blogcat option:selected').text();
    var blog_tags = $('#blogtags').val();
    var blog_privacy = $('#blogprivacy option:selected').val();
    var allow_comments = $('#allowcomments option:selected').val();
    var allow_likes = $('#allowlikes option:selected').val();
    var blog_status = $('#blogstatus option:selected').val();

    dopost({

        "url": api_link + "/add_blog.php",
        "data": {
            "userid": userid,
            "blogid": blogid,
            "title": title,
            "blog_post": blog_post,
            "blog_category": blog_category,
            "blog_tags": blog_tags,
            "blog_privacy": blog_privacy,
            "allow_comments": allow_comments,
            "allow_likes": allow_likes,
            "blog_status": blog_status
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                addBlogMsg(json)
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                console.error("Adding Blog Error..." + response + e.message);

            }
        },

        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            doalert("Adding Blog Error");
        }
    });


}


function addBlogPost() {
    var title = $('#blogtitle').val();
    var blog_post = $('#blogpost').val();
    var blog_category = $('#blogcat option:selected').text();
    var blog_tags = $('#blogtags').val();
    var blog_privacy = $('#blogprivacy option:selected').val();
    var allow_comments = $('#allowcomments option:selected').val();
    var allow_likes = $('#allowlikes option:selected').val();
    var blog_status = $('#blogstatus option:selected').val();

     dopost({
        "url": api_link + "/add_blog.php",
        "data": {
            "userid":userid,
            "title":title,
            "blog_post":blog_post,
            "blog_category":blog_category,
            "blog_tags":blog_tags,
            "blog_privacy":blog_privacy,
            "allow_comments":allow_comments,
            "allow_likes":allow_likes,
            "blog_status":blog_status
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                addBlogMsg(json);

            } catch (e) {
                $.unblockUI();
                console.error("Blog cannot be added..."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Blog not added");
        }
    });
}


//function to add  page design
function addPageDesign() {
    var pthemes = $('#themes').val();
    var enable_design = $('#enable_design').val();
    var bk_image = $('#bkimage').val();
    var background_color = $('#bkcolor').val();
    var background_position = $('#bkposition').val();
    var blackground_attach = $('#bkattach option:selected').val();
    var background_repeat = $('#bkrepeat option:selected').val();
    var linkcolor = $('#linkcolor').val();
    var page_content = $('#page_content').val();


    dopost({
        "url": api_link + "/design_page.php",
        "data": {
            "userid": userid,
            "pthemes": pthemes,
            "enable_design": enable_design,
            "bk_image": bk_image,
            "background_color": background_color,
            "background_position": background_position,
            "blackground_attach": blackground_attach,
            "background_repeat": background_repeat,
            "linkcolor": linkcolor,
            "page_content": page_content
        },

        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                alert(json.status);
                $('#themes').val(json.data.enable_design);
                $('#enable_design').val(json.data.enable_design);
                $('#bkimage').val(json.data.bk_image);
                $('#bkcolor').val(json.data.background_color);
                $('#bkposition').val(json.data.background_position);
                $("#bkattach option").filter(function() {
                    return this.value = json.data.blackground_attach;
                }).attr('selected', true);

                $('#bkrepeat option').filter(function() {
                    return this.value = json.data.background_repeat;
                }).attr('selected', true);
                $('#linkcolor').val(json.data.linkcolor);
                $('#page_content').val(json.data.page_content);
            } catch (e) {
                $.unblockUI();
                //if(update==true)
                alert("Error Adding Design Page...");

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            alert("Error Adding Design Page");
        }
    });


}

function createPage() {

    var page_name = $('#pagename').val();
    var page_url = $('#pageurl').val();
    var page_website = $('#pageweb').val();
    var description = $('#description').val();
    var type_of_page = $('#type option:selected').val();

    dopost({
        "url": api_link + "/page.php",
        "data": {
            "userid": userid,
            "page_name": page_name,
            "page_url": page_url,
            "page_website": page_website,
            "description": description,
            "type_of_page": type_of_page
        },

        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                $('#pagename').val(json.data.page_name);
                $('#pageurl').val(json.data.page_url);
                $('#pageweb').val(json.data.page_website);
                $('#description').val(json.data.description);
                $('#type option').filter(function() {
                    return this.value = json.data.type_of_page;
                }).attr('selected', true);
            } catch (e) {

                $.unblockUI();
                //if(update==true)
                console.error("Error Adding Page..." + response + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            console.error("Error Adding Page" + response + e.message);
        }
    });
}

//function to Create Community
function createCommunity() {

    var community_name = $('#communityname').val();
    var community_url = $('#communityurl').val();
    var community_post = $('#communitypost option:selected').val();

    dopost({
        "url": api_link + "/create_community.php",
        "data": {
            "userid": userid,
            "community_name": community_name,
            "community_url": community_url,
            "community_post": community_post
        },

        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //alert(json.status);
                $('#communityname').val(json.data.community_name);
                $('#communityurl').val(json.data.community_url);
                $('#communitypost option').filter(function() {
                    return this.value = json.data.community_post;
                }).attr('selected', true);
            } catch (e) {

                $.unblockUI();
                //if(update==true)
                console.error("Error Adding Community..." + response + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            console.error("Error Adding Community" + response + e.message);
        }
    });
}
function dopost(json) {
    try {
        window.bfApp.execute(json.success, json.error, 'BfAppPlugin', json.url, [json.data]);
    } catch (e) {
        try {
            //if(window.bfMobileApp.useCordova())
                cordova.exec(json.success, json.error, 'BfAppPlugin', 'dopost_jamb', [json.url, json.data]);
            //else
             //   window.bfMobileApp.exec(json.success.toString(), json.error.toString(), 'BfAppPlugin', 'dopost', JSON.stringify({"args":[json.url, json.data]}));
        } catch (e) {
            try {
                if(window.location.href.indexOf("file://")==0)
                {
                    window.setTimeout(function(){dopost(json);},1000);
                    return;
                }
                     if (typeof Fingerprint2 === 'function' && Fingerprint2 != null)
                        {
                          var fp2 = new Fingerprint2();
                          fp2.get(function(result)
                                {
                                    var result2 = getItem("sessionid");
                                    if(result2==='' || result2 == null || result2==='undefined' || typeof(result2)==='undefined')
                                    {
                                        result2 = result;
                                        setItem('sessionid',result2);
                                    }
                                    json.data['sessionid'] = result2;
                                    dopostoffline(json);
                                });
                        }
                        else
                         dopostoffline(json);
            }
            catch(e) {
                console.error(e.message);
            }
        }

    }
}

function testResponse(respponse){
    var ret=true;
    try{
    var json = JSON.parse(respponse);
    if(json.hasOwnProperty('sessionerror'))
    {
        if(json.statuscode==-1)
            {
                $.unblockUI();
                sessionMsg(json)
                ret = false;
            }
    }}
    catch(e)
    {
        console.error(e.message);
    }
    return ret;
}
function dopostoffline(json) {
if(window.location.href.indexOf('file://')!=0)
{

    var isApp = false;
    if (json.type == "POST") {

        $.post('/php/dopost.php?url=' + encodeURIComponent(json.url), json.data, function(response) {
                if (response === '')
                    response = '{}';
                if(testResponse(response))
                json.success(response);
            })
            .fail(json.error);

    } else {

        $.get('/php/dopost.php?url=' + encodeURIComponent(json.url), function(response) {
                if (response === '')
                    response = '{}';
            if(testResponse(response))
                json.success(response);
            })
            .fail(json.error);

    }
}
else
{window.setTimeout(function() {
                    dopost(json);
                }, 300)
}
}


function dopostold(json) {
    var isApp = false;
    var windowobj = (window.top === window.self ? window : window.parent);

    if (typeof bfApp === 'object' && bfApp != null) {
        if (typeof bfApp.execute === 'function')
            isApp = true;
    } else {
        if (typeof windowobj === 'object') {
            if (typeof windowobj.bfApp === 'object' && windowobj.bfApp != null) {
                if (typeof windowobj.bfApp.execute === 'function') {
                    isApp = true;
                    var bfApp = windowobj.bfApp;
                }
            }
        }
    }

    if (json.type == "POST") {
        if (isApp == false) {
            $.post('php/dopost.php?url=' + encodeURIComponent(json.url), json.data, function(response) {
                    if (response === '')
                        response = '{}';
                    json.success(response);
                })
                .fail(json.error);
        } else {
            try {
                bfApp.execute(json.success, json.error, json.url, '', [json.data]);
            } catch (e) {
                console.error(e.message)
            }
        }
    } else {
        if (isApp == false) {
            $.get('php/dopost.php?url=' + encodeURIComponent(json.url), function(response) {
                    if (response === '')
                        response = '{}';
                    json.success(response);
                })
                .fail(json.error);
        } else {
            try {
                bfApp.execute(json.success, json.error, json.url, '', []);
            } catch (e) {
                console.error(e.message)
            }
        }
    }


}

function resetItems(donotload) {

    //setItem("login_userid", "");
    setItem("userid", "");
    setItem("sessionid", "");
    setItem("spage", "");
    setItem('examSettings', "");
    setItem("Source", "");
    setItem("name", "");
    setItem("photo", "");
    setItem("access_token", "");
    setItem("var1", "");
    setItem("var2", "");
    try{
            if (window.localStorage)
            {
                window.localStorage.clear();
            }
    }catch(e){}
    if (!(typeof donotload === 'undefined' ? false : donotload))
        window.location.href = "index.html";
}
var globalupdate;
function updateProfile(update) {
    var fullname = $('#fullname').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var school = $('#sch').val();
    var dategrad = $('#dategraduation').val();
    var dateofbirth = $('#profiledob').val();
    var gender = $('#gender option:selected').text();
    var country = $('#country option:selected').text();
    var schCloudId = $('#sch').attr('schoolcloudid');


    if($('#sch').val()=="")
        {
            school = $('#cloudselect1 option:selected').text();
            schCloudId = $('#cloudselect1 option:selected').val();
        }

    if (typeof(update) == "undefined")
        update = true;
    globalupdate = update;
     dopost({
        "url": api_link + "/update_profile.php",
        "data": {"userid": getItem('userid'),"fullname":fullname, "phoneno":phone, "email":email, "school":school,"graduation":dategrad,"schoolcloudid":schCloudId,"birth_date":dateofbirth,"gender":gender,"country":country,"update": update == true ? "true" : "false"},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                if (globalupdate == true)
                {
                updateMsg(json)
                }
            } catch (e) {
                $.unblockUI();
                console.error("Profile cannot be Updated..."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Profile not updated");
        }
    });
}

/*Score function*/

function myScore(myoffset) {
   myoffset = (typeof myoffset === 'undefined' ? 0 : myoffset);

    dopost({
        "url": api_link + "myscore.php",
        "data": {"userid": userid,"offset" : myoffset},
        "type": "POST",
        "success": function(response) {

            try {
                var json = JSON.parse(response);
                viewMyScore(json);


            } catch (e) {
                $.unblockUI();
                console.error("No Score List Found...."+e.message);


            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("No Score Found");
        }
    });
}

function viewMyScore(json) {

    var tableDiv = $('#score');
    tableDiv.html("");
    var table = $('<table />');
    table.addClass('table table-striped table-hover table-bordered dt-responsive nowrap');
    table.attr('width','100%');
    table.attr('id','listScore');
    table.attr('cellspacing','0');
    var thead = $('<thead />');
    var theadtr = $('<tr />');

    var th1 = $('<th />');
    var th2 = $('<th />');
    var th3 = $('<th />');
    var th4 = $('<th />');
    var th5 = $('<th />');

    th1.html('SUBJECT');
    th2.html('CLASS');
    th3.html('SCORE');
    th4.html('EXAM DATE');
    th5.html('RATING');

    theadtr.append(th1);
    theadtr.append(th2);
    theadtr.append(th3);
    theadtr.append(th4);
    theadtr.append(th5);

    thead.append(theadtr);
      table.append(thead);
    var tbody = $('<tbody/>');
    for (var idx in json.myscore) {


        var tbodytr = $("<tr />");
        var td1 = $("<td />");
        var td2 = $("<td />");
        var td3 = $("<td />");
        var td4 = $("<td />");
        var td5 = $("<td />");
        //var rate = $('<div />');
        var drawStars = function(nostars)
        {
            var td5rating = '<div class="acidjs-rating-stars acidjs-rating-disabled"><form><input disabled="disabled"';
                if(nostars==5)
                    td5rating += ' checked="checked" ';
                td5rating += ' type="radio" name="group-3" id="group-3-0" value="5" /><label for="group-3-0"></label><input disabled="disabled"';
                if(nostars==4)
                    td5rating += ' checked="checked" ';
                td5rating += ' type="radio" name="group-3" id="group-3-1" value="4" /><label for="group-3-1"></label><input disabled="disabled"';
                if(nostars==3)
                    td5rating += ' checked="checked" ';
                td5rating += ' type="radio" name="group-3" id="group-3-2" value="3" /><label for="group-3-2"></label><input disabled="disabled"';
                if(nostars==2)
                    td5rating += ' checked="checked" ';
                td5rating += ' type="radio" name="group-3" id="group-3-3" value="2" /><label for="group-3-3"></label><input disabled="disabled"';
                if(nostars==1)
                    td5rating += ' checked="checked" ';
                td5rating += ' type="radio" name="group-3" id="group-3-4"  value="1" /><label for="group-3-4"></label></form></div>';
                return td5rating
        }
        //rate.html(td5rating);
        //doalert(rate);



        td1.html(json.myscore[idx].modulename);
        td2.html(json.myscore[idx].jambcourse);
        td3.html(json.myscore[idx].correct);
        td4.html(json.myscore[idx].entrytime);
        var nquests = json.myscore[idx].questions.length;
        //var nquests = JSON.parse('{"qlist" : '+json.myscore[idx].questions+'}');
        //nquests = nquests.qlist.length;
        td5.html(drawStars(parseInt(parseInt(json.myscore[idx].correct)/(parseInt(nquests)/5))));

        tbodytr.append(td1);
        tbodytr.append(td2);
        tbodytr.append(td3);
        tbodytr.append(td4);
        tbodytr.append(td5);

        tbody.append(tbodytr);

    }
        table.append(tbody);
        tableDiv.append(table);
        $('#listScore').DataTable({responsive:true});
}


function fetchUser(jdata) {
    var fullname = $('#fullname').val();
    var useralias = $('#username').val();
    var email = $('#email').val();
    var phoneno =$('#phone').val();
    var country = $('#country option:selected').text();
    var gender = $('#gender option:selected').text();
    var school = $('#sch').val();
    var birth_date = $('#profiledob').val();
    var graduation = $('#dategraduation').val();



    dopost({
        "url": api_link + "/user_settings.php",
        "data": {
            "userid": getItem('userid'),
            "useralias":getItem('useralias'),
            "fullname":fullname,
            "email":email,
            "phoneno":phoneno,
            "country":country,
            "gender":gender,
            "school":school,
            "birth_date":birth_date,
            "graduation":graduation
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //fetchUserList(json);
                for(var idx in json.user) {
                $('#fullname').val(json.user[idx].fullname);
                $('#username').val(json.user[idx].useralias);
                $('#phone').val(json.user[idx].phoneno);
                $('#email').val(json.user[idx].email);
                $('#sch').val(json.user[idx].school);
                $('#sch').attr("schoolcloudid",json.user[idx].schoolcloudid);
                $('#dategraduation').val(json.user[idx].graduation);
                $('#profiledob').val(json.user[idx].birth_date);
                $('#gender option:selected').text(json.user[idx].gender);
                $('#country option:selected').text(json.user[idx].country);
                }


            } catch (e) {
                $.unblockUI();
                console.error("No User Found...."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("No User");
        }
    });
}


/*Function to delete Exam Configuration*/
var tmp_obj,tmp_obj2,tmp_obj3;
function deleteSaveExam(delet,obj,obj2,obj3) {
    tmp_obj=obj;
    tmp_obj2=obj2;
    tmp_obj3=obj3;
    if (typeof(delet) == "undefined")
        delet = true;
     dopost({
        "url": api_link + "/admin/delete_examconfig.php",
        "data": {"delet": delet == true ? "true" : "false","userid":obj,"filename":obj2},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);

                     doalert(json.status);
                     if(json.statuscode==0)
                         {
                             if(typeof(tmp_obj3) != 'undefined')
                                 {
                                     $(tmp_obj3).hide();
                                 }
                         }


            } catch (e) {
                console.error("Exam configuration cannot be deleted..."+e.message);
                $.unblockUI();
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Exam configuration not deleted");
        }
    });
}


function gotoHomePage() {
   /* /
    /admin/
    /games/
    /games/xxxx/*/
    var location = window.location.href;
    var role = getItem('spage');

    if(role == 'student')
        {
            var page = 'home.html';
            if(location.indexOf('/admin/')!=-1)
                page = '../'+page;
            if(location.indexOf('/games/')!=-1)
                {
                    page = '../'+page;
                    var page2 = location.substr(location.indexOf('/games/')+8);
                    if(location.indexOf('/')!=-1)
                        page = '../'+page;
                }
            window.location.href=page;
        }
    if(role == 'admin')
        {
            var page = 'admin.html';

            if(location.indexOf('/games/')!=-1)
                {
                    page = '../admin/'+page;
                    var page2 = location.substr(location.indexOf('/games/')+8);
                    if(location.indexOf('/')!=-1)
                        page = '../'+page;
                }
            if(location.indexOf('/admin/')==-1)
                page = 'admin/'+page;
            window.location.href=page;
        }
    if(role == 'teacher')
        {
            var page = 'teacher.html';

            if(location.indexOf('/games/')!=-1)
                {
                    page = '../admin/'+page;
                    var page2 = location.substr(location.indexOf('/games/')+8);
                    if(location.indexOf('/')!=-1)
                        page = '../'+page;
                }
            if(location.indexOf('/admin/')==-1)
                page = 'admin/'+page;
            window.location.href=page;
        }
}

/*Function to list reg users*/
function listusers() {
//   var regfullname = $('#regfullname').val();
    dopost({
        "url": api_link + "/fetchregusers.php",
        "data": {"userid": getItem('userid'),'fullname':getItem('name')},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                viewRegUsers(json);

            } catch (e) {
                $.unblockUI();
                console.error("No Registered Users Found...."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("No Registered Users");
        }
    });
}

function viewRegUsers(json)
{
    var regDiv = $('#fetusers');
    var reguser = $('#registeredusers');

if(json.regusers.length>0)
    {

        reguser.show();
        for(var idx in json.regusers)
        {
            var col_div = $('<div/>');
            col_div.attr('useralias',json.regusers[idx].useralias);
            col_div.addClass('col-md-3 col-xs-4');
            var colhref = $('<a />');
            var colimg = $('<img/>');
            colimg.attr('title','Login as '+ json.regusers[idx].fullname);
            colimg.css('width','50px');
            colimg.css('height','50px');
            colimg.css('border-radius','100%');
            colimg.css('border','1px solid #1956B3');
            if(json.regusers[idx].hasOwnProperty('profileimage'))
            {
            if(json.regusers[idx].profileimage!="")
            colimg.attr('src',json.regusers[idx].profileimage);
                else
            colimg.attr('src','assets/images/avatar/male.png');
            }
             else
                colimg.attr('src','assets/images/avatar/male.png');
            var colbr = $('<br />');
            var colspan = $('<span />');
            colspan.html(json.regusers[idx].fullname);
            colspan.attr('id','regfullname');
            colhref.append(colimg);
            col_div.append(colhref);
            col_div.append(colbr);
            col_div.append(colspan);

            var clearfix = $('<div/>');
            var fixbr = '<div class="clearfix"></div><br />';
            clearfix.html(fixbr);
            col_div.append(clearfix);
            col_div.on('click',function(){
                $('#name').val($(this).attr('useralias'));
                checkStatus('login');
            });
            regDiv.append(col_div);

        }

    }
    else
        {
            reguser.hide();
        }


}
function openBFUrl(x) {
var url = "http://www.brainfriendonline.com";
    if(x==1) {
        url = "https://webmart.cinfores.com";
    }
var mylocation = window.location.href;
    if(isNaN(x))
        url = x;
    if(navigator.userAgent.indexOf('BrainFriend Desktop App')!=-1 || mylocation.indexOf("file://")==0)
        {
            try {

                 window.bfApp.openUrl(url);
            }
            catch(e) {
            try {
                navigator.app.loadUrl(url, { openExternal:true });
            }
            catch(e) {
console.error(e.message);
            }
            }


        }
    else
        {

            if(!window.open(url))
                alert("Please disable popup blocker.");
        }
}
/*Function to deactivate user account*/
function deactivateAccount(delet) {
    if (typeof(delet) == "undefined")
        delet = true;
     dopost({
        "url": api_link + "/deleteuser.php",
        "data": {"delet": delet == true ? "true" : "false","userid":getItem('userid')},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                 deleteMsg(json);


            } catch (e) {
                $.unblockUI();
                console.error("Account cannot be deactivated..."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("User account not deactivated");
        }
    });
}


function listEvent(jdata) {
    var eventid = '';
    var event_user = '';
    var event_category = '';

    if (typeof(jdata) === typeof({})) {
        try {
            eventid = !jdata.hasOwnProperty("eventsid") ? "" : jdata.eventsid;
            event_user = !jdata.hasOwnProperty("userid") ? "" : jdata.userid;
            event_category = !jdata.hasOwnProperty("category") ? "" : jdata.category;

        } catch (e) {}
    }


    dopost({
        "url": api_link + "/view_event.php",
        "data": {
            "eventsid": eventid,
            "userid": event_user,
            "category": event_category

        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                loadEvents(json);

            } catch (e) {
                $.unblockUI();
                //if(update==true)
                doalert("Error Viewing Events" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            doalert("Error Viewing Events......");
        }

    });

}

function loadEvents(json) {
    var box_content = $('#Upcoming');
    box_content.html("");
    for (var idx in json.listevent) {

        var blog_media = $("<div/>");
        var blog_object = $("<div/>");
        var profile_image = $("<img/>");
        //profile_image.addClass('profileimg');
        var image_link = $("<a/>");
        var blog_body = $("<div/>");
        var blog_heading = $("<h5/>");
        var blog_title = $("<a/>");
        var blog_time = $("<span/>");
        var blog_user = $("<a/>");
        var blog_category = $("<a/>");
        var blog_content = $("<p/>");
        var blog_readmore = $("<a/>");
        var post_span = $("<span/>");

        blog_media.addClass('media');
        blog_media.addClass('blog');
        blog_object.addClass('media-object');
        blog_object.addClass('pull-left');
          if(json.listevent[idx].hasOwnProperty('profileimage'))
            {
            if(json.listevent[idx].profileimage!="")
            profile_image.attr('src',json.listevent[idx].profileimage);
                else
            profile_image.attr('src','assets/images/avatar/male.png');
            }
             else
                profile_image.attr('src','assets/images/avatar/male.png');
        image_link.attr('href', '#');
        image_link.attr('onclick', 'viewUserProfile("' + json.listevent[idx].userid + '")');
        blog_title.attr('id', 'blogtitle');
        blog_title.attr('href', '#');
        blog_title.attr('onclick', 'viewSingleBlog("' + json.listevent[idx].eventsid + '")');
        blog_title.html(json.listevent[idx].event_name);
        blog_title.css('color','blue');
        blog_title.css('font-weight','bold');
        blog_body.addClass('media-body');
        blog_heading.addClass('media-heading');
        blog_time.addClass('blog-time-info');
        blog_content.addClass('content');
        blog_readmore.attr('href', '#');
        blog_readmore.attr('onclick', 'viewSinglePost("' + json.listevent[idx].eventsid + '")');
        blog_readmore.html("Read more");
        image_link.append(profile_image);
        blog_object.append(image_link);
        //alert("Demo is real");

        blog_heading.append(blog_title);
        blog_body.append(blog_heading);
        var time_info = '<span class="blog-time-info"><span id="time">' + json.listevent[idx].time + '</span> posted by <a href="#" onclick=viewSingleProfile("' + json.listevent[idx].userid + '") id="lbluser">' + json.listevent[idx].userid + '</a> in <a href="#" onclick=viewSingleCategory("' + json.listevent[idx].category + '") id="blogcat"><b style="color:#4DA833">' + json.listevent[idx].category + '</b></a> category</span><span>Location <b style="color:#4DA833">' + json.listevent[idx].location + '</b></span><br /> <span style="color:#1657B1 !important; font-weight:bold">Details of event <br /></span><span>' + json.listevent[idx].details + '</span>';
        blog_time.html(time_info);
        blog_body.append(blog_time);

        //alert("demo");

//        var post_value = trimByWord(json.listevent[idx].details);
//        post_span.html(post_value);
//        blog_content.append(post_span);
//        if (post_value.length < json.listevent[idx].details.length) {
//            blog_content.append(blog_readmore);
//        }
        blog_media.append(blog_object);
        //alert("demo3");
        blog_media.append(blog_body);
        //alert("demo4");
        blog_media.append(blog_content);
        //alert("demo5");
        box_content.append(blog_media);
        //alert("demo6");
    }

    //box_content.enhanceWithin();
}


function userEventList() {
    dopost({
        "url": api_link + "/view_user_event.php",
        "data": {"userid": getItem('userid')},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                userEvents(json);

            } catch (e) {
                $.unblockUI();
                //if(update==true)
                doalert("Error Viewing User Events" + e.message);

            }
        },
        "error": function(jqXHR, textStatus) {
            $.unblockUI();
            //if(update==true)
            doalert("Error Viewing User Events......");
        }

    });

}

function userEvents(json) {
    var box_content = $('#yourevents');
    box_content.html("");
    for (var idx in json.userevent) {

        var blog_media = $("<div/>");
        var blog_object = $("<div/>");
        var profile_image = $("<img/>");
        //profile_image.addClass('profileimg');
        var image_link = $("<a/>");
        var blog_body = $("<div/>");
        var blog_heading = $("<h5/>");
        var blog_title = $("<a/>");
        var blog_time = $("<span/>");
        var blog_user = $("<a/>");
        var blog_category = $("<a/>");
        var blog_content = $("<p/>");
        var blog_readmore = $("<a/>");
        var post_span = $("<span/>");

        blog_media.addClass('media');
        blog_media.addClass('blog');
        blog_object.addClass('media-object');
        blog_object.addClass('pull-left');
          if(json.userevent[idx].hasOwnProperty('profileimage'))
            {
            if(json.userevent[idx].profileimage!="")
            profile_image.attr('src',json.userevent[idx].profileimage);
                else
            profile_image.attr('src','assets/images/avatar/male.png');
            }
             else
                profile_image.attr('src','assets/images/avatar/male.png');
        image_link.attr('href', '#');
        image_link.attr('onclick', 'viewUserProfile("' + json.userevent[idx].userid + '")');
        blog_title.attr('id', 'blogtitle');
        blog_title.attr('href', '#');
        blog_title.attr('onclick', 'viewSingleBlog("' + json.userevent[idx].eventsid + '")');
        blog_title.html(json.userevent[idx].event_name);
        blog_title.css('color','blue');
        blog_title.css('font-weight','bold');
        blog_body.addClass('media-body');
        blog_heading.addClass('media-heading');
        blog_time.addClass('blog-time-info');
        blog_content.addClass('content');
        blog_readmore.attr('href', '#');
        blog_readmore.attr('onclick', 'viewSinglePost("' + json.userevent[idx].eventsid + '")');
        blog_readmore.html("Read more");
        image_link.append(profile_image);
        blog_object.append(image_link);
        //alert("Demo is real");

        blog_heading.append(blog_title);
        blog_body.append(blog_heading);
        var time_info = '<span class="blog-time-info"><span id="time">' + json.userevent[idx].time + '</span> posted by <a href="#" onclick=viewSingleProfile("' + json.userevent[idx].userid + '") id="lbluser">' + json.userevent[idx].userid + '</a> in <a href="#" onclick=viewSingleCategory("' + json.userevent[idx].category + '") id="blogcat"><b style="color:#4DA833">' + json.userevent[idx].category + '</b></a> category</span><span>Location <b style="color:#4DA833">' + json.userevent[idx].location + '</b></span><br /> <span style="color:#1657B1 !important; font-weight:bold">Details of event <br /></span><span>' + json.userevent[idx].details + '</span>';
        blog_time.html(time_info);
        blog_body.append(blog_time);

        //alert("demo");

//        var post_value = trimByWord(json.listevent[idx].details);
//        post_span.html(post_value);
//        blog_content.append(post_span);
//        if (post_value.length < json.listevent[idx].details.length) {
//            blog_content.append(blog_readmore);
//        }
        blog_media.append(blog_object);
        //alert("demo3");
        blog_media.append(blog_body);
        //alert("demo4");
        blog_media.append(blog_content);
        //alert("demo5");
        box_content.append(blog_media);
        //alert("demo6");
    }

    //box_content.enhanceWithin();
}


function subscriptionStatus() {

      dopost({
   "url": api_link + "/license.php",
        "type": "POST",
        "data" : {"userid":getItem('userid'),"action":"retrieve"},
        "success": function(response) {
             try {
                 var json = JSON.parse(response);

                if(json.hasOwnProperty('details'))
                    {
                            //$('#favourType').html(json.details.flavour);
                            $('#editionType').html(json.details.flavour  + "&nbsp;&nbsp;" + json.details.edition);

                            if(json.details.hasOwnProperty('subscription'))
                                 {
                                     var sub_status = $("#mainSub");
                                     sub_status.css('display','block');

                                     $('#days').html(json.details.subscription.Days + " Day" + (json.details.subscription.Days>1?'s':''));
                                     if(json.details.subscription.DaysLeft>0)
                                         {
                                     $('#daysLeft').html(json.details.subscription.DaysLeft + " Day" + (json.details.subscription.DaysLeft>1?'s':''));
                                         }
                                     else {
                                         $('#daysLeft').html("<font color='red'>Expired</font>");
                                     }


                                 }
                             else
                                 {
                                    var sub_status = $("#mainSub");
                                    sub_status.css('display','none');
                                 }
                    }
                 if(json.activated==1)
                    appIsActivated = true;
                 else
                    appIsActivated = false;
                }
                catch(e) {
                    console.error('Error'+e.message);

                }
        }
    });
}

var globalupdate1;
function activateFreePIN(user_pin){
  globalupdate1 = true;
    $.blockUI({
        message: "Connecting to server please wait...",
        baseZ: 2000
    });
    var mydata = {
            "userid": getItem("userid"),
            "fullname":getItem("userfullname"),
            "phoneno":getItem("userphoneno"),
            "email":getItem("useremail"),
            "update": true,
            "action":"activate",
            "pin":user_pin
        };
    homePageActivation(mydata);

}
function activationUpdate(update) {
    var fullname = $('#userfullname').val();
    var phone = $('#userphone').val();
    var email = $('#useremail').val();
    var user_pin = $("#userpin").val();
    var userid = $('#useridhidden').val();
    if(fullname=="")
        {
          doalert('Fullname is required');
            $('#userfullname').focus();
            return false;
        }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
    doalert('Please provide a valid email address');
    //email.focus;
    $('#useremail').focus();
    return false;
    }
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (!filter.test(phone)) {
    doalert('Please provide a valid phone no');
    $('#userphone').focus();
    //phone.focus;
    return false;
    }
     if(phone.length < 7) {
      doalert('Phone no must not be less than 7 digits');
         return;
    }
    if(phone.length > 13) {
      doalert('Phone no cannot be greater than 13 digits');
        return;
    }

    if (typeof(update) == "undefined")
        update = true;
    globalupdate1 = update;
    $.blockUI({
        message: "Connecting to server please wait...",
        baseZ: 2000
    });
    var mydata = {
            "userid": userid,
            "fullname":fullname,
            "phoneno":phone,
            "email":email,
            "update": update == true ? "true" : "false",
            "action":"activate",
            "pin":user_pin
        };
    homePageActivation(mydata);

}
function homePageActivation(data)
{
dopost({
        "url": api_link + "/update_profile.php",
        "data": data,
        "type": "POST",
        "success": function(response) {
            $.unblockUI();
            try {
                var json = JSON.parse(response);
                if (globalupdate1 == true)
                {
                    activeFormMsg(json);
                }
            } catch (e) {
                $.unblockUI();
                console.error("Activation details cannot be Updated..."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Activation details not updated");
        }
    });
}
function getFreePIN()
    {
         dopost({
                "url": api_link + "/admin/cloudservice.php",
                "data": {
                     "userid": getItem('userid'),
                     "action": "ping"
                },
                "type": "POST",
                "success": function (response) {
                    try{var json = JSON.parse(response);
                        if(json.statuscode==0)
                        {
                            var fullname = $('#userfullname').val();
                            var phone = $('#userphone').val();
                            var email = $('#useremail').val();
                            var user_pin = $("#userpin").val();
                            var userid = $('#useridhidden').val();

                            var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
                            if (!filter.test(phone)) {
                            doalert('Please provide a valid phone no');
                            $('#userphone').focus();
                            //phone.focus;
                            return false;
                            }
                             if(phone.length < 7) {
                              doalert('Phone no must not be less than 7 digits');
                                 return;
                            }
                            if(phone.length > 13) {
                              doalert('Phone no cannot be greater than 13 digits');
                                return;
                            }


                            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                            if (!filter.test(email)) {
                            doalert('Please provide a valid email address');
                            //email.focus;
                            $('#useremail').focus();
                            return false;
                            }
                             if(fullname=="")
                                {
                                  doalert('Fullname is required');
                                    $('#userfullname').focus();
                                    return false;
                                }
                                var obj = {
                                            "userfullname" : fullname,
                                            "useremail" : email,
                                            "userphone" : phone,
                                            "userid" : userid,
                                            "uri" : window.location.href
                                          };
                                var link = "http://files.brainfriendonline.com/cloud/invite/inviter_inpage.php?"+$.param(obj);
//                            dopost({
//                                    "url": api_link + "/gotopage.php",
//                                    "data": {
//                                        "uri" : link,
//                                        "userid": getItem('userid')
//                                    },
//                                    "type": "POST",
//                                    "success": function (response) {
//
//                                    },
//                                    "error": function (jqXHR, textStatus) {
//                                    }
//                                });
                            try{
                            if(cordova)
                            {
                                cordova.exec(function(){}, function(){}, "InAppBrowser", "open", [link, '_self','location=no']);
                            }
                            else
                             window.location.href = link;
                            }catch(e){
                                window.location.href = link;
                            }
                        }
                        else
                            doalert("Please enable internet access.");
                    }catch(e){console.error(e.message);}
                },
                "error": function (jqXHR, textStatus) {
                }
            });

    }
function activationForm(json) {
            var activeForm;
            var pin = json.hasOwnProperty('pin')?json.pin:'';
            var userid = json.hasOwnProperty('userid')?json.userid:'';
            var fullname = json.hasOwnProperty('fullname')?json.fullname:'';
            var email = json.hasOwnProperty('email')?json.email:'';
            var phone = json.hasOwnProperty('phoneno')?json.phoneno:'';
                if($('#activeForm').length == 0)
                    activeForm = $('<div/>');
                else
                    {
                        activeForm = $('#activeForm');
                        activeForm.html('');
                    }
                activeForm.attr('id','activeForm');
                activeForm.attr("data-backdrop","static");
                activeForm.attr("data-keyboard","false");
                activeForm.attr("aria-labelledby","mybfheader");
                activeForm.attr("tabindex","-1");
                activeForm.attr("role","dialog");
                activeForm.addClass("modal fade");
                var activeformUpdate = '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header" style="background:url(assets/images/bannerbg.jpg) repeat"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color:#000; font-weight:bold">X</span></button><h4 class="modal-title" id="mybfheader" style="color:#fff">BrainFriend Platinum</h4></div><div class="modal-body"><div class="alert alert-success" style="border-radius:10px"><ol>Please Enter your Fullname, Email Address and Phone No</ol><ol>Internet Connection is required to automatically activate your BrainFriend</ol><ol>When connected click on activate button else skip to activate later</ol></div><input type="hidden" id="useridhidden"><div class="col-md-12"><div class="input-field"><input type="text" placeholder="Fullname" class="validate" id="userfullname"></div></div><div class="col-md-12"><div class="input-field"><input type="text" placeholder="Email Address" class="validate" id="useremail"></div></div><div class="col-md-12"><div class="input-field"><input type="text" class="validate" id="userphone" placeholder="Phone No"></div></div><div class="col-md-12" id="divpin"><div class="input-field col-md-12"><input type="text" class="validate" id="userpin" placeholder="PIN"></div></div></div><div class="modal-footer"><a href="#" onclick="getFreePIN();" class="btn btn-primary btn-lg getfreepinbtn">GET FREE PIN</a><button type="button" class="btn btn-lg btn-default" data-dismiss="modal" onclick="login();">SKIP</button><button type="button" class="btn btn-lg  btn-primary" onclick="activationUpdate()">ACTIVATE</button></div></div></div>';
                var formContent = $("<div/>");
                formContent.html(activeformUpdate);
                formContent.find('#userpin').val(pin);
                formContent.find('#useridhidden').val(userid);

                if(fullname.toLowerCase()!="guest")
                    {
                formContent.find('#userfullname').val(fullname);
                formContent.find('#useremail').val(email);
                formContent.find('#userphone').val(phone);
//                if(formContent.find('#userfullname').val()!="")
//                    formContent.find('#lbnameA').hide();
//                if(formContent.find('#useremail').val()!="")
//                formContent.find('#lbemailA').hide();
//                if(formContent.find('#userphone').val()!="")
//                formContent.find('#lbphoneA').hide();
                    }
                if(pin!="")
                    {
                        formContent.find('#divpin').hide();
                    }
                else {
                    formContent.find('#divpin').show();
                }
                activeForm.append(formContent);
                activeForm.modal();


}

function updateProfileAlert() {
        bootbox.dialog({
          message: "<div class='alert alert-warning' style='border-radius:10px'><span style='color:red'>Warning!! </span> You must update your profile before you can activate BrainFriend</div>",
          title: "Incomplete Profile",
          buttons: {
            success: {
              label: "OK",
              className: "btn-primary btn-sm",
              callback: function() {
                    // window.location.href="index.html";
                  var statusData = {
                   "userid":getItem('userid'),
                   "myaction":'login',
                   "useralias":getItem('useralias')
                };

                    dopost({
                        url: api_link + "/status.php",
                        type: "POST",
                        data: statusData,
                        error: function(jqXHR, exception) {
                        doalert("Unable to connect to server");
                        },
                        success: function(response) {

                            try {
                                var json = JSON.parse(response);
                                activationForm(json);

                            } catch (e) {

                                console.error("Error " + response + e.message);
                            }

                        }
                    });


              }
            }

          }
        });
        }

function activeFormMsg(json) {
            var myButtons = {};
            if(json.statuscode!=0)
                {
                    myButtons = {
            danger: {
            label: "Try Again",
            className: "btn-danger btn-sm active",
            callback: function() {
              }
            },
            success: {
              label: "Continue",
              className: "btn-primary btn-sm",
              callback: function() {
                 if($('#password').val()!="")
                     {
                        login();
                     }

              }
            }

          };
                }
            else {
                myButtons = {
                success: {
                  label: "Continue",
                  className: "btn-primary btn-sm",
                  callback: function() {
                    login();
                  }
                }

          };
        }
        bootbox.dialog({
          message: json.status,
          title: "Activation Status",
             buttons: myButtons

        });
        }
    function testDemo(msg) {
                dopost({
                "url": api_link + "/subjects.php","data":{"userid":getItem("userid")},
                "type": "POST",
                "error": loadingerr,
                "success": function(response) {
                    try
                    {
                       var containsOnlyEnglish = -1;

                     var subjects= JSON.parse(response);
                        if(subjects.hasOwnProperty('subjects'))
                            {
                               subjects= subjectsJSON.subjects;
                                for(var idx in subjects)
                                    {
                                      var subj = subjects[idx];
                                        if(subj.hasOwnProperty('subjects'))
                                            {
                                                var subjName = subj.subjects;
                                                if(subjName.indexOf('ENGLISH')!=-1)
                                                    {
                                                        containsOnlyEnglish = 1;
                                                        break;
                                                    }
                                            }
                                    }
                                if(containsOnlyEnglish==-1)
                                    containsOnlyEnglish = 0;

                            }
                        var mhref = window.location.href;
                        if(mhref.indexOf('/admin/')!=-1)
                            containsOnlyEnglish =1;
                        doalert(msg + (containsOnlyEnglish==0?" <a href=# onclick='downloadUrl();' data-dismiss='modal'><span style='font-size:12pt !important; font-weight:bold; color:#ff0000;'>Click here to download content</span></a>":""));

                    }
                    catch(e) {
                            window.setTimeout(onready, 300);
                    }

                }


         });
        }
function displayNotificationInfo(obj){
    $('#conDiv').css('display','block');
    var topicList = $('#topicList').html("");
     var content = JSON.parse($(obj).attr('content'));
    topicList = content.topiclist;
    var tlist = $('<ol/>');
    for(var idx in content.topiclist)
    {
        var listItem = $('<li/>');

        listItem.html(content.topiclist[idx]);
        listItem.find('span').html("");
        tlist.append(listItem);
    }
    $('#topicid').html("");
    $('#topicid').append(tlist);
    $('#subjectid').html(content.subject);
    $('#categoryid').html(content.category);
    $('#classid').html(content.course);
    $('#hourid').html(content.hour);
    $('#minuteid').html(content.minute);
    $('#dateid').html($(obj).attr('notificationtime'));
    $('#questid').html(content.questionNo);
    $('#codeid').html(content.code);
    var examid = content.hasOwnProperty('examid') ? content.examid : 0;
    notifyExamSettings={"userid":getItem('userid'),
     "category":content.category,
     "course":content.course,
     "class":content.course,
     "jambCourse":content.course,
     "subject":content.subject,
     "code":content.code,
     "questionNo":content.questionNo,
     "hour":content.hour,
     "minute":content.minute,
     "topic":content.topic,
     "source":"inbox","examid" : examid,
     "notificationid":$(obj).attr('notificationid')
    };

}

    function startNotifyExam() {
        $.blockUI({
        message: 'Connecting to server...'
    });
        var data = {"userid":getItem('userid'),
                   "subaction":"read",
                    "class":getItem('class'),
                   "notificationid":notifyExamSettings.notificationid};
        dopost({
        "url": api_link + "/student_notify.php",
        "data": data,
        "type": "POST",
        "success": function(response) {
            try {
                    var json = JSON.parse(response);
                    setItem('examSettings', JSON.stringify(notifyExamSettings));
                    setItem('class', notifyExamSettings['class']);
                    setItem('jambCourse', notifyExamSettings['class']);
                    setItem('category', notifyExamSettings.category);
                    setItem('examid', notifyExamSettings.examid);
                    window.location.href = "exam.html";
                }
            catch (e) {
                $.unblockUI();
                console.error("No notification found...."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            $.unblockUI();
        }
    });
    }
var studentCloudDetails = {};
function notifyStudent(myoffset,notifytype) {

   myoffset = (typeof myoffset === 'undefined' ? 0 : myoffset);
    var data = {"class":getItem('class'),"offset" : myoffset,"userid":getItem('userid')};
    if(notifytype=='list')
        data['subaction'] = 'inboxlist';
    dopost({
        "url": api_link + "/student_notify.php",
        "data": data,
        "type": "POST",
        "success": function(response) {
            try {

                var json = JSON.parse(response);
                var not_count=0;

                if(json.hasOwnProperty("notify"))
                    {

                    for(var idx in json.notify) {
                    if(json.notify[idx].hasOwnProperty('id'))
                        {
                            var mycontent = JSON.parse(json.notify[idx]['content']);
                            var html = '<td class="view-message  dont-show" style="padding:7px !important">'+mycontent['filename']+'</td>\
                                      <td class="view-message" style="padding:7px !important">'+mycontent['subject']+'</td>\
                                      <td class="view-message  text-right" style="padding:7px !important">'+json.notify[idx].time+'</td>';
                            var tr = $('<tr/>');
                            tr.addClass('cart');
                            if(json.notify[idx].read==0)
                                tr.addClass('unread');
                            else
                            tr.addClass('read');
                            tr.html(html);
                            var a = $('<href />');
                            a.attr('title','Click to preview Assignment');
                            a.attr('data-toggle','tooltip');
                            tr.append(a);
                            tr.attr('notificationid',json.notify[idx]['id']);
                            tr.attr('notificationtime',json.notify[idx]['time']);
                            tr.css('cursor','pointer');
                            tr.attr('content',json.notify[idx]['content']);
                            tr.attr('contenttype',json.notify[idx].type);
                            tr.attr('title',json.notify[idx].type);
                            tr.attr('onclick','displayNotificationInfo(this);');
                            $("#inboxlist").append(tr);
                        }
                        else
                        {
                            if(json.notify[idx].content>0)
                           {
                               displayStudentNotification(json);
                               viewStudentNotify(json);
                            $('#notifyCon').css('display','block');
                            $('li.notifyzero').css('display','none');

                            not_count += parseInt(json.notify[idx].content);
                            $('#notifycount').html(not_count);
                            $('#notifycount1').html(not_count);

                           }

                        }
                    }
                    if(json.hasOwnProperty("user")){
                        studentCloudDetails.fullname = json.user.fullname;
                        studentCloudDetails.category = json.user.category;
                        studentCloudDetails['class'] = json.user['class'];
                        dopost({
        "url": api_link + "/user_settings.php",
        "data": {
            "userid": getItem('userid'),
            "useralias":getItem('useralias')
        },
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                for(var idx in json.user) {
                if(studentCloudDetails['class']!=json.user[idx]['class'] ||
                  studentCloudDetails['category']!=json.user[idx]['category'] ||
                  studentCloudDetails['classarm']!=json.user[idx]['classarm'] ||
                  studentCloudDetails['fullname']!=json.user[idx]['fullname'])
                {
                    json.user[idx]['fullname'] = studentCloudDetails['fullname'];
                    json.user[idx]['category'] = studentCloudDetails['category'];
                    json.user[idx]['class'] = studentCloudDetails['class'];
                    json.user[idx]['classarm'] = studentCloudDetails['classarm'];
                    json.user[idx]['update'] = "true";
                    dopost({"data":json.user[idx],
                            "url" : api_link + "/update_profile.php",
                            "success" : function(response){console.log(response);},
                            "error":function (){}});
                }
                }


            } catch (e) {
                $.unblockUI();
            }
        },

        "error": function(jqXHR, textStatus) {
            $.unblockUI();
        }
    });
                    }
                }
                else {
                    if(json.statuscode==-2)
                        {
                            $('#notifyCon').css('display','block');
                            $('li.notifyzero').css('display','none');
                            var inputcloud = "<div class='' style='padding:5px'><div class='input-field col-md-12'><input type='text' placeholder='Enter Cloud ID' class='validate' id='enrollcloudid' /><button type='button' class='btn btn-primary' onclick='enrollStudent();'>Enroll</button></div></div>";
                            var cloudin = $("<div />");
                            cloudin.html(inputcloud);
                            $('#notifycount').html("Click to enroll");
                            $('#notifyuser').append(cloudin);
                        }
                }

            }
            catch (e) {
                $.unblockUI();
                console.error("No notification found...."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("No notification");
        }
    });
}


function notifyStudentView(myoffset) {
   myoffset = (typeof myoffset === 'undefined' ? 0 : myoffset);
    dopost({
        "url": api_link + "/student_notify.php",
        "data": {"class":getItem('class'),"offset" : myoffset,"userid":getItem('userid')},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                //notifyContentView();
                viewStudentNotify(json);

            }
            catch (e) {
                $.unblockUI();
                console.error("No available content...."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("No content");
        }
    });
}

function viewStudentNotify(json) {
    var box_content = $('#notifyuser');
    box_content.html("");

    //alert("demo is for demo");
    var count_content = 0;
    var notifications = {};
    for (var idx in json.notify) {

        var link;
        if(json.notify[idx].moduletype=="VIDEO")
            link = 'videos.html';
        if(json.notify[idx].moduletype=="BOOK")
            link = 'enotes.html';
        if(json.notify[idx].moduletype=="QUESTION")
            link = 'notification.html';
        count_content += parseInt(json.notify[idx].content);
        if(!notifications.hasOwnProperty(link))
        {notifications[link] = {};
         notifications[link].count_content = 0;
        }
        notifications[link].count_content += parseInt(json.notify[idx].content);
        notifications[link].contentVideo = '<a href="'+link+'" onClick="updateNotify(true);" class="list-group-item"><h5 class="list-group-item-heading" style="color:#09c !important;">You have '+notifications[link].count_content+' new ' + json.notify[idx].moduletype +(parseInt(notifications[link].count_content)>1?'S':'')+'</h5></a>';

    }
    for(var idx in notifications)
        {
            var divContent = $('<div />');
            divContent.html(notifications[idx].contentVideo);
            box_content.append(divContent);
        }


}

function updateNotify(update) {
    if (typeof(update) == "undefined")
        update = true;
     dopost({
        "url": api_link + "/update_notify.php",
        "data": {"userid": getItem('userid'),
                 "moduleid":getItem('moduleid'),
                 "status":getItem('viewstatus'),
                 "update": update == true ? "true" : "false"},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
            } catch (e) {
                $.unblockUI();
                console.error("Notification cannot be Updated..."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Notification not updated");
        }
    });
}
function enrollStudent() {

     dopost({
                "url": api_link + "/admin/cloudservice.php",
                "data": {
                     "userid": getItem('userid'),
                     "action": "enroll",
                     "cloudid": $('#enrollcloudid').val()
                },
                "type": "POST",
                "success": function (response) {
                    try {
                        var json = JSON.parse(response);
                        if(json.statuscode==0) {
                            enrollMsg(json);
                        }
                        else {
                            doalert(json.status);
                        }


                    } catch (e) {
                        $.unblockUI();
                    }
                },

                "error": function (jqXHR, textStatus) {
                    //$.mobile.loading('hide');
                    $.unblockUI();
                }
            });
}

//(function (root, factory) {
//
//  "use strict";
//  if (typeof define === "function" && define.amd) {
//    // AMD. Register as an anonymous module.
//    define(["jquery"], factory);
//  } else if (typeof exports === "object") {
//    // Node. Does not work with strict CommonJS, but
//    // only CommonJS-like environments that support module.exports,
//    // like Node.
//    module.exports = factory(require("jquery"));
//  } else {
//    // Browser globals (root is window)
//    root.bootbox = factory(root.jQuery);
//  }
//
//} )

function displayStudentNotification(json) {

    var tableDiv = $('#snotify');
    tableDiv.html("");
    var table = $('<table />');
    table.addClass('table table-striped');
    table.attr('id', 'notifyTable');

    var tbody = $('<tbody/>');
    for (var idx in json.notify) {
        var tbodytr = $("<tr />");
        var td1 = $("<td />");
        var td2 = $("<td />");
        var td3 = $("<td />");
        td1.html(json.notify[idx].moduletype);
        td2.html(json.notify[idx].moduletype);
        td3.html(json.notify[idx].entrytime);
        tbodytr.append(td1);
        tbodytr.append(td2);
        tbodytr.append(td3);
        tbody.append(tbodytr);
    }

    table.append(tbody);
    tableDiv.append(table);

}

function postScoreToCloud(obj) {
    try
    {
      var data = JSON.parse($(obj).attr('postdata'));
    }
    catch(e)
    {
        console.error(e.message)
    }

     dopost({
        "url": api_link + "/fetchlist.php",
        "data": data,
        "type": "POST",
        "success": function (response) {
            try {
                var json = JSON.parse(response);
                doalert(json.status);

            } catch (e) {
                $.unblockUI();
                console.error("Cannot be post to cloud..." + e.message);
            }
        },

        "error": function (jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            console.error("Not posted");
        }
    });
}

function enrollMsg(json) {
        bootbox.dialog({
          message: json.status,
          title: "Enrollment Panel",
          buttons: {
            success: {
              label: "OK",
              className: "btn-primary btn-sm",
              callback: function() {
                      window.location.href="index.html";

              }
            }

          }
        });
        }

function changePassword() {
    var changepass = $('#changepass').val();
    var rechangepass = $('#rechangepass').val();
    var oldpass = $('#oldpass').val();
    if(changepass!=rechangepass)
        {
            doalert("Password not match");
        }
    else {
        dopost({
        "url": api_link + "/changepassword.php",
        "data": {"userid": getItem('userid'),"password":changepass,"oldpassword":oldpass},
        "type": "POST",
        "success": function(response) {
            try {
                var json = JSON.parse(response);
                 if(json.statuscode==0)
                    {
                        changePassMsg(json);
                    }
                else {
                    doalert(json.status);
                }

            } catch (e) {
                $.unblockUI();
                console.error("Password cannot be change..."+e.message);
            }
        },

        "error": function(jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            doalert("Password not changed");
        }
    });
    }


}

function changePassMsg(json) {
        bootbox.dialog({
          message: json.status,
          title: "Change Password",
          buttons: {
            success: {
              label: "OK",
              className: "btn-primary btn-sm",
              callback: function() {
                      window.location.href="index.html";

              }
            }

          }
        });
        }

var page_redirect = window.location.href;

function sessionMsg(json) {
        bootbox.dialog({
          message: json.sessionerror,
          title: "Session Management",
          buttons: {
            success: {
              label: "OK",
              className: "btn-primary btn-sm",
              callback: function() {
                  if((page_redirect.indexOf('/admin')>0 || page_redirect.indexOf('/games')>0))
                        {
                            window.location.href="../index.html";
                        }
                  else {
                      window.location.href="index.html";
                  }
              }
            }

          }
        });
        }



function getBrochure(myoffset) {
     $.blockUI({
        message: 'Connecting to server please wait....'
    });
    myoffset = (typeof myoffset === 'undefined' ? 0 : myoffset);
    dopost({
        "url": api_link + "/view_brochure.php",
        "data": {
            "userid": userid,
            "offset": myoffset
        },
        "type": "POST",
        "success": function (response) {
            $.unblockUI('hide');
            try {
                var json = JSON.parse(response);
                viewBrochure(json);

            } catch (e) {
                $.unblockUI();
                console.error("No Brochure found...." + e.message);
            }
        },

        "error": function (jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            console.error(e.message);
        }
    });
}

function viewBrochure(json) {

    var tableDiv = $('#brochureList');
    tableDiv.html("");
    var table = $('<table />');
    table.addClass('table table-striped table-hover table-bordered');
    table.css("background","#fff");
    table.attr('id', 'listbrochure');
    table.attr('cellspacing', '0');
    var thead = $('<thead />');
    var theadtr = $('<tr />');

    var th1 = $('<th />');
    var th2 = $('<th />');
    var th3 = $('<th />');
    var th4 = $('<th />');
    var th5 = $('<th />');
    var th6 = $('<th />');
    var th7 = $('<th />');
    var th8 = $('<th />');
     var th9 = $('<th />');
     var th10 = $('<th />');



    th1.html('COURSE');
    th2.html('INSTITUTION');
    th3.html('REQ FOR DIRECT ENTRY');
    th4.html('REQ FOR UTME');
    th5.html('UTME SUBJECTS');
    th6.html('DIRECT ENTRY WAIVER');
    th7.html('UTME WAIVER');
    th8.html('REMARKS');
    th9.html('S/NO');
    th10.html('STATUS');

    theadtr.append(th9);
    theadtr.append(th1);
    theadtr.append(th2);
    theadtr.append(th3);
    theadtr.append(th4);
    theadtr.append(th5);
    theadtr.append(th6);
    theadtr.append(th7);
    theadtr.append(th8);
    theadtr.append(th10);

    thead.append(theadtr);
    table.append(thead);
    var tbody = $('<tbody/>');

    for (var idx in json.brochure) {

        var tbodytr = $("<tr />");
        tbodytr.css("background","#fff");
        var td1 = $("<td />");
        var td2 = $("<td />");
        var td3 = $("<td />");
        td3.addClass("col-sm-2");
        var td4 = $("<td />");
        td4.addClass("col-sm-2");
        var td5 = $("<td />");
        var td6 = $("<td />");
        var td7 = $("<td />");
        var td8 = $("<td />");
        var td9 = $("<td />");
        var td10 = $("<td />");
         var td10href = $('<a />');
        //td6href.attr('href', 'edituser.html?studentcloudid=' + json.users[idx].studentcloudid);
        td10href.attr('href', 'editbrochure.html?sno=' + json.brochure[idx].sno);
        //td6href.attr('href', 'edituser.html?userid= '+json.users[idx].userid+' studentcloudid='+json.users[idx].studentcloudid+'+');
        var td10icon = $('<i />');
        td10icon.addClass('fa fa-pencil');
        td10href.append(td10icon);
        var td11href = $('<a/>');
        td11href.attr('onclick', 'deleteConfirm(this.getAttribute("delno"));');
        td11href.attr('delno', json.brochure[idx].sno);
        var td11icon = $('<i/>');
        td11icon.addClass('fa fa-close');
        td11href.append(td11icon);

        td1.html(json.brochure[idx].course);
        td2.html(json.brochure[idx].institution);
        td3.html(json.brochure[idx].req_direct_entry);
        td4.html(json.brochure[idx].req_utme_entry);
        td5.html(json.brochure[idx].utme_subjects);
        td6.html(json.brochure[idx].direct_entry_waiver);
        td7.html(json.brochure[idx].utme_waiver);
        td8.html(json.brochure[idx].remarks);
         td9.html(json.brochure[idx].sno);
        td10.append(td10href);
        td10.append(td11href);

        tbodytr.append(td9);
        tbodytr.append(td1);
        tbodytr.append(td2);
        tbodytr.append(td3);
        tbodytr.append(td4);
        tbodytr.append(td5);
        tbodytr.append(td6);
        tbodytr.append(td7);
        tbodytr.append(td8);
         tbodytr.append(td10);
        tbody.append(tbodytr);
    }
    table.append(tbody);
    tableDiv.append(table);

    $('#listbrochure').DataTable({
        "search": {
            "smart": false
        },
         "columnDefs": [
            { "width": "12%", "targets": 3 }
          ],
        dom: 'Bfrtip',
        lengthChange: false,
        buttons: [
            'csv', 'excel', 'pdf', 'print'
        ]
    });
}



/*Update subject function*/
function updateBrochure(update) {
    $.blockUI({
        message: 'Connecting to server please wait....'
    });
                            var course = $('#course').val();
                            var institution = $('#institution').val();
                            var req_direct_entry = $('#req_direct_entry').val();
                            var req_utme = $('#req_utme').val();
                            var utme_subjects = $('#utme_subjects').val();
                            var direct_waiver = $('#direct_entry_waiver').val();
                            var utme_waiver = $('#utme_waiver').val();
                            var b_remarks = $('#remarks').val();

    if (typeof (update) == "undefined")
        update = true;
    dopost({
        "url": api_link + "/edit_brochure.php",
        "data": {
            "userid": userid,
            "course": course,
            "institution": institution,
            "req_direct_entry": req_direct_entry,
            "req_utme_entry": req_utme,
            "utme_subjects": utme_subjects,
            "direct_entry_waiver": direct_waiver,
            "utme_waiver": utme_waiver,
            "remarks": b_remarks,
            "update": update == true ? "true" : "false",
            "sno": queryString('sno')
        },
        "type": "POST",
        "success": function (response) {
            $.unblockUI('hide');
            try {
                var json = JSON.parse(response);
                if (update == true)

                {
                    updateBrochureMsg(json);
                }

            } catch (e) {
                $.unblockUI();
                console.error("Brochure cannot be updated..." + e.message);
            }
        },

        "error": function (jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            //console.error(e.message);
        }
    });
}
/*Delete subject function*/
function deleteBrochure(delet, obj) {
    $.blockUI({
        message: 'Connecting to server please wait....'
    });
    if (typeof (delet) == "undefined")
        delet = true;
    dopost({
        "url": api_link + "/delete_brochure.php",
        "data": {
            "userid": userid,
            "delet": delet == true ? "true" : "false",
            "sno": obj
        },
        "type": "POST",
        "success": function (response) {
            $.unblockUI('hide');
            try {
                var json = JSON.parse(response);
                if (delet == true)

                {
                    doalert(json.status);
                    getBrochure();
                }

            } catch (e) {
                $.unblockUI();
                console.error("Brochure cannot be deleted..." + e.message);
            }
        },

        "error": function (jqXHR, textStatus) {
            //$.mobile.loading('hide');
            $.unblockUI();
            //doalert("Subject not deleted");
        }
    });
}


try{
var fingerprint_script_file = $("<script/>");
fingerprint_script_file.attr("type", "text/javascript");
var this_script_file = $('script').last();
var this_script_file_path = this_script_file.attr('src');
fingerprint_script_file.attr("src", this_script_file_path.replace("ecampus.js","fingerprint.min.js"));
this_script_file.after(fingerprint_script_file);
}catch(e){console.log(e.message);}

