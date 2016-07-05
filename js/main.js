var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function() {

function t(e) {
    window.location.hash = e, $("#" + e).show(), setTimeout(function() {
        $("#" + e).addClass("animate-in");
    }, 20), setTimeout(function() {
        $("body").removeClass("nav-open");
        $('.carousel').flickity('resize');
    }, 260)
}

if(window.location.hash) {
    $(".video-overlay").hide();
}

FastClick.attach(document.body);

$('body').on('tap', 'a', function(e) {
    window.location = $(this).attr('href');
    e.preventDefault();
});


    $('.video-overlay').hide();


$("#play-button").click(function () {
    $(".iframewrap").addClass('show');
});
$(".closevid").click(function () {
    $(".iframewrap").removeClass('show');
});

$('.booknav').hover(function() {
  $('.bookhover').toggleClass('active');
});

$('.merchnav').hover(function() {
  $('.merchhover').toggleClass('active');
});

$('.shownav').hover(function() {
  $('.showhover').toggleClass('active');
});

$('.signupnav').hover(function() {
  $('.signuphover').toggleClass('active');
});

$('.preordernav').hover(function() {
  $('.preorderhover').toggleClass('active');
});

$('.musicnav').hover(function() {
  $('.musichover').toggleClass('active');
});

$('.spotifynav').hover(function() {
  $('.spotifyhover').toggleClass('active');
});

$('.soundcloudnav').hover(function() {
  $('.soundcloudhover').toggleClass('active');
});

$('.instagramnav').hover(function() {
  $('.instagramhover').toggleClass('active');
});

$('.youtubenav').hover(function() {
  $('.youtubehover').toggleClass('active');
});

$('.twitternav').hover(function() {
  $('.twitterhover').toggleClass('active');
});

$('.snapchatnav').hover(function() {
  $('.snapchathover').toggleClass('active');
});

$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true
});

$('.musicnav').on( 'click', function() {
    setTimeout(function() {
        $('.carousel').flickity('resize');
    }, 300);
});

$('.nav-icon').click(function() {
    $('.mobilemenu').addClass('showmenu');
});

$('.closemenu, .mobilenav ul li a').click(function() {
    $('.mobilemenu').removeClass('showmenu');
});

function i() {
    var e = window.location.hash.substring(1); - 1 != $.inArray(e, n) && t(e)
}
var a = 0;

var n = [];
$("a.navhook").each(function() {
        var e = $(this).data("nav");
        n.push(e)
    }), i(), $("a.navhook").on("click", function(e) {
        e.preventDefault();
        var i = $(this).data("nav");
        return t(i), !1
    }), $(".page .close").on("click", function() {
        $(this).parent().removeClass("animate-in");
        var e = $(this);
        return window.location.hash = "", setTimeout(function() {
            e.parent().hide()
        }, 260), !1
    }), $("#signup-form").submit(function(e) {
        e.preventDefault();
        var t = $(this),
            i = t.find('input[name="email"]').val(),
            a = t.attr("action");
        $.post(a, {
            email: i
        }, function(e) {
            e && ("Some fields are missing." == e ? $("#status").text("- please fill in your name and email.") : "Invalid email address." == e ? $("#status").text("- your email address is invalid.") : "Invalid list ID." == e ? $("#status").text("- your list ID is invalid.") : "Already subscribed." == e ? $("#status").text("- you're already subscribed!") : $("#status").text("added to list - thanks!").css("display", "block").parent().parent().addClass("show-confirm"))
        })
    }), $("#signup-form").keypress(function(e) {
        13 == e.keyCode && (e.preventDefault(), $(this).submit())
    }), $("#submit-btn").on("tap", function(e) {
        e.preventDefault(), $("#signup-form").submit()
    }), $(".enter-email").on("focus blur", function() {
        $(this).parent().parent().toggleClass("is_focused")
    }),
    function(e, t) {
        var i = function(e, t, i) {
            var a;
            return function() {
                function n() {
                    i || e.apply(s, o), a = null
                }

                var s = this,
                    o = arguments;
                a ? clearTimeout(a) : i && e.apply(s, o), a = setTimeout(n, t || 100)
            }
        };
        jQuery.fn[t] = function(e) {
            return e ? this.bind("resize", i(e)) : this.trigger(t)
        }
    }
});

$(document).ready(function() {

//*--------------------- LIVE DATES ---------------------*//
