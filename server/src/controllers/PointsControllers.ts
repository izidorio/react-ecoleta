import { Request, Response} from 'express'
import knex from '../database/connection'


class PointsController {

    async index(request: Request, response: Response){
        const { city, uf } = request.query
        const items: number[] | any = request.query.items

        console.log(items);
        

        const points = await knex('points')
        .join('item_point', 'points.id', '=', 'item_point.point_id')
        .whereIn('item_point.item_id', items)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*')

        return response.json(points)
    }
    
    async show(request: Request, response: Response){
        const { id } = request.params
        
        const point = await knex('points')
            .where('id', id).first()

        const items = await knex('items')
            .select('title')            
            .join('item_point', 'items.id', '=', 'item_point.item_id')
            .where('item_point.point_id', id)
       
        return response.json({
            point,
            items
        })
    }

    async create(request: Request, response: Response) {
        const { 
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        const trx = await knex.transaction()
        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
       
        const pointIds = await trx('points').insert(point)
        const point_id = pointIds[0]

        const itemPoint = items.map( (item_id: number) => {
            return {
                item_id,
                point_id
            }
        })
    
        await trx('item_point').insert(itemPoint);
    
        trx.commit();
    
        return response.json({
            id: point_id,
            ...point,
            items
        });

    }
}

export default PointsController