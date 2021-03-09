<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Registro de Investigadores" />
    <div class="container">
      <section class="form">
        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Cedula" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Nombres" />
            </div>
          </div>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" name="" id="" placeholder="Correo" />
            </div>
            <div class="col">
              <input type="text" class="form-control" name="" id="" placeholder="Clave" />
            </div>
          </div>
        </form>
      </section>

      <section class="data">
        <caption>
          Investigadores
          <table class="table">
            <thead>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>
          </table>
        </caption>
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
};
</script>
