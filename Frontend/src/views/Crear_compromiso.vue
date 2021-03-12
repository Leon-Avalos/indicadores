<template>
  <div id="crear_compromiso" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <HelloWorld msg="Crear compromiso para un investigador" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <br>
   
    <div class="container">
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

        <div class="mb-3">
          <label for="inputNombreInvestigador" class="form-label">Nombre investigador</label>
          <select class="form-select"  aria-label="selectinvestigador" id="inputNombreInvestigador" required>
            <option value="">Selecciona un investigador para el compromiso</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Selecciona un investigador para el compromiso</div>
        </div>

        <br>
        <hr>
        <br>
        
        <div class="mb-3">
          <label for="inputNombreCompromiso" class="form-label">Nombre del compromiso</label>
          <input v-model="nombre" type="text" class="form-control" id="inputNombreCompromiso" placeholder="Nombre del compromiso" required> 
          <div class="invalid-feedback">Ingresa el nombre de un compromiso</div>
        </div>

          <div class="mb-3">
            <label for="inputDescripciónCompromiso" class="form-label">Descripción compromiso</label>
            <textarea type="text" class="form-control" id="inputDescripciónCompromiso" rows="3" required></textarea>
            <div class="invalid-feedback">Ingresa la descripcion detallada del compromiso</div>
          </div>

          <button type="submit" @click="crearCompromiso" class="btn btn-outline-success">Registrar</button>
        </form>

      <section class="data">
        <caption >
          Compromisos
        </caption>
          <table class="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre compromiso</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              

              
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
    nombreInvestigador: '',
    nombreCompromiso: '',
    descripcionCompromiso: '',
    compromisos: []
  }),
  methods: {
    crearInvestigador: function() {
      this.compromisos.push({
        nombreEspacioDeTrabajo: this.nombreEspacioDeTrabajo,
        nombreInvestigador: this.nombreInvestigador,
        nombreCompromiso: this.nombreCompromiso,
        descripcionCompromiso: this.descripcionCompromiso,
      });
      console.log(this.compromisos)
    }
  }
};
</script>