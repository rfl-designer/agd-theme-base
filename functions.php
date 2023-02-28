<?php

function agdtheme_features()
{

	add_theme_support("responsive-embeds");
	add_theme_support("align-wide");
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_image_size('professorLandscape', 400, 260, true);
	add_image_size('professorPortrait', 480, 650, true);
	add_image_size('pageBanner', 1500, 350, true);
	add_theme_support('editor-styles');
	add_editor_style( 'style-editor.css' );
	add_editor_style(array('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i', 'build/style-index.css', 'build/index.css'));
}

add_action('after_setup_theme', 'agdtheme_features');

/*Enqueue Styles ------------------------------*/

if (!function_exists('agd_theme_styles')):
	function agd_theme_styles()
	{
		wp_enqueue_style('style-css', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
	}
endif;

add_action('wp_enqueue_scripts', 'agd_theme_styles');

/*Enqueue Scripts -----------------------------*/

function agd_theme_gsap_script(){
	// The core GSAP library
	wp_enqueue_script( 'gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js', array(), false, true );
	// ScrollTrigger - with gsap.js passed as a dependency
	wp_enqueue_script( 'gsap-st', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js', array('gsap-js'), false, true );
	  // Your animation code file - with gsap.js passed as a dependency
	wp_enqueue_script( 'gsap-js2', get_template_directory_uri() . '/assets/scripts.js', array('gsap-js'), false, true );
}
add_action( 'wp_enqueue_scripts', 'agd_theme_gsap_script' );

// function defer_parsing_of_js ( $url ) {
// 	if ( FALSE === strpos( $url, '.js' ) ) return $url;
// 	if ( strpos( $url, 'jquery.js' ) ) return $url;
// 	return "$url' defer ";
// 	}
// add_filter( 'clean_url', 'defer_parsing_of_js', 11, 1 );

/*Style Variations ----------------------------*/
function agd_theme_register_block_styles()
{
	// Navigation: Color
	register_block_style(
		'core/navigation',
		array(
			'name' => 'secondary',
			'label' => esc_html__('Secondary', 'agd-theme'),
		)
	);

	register_block_style(
		'core/button',
		array(
			'name' => 'secondary',
			'label' => esc_html__('Secondary', 'agd-theme'),
		)
	);
}

add_action('init', 'agd_theme_register_block_styles');


