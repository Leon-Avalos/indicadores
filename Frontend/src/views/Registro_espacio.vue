<template>
  <div id="espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <HelloWorld msg="Registro de Espacio de trabajo" />
    
    <br>
   
    <div class="container">

      <section class="form">
        <form class="was-validated">

          <div class="mb-3">
              <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
              <input v-model="nombreEspacio" type="text" class="form-control" id="inputNombreEspacioTrabajo" placeholder="Nombre espacio de trabajo" required> 
              <div class="invalid-feedback"> Ingrese el nombre del espacio de trabajo del proyecto </div>
          </div>

          <div class="mb-3">
            <label for="inputDescripciónEspacioTrabajo" class="form-label">Descripción espacio</label>
            <textarea v-model="descripcionEspacio" class="form-control" id="inputDescripciónEspacioTrabajo" rows="3" required></textarea>
            <div class="invalid-feedback"> Ingrese una descripción basica del espacio de proyecto </div>
          </div>
          <div class="mb-3">
            <input type="date" v-model="fecha" name="Fecha"  class="form-control" id="" required>
            <div class="invalid-feedback"> Ingrese fecha de culminación del proyecto </div>
          </div>

          <button type="submit" @click.prevent="crearEspacioDeTrabajo" class="btn btn-outline-success">Registrar</button>
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
    fecha: '',
    descripcionEspacio: '',
    espaciosDeTrabajo: []

  }),
  methods: {
    crearEspacioDeTrabajo: function() {
      this.espaciosDeTrabajo.push({
        nombreEspacio: this.nombreEspacio,
        descripcionEspacio: this.descripcionEspacio
      });
      this.limpiarCampos();
    },  
    limpiarCampos: function(){
      this.nombreEspacio = '';
      this.fecha = '';
      this.descripcionEspacio = '';
    }
  }
};
</script>