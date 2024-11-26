import {Personal,PersonalNuevo} from '../typesPersonal';
import mysql from 'mysql2/promise';
import { personalSchema } from '../schema/personal.schema';
import { personalSchemaId } from '../schema/personal.schema';

const conexion = mysql.createPool({
    host: 'localhost',
    user: 'sa',
    password: '12345',
    database: 'pw2024',
    port: 3306,
    multipleStatements: false
});
export const obtienePersonal = async () => {
    try{
        const [results] = await conexion.query('SELECT * FROM PERSONAL');
        return results;
    }catch{
        return {error: "No se puede obtener el personal"};
    }
}

export const encuentraPersonal = async (id:number)  => {
    try{
        const identificador = {id:id};
        const validacion = personalSchema.safeParse(identificador);
        if(!validacion.success){
            return {error: validacion.error};
        }
        const [results] = await conexion.query('SELECT * FROM PERSONAL WHERE id = ? LIMIT 1',id);
        return results;
    }catch(err){
        return {error: "No se encuentra ese personal."};
    }
}

export const encuentraPersonalTelefono = async (telefono:string) => {
    try {
        // const consulta =`Select * From personal Where telefono =${telefono} and estatus = 1`;
        // "Select * from personal where telefono='"+telefono+"'";
        // const [results] = await conexion.query(consulta);
        const tel = {telefono:telefono};
        const validacion = personalSchema.safeParse(tel);
        if(!validacion.success){
            return {error: validacion.error};
        }
        const [results] = await conexion.query('SELECT * FROM PERSONAL WHERE telefono = ? and estatus = 1',telefono);
        return results;
    } catch (err) {
        return {error:"No se puede encontrar al persona con ese numero de telefono"};
    }
    
}

export const agregarPersonal = async (nuevo:PersonalNuevo) => {
    try{
        const validacion = personalSchema.safeParse(nuevo);
        if(!validacion.success){
            return {error: validacion.error};
        }
        const [results] = await conexion.query('Insert Into Personal(nombre,direccion,telefono,estatus) values (?,?,?,?)',[nuevo.nombre,nuevo.direccion,nuevo.telefono,nuevo.estatus]);
        return results;
    }catch(err){
        return {error:"No se puede agregar al personal."};
    }
}

export const modificarPersonal = async (modificado:Personal) => {
    try{
        const validacion = personalSchemaId.safeParse(modificado);
        if(!validacion.success){
            return {error: validacion.error};
        }
        const [result] = await conexion.query('Update Personal Set Nombre=?, Direccion=?, Telefono=?,Estatus=? Where Id=?',[modificado.nombre,modificado.direccion,modificado.telefono,modificado.estatus,modificado.id]);
        return result;
    }catch(err){
        return {error: "No se puede modificar."}
    }
}

export const borrarPersonal = async (id:number) => {
    try {
        const [results] = await conexion.query('Delete From Personal Where Id=?',[id]) 
        return results;
    } catch (err) {
        return {error: "No se pudo eliminar."}
    }
}