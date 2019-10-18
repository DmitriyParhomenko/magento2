/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/ui',
], function($){
    'use strict';

    $.widget('mage.scrollTop', {

        _create: function() {
            this.btnScroll();
        },

        btnScroll: function () {

            var btn = $('.scrolltop');

            $(window).scroll(function() {
                if ($(window)[0].pageYOffset > 50) {
                    btn.show();
                } else {
                    btn.hide();
                }
            });

            btn.on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, '300');
            });
        },

    });

    return $.mage.scrollTop;
});



