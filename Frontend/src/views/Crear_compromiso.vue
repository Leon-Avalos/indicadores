<template>
  <div id="crear_compromiso" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <HelloWorld msg="Crear compromiso para un investigador" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <br>
   
    <div class="container">
      <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
      <select class="form-select" aria-label="Default select example" required>
        <option selected>Selecciona un espacio de trabajo</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label for="inputNombreDeInvestigador" class="form-label">Nombre del investigador</label>
      <select class="form-select" aria-label="Default select example" required>
        <option selected>Selecciona un investigador</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <br>
      <hr>
      <br>
        <form>
          <div class="mb-3">
              <label for="inputNombreCompromiso" class="form-label">Nombre del compromiso</label>
              <input v-model="nombre" type="text" class="form-control" id="inputNombreCompromiso" placeholder="Nombre del compromiso" required> 
          </div>

          <div class="mb-3">
            <label for="inputDescripciónCompromiso" class="form-label">Descripción compromiso</label>
            <textarea type="text" class="form-control" id="inputDescripciónCompromiso" rows="3" required></textarea>
          </div>

          <button type="submit" class="btn btn-outline-success">Registrar</button>
        </form>

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