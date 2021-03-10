<template>
  <div id="espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Registro de Espacios de trabajo" />
   
    <div class="container">
      <section class="form">
        <form>
          <div class="form-row">
              <label for="inputNombreEspacioTrabajo">Espacio de trabajo</label>
              <input
                v-model="nombre"
                type="text"
                class="form-control"
                id="inputNombreEspacioTrabajo"
                placeholder="Nombre espacio de trabajo"
              /> 
          </div>
          <br>
          <div class="form-row">
            <label for="inputDescripcionEspacio">Descripcion</label>
            <input
              v-model="cedula"
              type="text"
              class="form-control"
              id="inputDescripcionEspacio"
              placeholder="Cedula"
            />
            
          </div>
          <button type="submit" @click.prevent="crearEspacioDeTrabajo" class="btn btn-primary">Registrar</button>
        </form>
      </section>

      <section class="data">
        
        <caption >
          Espacios de trabajo
        </caption>
          <table class="table">
            <thead>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(investigador) in investigadores" :key="investigador.cedula">
                <td>{{investigador.cedula}}</td>
                <td> {{investigador.nombre}} </td>
                <td> {{investigador.correo}} </td>
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