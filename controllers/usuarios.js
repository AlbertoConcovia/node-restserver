
const { response , request } = require ( 'express' ) ;

const usuariosGet = ( req = request , res = response )  => {

    const { q , name = 'no name' , apikey , page = 1 , limit } = req.query ;

    res.json({
        msg: 'get api - controllers' , 
        q , 
        name , 
        apikey , 
        page , 
        limit 
    });

}



const usuariosPost = ( req, res = response )  => {
    
    const { nombre , edad } = req.body;
    
    res.json({
        msg: 'post api - usuariosPost' , 
        nombre ,
        edad
    });
}


const usuariosPut = ( req, res = response )  => {
    
    const id = req.params.id;
    
    res.json({
        msg: 'put api - usuariosPut' , 
        id
    });

}


const usuariosDelete = ( req, res = response )  => {
    res.json({
        msg: 'delete api'
    });
}

const usuariosPatch = ( req, res = response )  => {
    res.json({
        msg: 'patch api'
    });
}

module.exports = {
    usuariosGet , 
    usuariosPost , 
    usuariosPut , 
    usuariosDelete , 
    usuariosPatch , 
}