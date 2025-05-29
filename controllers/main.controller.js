import { Router } from "express";
import homeGet from "../controllers/home";

// archivo para importar todos los controladores
const router = Router();
router.get("/", homeGet);

// Ruta para la vista de pago
export const home = ( Request, Response) => {
  res.render('home');
};

export const imprimirCarnet = ( Request, Response) => {
  res.render('imprimir_carnet');
};

export const contacto = ( Request, Response) => {
  res.render('listado_personas');
};

export const login = ( Request, Response) => {
  res.render('login');
};
export default router;