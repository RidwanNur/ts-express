import BaseRouter from "./BaseRouter";
import AuthController from "../controllers/AuthController";
import validate from "../middlewares/AuthValidator";
import { authMiddleware } from "../middlewares/AuthMiddleware";

class AuthRoutes extends BaseRouter{

    public routes():void{
        this.router.post("/register",validate, AuthController.register);
        this.router.post("/login", validate, AuthController.login);
        this.router.get("/profile",authMiddleware, AuthController.profile);

    }
}

export default new AuthRoutes().router;