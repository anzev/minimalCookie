/*
  A tiny library to help uphold the EU cookie law.

  anze.vavpetic@gmail.com
 */


(function(global) {
    "use strict";

    var MinimalCookie = function() {
        var self = this;

        if (MinimalCookie.prototype._singletonInstance) {
            return MinimalCookie.prototype._singletonInstance;
        }
        MinimalCookie.prototype._singletonInstance = self;

        self.CHOICE_KEY = 'eu_cookie_choice';
        self.ACCEPT     = 'cookie_accept';
        self.DECLINE    = 'cookie_decline';
        self.EXPIRES    = 365 * 24 * 60 * 60;

        self.choice_made = function() {
            return global.Cookies.get(self.CHOICE_KEY) != undefined;
        };

        self.forget_choice = function() {
            global.Cookies.expire(self.CHOICE_KEY);
        };

        self.allowed = function() {
            return global.Cookies.get(self.CHOICE_KEY) == self.ACCEPT;
        };

        self.accept = function() {
            global.Cookies.set(
                self.CHOICE_KEY,
                self.ACCEPT, 
                { expires: self.EXPIRES }
            );
        };

        self.decline = function() {
            global.Cookies.set(
                self.CHOICE_KEY,
                self.DECLINE, 
                { expires: self.EXPIRES }
            );
        };

        return self;
    };

    global.MinimalCookie = new MinimalCookie();
}(window));


$(function() {
    $('#cookie-accept').on('click', function() {
        MinimalCookie.accept();
        location.reload();
    });
    $('#cookie-decline').on('click', function() {
        MinimalCookie.decline();
        location.reload();
    });

    if (!MinimalCookie.choice_made()) {
        $('#cookies-prompt').toggleClass('hidden');
    }
});
