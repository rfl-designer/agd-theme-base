<?php

/*Enqueue Styles ------------------------------*/

if (!function_exists('agd_theme_styles')) :
    function agd_theme_styles() {
        wp_enqueue_style( 'style-css', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    }
endif;

add_action( 'wp_enqueue_scripts', 'agd_theme_styles' );