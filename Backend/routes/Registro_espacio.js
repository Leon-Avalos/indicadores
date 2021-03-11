const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/Registro_espacio");

/**
 * Obtener todas los workspace
 */
router.get("/workspace", (req, res) => {
  _controlador
    .consultarEspaciosTrabajo()
    .then((respuestaDB) => {
      let registros = respuestaDB.rows;
      res.send({
        ok: true,
        info: registros,
        mensaje: "Workspaces consultados",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Guarda un workspace
 */
router.post("/workspace", (req, res) => {
  try {
    let info_workspace = req.body;

    _controlador.validarEspacioTrabajo(info_workspace);
    
    _controlador
      .guardarEspacioTrabajo(info_workspace)
      .then((respuestaDB) => {
        res.send({
          ok: true,
          mensaje: "Workspace guardado",
          info: info_workspace,
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
 * Eliminar un workspace
 */
router.delete("/workspace/:idworkspace", (req, res) => {
  let idworkspace = req.params.idworkspace;

  if (idworkspace) {
    _controlador
      .eliminarEspacioTrabajo({ idworkspace })
      .then((respuestaDB) => {
        res.send({ ok: true, info: {}, mensaje: "Workspace eliminado" });
      })
      .catch((error) => {
        res.send(error);
      });
  }
});

module.exports = router;
