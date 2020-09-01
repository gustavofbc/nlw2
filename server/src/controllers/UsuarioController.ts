import {Request, Response} from 'express';

import db from '../database/connetion';

const bcrypt = require('bcrypt');


export default class UsuarioController{
    
    async create(request: Request, response: Response) {
        const {
            name,
            surname,
            avatar,
            email,
            password,
        } = request.body;
// função de encriptação da senha
        const encryptPassword = (password: string) => {
            const salt = bcrypt.genSaltSync(10) //adiciona uma sequência de números/letras para torná-la mais segura quando cryptografarmos
            return bcrypt.hashSync(password, salt)
        }
    //senha criptografada
        const senhaEncrypted = encryptPassword(password);
        const trx = await db.transaction();

        try{
             await trx('usuario').insert({
                name,
                surname,
                avatar,
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
                error: 'unexpected error while creating new perfil'
            })
        }

    }

    async update(request: Request, response: Response) {
        const {
            user_id,
            name,
            surname,
            avatar,
            email,
        } = request.body;

        const trx = await db.transaction();

        try{
             await trx('usuario').update({
                'name': name,
                'surname': surname,
                'avatar': avatar,
                'email':email,
            }).where('usuario.id', '=', Number(user_id));
        
            await trx.commit();
        
            return response.status(201).send();
            
        }
        catch (err){
            console.log(err);

            await trx.rollback();
    
            return response.status(400).json({
                error: 'unexpected error while updated new perfil'
            })
        }

    }


    async getUsuarioById(request: Request, response: Response) {

        const filters = request.query;

        const user_id = filters.user_id;

        const usuario = await db('usuario')
            .where('usuario.id', '=', Number(user_id))
        
        return response.json(usuario);
    }

}