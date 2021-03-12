<template>
  <div id="integrantes_espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <HelloWorld msg="Registro de integrantes del Espacio de trabajo" />
    <br>
    <p></p>
    <div class="container">

      <section class="form">
        <form class="was-validated">

          <div class="mb-3">
            <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
            <select class="form-select"  aria-label="selectespacio" id="selectEspacioTrabajo" required>
              <option value="">Selecciona un espacio de trabajo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="invalid-feedback">Selecciona un espacio de trabajo</div>
          </div>
          <br>
          <div class="form-row">
            <div class="col-auto">
              <label>Cedula investigador</label>
            </div>
            <div class="col-auto">
              <label for="inputCedulaInvestigador" class="visually-hidden">Cedula investigador</label>
              <input type="int" class="form-control" id="inputCedulaInvestigador" placeholder="Cedula" required>
              <div class="invalid-feedback">Ingrese la cedula del investigador</div>
            </div>
            <div class="col-auto">
              <button type="submit" @click="registrarEspacioTrabajo" class="btn btn-outline-success mb-3" >Registrar en el espacio de trabajo</button>
            </div>
          </div>
        </form>
      </section>


      <section class="data">
        <caption >
          Integrantes
        </caption>
          <table class="table">
            <thead>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Rol Investigador</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <!-- TODO: Renderizar integrantes de el espacio seleccionado-->
            </tbody>
          </table>
      </section>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
    nombreEspacioDeTrabajo: '',
    cedulaInvestigador: '',
    investigadoresEspacioDeTrabajo: [],
    options: ['', '', '', '', '']
  }),
  methods: {
    crearInvestigador: function() {
      this.investigadoresEspacioDeTrabajo.push({
        nombreEspacioDeTrabajo: this.nombreEspacioDeTrabajo,
        cedulaInvestigador: this.cedulaInvestigador
      });
      console.log(this.investigadoresEspacioDeTrabajo)
    }
  }
};