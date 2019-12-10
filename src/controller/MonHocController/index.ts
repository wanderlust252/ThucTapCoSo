import { Request, Response, NextFunction } from "express";
import MonHocService from "../../service/MonHocService";
export default class MonHocController {
    private monhocService: MonHocService;

    constructor() {
        this.monhocService = new MonHocService();
    }
    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Received get all monhoc ==> GET");
        var md5 = require('md5');

        console.log(md5('message'));
        var index = req.query.index;
        await this.monhocService.getAll().then((result) =>
            res.send({ code: "success", data: result ? result : {} })
            // MyUtil.handleSuccess(result , res)
        ).catch(err => next(err));

    };
    public postTest = async (req: Request, res: Response) => {
        console.log("create a new city ==> POST");

        console.log("req.body ", req)
        if (!(req.body && req.body.city_name)) {
            res.send({ code: "error", message: "No data!" })
            res.end();
        } else {
            res.send({ code: "success", message: "POST!!!" })
        }
    }
}