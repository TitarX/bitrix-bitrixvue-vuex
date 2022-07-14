<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
    die();
}

return [
    'js' => [
        './dist/application.bundle.js',
    ],
    'css' => [
        './dist/application.bundle.css',
    ],
    'rel' => [
		'main.polyfill.core',
		'ui.vue3',
		'ui.vue3.vuex',
	],
    'skip_core' => true,
];
