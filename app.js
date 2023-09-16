const express = require('express');
const dbconnect = require('./config');
const ModeloCarros = require('./Modelo');
const app = express();

const router = express.Router();

//Obtener por modelo
router.get("/modelo/:modelo", async (req,res)=>{
    const modelo = req.params.modelo;
    const respuesta = await ModeloCarros.find({'Make':modelo});
    res.send(respuesta)
})
//Obtener por Id
router.get("/:id", async (req,res)=>{
    const id = req.params.id;
    const respuesta = await ModeloCarros.findById({'_id':id})
    res.send(respuesta)
})
//insert
router.post('/carro',async (req,res) =>{
    const carro = req.body;
    const respuesta = await ModeloCarros.create(carro)
    res.send(respuesta)
})

//actualizar por id
router.put("/:id", async (req,res)=>{
    const body = req.body
    const id = req.params.id;
    const respuesta = await ModeloCarros.findOneAndUpdate({_id:id},body)
    res.send(respuesta)
})

//eliminar por id
router.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    const respuesta = await ModeloCarros.deleteOne({_id:id})
    res.send(respuesta)
})

app.use(express.json())
app.use(router);
app.listen(3001, () => {
    console.log("El servidor esta en el puerto 3001");
})

dbconnect();