
// import { users } from "../../entity/users";
import UserRepository from "../../repository/UserRepository";
// import md5 from 'md5'
var md5 = require('md5');
export default class UserService {
    
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    public async postSignup(userObject) {
        let temp;
        
        //kiem tra ton tai
        // 
        await this.userRepository.getOne(userObject.account)
            .then((val) => {
                console.log("val service ", val)
                if (val) {
                    throw new Error("Nguoi dung da ton tai")
                }
            });
        // let user = new users(temp);
        //ma hoa mat khau
        let encryptPass = md5(userObject.pass)
        userObject.pass = encryptPass

        // console.log(md5('message'));
        var newUser
        await this.userRepository.create(userObject)
            .then(data => newUser = data)
            .catch(err => { throw new Error(err) })
        return newUser
    }
    public async postLogin(account, pass) {

        let temp;
        let encryptPass = md5(pass)
        await this.userRepository.getOne(account)
            .then((val) => {
                console.log("val service ", val)
                
                temp=val
            });
        // let user = new users(temp);
        if (temp.pass != encryptPass) {
            throw new Error("Sai mat khau")
        }
        return temp;
    }

}