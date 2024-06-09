<?php

/*
  Plugin Name: FrontEnd Quiz Master
  Plugin URI: https://sergejs-ivcenko.com/
  Description: A plugin to create quizzes with front-end web development questions and answers.
  Version: 1.0
  Author: Sergejs
  Author URI: https://sergejs-ivcenko.com/
  License: GPL2
*/

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

// Register block
function frontend_quiz_master_block_init()
{
  register_block_type(__DIR__ . '/build', array(
    'editor_script' => 'frontend-quiz-master-block',
    'editor_style'  => 'frontend-quiz-master-editor-style',
  ));
}

add_action('init', 'frontend_quiz_master_block_init');
