<?php
class WebModel extends Model{

  function getPoints() {
    $sentencia = $this->db->prepare('SELECT `reporte`.`id_reporte`, `reporte`.`latitud`, `reporte`.`longitud`
      FROM `reporte`
      WHERE (`reporte`.`fechaFinalizada` IS NULL)');
      $sentencia->execute();
      return $sentencia->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getReporte($id_reporte)
    {
      $sentencia = $this->db->prepare('SELECT *
        FROM reporte r
        INNER JOIN usuario u ON(r.fk_id_usuario = u.id_usuario)
        WHERE r.id_reporte = ?');
        $sentencia->execute(array($id_reporte));
        return $sentencia->fetchAll(PDO::FETCH_ASSOC);
      }

      function guardarDenuncia($nombre,$apellido,$dni,$direccionUsuario,$patente,$fecha,$latitud,$longitud,$ruta,$direccionDenuncia) {
        $sentencia = $this->db->prepare('SELECT id_usuario FROM usuario WHERE dni = ?');
      $sentencia->execute([$dni]);
      $usuario =  $sentencia->fetchAll();
      if ($usuario) {
        $id_usuario = $usuario[0]["id_usuario"];
      } else {
        $sentencia = $this->db->prepare('INSERT INTO `usuario` (`id_usuario`, `dni`, `nombre`, `apellido`, `email`, `contraseña`, `rol`, `direccionUsuario`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        $sentencia->execute([NULL,$dni,$nombre,$apellido,'@gmail.com','1234','0',$direccionUsuario]);
        $sentencia = $this->db->prepare('SELECT id_usuario FROM usuario WHERE dni = ?');
        $sentencia->execute([$dni]);
        $usuario =  $sentencia->fetchAll();
        $id_usuario = $usuario[0]["id_usuario"];
      };
      $sentencia = $this->db->prepare('INSERT INTO `reporte` (`latitud`, `longitud`, `direcciondelHecho`, `rutaVideo`, `fechaCreacion`, `patente`, `fk_id_usuario`) VALUES (?,?,?,?,?,?,?)');
      $resultado =  $sentencia->execute([$latitud,$longitud,$direccionDenuncia,$ruta,$fecha,$patente,$id_usuario]);
      return $sentencia->rowCount();
  }
    }
    ?>
