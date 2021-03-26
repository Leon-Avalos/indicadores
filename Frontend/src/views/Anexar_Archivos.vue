<template>
    <div class="container">
        <h3>Bienvenido al espacio de trabajo: Espacio Test</h3>
        <form>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="cedula">Cedula</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" name="cedula" id="cedula">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="nombre">Nombre</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" name="nombre" id="nombre">
                </div>
            </div>
            <div class="form-group row">
                <label for="descripcion">Descripción</label>
                <textarea class="form-control" name="descripcion" id="descripcion" cols="30" rows="6"></textarea>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "Anexar_Archivos",
    data: () => ({

    })
}
</script>
<style>

</style>

