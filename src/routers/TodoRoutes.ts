import BaseRouter from "./BaseRouter";
import { authMiddleware } from '../middlewares/AuthMiddleware';
import TodoController from "../controllers/TodoController";
import validate from "../middlewares/TodoValidator";

class TodoRoutes extends BaseRouter{

    public routes():void{
        this.router.get("/", authMiddleware ,TodoController.index);
        this.router.post("/",authMiddleware, validate, TodoController.create);
        this.router.get("/:id",authMiddleware, TodoController.show);
        this.router.put("/:id",authMiddleware, validate, TodoController.update);
        this.router.delete("/:id",authMiddleware, TodoController.delete);

    }
}

export default new TodoRoutes().router;