/* ========================================================================
 * Zavoloklom Material Design: jquery.zmd.hierarchical-display.js v1.0.0
 * http://zavoloklom.github.io/material-design-hierarchical-display/
 * ========================================================================
 * Copyright 2014 Zavoloklom.
 * Licensed under MIT (https://github.com/zavoloklom/material-design-hierarchical-display/blob/master/LICENSE)
 * ======================================================================== */

(function ($) {
    'use strict';

    // CLASS DEFINITION
    // ======================
    var HDisplay = function (element, options) {
        this.$element = $(element);
        this.$children = this.$element.children();
        this.options = $.extend({}, HDisplay.DEFAULTS, options);
        this._time = HDisplay.TRANSITION_DURATION * this.options.speed;

        this.init();
    };

    HDisplay.VERSION = '1.0.0';

    HDisplay.TRANSITION_DURATION = 300;

    HDisplay.DEFAULTS = {
        action: 'show',
        speed: 5,
        animationIn: 'zoomIn',
        animationOut: 'zoomOut',
        debug: false
    };

    HDisplay.prototype.init = function () {
        var parentElement = this.$element;
        var time = this._time;
        var elementOffset, calculatedOffset, elemDelay;

        parentElement.addClass('zmd-hierarchical-display');

        this.$children.each(function () {
            elementOffset = $(this).position();
            calculatedOffset = elementOffset.left * 0.8 + elementOffset.top;
            elemDelay = parseFloat(calculatedOffset / time).toFixed(2);
            $(this)
                .css("-webkit-animation-delay", elemDelay + 's')
                .css("animation-delay", elemDelay + 's');
        });

        this._delay = elemDelay;
    };

    HDisplay.prototype.show = function () {
        var parentElement = this.$element;
        var children = this.$children;
        var options = this.options;
        var debug = this.options.debug;
        var debugElement = parentElement.context.tagName + '#' + parentElement.context.id;

        if (parentElement.hasClass('in') || parentElement.hasClass('zmd-hierarchical-displaying')) return;

        this._removeAnimations();

        parentElement.trigger($.Event('show.zmd.hierarchicalDisplay'));
        if (debug === true) {console.log('Event "show.zmd.hierarchicalDisplay" for ' + debugElement);}

        this._addAnimation(options.animationIn);

        var complete = function () {
            parentElement
                .addClass('in')
                .removeClass('zmd-hierarchical-displaying')
                .trigger($.Event('shown.zmd.hierarchicalDisplay'));
            if (debug === true) {console.log('Event "shown.zmd.hierarchicalDisplay" for ' + debugElement);}
        };

        // Call complete function after animation ends
        setTimeout(function () {
            complete.call(this);
        }, this._delay * 1000 + 1000);
    };

    HDisplay.prototype.hide = function () {
        var parentElement = this.$element;
        var children = this.$children;
        var options = this.options;
        var debug = this.options.debug;
        var debugElement = parentElement.context.tagName + '#' + parentElement.context.id;

        if (parentElement.css('visibility') === 'hidden' || parentElement.hasClass('zmd-hierarchical-displaying')) return;

        this._removeAnimations();

        parentElement.trigger($.Event('hide.zmd.hierarchicalDisplay'));
        if (debug === true) {console.log('Event "hide.zmd.hierarchicalDisplay" for ' + debugElement);}

        this._addAnimation(options.animationOut);

        var complete = function () {
            parentElement
                .removeClass('zmd-hierarchical-displaying')
                .removeClass('in')
                .trigger($.Event('hidden.zmd.hierarchicalDisplay'));
            if (debug === true) {console.log('Event "hidden.zmd.hierarchicalDisplay" for ' + debugElement);}
        };

        // Call complete function after animation ends
        setTimeout(function () {
            complete.call(this);
        }, this._delay * 1000 + 1000);
    };

    HDisplay.prototype.toggle = function () {
        if (this.$element.hasClass('in')) {return this.hide();}
        return this.show();
    };

    HDisplay.prototype._removeAnimations = function () {
        var options = this.options;
        this.$children.each(function () {
            $(this)
                .removeClass(options.animationIn)
                .removeClass(options.animationOut);
        });
    };

    HDisplay.prototype._addAnimation = function (animation) {
        this.$element.addClass('zmd-hierarchical-displaying');
        this.$children.each(function () {
            $(this)
                .addClass(animation)
                .addClass('animated');
        });
    };

    // PLUGIN DEFINITION
    // =======================
    function Plugin(settings) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('zmd.hierarchicalDisplay');
            var options = $.extend({}, HDisplay.DEFAULTS, $this.data(), typeof settings === 'object' && settings);

            if (!data) {$this.data('zmd.hierarchicalDisplay', (data = new HDisplay(this, options)));}
            if (typeof settings === 'string') {return data[settings]();}
            if (options.action in data) {return data[options.action]();}
        });
    }

    $.fn.hierarchicalDisplay = Plugin;
    $.fn.hierarchicalDisplay.Constructor = HDisplay;

    // DATA-API
    // ==============
    $(document).on('ready', function () {
        $('[data-animation="hierarchical-display"]').each(function () {
            Plugin.call($(this));
        });
    });
    $(document).on('click', '[data-toggle="hierarchical-display"]', function (e) {
        var $this   = $(this);
        var $target = $($this.attr('data-target') || $this.attr('href'));

        if ($this.is('a')) e.preventDefault();

        Plugin.call($target, 'toggle');
    });

})(jQuery);