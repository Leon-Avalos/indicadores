<template>
  <div id="integrantes_espacio_trabajo" class="home">
    <!-- <img alt="Vue logo" src="../static/logo.png"> -->
    <HelloWorld msg="Registro de integrantes en el espacio" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    
    <br>

    <div class="container">
      <form class="was-validated">
        <div class="mb-3">
          <label for="inputIdEspacioTrabajo" class="form-label">Espacio de trabajo</label>
          <select v-model="idEspacioDeTrabajo" class="form-select"  aria-label="selectespacio" id="selectIdEspacioTrabajo" required>
            <option value="">Selecciona un espacio de trabajo</option>

          </select>
          <div class="invalid-feedback">Selecciona un espacio de trabajo</div>
        </div>
        <br>
        <div class="form-row mb-3" >
          <div class="col-auto">
            <label>Cedula investigador</label>
          </div>
          <div class="col-auto">
            <label for="inputCedulaInvestigador" class="visually-hidden">Cedula investigador</label>
            <input v-model="idInvestigador" type="int" class="form-control" id="inputCedulaInvestigador" placeholder="Cedula" required>
            <div class="invalid-feedback">Ingrese la cedula del investigador</div>
          </div>
          <div class="col-auto">
            <button type="submit" @click.prevent="agregarInvestigador" class="btn btn-outline-success mb-3" >Registrar en el espacio de trabajo</button>
          </div>
        </div>
      </form>
      


      <section class="data">
        <caption >
          Integrantes
        </caption>
          <table class="table">
            <thead>
              <tr>
                <th>Codigo integrante</th>
                <th>Cedula integrante</th>
                <th>Rol</th>
                <th>Acciones</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="integrante in integrantes" 
              :key="integrante.idreseacher">
                <td>{{ integrante.idresearcher_workspace }}</td>
                <td>{{ integrante.researcher_document }}</td>

                <td>
                  <select v-model="rolInvestigador"  class="form-select"  aria-label="selectRol" id="selectRol" required>
                    <option value="0">Sin rol</option>
                    <option value="1">Co investigador</option>
                    <option value="2">Auxiliar de investigacion</option>
                    <option value="3">Investigador asociado</option>
                  </select> <label> </label>
                </td>
                <td><button size="sm" @click.prevent="cargarIntegrante" class="btn btn-outline-primary" id="btn-mod">Modificar rol</button></td>
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
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
    idEspacioDeTrabajo: '',
    idWorkValido: true,
    espaciosTrabajo: [],
    idInvestigador: '',
    idInvValido: true,
    investigadores: [],
    integrantes: []
  }),
  created: function () {
    this.obtenerEspaciosDeTrabajo();
    this.obtenerIntegrantesEspacio();
  },
  methods: {
    obtenerEspaciosDeTrabajo: function () {
      axios.get("http://localhost:3001/workspace")
        .then((result) => {
          this.espaciosTrabajo = result.data.info
          for (let i = 0; i < this.espaciosTrabajo.length; i++) {
            console.log(this.espaciosTrabajo[i]['idworkspace'])
            var html = this.stringToHTML(`<option value=${this.espaciosTrabajo[i]['idworkspace']}>${this.espaciosTrabajo[i]['workspace_name']}</option>`);
            document.getElementById('selectIdEspacioTrabajo').appendChild(html)
          }
        });
    },
    stringToHTML: function(s){
      const parser = new DOMParser();
      const doc = parser.parseFromString(s, "text/html");
      return doc.body.firstChild;
    },

    obtenerIntegrantesEspacio: function () {
      axios.get("http://localhost:3001/integrante")
        .then((result) => {
          this.integrantes = result.data.info.map(x => {
            var f = Object.assign({}, x);
            f.due_date = x.due_date.slice(0, 10);
            return f;
          });
          for (let i = 0; i < this.integrantes.length; i++) {
            const aux = this.integrantes[i];
            switch (aux["status"]) {
              case 0:
                this.integrantes[i]["status"] = "No iniciado";
                break;
              case 1:
                this.integrantes[i]["status"] = "En Curso";
                break;
              case 2:
                this.integrantes[i]["status"] = "Finalizado";
                break;
              default:
                break;
            }
          }
        });
    },
    
    /** 
     obtenerInvestigadores: function () {
      axios
        .get("http://localhost:3001/investigador")
        .then((result) => {
          this.investigadores = result.data;
          for (let i = 0; i < this.investigadores.length; i++) {
            var html = this.stringToHTML(`<option value=${this.investigadores[i]['researcher_document']}>${this.investigadores[i]['first_name']} ${this.investigadores[i]['last_name']}</option>`);
            document.getElementById('selectIdInvestigador').appendChild(html)
          }
        });
    },
    */
    cargarIntegrante: function(e){
      this.enEdicion = true
      var fila = e.target.parentNode.parentNode; //Se almacena en una variable a la fila que la contiene
      document.getElementById("inputCedulaInvestigador").setAttribute("disabled", "")
      document.getElementById("selectIdEspacioTrabajo").setAttribute("disabled", "")

      this.researcher_document = fila.cells[1].textContent
      this.idworkspace = fila.cells[2].textContent
    },
     validarFormulario: function () {
      if (!this.idEspacioDeTrabajo) {
        this.idWorkValido = false;
      }
      if (!this.idInvestigador) {
        this.idInvValido = false;
      }
    },
    limpiarCampos: function(){
      this.idEspacioDeTrabajo = '';
      this.idInvestigador = '';
    },
    agregarInvestigador: function() {
      this.validarFormulario();
      let testPost ={
        researcher_document: this.idInvestigador,
        idworkspace: this.idEspacioDeTrabajo
      };
      axios.post('http://localhost:3001/integrante', testPost).then((resp) => {
        if (resp.data.name == 'error') {
          this.limpiarCampos();
          alert('No se puede ingresar el integrante porque ya se encuentra registrado');
        } else if(resp.data.ok) {
          this.limpiarCampos();
          alert('Integrante registrado');
        }
      })
      this.obtenerIntegrantesEspacio();
    }
  }
};
</script>