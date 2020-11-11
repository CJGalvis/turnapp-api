import { Router } from "express";
import {
    createIdentification,
    getIdentification,
    updateIdentification,
    deleteIdentification
} from "../controllers/identifications.controllers";
import { verifyToken } from '../middlewares/auth';

const router: Router = Router();

router.post('/identification-types/new', [verifyToken], createIdentification);
router.get('/identification-types/get', [verifyToken], getIdentification);
router.put('/identification-types/put/:_id', [verifyToken], updateIdentification);
router.get('/identification-types/delete/:_id', [verifyToken], deleteIdentification);

export default router;