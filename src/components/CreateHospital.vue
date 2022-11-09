<template>
    <div>
        <h1>Create hospital</h1>

        <form method="POST" v-on:submit.prevent="createHospital()">
            <label>Numero</label>
            <input type="number" class="form-control" v-model="hospital.idHospital" />
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="hospital.nombre" />
            <label>Direccion</label>
            <input type="text" class="form-control" v-model="hospital.direccion" />
            <label>Telefono</label>
            <input type="text" class="form-control" v-model="hospital.telefono" />
            <label>Camas</label>
            <input type="number" class="form-control" v-model="hospital.camas" />
            <br />
            <button class="btn btn-info">Crear hospital</button>
        </form>
    </div>
</template>

<script>
import ServicesHospitales from './../services/ServicesHospitales';
const service = new ServicesHospitales();

export default {
    name : "CreateHospital" ,
    data() {
        return{
            hospital : {
                idHospital : 0 ,
                nombre : "" ,
                direccion : "" ,
                telefono : 0 ,
                camas : 0
            }
        }
    },
    methods : {
        createHospital() {
            service.postHospitales(this.hospital).then( () => {
                this.$router.push("/hospitales");
            })
        }
    }
}
</script>

<style>

</style>