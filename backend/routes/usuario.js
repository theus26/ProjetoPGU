const express = require('express');
const router = express.Router();
const mysql = require ('../mysql').pool;

router.get('/', (req,res,next)=>{
    mysql.getConnection((error,conn)=>{
        if (error ){
            return res.status(500).send({error: error})
        }
        conn.query(
            'select * from usuarios',
            (error, resultado, fields) => {
                if (error) {return res.status(500).send({error: error})}
                return res.status(200).send({response: resultado})
            }
        )
    });
});

router.post('/', (req,res,next)=>{
  
    mysql.getConnection((error,conn)=>{
        
        'insert into usuarios (usuario,senha,permissao) value (?, ?, ?)',
            [req.body.usuario, req.body.senha, req.body.permissao],
            (error,resultado,field) =>{
                conn.release();
                if (error ){
                    return res.status(500).send({
                        error: error,
                        Response:null
                    })
                }
                res.status(201).send({
                    mensagem: 'usuario inserido com sucesso!',
                    id_usuario:resultado.insertId
                })
            }

    })
    
});

router.get('/:id_usuario', (req,res,next)=>{
    const id = req.params.id_usuario;
    res.status(201).send({
        mensagem: 'usando get de usuario especifico.',
        id : id 
    })
});

router.delete('/:id_usuario', (req,res,next)=>{
    const id = req.params.id_usuario;
    res.status(201).send({
        mensagem: 'usando delete de usuario especifico.',
        id : id 
    })
});
module.exports = router;