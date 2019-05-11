<?php
class WebModel extends Model{

  function getPoints() {
    $sentencia = $this->db->prepare('SELECT `reporte`.`id_reporte`, `reporte`.`latitud`, `reporte`.`longitud`
                                      FROM `reporte`
                                      WHERE (`reporte`.`fechaFinalizada` IS NULL)');
    $sentencia->execute();
    return $sentencia->fetchAll(PDO::FETCH_ASSOC);
  }

}
?>
