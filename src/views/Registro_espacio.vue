<template>
  <div id="espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Registro de Espacio de trabajo" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <br>
   
    <div class="container">
      <section class="form">
        <form>
          <div class="mb-3">
              <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
              <input v-model="nombre" type="text" class="form-control" id="inputNombreEspacioTrabajo" placeholder="Nombre espacio de trabajo"
              /> 
          </div>

          <div class="mb-3">
            <label for="inputDescripciónEspacioTrabajo" class="form-label">Descripción espacio</label>
            <textarea class="form-control" id="inputDescripciónEspacioTrabajo" rows="3"></textarea>
          </div>

          <button type="submit" @click.prevent="crearEspacioDeTrabajo" class="btn btn-outline-success">Registrar</button>
        </form>
      </section>

      <section class="data">
        <caption >
          Espacios de trabajo
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
              <tr v-for="(espacio) in espacios" :key="espacio.codigo">
                <td>{{espacio.cedula}}</td>
                <td> {{espacio.nombre}} </td>
                <td> {{espacio.descripcion}} </td>
              </tr>
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
    cedula: '',
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    investigadores: []
  }),
  methods: {
    crearInvestigador: function() {
      this.investigadores.push({
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contraseña: this.contraseña,
      });
      console.log(this.investigadores)
    }
  }
};
</script>