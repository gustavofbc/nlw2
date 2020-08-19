import {Request, Response} from 'express';

import db from '../database/connetion';

const bcrypt = require('bcrypt');


export default class UsuarioController{
    
    async create(request: Request, response: Response) {
        const {
            name,
            surname,
            email,
            password,
        } = request.body;
// função de encriptação da senha
        const encryptPassword = (password: string) => {
            const salt = bcrypt.genSaltSync(10) //adiciona uma sequẽncia de números/letras para torná-la mais segura quando cryptografarmos
            return bcrypt.hashSync(password, salt)
        }
    //senha criptografada
        const senhaEncrypted = encryptPassword(password);
        const trx = await db.transaction();

        try{
             await trx('usuario').insert({
                name,
                surname,
                email,
                password:senhaEncrypted,
            });
        
            await trx.commit();
        
            return response.status(201).send();
            
        }
        catch (err){
            console.log(err);

            await trx.rollback();
    
            return response.status(400).json({
                error: 'unexpected error while creating new class'
            })
        }

    }
}