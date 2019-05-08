<?php 
	class WebView extends View
	{

		function showIndex($titulo) 
		{
			$this->smarty->assign('titulo', $titulo);
			$this->smarty->display('templates/index.tpl');
		}

	}
 ?>