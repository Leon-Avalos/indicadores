<template>
  <div id="investigadores" class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Nombre</label>
              <input
                v-model="nombre"
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Nombre"
                required
              />
              <p class="h-25 text-danger" v-show="!nombreValido">
                El nombre es requerido
              </p>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Apellido</label>
              <input
                v-model="apellido"
                type="text"
                class="form-control"
                id="apellido"
                placeholder="Apellido"
                required
              />
              <p class="h-25 text-danger" v-show="!apellidoValido">
                El apellido es requerido
              </p>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Cedula</label>
              <input
                v-model="cedula"
                type="text"
                class="form-control"
                id="cedula"
                placeholder="Cedula"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Correo</label>
              <input
                v-model="correo"
                type="email"
                class="form-control"
                id="email"
                placeholder="Correo"
                required
              />
              <p class="h-25 text-danger" v-show="!correoValido">
                El correo no es valido
              </p>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Contraseña</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
              required
            />
          </div>
          <button
            type="submit"
            @click.prevent="crearInvestigador"
            class="btn btn-outline-success"
          >
            Registrar
          </button>
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
