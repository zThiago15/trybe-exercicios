import express, { Request, Response } from 'express';
import Plants from './Plant';

const app = express();
app.use(express.json());

const plantsModule = new Plants();
const plantsRouter = express.Router();

app.get('/plants', async (req, res) => {
  const allPlants = await plantsModule.getPlants();
  console.log(allPlants);
  
  return res.status(200).json(allPlants);
});

app.get('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plantById = await plantsModule.getPlantById(id);

  return res.status(200).json(plantById);
});

plantsRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteSucess = await plantsModule.removePlantById(id);

  if (!deleteSucess) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(204).end();
});

plantsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;

  const plant = await plantsModule.editPlant(id, newPlant);
  res.status(200).json(plant);
});

plantsRouter.post('/', async (req: Request, res: Response) => {
  const newPlant = req.body;

  const plant = await plantsModule.savePlant(newPlant);
  res.status(201).json(plant);
});

app.use('/plants', plantsRouter);

app.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const plant = await plantsModule.getPlantsThatNeedsSunWithId(id);
  res.status(200).json(plant);
});

const PORT = 3000;
app.listen(() => console.log(`Listening at port ${PORT}`));