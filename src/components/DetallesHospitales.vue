<template>
    <div>
        <h1>Detalles del hospital</h1>

        <div v-if="hospital">
            <h1>Nombre: {{this.hospital.nombre}}</h1>
            <h2>Dirección: {{this.hospital.direccion}}</h2>
            <h3>Camas: {{this.hospital.camas}}</h3>
        </div>

        <router-link to="/hospitales" class="btn btn-danger">Volver</router-link>
    </div>
</template>

<script>
import ServicesHospitales from './../services/ServicesHospitales';
const service = new ServicesHospitales();

export default {
    name : "DetallesHospitales" ,
    params : [ "id" ],
    data() {
        return{
            hospital : null ,
            idHospital : 0
        }
    },
    mounted() {
        this.idHospital = this.$route.params.id;
        console.log(this.idHospital);
        service.getHospitalesId(this.idHospital).then( res => {
            this.hospital = res;
        })
    }
}
</script>

<style>

</style>