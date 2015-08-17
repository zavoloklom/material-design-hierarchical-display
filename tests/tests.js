(function ($) {
    'use strict';

    // Basic tests
    module("Basic Tests");

    QUnit.test("Chainable", function() {
        var el = $("#test");
        ok(el.hierarchicalDisplay().addClass("testing"), "Can be chained");
        equal(el.hasClass("testing"), true, "Class was added correctly from chaining");
    });

    // Plugin functions tests
    module("Function Tests");

    QUnit.test("Function show()", function(assert) {
        assert.expect(7);
        var done1 = assert.async();
        var done2 = assert.async();

        var el = $("#test");
        el.hierarchicalDisplay('show');

        var childrenDelay, childrenWebkitDelay, childrenClass = 1, animationClass = 1;
        el.children().each(function () {
            childrenDelay = $(this).css("animation-delay");
            childrenWebkitDelay = $(this).css("-webkit-animation-delay");
            childrenClass = childrenClass*($(this).hasClass("animated"));
            animationClass = animationClass*($(this).hasClass("zoomIn"));
        });
        assert.equal(parseFloat(childrenDelay).toFixed(2), 0.41, "Children has 'animation-delay' css style");
        assert.equal(parseFloat(childrenWebkitDelay).toFixed(2), 0.41, "Children has '-webkit-animation-delay' css style");
        assert.equal(childrenClass, 1, "Children has 'animated' class");
        assert.equal(animationClass, 1, "Children has default 'zoomIn' class");

        setTimeout(function(){
            assert.equal(el.hasClass("zmd-hierarchical-displaying"), true, "Class 'zmd-hierarchical-displaying' added  to parent element while animation processing");
            done1();
        }, 500);

        setTimeout(function(){
            assert.equal(el.hasClass("zmd-hierarchical-displaying"), false, "Class 'zmd-hierarchical-displaying' was removed from parent element after animation ends");
            assert.equal(el.css("visibility"), "visible", "Parent element is visible after animation ends");
            done2();
        }, 1500);
    });

    QUnit.test("Function hide()", function(assert) {
        assert.expect(7);
        var done1 = assert.async();
        var done2 = assert.async();

        var el = $("#test");
        el.addClass('in').hierarchicalDisplay('hide');

        var childrenDelay, childrenWebkitDelay, childrenClass = 1, animationClass = 1;
        el.children().each(function () {
            childrenDelay = $(this).css("animation-delay");
            childrenWebkitDelay = $(this).css("-webkit-animation-delay");
            childrenClass = childrenClass*($(this).hasClass("animated"));
            animationClass = animationClass*($(this).hasClass("zoomOut"));
        });
        assert.equal(parseFloat(childrenDelay).toFixed(2), 0.41, "Children has 'animation-delay' css style");
        assert.equal(parseFloat(childrenWebkitDelay).toFixed(2), 0.41, "Children has '-webkit-animation-delay' css style");
        assert.equal(childrenClass, 1, "Children has 'animated' class");
        assert.equal(animationClass, 1, "Children has default 'zoomOut' class");

        setTimeout(function(){
            assert.equal(el.hasClass("zmd-hierarchical-displaying"), true, "Class 'zmd-hierarchical-displaying' added  to parent element while animation processing");
            done1();
        }, 500);

        setTimeout(function(){
            assert.equal(el.hasClass("zmd-hierarchical-displaying"), false, "Class 'zmd-hierarchical-displaying' was removed from parent element after animation ends");
            assert.equal(el.css("visibility"), "hidden", "Parent element is hidden after animation ends");
            done2();
        }, 1500);
    });

    // Events tests
    module("Events Tests");

    QUnit.test("Events for function show()", function(assert) {
        assert.expect(2);
        var done1 = assert.async();
        var done2 = assert.async();

        var el = $("#test");

        el.on('show.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'show.zmd.hierarchicalDisplay' event");
            done1();
        });

        el.on('shown.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'shown.zmd.hierarchicalDisplay' event");
            done2();
        });

        el.hierarchicalDisplay('show');
    });

    QUnit.test("Events for function hide()", function(assert) {
        assert.expect(2);
        var done1 = assert.async();
        var done2 = assert.async();

        var el = $("#test");

        el.on('hide.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'hide.zmd.hierarchicalDisplay' event");
            done1();
        });

        el.on('hidden.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'hidden.zmd.hierarchicalDisplay' event");
            done2();
        });

        el.addClass('in').hierarchicalDisplay('hide');
    });

    // Data-api tests
    module("Data-API Tests");

    QUnit.test("Data-API: action, speed, animation", function(assert) {
        var el = $("#test").addClass('in');

        el.on('hide.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Init method from DATA");
        });

        // add data-attr
        el.attr('data-action', 'hide');
        el.attr('data-speed', '50');
        el.attr('data-animation-out', 'fadeOut');
        el.hierarchicalDisplay();

        var childrenDelay, animationClass = 1;
        el.children().each(function () {
            childrenDelay = $(this).css("animation-delay");
            animationClass = animationClass*($(this).hasClass("fadeOut"));
        });
        assert.equal(parseFloat(childrenDelay).toFixed(2), 0.04, "Children has new speed");
        assert.equal(animationClass, 1, "Children has new class");
    });

    // JS Options tests
    module("Options via JS Tests");

    QUnit.test("Options via JS: action as string", function(assert) {
        assert.expect(1);
        var done = assert.async();

        var el = $("#test");

        // add data-attr
        el.attr('data-action', 'hide');
        el.attr('data-speed', '50');
        el.attr('data-animation-out', 'fadeOut');

        el.on('shown.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Init method from JS above data");
            done();
        });

        el.hierarchicalDisplay('show');
    });

    // Toggle tests
    module("Toggle tests");

    QUnit.test("Function toggle() default", function(assert) {
        assert.expect(1);
        var done = assert.async();

        var el = $("#test");

        el.on('show.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'show.zmd.hierarchicalDisplay' event");
            done();
        });

        el.hierarchicalDisplay('toggle');
    });

    QUnit.test("Function toggle() -> hide() because element is shown by class 'in'", function(assert) {
        assert.expect(1);
        var done = assert.async();

        var el = $("#test");
        el.addClass('in');

        el.on('hide.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'hide.zmd.hierarchicalDisplay' event");
            done();
        });

        el.hierarchicalDisplay('toggle');
    });

    QUnit.test("Function toggle() -> show() when element is hidden by css style", function(assert) {
        assert.expect(1);
        var done = assert.async();

        var el = $("#test");
        el.css('visibility', 'hidden');

        el.on('show.zmd.hierarchicalDisplay', function() {
            assert.ok(true, "Fire 'show.zmd.hierarchicalDisplay' event");
            done();
        });

        el.hierarchicalDisplay('toggle');
    });

    QUnit.test("Toggle via link", function(assert) {
        assert.expect(2);
        var done1 = assert.async();
        var done2 = assert.async();

        var link = $("#toggle-link");

        $("#test")
            .data('speed', 50)
            .on('show.zmd.hierarchicalDisplay', function() {
                assert.ok(true, "Toggle link works correctly");
                done1();
            })
            .on('hide.zmd.hierarchicalDisplay', function() {
                assert.ok(true, "Toggle link works correctly again");
                done2();
            });

        link.trigger("click");

        setTimeout(function(){
            link.trigger("click");
        }, 1500);
    });

    QUnit.test("Toggle via button", function(assert) {
        assert.expect(2);
        var done1 = assert.async();
        var done2 = assert.async();

        var link = $("#toggle-button");

        $("#test")
            .data('speed', 50)
            .on('show.zmd.hierarchicalDisplay', function() {
                assert.ok(true, "Toggle button works correctly");
                done1();
            })
            .on('hide.zmd.hierarchicalDisplay', function() {
                assert.ok(true, "Toggle button works correctly again");
                done2();
            });

        link.trigger("click");

        setTimeout(function(){
            link.trigger("click");
        }, 1500);

    });

}(jQuery));