<template>
  <div id="anexar_archivos" class="home">
    <HelloWorld msg="Registro de archivos en espacio de trabajo" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <br>

    <div class="container">
      <form class="was-validated">

        <div class="mb-3">
          <label class="form-label" for="cedula">Cedula</label>
          <input v-model="cedulaInvestigador" class="form-control" type="text" placeholder="Cedula Investigador" name="cedula" id="cedula" required>
          <div class="invalid-feedback">Ingresa la cedula del investigador</div>
        </div>

        <div class="mb-3">
          <label for="selectNombreCompromiso" class="form-label">Compromiso</label>
          <select v-model="nombreCompromiso" class="form-select"  aria-label="selectCompromiso" id="selectNombreCompromiso" required>
            <option value="">Selecciona el nombre del compromiso</option>
            
          </select>
          <div class="invalid-feedback">Selecciona un compromiso</div>
        </div>

        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea v-model="descripcionEntrega" class="form-control" name="descripcion" id="descripcion" cols="30" rows="6" required></textarea>
          <div class="invalid-feedback">Debes registrar una descripción a tu entrega</div>
        </div>

        <div class="mb-3">
          <label for="descripcion" class="form-label">Archivo del compromiso para adjuntar</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputArchivo" required>
            <label class="custom-file-label" for="inputGroupFile02">Elegir Archivo</label>
          </div>
        </div>
        <button type="submit" @click.prevent="anexarArchivo" id="btnArchivo" class="btn btn-outline-success">Enviar entrega</button>
      </form>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
      cedulaInvestigador: '',
      nombreCompromiso: [],
      descripcionEntrega: '',
      archivo: ''
  }),
};
</script>
<style>
</style>

