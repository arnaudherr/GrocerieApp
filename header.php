<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package apparences
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
	<script type="text/javascript">
	function startFunction (){
		$('.select__lang').show();
	}
	$(document).ready(function() {
//				startFunction()

	});
	</script>
</head>

<body <?php body_class(); ?>>
<style>

	li.active a  {
		text-decoration: underline;
	}

	.big__letter{
			font-size: 50vw;
			line-height: 0;
			position: absolute;
			top: 10%;
			left: -150px;
			margin: 0;
			padding: 0;
			font-style: italic;
			font-weight: bolder;
			z-index: -1;
			opacity: 0.5;
			color: <?php the_field('couleur_de_larticle'); ?>
	}
</style>
<div id="page" class="site">

	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'apparences' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="switch__website"><a href="http://apparences-magazine.be/nl/">Apparences België</a><span> / </span><a href="http://apparences-magazine.be/fr/">Apparences Belgique</a><span> / </span><a href="http://apparences-magazine.com">Apparences France</a></div>
		<div class="site-branding" style="background:url('<?php header_image() ?>');; background-size:cover; background-repeat:no-repeat; background-attachment:fixed; background-position:left;)">
			<nav id="site-navigation" class="main-navigation">
				<?php

				if (get_bloginfo('language') == 'nl' || get_bloginfo('language') == 'be-FR'){
					qtranxf_generateLanguageSelectCode($type,$id);
				}

					wp_nav_menu( array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',

					) );

				?>
			</nav><!-- #site-navigation -->
			<nav role="navigation">
  <div id="menuToggle">
    <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
    <input type="checkbox" />

    <!--
    Some spans to act as a hamburger.

    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
    <span></span>
    <span></span>
    <span></span>

    <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
    <ul id="menu"><?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',

			) );
    ?>
		<li class="pays__nav"><a href="http://apparences-magazine.be/nl/">België</a></li>
		<li class="pays__nav"><a href="http://apparences-magazine.be/fr/">Belgique</a></li>
		<li class="pays__nav"><a href="http://apparences-magazine.com">France</a></li>

	</ul>
  </div>
</nav>
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>

			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php

			endif;

			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) :
				if (qtranxf_getLanguage() == 'nl'){?>
					<h2 class="site-description">Beglië</h2>

					<?php

				} else{
					?>

				<h2 class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></h2>

			<?php
		}
			endif; ?>
		</div>
<!-- .site-branding -->
		<?php
		get_the_title();
		get_magazine(); ?>

	</header><!-- #masthead -->

	<div id="content" class="site-content">
		<?php
		    echo do_shortcode("[metaslider id=181]");
				echo do_shortcode("[metaslider id=34]");

		?>
