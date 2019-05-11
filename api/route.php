<?php

define('RESOURCE', 0);
define('PARAMS', 1);

  require_once 'config/Router.php';
  require_once '../model/Model.php';
  require_once 'controller/ApiController.php';

  $router = new Router();
  //url, verb, controller, method

  $router->AddRoute("points", "GET", "ApiController", "getPoints");


  $route = $_GET['resource'];
  $array = $router->Route($route);

  if(sizeof($array) == 0)
    echo "404";
  else
  {
    $controller = $array[0];
    $metodo = $array[1];
    $url_params = $array[2];
    echo (new $controller())->$metodo($url_params);
  }

?>
