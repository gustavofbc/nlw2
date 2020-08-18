import {Request, Response} from 'express';

import db from '../database/connetion';

export default class UsuarioController{
    async create(request: Request, response: Response) {
        const {
            name,
            surname,
            email,
            password,
        } = request.body;

        const trx = await db.transaction();

        try{
             await trx('usuario').insert({
                name,
                surname,
                email,
                password,
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