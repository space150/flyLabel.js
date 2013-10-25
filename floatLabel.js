/*jslint browser: true, nomen: true, white: true */
/*globals jQuery */

(function ($) {
  "use strict";
  var FloatLabel;

  FloatLabel = (function () {
    function FloatLabel(el, options) {
      // Set things
      this.el = el;
      this.options = options;
      this.input = this._findInput();
      this.label = this._findLabel();
      this.namespace = options.namespace || 'flabel';
      // Do things
      this._bindEvents();
    }

    FloatLabel.prototype = {
      _findInput: function () {
        return $(this.el).find('input, textarea');
      },
      _findLabel: function () {
        return $(this.el).find('label');
      },
      _bindEvents: function () {
        this.input.on('keyup', $.proxy(this._onKeyUp, this));
        this.input.on('blur', $.proxy(this._onBlur, this));
        this.input.on('focus', $.proxy(this._onFocus, this));
      },
      _onKeyUp: function () {
        if (this.input.val() === '') {
          this.label.removeClass('flabel__label--active');
        } else {
          this.label.addClass('flabel__label--active');
        }
        return false; // Don't bubble
      },
      _onFocus: function () {
        this.label.addClass('flabel__label--focus');
        return false; // Don't bubble
      },
      _onBlur: function () {
        this.label.removeClass('flabel__label--focus');
        return false; // Don't bubble
      }
    };
    return FloatLabel;
  }());

  $.fn.floatLabels = function (options) {
    options = options || {};
    this.find('.flabel__group').each(function (i, group) {
      console.log('->', new FloatLabel(group, options));
    });
  };

}(window.jQuery || window.$));

