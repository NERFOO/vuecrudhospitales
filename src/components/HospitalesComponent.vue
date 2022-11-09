<template>
    <div>
        <h1>Hospitales</h1>

        <div v-if="hospitales == null">
            <img src="./../assets/images/loading.gif" alt="" style="width:100%"/>
        </div>

        <table class="table table-striped" v-else>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Camas</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hosp in hospitales" :key="hosp">
                    <td>{{hosp.idHospital}}</td>
                    <td>{{hosp.nombre}}</td>
                    <td>{{hosp.direccion}}</td>
                    <td>{{hosp.camas}}</td>
                    <td>
                        <router-link :to="`/detalles/${hosp.idHospital}`" class="btn btn-success">Detalles</router-link>
                        <router-link :to="`/updateHospital/${hosp.idHospital}`" class="btn btn-info">Modificar</router-link>
                        <router-link :to="`/deleteHospital/${hosp.idHospital}`" class="btn btn-danger">Eliminar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServicesHospitales from './../services/ServicesHospitales';
const service = new ServicesHospitales();

export default {
    name : "HospitalesComponent" ,
    data() {
        return{
            hospitales : null
        }
    },
    mounted() {
        service.getHospitales().then( result => {
            this.hospitales = result;
        })
    }
}
</script>

<style>

</style>