import { monhoc } from "../../entity/monhoc";
import { Repository, getConnectionManager,getManager } from "typeorm";
import * as bcrypt_nodejs from "bcrypt-nodejs"
export default class MonHocRepository {
    private monhocRepo: Repository<monhoc>;
    constructor() {
        // this.monhocRepo = getConnectionManager().get("thi-thpt-ttcs").getRepository(monhoc);
        this.monhocRepo = getManager().getRepository(monhoc);
        
    }

    public async getAll(){
        return await this.monhocRepo.find();
    }
}