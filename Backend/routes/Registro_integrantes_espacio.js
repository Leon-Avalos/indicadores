const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/Registro_integrantes_espacio");

/**
 * Obtener todas los integrante
 */
router.get("/integrante", (req, res) => {
  _controlador
    .consultarIntegrantes()
    .then((respuestaDB) => {
      let registros = respuestaDB.rows;
      res.send({
        ok: true,
        info: registros,
        mensaje: "Integrantes consultados",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Guarda un integrante
 */
router.post("/integrante", (req, res) => {
  try {
    let info_integrante = req.body;

    _controlador.validarIntegrante(info_integrante);
    
    _controlador
      .guardarIntegrante(info_integrante)
      .then((respuestaDB) => {
        res.send({
          ok: true,
          mensaje: "Integrante guardado",
          info: info_integrante,
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
 * Eliminar un integrante
 */
router.delete("/integrante/:researcher_document", (req, res) => {
  let researcher_document = req.params.researcher_document;

  if (researcher_document) {
    _controlador
      .eliminarIntegrante({ researcher_document })
      .then((respuestaDB) => {
        res.send({ ok: true, info: {}, mensaje: "Integrante eliminado" });
      })
      .catch((error) => {
        res.send(error);
      });
  }
});

/**
 * Actualizar el rol de un integrante
 */
router.put("/integrante/rol/:researcher_document", (req, res) => {
  let researcher_document = req.params.researcher_document;

  if (researcher_document) {
    _controlador
      .asignarRol({ researcher_document })
      .then((respuestaDB) => {
        res.send({ ok: true, info: {}, mensaje: "Integrante actualizado" });
      })
      .catch((error) => {
        res.send(error);
      });
  }
});

module.exports = router;