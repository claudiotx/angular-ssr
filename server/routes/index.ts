import * as express from 'express';
const router = express.Router();
// const apiRouter = require('./api');
// const authRouter = require('./auth');

const handleGetRoot = (req: any, res: any, next: any) => {
  res.send('API works');
};

const handleGetDocs = (req: any, res: any, next: any) => {
  const mockDocs = [
    {
      'title': 'AWS'
    },
    {
      'title': 'GCP'
    },
    {
      'title': 'AZURE'
    }
  ];
  res.json(mockDocs);
};

router.get('/', handleGetRoot);
router.get('/docs', handleGetDocs);

// ----------------------------
// Private Routes
// router.use('/auth/', authRouter);
// router.use('/', apiRouter);

export default router;
