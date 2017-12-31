<?php

@include __DIR__ . DS . 'license.php';

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('panel.install', true);

/*
JSON API Configuration
*/
c::set('jsonapi.built-in.enabled', true);
// this is for demonstration purposes ONLY - in any kind of "real world" application
// this should be set to _some_ form of authentication as described in the documentation
c::set('jsonapi.built-in.auth', false);