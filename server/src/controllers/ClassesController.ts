import {Request, Response} from 'express';

import db from '../database/connetion';
import convertHoursToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController{
    async index(request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).send({
                error: 'Missing filters to search classes'
            })
        }

        const timeInMinutes = convertHoursToMinutes(time)

        const classes = await db('classes')
            .whereExists( function() {
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [ Number(week_day) ])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])

            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])
            
        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            // avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try{
            const insertUsersIds = await trx('users').insert({
                name,
                // avatar,
                whatsapp,
                bio,
            });
        
            const user_id = insertUsersIds[0];
            
        
            const insertClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
        
            const class_id = insertClassesIds[0];
        
            const classSchedule = schedule.map( (scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHoursToMinutes(scheduleItem.from),
                    to: convertHoursToMinutes(scheduleItem.to),
                };
            })
        
            await trx('class_schedule').insert(classSchedule);
        
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

    async count(request: Request, response: Response) {
        const totalProffys = await db('classes').count('* as total')

        const { total } = totalProffys[0];

        return response.json({total});
    }

    async getAll(request: Request, response: Response) {

        const filters = request.query;

        const user_id = filters.user_id as string;

        const classes = await db('classes')
            .where('classes.user_id', '=', Number(user_id))
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])

        return response.json(classes);
    }

}