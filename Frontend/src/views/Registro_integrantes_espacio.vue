<template>
  <div id="integrantes_espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <HelloWorld msg="Registro de integrantes en el espacio" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    
    <br>

    <div class="container">
      <form class="was-validated">
        <div class="mb-3">
          <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
          <select v-model="nombreEspacioDeTrabajo" class="form-select"  aria-label="selectespacio" id="selectEspacioTrabajo" required>
            <option value="">Selecciona un espacio de trabajo</option>
          </select>
          <div class="invalid-feedback">Selecciona un espacio de trabajo</div>
        </div>
        <br>
        <div class="form-row mb-3" >
          <div class="col-auto">
            <label>Cedula investigador</label>
          </div>
          <div class="col-auto">
            <label for="inputCedulaInvestigador" class="visually-hidden">Cedula investigador</label>
            <input v-model="cedulaInvestigador" type="int" class="form-control" id="inputCedulaInvestigador" placeholder="Cedula" required>
            <div class="invalid-feedback">Ingrese la cedula del investigador</div>
          </div>
          <div class="col-auto">
            <button type="submit" @click.prevent="agregarInvestigador" class="btn btn-outline-success mb-3" >Registrar en el espacio de trabajo</button>
          </div>
        </div>
      </form>
      


      <section class="data">
        <caption >
          Integrantes
        </caption>
          <table class="table">
            <thead>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                
              </tr>
            </thead>
            <tbody>
              <!-- Renderizar integrantes de el espacio seleccionado-->
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
    nombreEspacioDeTrabajo: [],
    cedulaInvestigador: '',
    investigadoresEspacioDeTrabajo: [],
    options: ['', '', '', '', '']
  }),
  methods: {
    agregarInvestigador: function() {
      this.investigadoresEspacioDeTrabajo.push({
        nombreEspacioDeTrabajo: this.nombreEspacioDeTrabajo,
        cedulaInvestigador: this.cedulaInvestigador
      });
    }
  }
};
</script>