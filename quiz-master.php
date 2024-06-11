<?php

/*
  Plugin Name: Quiz Master
  Plugin URI: https://sergejs-ivcenko.com/
  Description: A plugin to create quizzes with  questions and answers.
  Version: 1.0
  Author: Sergejs
  Author URI: https://sergejs-ivcenko.com/
  License: GPL2
*/

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

// Register block
function quiz_master_block_init()
{
	register_block_type(__DIR__ . '/build');

	add_action('enqueue_block_assets', function (): void {
		wp_enqueue_style('dashicons');
	});
}

add_action('init', 'quiz_master_block_init');
