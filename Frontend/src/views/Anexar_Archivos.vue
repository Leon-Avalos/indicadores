<template>
  <div id="anexar_archivos" class="home">
    <HelloWorld msg="Registro de archivos en espacio de trabajo" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <br>

    <div class="container">
      <form class="was-validated">

        <div class="mb-3">
          <label class="form-label" for="cedula">Cedula</label>
          <input v-model="cedula" class="form-control" type="text" placeholder="Cedula Investigador" name="cedula" id="cedula" required>
          <div class="invalid-feedback">Ingresa la cedula del investigador</div>
        </div>

        <div class="mb-3">
          <label class="form-label" for="nombre">Nombre</label>
          <input v-model="nombre" class="form-control" type="text" name="nombre" id="nombre" placeholder="nombre Investigador" required>
          <div class="invalid-feedback">Ingresa la cedula del investigador</div>
        </div>

        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea v-model="descripcion" class="form-control" name="descripcion" id="descripcion" cols="30" rows="6" required></textarea>
          <div class="invalid-feedback">Debes registrar una descripción a tu entrega</div>
        </div>

        <div class="mb-3">
          <label for="descripcion" class="form-label">Archivo del compromiso para adjuntar</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" required>
            <label class="custom-file-label" for="inputGroupFile02">Elegir Archivo</label>
          </div>
        </div>
        <button type="submit" @click.prevent="anexarArchivo" class="btn btn-outline-success">Enviar entrega</button>
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
      cedula: '',
      nombre: '',
      descripcion: '',
      archivo: ''
  }),
};
</script>
<style>
</style>

