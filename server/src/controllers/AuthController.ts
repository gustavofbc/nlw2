import {Request, Response} from 'express';

const jwtSecret = process.env.JWT_SECRET || '@proffy';
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');
const moment = require('moment');

import db from '../database/connetion';

export default class AuthController{
    async signin(request: Request, response: Response) {
        const {
            email,
            password,
        } = request.body;

        try {
            if(!email || !password) {
                throw 'Informe e-mail e senha!';
            }

            const usuarioExistente = await db('usuario')
                    .where({email: email})
                    .first()
            
                if(!usuarioExistente){
                    throw 'Usuário não encontrado!'
                }
                const isMatch = bcrypt.compareSync(password, usuarioExistente.password)
                if (!isMatch) throw 'Senha inválida!'
                
                var expires = moment().add(3,'days').valueOf();
                var token = jwt.encode({usuarioExistente}, jwtSecret);
 
            return response.json({
                token: token,
                expires: expires,
                usuarioExistente : usuarioExistente,
            })

        } catch (err){
            console.log(err);

            return response.status(400).json({
                error: 'unexpected error while creating new class'
            })
        }
    
    }


    async validateToken(request: Request, response: Response) {
        const token = request.headers.authorization;
        try {
            if(token) {
                const payload = jwt.decode(token, jwtSecret)
                console.log(payload)
                if(new Date(payload.exp * 1000) > new Date()) {
                    return response.send(true)
                }
            }
        } catch(error) {
            response.status(401).json({ error });   
        }

        response.send(false)

    }

}