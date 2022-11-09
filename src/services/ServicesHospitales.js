import Global from "./../Global"
import axios from "axios";

export default class ServicesHospitales {
    getHospitales() {
        return new Promise(function (resolve) {
            var request = "/api/Hospitales/";
            var url = Global.urlHospitales + request;

            axios.get(url).then( res =>{
                resolve(res.data);
            })
        })
    }

    getHospitalesId(id) {
        return new Promise(function (resolve) {
            var request = "/api/Hospitales/" + id;
            var url = Global.urlHospitales + request;

            axios.get(url).then( res =>{
                resolve(res.data);
            })
        })
    }

    postHospitales(hospital) {
        return new Promise(function (resolve) {
            var request = "/api/Hospitales/";
            var url = Global.urlHospitales + request;

            axios.post(url, hospital).then( res => {
                resolve(res);
            })
        })
    }

    putHospitales(hospital) {
        return new Promise(function (resolve) {
            var request = "/api/Hospitales/";
            var url = Global.urlHospitales + request;

            axios.put(url, hospital).then( res => {
                resolve(res.data);
            })
        })
    }

    deleteHospitales(id) {
        return new Promise(function (resolve) {
            var request = "/api/Hospitales/" + id;
            var url = Global.urlHospitales + request;

            axios.delete(url).then( res => {
                resolve(res.data);
            })
        })
    }
}