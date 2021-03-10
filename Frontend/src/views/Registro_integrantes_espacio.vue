<template>
  <div id="integrantes_espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <HelloWorld msg="Registro de integrantes del Espacio de trabajo" />
    <br>
   
    <div class="container">
      <label for="inputNombreEspacioTrabajo" class="form-label">Espacio de trabajo</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona un espacio de trabajo</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <br>
      <form class="row g-3">
        <div class="col-auto">
          <label>Cedula investigador</label>
        </div>
        <div class="col-auto">
          <label for="inputCedulaInvestigador" class="visually-hidden">Cedula investigador</label>
          <input type="int" class="form-control" id="inputCedulaInvestigador" placeholder="Cedula">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-outline-success mb-3">Registrar en el espacio de trabajo</button>
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
                <th>Rol Investigador</th>
                <th>Eliminar</th>
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
    investigadores: [],
    options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']
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