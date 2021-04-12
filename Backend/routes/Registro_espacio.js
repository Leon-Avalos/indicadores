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

router.put("/workspace/:idworkspace", (req, resp) => {
  let idworkspace = req.params.idworkspace;
  let bodyx = req.body;
  _controlador
    .modificarFecha(idworkspace, bodyx)
    .then((respuestaDB) => {
      resp.send({
        ok: true,
        mensaje: "Modificado exitosamente ",
        info: respuestaDB,
      });
    })
    .catch((error) => {
      resp.send({ ok: false, mensaje: "Error al modificar ", info: error });
    });
});

module.exports = router;
