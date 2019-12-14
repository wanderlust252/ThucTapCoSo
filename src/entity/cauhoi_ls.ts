import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_ls} from "./de_ls";


@Entity("cauhoi_ls",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_ls {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiLss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'ma_monhoc'})
    maMonhoc:monhoc | null;


    @Column("date",{ 
        nullable:true,
        name:"ngaythem"
        })
    ngaythem:string | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"loai_cauhoi"
        })
    loai_cauhoi:number | null;
        

    @Column("text",{ 
        nullable:false,
        name:"cauhoi"
        })
    cauhoi:string;
        

    @Column("text",{ 
        nullable:false,
        name:"dapanA"
        })
    dapanA:string;
        

    @Column("text",{ 
        nullable:false,
        name:"dapanB"
        })
    dapanB:string;
        

    @Column("text",{ 
        nullable:false,
        name:"dapanC"
        })
    dapanC:string;
        

    @Column("text",{ 
        nullable:false,
        name:"dapanD"
        })
    dapanD:string;
        

    @Column("int",{ 
        nullable:false,
        name:"dapandung"
        })
    dapandung:number;
        

    @Column("int",{ 
        nullable:true,
        name:"dokho"
        })
    dokho:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hinhanh"
        })
    hinhanh:string | null;
        

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss2:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss3:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss4:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss5:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss6:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss7:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss8:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss9:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs2:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs3:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs4:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs5:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs6:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs7:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs8:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs9:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL10:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL11:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL12:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL13:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL14:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL15:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL16:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL17:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL18:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL19:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL20:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL21:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL22:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL23:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL24:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL25:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL26:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL27:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL28:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL29:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL30:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL31:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL32:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL33:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL34:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL35:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL36:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL37:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL38:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL39:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL40:de_ls[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL41:de_ls[];
    
}
