
import { monhoc} from "../../entity/monhoc";
import MonHocRepository from "../../repository/MonHocRepository";

export default class MonHocService {
    private monhocRepository;
    constructor(){
        this.monhocRepository = new MonHocRepository();

    }

    public async getAll(){
        return await this.monhocRepository.getAll();
    }

}