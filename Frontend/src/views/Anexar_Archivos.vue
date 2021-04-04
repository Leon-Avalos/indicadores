<template>
  <div id="anexar_archivos" class="home">
    <HelloWorld msg="Registro de archivos en espacio de trabajo" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <br />

    <div class="container">
      <form @submit.prevent="enviarArchivo" enctype="multipart/form-data" class="was-validated">
        <div class="mb-3">
          <label class="form-label" for="cedula">Cedula</label>
          <input
            v-model="cedulaInvestigador"
            class="form-control"
            type="text"
            placeholder="Cedula Investigador"
            name="cedula"
            id="cedula"
            required
          />
          <div class="invalid-feedback">Ingresa la cedula del investigador</div>
        </div>

        <div class="mb-3">
          <label for="selectNombreCompromiso" class="form-label"
            >Compromiso</label
          >
          <select
            v-model="nombreCompromiso"
            class="form-select"
            aria-label="selectCompromiso"
            id="selectNombreCompromiso"
            
          >
            <option value="">Selecciona el nombre del compromiso</option>
          </select>
          <div class="invalid-feedback">Selecciona un compromiso</div>
        </div>

        <br />
        <hr />
        <br />

        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea
            v-model="descripcionEntrega"
            class="form-control"
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="6"
            required
          ></textarea>
          <div class="invalid-feedback">
            Debes registrar una descripción a tu entrega
          </div>
        </div>

        <div class="mb-3">
          <label for="descripcion" class="form-label"
            >Archivo del compromiso para adjuntar</label
          >
          <div class="custom-file">
            <input
              @change="cargarArchivo"
              type="file"
              ref="file"
              class="custom-file-input"
              id="inputArchivo"
              required
            />
            <label class="custom-file-label" for="inputGroupFile02"
              >Elegir Archivo</label
            >
          </div>
        </div>
        <button
          type="submit"
          id="btnArchivo"
          class="btn btn-outline-success"
        >
          Enviar entrega
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "AnexarArchivos",
  components: {
    HelloWorld,
  },
  data: () => ({
    cedulaInvestigador: "",
    nombreCompromiso: [],
    descripcionEntrega: "",
    archivo: "",
  }),
  methods: {
    cargarArchivo() {
      this.archivo = this.$refs.file.files[0];
      console.log(this.archivo.name);
    },
    enviarArchivo() {
      console.log("Enviando: " + this.archivo.name);
      
      const formData = new FormData()
      
      formData.append("file", this.archivo) 
      
      axios.post("https://subir-archivo.free.beeceptor.com/subir-archivo", formData).then((resp) => {
        console.log(resp);
        alert("Se ha subido correctamente: " + this.archivo.name)
      })
    },
  },
};
</script>

<style>
</style>

