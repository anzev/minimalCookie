/*
  Tiny library to help uphold the EU cookie law.

  anze.vavpetic@gmail.com
 */

var COOKIE_CHOICE_KEY = 'eu_cookie_choice',
    COOKIE_ACCEPT     = 'cookie_accept',
    COOKIE_DECLINE    = 'cookie_decline',
    COOKIE_EXPIRES    = 365 * 24 * 60 * 60;

function cookies_choice_made() {
    return Cookies.get(COOKIE_CHOICE_KEY) != undefined;
};

function cookies_forget_choice() {
    Cookies.expire(COOKIE_CHOICE_KEY);
};

function cookies_allowed() {
    return Cookies.get(COOKIE_CHOICE_KEY) == COOKIE_ACCEPT;
};

function cookies_accept() {
    Cookies.set(COOKIE_CHOICE_KEY, COOKIE_ACCEPT, { expires: COOKIE_EXPIRES });
};

function cookies_decline() {
    Cookies.set(COOKIE_CHOICE_KEY, COOKIE_DECLINE, { expires: COOKIE_EXPIRES });
};

$(function() {
    $('#cookie-accept').on('click', function() {
        cookies_accept();
        location.reload();
    });
    $('#cookie-decline').on('click', function() {
        cookies_decline();
        location.reload();
    });

    if (!cookies_choice_made()) {
        $('#cookies-prompt').toggleClass('hidden');
    }
});