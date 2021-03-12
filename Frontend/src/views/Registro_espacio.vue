<template>
  <div id="espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <HelloWorld msg="Registro de Espacio de trabajo" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <br>
   
    <div class="container">

      <section class="form">
        <form class="was-validated">

          <div class="mb-3">
              <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
              <input v-model="nombre" type="text" class="form-control" id="inputNombreEspacioTrabajo" placeholder="Nombre espacio de trabajo" required> 
              <div class="invalid-feedback"> Ingrese el nombre del espacio de trabajo del proyecto </div>
          </div>

          <div class="mb-3">
            <label for="inputDescripciónEspacioTrabajo" class="form-label">Descripción espacio</label>
            <textarea class="form-control" id="inputDescripciónEspacioTrabajo" rows="3" required></textarea>
            <div class="invalid-feedback"> Ingrese una descripción basica del espacio de proyecto </div>
          </div>

          <button type="submit" @click="crearEspacioDeTrabajo" class="btn btn-outline-success">Registrar</button>
        </form>
      </section>

      <section class="data">
        <caption >
          Espacios
        </caption>
          <table class="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre espacio</th>
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
    nombreEspacio: '',
    descripcionEspacio: '',
    espaciosDeTrabajo: []
  }),
  methods: {
    crearInvestigador: function() {
      this.espaciosDeTrabajo.push({
        nombreEspacio: this.nombreEspacio,
        descripcionEspacio: this.descripcionEspacio
      });
      console.log(this.espaciosDeTrabajo)
    }
  }
};
</script>