<template>
  <div class="Registro espacio de trabajo">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Registro espacio de trabajo" />
    
    <div class="container">
      <section class="form">
        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nombre espacio de proyecto" />
            </div>
          </div>
          <br>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Descripción del espacio" />
            </div>
          </div>
        </form>
      </section>

      <section class="data">
        <caption>
          Espacios de trabajo
          <table class="table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Descripcion</th>
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
