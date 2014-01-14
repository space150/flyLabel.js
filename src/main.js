/*jslint browser: true, nomen: true, white: true */
/*globals jQuery */

(function ($) {
  "use strict";
  var FlyLabel = (function () {
    function _FlyLabel(el) {
      // Set things
      this.el = el;
      this.input = this._findInput();
      if (this.input.length !== 1) {
        this.input = this._findSelect();
      }
      this.label = this._findLabel();
      // Do things
      this._bindEvents();
    }

    _FlyLabel.prototype = {
      _findInput: function () {
        return $(this.el).find('input, textarea');
      },
      _findLabel: function () {
        return $(this.el).find('label');
      },
      _findSelect: function () {
        return $(this.el).find('select');
      },
      _bindEvents: function () {
        this.input.on('keyup change', $.proxy(this._onKeyUp, this));
        this.input.on('blur', $.proxy(this._onBlur, this));
        this.input.on('focus', $.proxy(this._onFocus, this));
      },
      _onKeyUp: function () {
        if (this.input.val() === '') {
          this.label.removeClass('is-active');
        } else {
          this.label.addClass('is-active');
        }
        return false; // Don't bubble
      },
      _onFocus: function () {
        this.label.addClass('has-focus');
        this._onKeyUp();
        return false; // Don't bubble
      },
      _onBlur: function () {
        this.label.removeClass('has-focus');
        this._onKeyUp();
        return false; // Don't bubble
      }
    };
    return _FlyLabel;
  }());

  $.fn.flyLabels = function () {
    this.find('.fly-group').each(function () {
      return new FlyLabel(this);
    });
  };

}(window.jQuery || window.$));

