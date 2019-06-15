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

		public function detalleReporte($params)
		{
			$id_reporte = $params[0];
			$reporte = $this->model->getReporte($id_reporte);
			$this->view->showReporte($reporte);
		}

		public function guardarVideo(){
		if (isset($_FILES['archivo'])) {
			$archivo = $_FILES['archivo'];
			$extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
			$time = time();
			$nombre = "{$_POST['nombre_archivo']}_$time.$extension";
			if (move_uploaded_file($archivo['tmp_name'], "img/reportes/$nombre")) {
				echo "img/reportes/$nombre";
			} else {
				echo 0;
			}
		}
	}

	public function guardarDenuncia(){
		$nombre = $_POST['nombre'];
		$apellido = $_POST['apellido'];
		$dni = $_POST['dni'];
		$direccionUsuario = $_POST['direccion'];
		$patente = $_POST['patente'];
		$fecha = $_POST['fechahora'];
		$latitud= $_POST['latitud'];
		$longitud= $_POST['longitud'];
		$ruta = $_POST['dirVideo'];
		$direccionDenuncia= $_POST['dirDenuncia'];
		return $this->model->guardarDenuncia($nombre,$apellido,$dni,$direccionUsuario,$patente,$fecha,$latitud,$longitud,$ruta,$direccionDenuncia);
	}

	public function guardarReporte(){
		$latitud = $_POST['latitud'];
		$longitud = $_POST['longitud'];
		$dirDenuncia = $_POST['dirDenuncia'];
        $descripcion = $_POST['descripcion'];
        $rutaFoto = $_POST['imagen'];
    
        if($latitud != null && $longitud != null && $dirDenuncia != null && $rutaFoto != null){
            $this->model->guardarReporte($latitud, $longitud, $dirDenuncia, $rutaFoto, $descripcion);
        }else{
            header('Location .'.INDEX);
        }
	}
	}
 ?>
