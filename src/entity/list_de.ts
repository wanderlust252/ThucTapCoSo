import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {monhoc} from "./monhoc";


@Entity("list_de",{schema:"thi-thpt-ttcs" } )
@Index("id_user",["idUser",])
@Index("ma_monhoc",["maMonhoc",])
export class list_de {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_ld"
        })
    id_ld:number;
        

   
    @ManyToOne(type=>users, users=>users.listDes,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    idUser:users | null;


    @Column("int",{ 
        nullable:true,
        name:"id_de"
        })
    id_de:number | null;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.listDes,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'ma_monhoc'})
    maMonhoc:monhoc | null;


    @Column("int",{ 
        nullable:true,
        name:"tinhtrang_ht"
        })
    tinhtrang_ht:number | null;
        

    @Column("float",{ 
        nullable:true,
        name:"diemso"
        })
    diemso:number | null;
        

    @Column("date",{ 
        nullable:true,
        name:"ngay_hoanthanh"
        })
    ngay_hoanthanh:string | null;
        

    @Column("time",{ 
        nullable:true,
        name:"time_hoanthanh"
        })
    time_hoanthanh:string | null;
        
}
