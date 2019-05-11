<?php
require_once 'Api.php';
require_once ('../model/WebModel.php');

    class ApiController extends Api {
  	    protected $model;

        function __construct() {
            parent::__construct();
            $this->model = new WebModel();

        }

        public function getPoints($url_params = []) {
    	    $points = $this->model->getPoints();
    	    return $this->json_response($points, 200);
        }


    }
 ?>
