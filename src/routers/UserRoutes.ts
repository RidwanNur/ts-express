import BaseRouter from "./BaseRouter";
import { authMiddleware } from '../middlewares/AuthMiddleware';
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRouter{

    public routes():void{
        this.router.get("/", authMiddleware ,UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);

    }
}

export default new UserRoutes().router;