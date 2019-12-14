import { Request, Response, NextFunction } from "express";
import UserService from "../../service/UserService";
import { users } from "../../../output/entities/users";
export default class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }
    // public getAll = async (req: Request, res: Response, next: NextFunction) => {
    //     console.log("Received get all mon hoc ==> GET");
    //     await this.userService.getAll().then((result) =>
    //         res.send({ code: "success", data: result ? result : {} })
    //         // MyUtil.handleSuccess(result , res)
    //     ).catch(err => next(err));

    // };
    public postSignup = async (req: Request, res: Response) => {
        console.log("Signup Account ==> POST");
        // console.log("req.body ", req.body)
        let result;
        if (!(req.body)) {
            //account pass username
            res.send({ code: "error", message: "No data!" })
            res.end();
        }
        let account = req.body.account;
        let pass = req.body.pass;
        let username = req.body.username
        // const userObject = {
        //     account,
        //     pass,
        //     username
        // }
        const userObject = new users();
        userObject.account = account
        userObject.pass = pass
        userObject.username = username
        await this.userService.postSignup(userObject)
            .then((val) => {
                console.log("val controller ", val)
                res.send({ code: "success", data: val ? val : {} })
            }).catch(err => {
                res.send({ code: "error", message: err.message })
                res.end();
            })

    }
    public postLogin = async (req: Request, res: Response) => {
        console.log("Login Account ==> POST");
        // console.log("req.body ", req.body)
        let result;
        if (!(req.body)) {
            res.send({ code: "error", message: "No data!" })
            res.end();
        }
        let account = req.body.account;
        let pass = req.body.pass;
        await this.userService.postLogin(account, pass)
            .then((val) => {
                // console.log("val controller ",val)
                result = val;
            }).catch(err => {
                res.send({ code: "error", message: err.message })
                res.end();
            })
        res.send({ code: "success", message: result })

    }
}