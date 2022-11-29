import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient, private loginService:LoginService){}


    cargarEmpleados(){

        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-a5e64-default-rtdb.firebaseio.com/datos.json?auth=' + token);
      }
  




    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.post('https://mis-clientes-a5e64-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

        Response=>console.log("Se ha guardado los empleados: " + Response),

        error=> console.log("Error: " + error),


        );

    }


    actualizarEmpleados(indice:number, empleado:Empleado){

        let url='https://mis-clientes-a5e64-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.httpClient.post(url,empleado).subscribe(

        Response=>console.log("Se han modificado correctamente el empleado: " + Response),

        error=> console.log("Error: " + error),


        );



    }

    eliminarEmpleados(indice:number){

        let url='https://mis-clientes-a5e64-default-rtdb.firebaseio.com/datos/'+ indice + '.json';

        this.httpClient.delete(url).subscribe(

        Response=>console.log("Se ha eliminado correctamente el empleado: " + Response),

        error=> console.log("Error: " + error),


        );



    }


}