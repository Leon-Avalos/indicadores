/**
 * CONTROLADOR DE COMPROMISOS
 *
 */

//Importar servicio de postgres
const ServicioPg = require("../services/postgreSQL");

/**
 * Validar la información del compromiso
 * @param {*} compromiso Json del compromiso
 */
let validarCompromiso = (compromiso) => {
  if (!compromiso) {
    throw {
      ok: false,
      mensaje: "La información del compromiso es obligatoria.",
    };
  }
  if (!compromiso.compromise_name) {
    throw { ok: false, mensaje: "El nombre del compromiso es obligatorio." };
  }
  if (!compromiso.compromise_description) {
    throw {
      ok: false,
      mensaje: "La descripción del compromiso es obligatoria.",
    };
  }
  if (!compromiso.due_date) {
    throw { ok: false, mensaje: "La fecha para el compromiso es obligatoria." };
  }
  if (!compromiso.idworkspace) {
    throw {
      ok: false,
      mensaje: "El codigo del espacio de trabajo es obligatorio.",
    };
  }
  if (!compromiso.researcher_document) {
    throw {
      ok: false,
      mensaje: "El documento del investigador es obligatorio.",
    };
  }
};

/**
 * Guardar en base de datos un compromiso
 * @param {*} compromiso
 */
let guardarCompromiso = async (compromiso) => {
  console.log(compromiso);
  let _servicio = new ServicioPg();
  let sql = `
    INSERT INTO public.compromise(
        compromise_name, compromise_description, due_date)
        VALUES ( '${compromiso.compromise_name}', '${compromiso.compromise_description}', '${compromiso.due_date}');


    INSERT INTO public.compromise_workspace(
        idworkspace, researcher_document)
        VALUES (${compromiso.idworkspace}, ${compromiso.researcher_document});`;

  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

/**
 * Consultar compromisoes
 * @param {*} filtros
 */
let consultarCompromisos = async () => {
  let _servicio = new ServicioPg();
  let sql = `SELECT * FROM public.compromise;`;

  console.log(sql);
  let respuesta = await _servicio.ejecutarSql(sql);
  console.log(respuesta);
  return respuesta;
};

let eliminarCompromiso = async ({ idcompromise }) => {
  let _servicio = new ServicioPg();
  let sql = `DELETE FROM public.compromise WHERE  idcompromise=${idcompromise} cascade`;

  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};

module.exports = {
  validarCompromiso,
  guardarCompromiso,
  consultarCompromisos,
  eliminarCompromiso,
};
