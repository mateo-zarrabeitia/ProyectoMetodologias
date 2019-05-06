<?php 
	
	//Acá se definen

	define('HOME', 'http://'.$_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']).'/');

	class Controller
	{	
		protected $model;
		protected $view;
	}
 ?>