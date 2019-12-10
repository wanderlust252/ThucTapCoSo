import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {users} from "./users";


@Entity("kq_bailam",{schema:"thi-thpt-ttcs" } )
@Index("id_user",["idUser",])
@Index("ma_monhoc",["maMonhoc",])
export class kq_bailam {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_kq"
        })
    id_kq:number;
        

    @Column("int",{ 
        nullable:true,
        name:"id_de"
        })
    id_de:number | null;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.kqBailams,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'ma_monhoc'})
    maMonhoc:monhoc | null;


   
    @ManyToOne(type=>users, users=>users.kqBailams,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'id_user'})
    idUser:users | null;


    @Column("int",{ 
        nullable:true,
        name:"kq1"
        })
    kq1:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq2"
        })
    kq2:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq3"
        })
    kq3:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq4"
        })
    kq4:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq5"
        })
    kq5:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq6"
        })
    kq6:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq7"
        })
    kq7:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq8"
        })
    kq8:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq9"
        })
    kq9:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq10"
        })
    kq10:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq11"
        })
    kq11:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq12"
        })
    kq12:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq13"
        })
    kq13:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq14"
        })
    kq14:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq15"
        })
    kq15:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq16"
        })
    kq16:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq17"
        })
    kq17:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq18"
        })
    kq18:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq19"
        })
    kq19:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq20"
        })
    kq20:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq21"
        })
    kq21:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq22"
        })
    kq22:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq23"
        })
    kq23:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq24"
        })
    kq24:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq25"
        })
    kq25:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq26"
        })
    kq26:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq27"
        })
    kq27:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq28"
        })
    kq28:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq29"
        })
    kq29:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq30"
        })
    kq30:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq31"
        })
    kq31:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq32"
        })
    kq32:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq33"
        })
    kq33:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq34"
        })
    kq34:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq35"
        })
    kq35:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq36"
        })
    kq36:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq37"
        })
    kq37:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq38"
        })
    kq38:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq39"
        })
    kq39:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq40"
        })
    kq40:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq41"
        })
    kq41:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq42"
        })
    kq42:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq43"
        })
    kq43:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq44"
        })
    kq44:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq45"
        })
    kq45:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq46"
        })
    kq46:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq47"
        })
    kq47:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq48"
        })
    kq48:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq49"
        })
    kq49:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"kq50"
        })
    kq50:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"sodiem"
        })
    sodiem:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"socaudung"
        })
    socaudung:number | null;
        
}
