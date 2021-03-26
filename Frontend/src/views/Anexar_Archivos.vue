<template>
  <div class="container">
    <h3>Bienvenido al espacio de trabajo: Espacio Test</h3>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="cedula">Cedula</label>
        <div class="col-sm-10">
          <input c class="form-control" type="text" name="cedula" id="cedula" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="nombre">Nombre</label>
        <div class="col-sm-10">
          <input v-model="nombre" class="form-control" type="text" name="nombre" id="nombre" />
        </div>
      </div>
      <div class="form-group row">
        <label for="descripcion">Descripción</label>
        <textarea
          v-model="descripcion"
          class="form-control"
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="6"
        ></textarea>
      </div>
      <div class="input-group mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02" />
          <label class="custom-file-label" for="inputGroupFile02"
            >Elegir Archivo</label
          >
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="">Subir</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Anexar_Archivos",
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

