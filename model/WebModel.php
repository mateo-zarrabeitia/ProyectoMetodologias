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
        $usuario = 1;
        $sentencia = $this->db->prepare('INSERT INTO `reporte` (`latitud`, `longitud`, `direcciondelHecho`, `rutaVideo`, `fechaCreacion`, `patente`, `fk_id_usuario`) VALUES (?,?,?,?,?,?,?)');
        $resultado =  $sentencia->execute([$latitud,$longitud,$direccionDenuncia,$ruta,$fecha,$patente,$usuario]);
        return $sentencia->rowCount();

      }
    }
    ?>
