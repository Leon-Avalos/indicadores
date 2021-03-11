const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/Crear_compromiso");

/**
 * Obtener todas los compromiso
 */
router.get("/compromiso", (req, res) => {
  _controlador
    .consultarCompromisos()
    .then((respuestaDB) => {
      let registros = respuestaDB.rows;
      console.log(registros);
      res.send({
        ok: true,
        info: registros,
        mensaje: "Compromisos consultados",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Guarda un compromiso
 */
router.post("/compromiso", (req, res) => {
  try {
    let info_compromiso = req.body;

    _controlador.validarCompromiso(info_compromiso);
    
    _controlador
      .guardarCompromiso(info_compromiso)
      .then((respuestaDB) => {
        res.send({
          ok: true,
          mensaje: "Compromiso guardado",
          info: info_compromiso,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

/**
 * Eliminar un compromiso
 */
router.delete("/compromiso/:idcompromise", (req, res) => {
  let idcompromise = req.params.idcompromise;

  if (idcompromise) {
    _controlador
      .eliminarCompromiso({ idcompromise })
      .then((respuestaDB) => {
        res.send({ ok: true, info: {}, mensaje: "Compromiso eliminado" });
      })
      .catch((error) => {
        res.send(error);
      });
  }
});

module.exports = router;