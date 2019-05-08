<?php 
	include_once 'view/WebView.php';

	class WebController extends Controller
	{

		function __construct()
		{
			$this->view = new WebView();
		}

		public function index()
	  	{
	  		$titulo = 'AppTrash';
	  		$this->view->showIndex($titulo);
	  	}
	}
 ?>