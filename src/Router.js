import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent';
import HospitalesComponent from './components/HospitalesComponent';
import CreateHospital from './components/CreateHospital';
import DetallesHospitales from './components/DetallesHospitales';

const routes = [
    {
        path : "/", component : HomeComponent
    },
    {
        path : "/hospitales", component : HospitalesComponent
    },
    {
        path : "/detalles/:id", component : DetallesHospitales
    },
    {
        path : "/newHospital", component : CreateHospital
    },
    {
        path : "/updateHospital", component : CreateHospital
    },
    {
        path : "/deleteHospital", component : CreateHospital
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;