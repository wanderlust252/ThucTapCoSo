import { users } from "../../entity/users";
import { Repository, getConnectionManager,getManager } from "typeorm";
import bcrypt_nodejs from "bcrypt-nodejs"
export default class UserRepository {
    private userRepo: Repository<users>;
    constructor() {
        // this.userRepo = getConnectionManager().get("thi-thpt-ttcs").getRepository(user);
        this.userRepo = getManager().getRepository(users);
        
    }
    public async create(userAccount: users): Promise<users> {
        return await this.userRepo.save(userAccount);
    }
    public async getOne(account: string): Promise<users> {
        return await this.userRepo.findOne({"account":account});
    }
    // public async postLogin(account){
    //     let result = new users();
    //     console.log("account",account)
    //     await this.userRepo.findOne({"account":account})
    //     .then((val)=>{console.log("val ",val)
    //         result= val;
    //     });
    //     return result;
    // }
}