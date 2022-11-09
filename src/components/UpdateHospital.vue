<template>
    <div>
        <h1>Update Hospital</h1>

        <form method="POST" v-on:submit.prevent="updateHospital()" v-if="hospital">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="hospital.nombre" />
            <label>Direccion</label>
            <input type="text" class="form-control" v-model="hospital.direccion" />
            <label>Telefono</label>
            <input type="text" class="form-control" v-model="hospital.telefono" />
            <label>Camas</label>
            <input type="number" class="form-control" v-model="hospital.camas" />
            <br />
            <button class="btn btn-info">Modificar hospital</button>
        </form>
    </div>
</template>

<script>
import ServicesHospitales from './../services/ServicesHospitales';
const service = new ServicesHospitales();

export default {
    name : "UpdateHospital" ,
    data() {
        return{
            hospital : null ,
            id : 0
        }
    },
    methods : {
        updateHospital() {
            service.putHospitales(this.hospital).then( () => {
                this.$router.push("/hospitales");
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;

        service.getHospitalesId(this.id).then( res => {
            this.hospital = res;
        })
    }
}
</script>

<style>

</style>