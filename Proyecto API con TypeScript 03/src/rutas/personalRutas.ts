import express,{Request,Response} from 'express';
import * as personalServices from '../services/personalServices'
// Activamos las rutas.
const router = express.Router();

// http://localhost:3001/api/personal/ <---
router.get('/', async (_req:Request,res:Response) => {
    let personal = await personalServices.obtienePersonal();
    res.send(personal);
});
// http://localhost:3001/api/personal/1 <--- Numero de id del personal.
router.get('/:id', async (req:Request,res:Response) => {
    let personal = await personalServices.encuentraPersonal(Number(req.params.id));
    res.send(personal);
});
//Insertar datos de personal.
router.post('/', async (req:Request,res:Response) => {
    try{
        const {nombre,direccion,telefono,estatus} = req.body;
        const nuevo = await personalServices.agregarPersonal({
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(nuevo);
    }
    catch(e){
        res.send('No se puede agregar el personal.');
        // res.status(400).send('Error en los datos.');
    }
});
//Modificar datos.
router.put('/', async (req:Request,res:Response) => {
    try{
        const {id,nombre,direccion,telefono,estatus} = req.body;
        const modificado = await personalServices.modificarPersonal({
            id,
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(modificado);
    }catch(e){
        res.status(400).send("Error en los datos.");
    }
});

// Eliminar o borrar lo datos de personal.
router.delete('/', async (req:Request, res:Response) => {
    try{
        const {id} = req.body;
        const eliminado = await personalServices.borrarPersonal(Number(id));
        res.send(eliminado);
    }catch(e){
        res.status(400).send("Error en los datos.");
    }
})

export default router;