<?php
	require_once 'view/WebView.php';
  require_once 'model/WebModel.php';

	class WebController extends Controller
	{

		function __construct()
		{
			$this->view = new WebView();
      $this->model = new WebModel();
		}

		public function index()
	  	{
	  		$titulo = 'AppTrash';
	  		$this->view->showIndex($titulo);
	  	}

	  	public function admin()
	  	{
	  		$this->view->showAdminIndex();
	  	}
	}
 ?>
