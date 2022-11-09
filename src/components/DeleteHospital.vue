<template>
    <div>
        <h1>¿Esta seguro que desea eliminar el hospital?</h1>

        <button class="btn btn-danger" @click="deleteHospital">Eliminar</button>

        <router-link to="/hospitales" class="btn btn-success">Volver</router-link>
    </div>
</template>

<script>
import ServicesHospitales from './../services/ServicesHospitales';
const service = new ServicesHospitales();

export default {
    name : "DeleteHospital" ,
    data() {
        return{
            id : 0
        }
    },
    methods : {
        deleteHospital() {
            service.deleteHospitales(this.id).then( res => {
                this.hospital = res;
                this.$router.push("/hospitales");
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
    }
}
</script>

<style>

</style>