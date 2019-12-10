import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {kq_bailam} from "./kq_bailam";
import {list_de} from "./list_de";


@Entity("users",{schema:"thi-thpt-ttcs" } )
export class users {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_user"
        })
    id_user:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"account"
        })
    account:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"pass"
        })
    pass:string;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"role"
        })
    role:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'1'",
        name:"tinhtrang"
        })
    tinhtrang:number | null;
        

    @Column("date",{ 
        nullable:true,
        name:"ngaydangky"
        })
    ngaydangky:string | null;
        

   
    @OneToMany(type=>kq_bailam, kq_bailam=>kq_bailam.idUser,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    kqBailams:kq_bailam[];
    

   
    @OneToMany(type=>list_de, list_de=>list_de.idUser,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listDes:list_de[];
    
}
