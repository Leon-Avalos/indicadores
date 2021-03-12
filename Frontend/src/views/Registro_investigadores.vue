<template>
  <div id="investigadores" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <HelloWorld msg="Registro de Investigadores" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <br />
    <div class="container">

      <section class="form">
        <form class="was-validated">

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputNombreInvestigador">Nombre</label>
              <input v-model="nombre" type="text" class="form-control" id="inputNombreInvestigador" placeholder="Nombre" required>
              <div class="invalid-feedback"> Ingrese el nombre del investigador </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputApellidoInvestigador">Apellido</label>
              <input v-model="apellido" type="text" class="form-control" id="inputApellidoInvestigador" placeholder="Apellido" required>
              <div class="invalid-feedback"> Ingrese el apellido del investigador </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCedulaInvestigador">Cedula</label>
              <input v-model="cedula" type="int" class="form-control" id="inputCedulaInvestigador"  placeholder="Cedula" required>
              <div class="invalid-feedback"> Ingrese la cedula del investigador </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCorreoInvestigador">Correo</label>
              <input v-model="correo" type="email" class="form-control" id="inputCorreoInvestigador" placeholder="Correo" required>
              <div class="invalid-feedback"> Ingrese el correo del investigador </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" required>
            <div class="invalid-feedback"> Ingrese la contraseña del investigador </div>
          </div>

          <button type="submit" @click="crearEspacioDeTrabajo" class="btn btn-outline-success">Registrar</button>
        </form>
      </section>

      <section class="data">
        <caption>
          Investigadores
        </caption>
        <table class="table">
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="investigador in investigadores"
              :key="investigador.cedula"
            >
              <td>{{ investigador.cedula }}</td>
              <td>{{ investigador.nombre }}</td>
              <td>{{ investigador.correo }}</td>
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
    cedula: "",
    cedulaValida: true,
    nombre: "",
    nombreValido: true,
    apellido: "",
    apellidoValido: true,
    correo: "",
    correoValido: true,
    contraseña: "",
    investigadores: [],
  }),
  methods: {
    crearInvestigador: function () {
      this.validarFormulario();
      this.investigadores.push({
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contraseña: this.contraseña,
      });
      console.log(this.investigadores);
    },

    validarFormulario: function () {
      if (!this.nombre) {
        this.nombreValido = false;
      }
      if (!this.apellido) {
        this.apellidoValido = false;
      }
      if (!this.cedula) {
        this.cedulaValida = false;
      }
      if (!this.correo || !this.validarCorreo(this.correo)) {
        this.correoValido = false;
      }
    },
    validarCorreo: function (email) {
      var regexEmail = /(.+)@(.+){2,}\.(.+){2,}/;
      return regexEmail.test(email.toLowerCase());
    },
  },
};
</script>
