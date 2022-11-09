import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent';
import HospitalesComponent from './components/HospitalesComponent';
import CreateHospital from './components/CreateHospital';
import DetallesHospitales from './components/DetallesHospitales';
import UpdateHospital from './components/UpdateHospital';
import DeleteHospital from './components/DeleteHospital';

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
        path : "/updateHospital/:id", component : UpdateHospital
    },
    {
        path : "/deleteHospital/:id", component : DeleteHospital
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;