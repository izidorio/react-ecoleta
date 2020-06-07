import express from 'express';
import cors from 'cors'
import routes from './routes';

import path from 'path';

const app = express();
app.use(cors({
    origin:'*'
}));

app.use(express.json());
app.use(routes);


app.post('/point', async(request, response) => {
    const data = request.body
        console.log(data);
        return response.json({success: true});
    
    });

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen('3333');