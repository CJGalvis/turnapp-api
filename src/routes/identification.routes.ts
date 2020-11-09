import { Router } from "express";
import {
    createIdentification,
    getIdentification,
    updateIdentification,
    deleteIdentification
} from "../controllers/identifications.controllers";

const router: Router = Router();

router.post('/identification-types/new', createIdentification);
router.get('/identification-types/get', getIdentification);
router.put('/identification-types/put/:_id', updateIdentification);
router.get('/identification-types/delete/:_id', deleteIdentification);

export default router;