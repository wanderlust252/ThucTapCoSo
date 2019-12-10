import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_sinh} from "./de_sinh";


@Entity("cauhoi_sinh",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_sinh {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiSinhs,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'ma_monhoc'})
    maMonhoc:monhoc | null;


    @Column("date",{ 
        nullable:true,
        name:"ngaythem"
        })
    ngaythem:string | null;
        

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
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s1"
        })
    s1:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s2"
        })
    s2:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s3"
        })
    s3:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s4"
        })
    s4:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s5"
        })
    s5:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s6"
        })
    s6:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s7"
        })
    s7:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"s8"
        })
    s8:number | null;
        

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs2:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs3:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs4:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs5:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs6:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs7:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs8:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs9:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins2:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins3:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins4:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins5:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins6:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins7:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins8:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSins9:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin10:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin11:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin12:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin13:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin14:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin15:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin16:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin17:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin18:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin19:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin20:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin21:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin22:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin23:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin24:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin25:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin26:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin27:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin28:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin29:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin30:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin31:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin32:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin33:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin34:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin35:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin36:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin37:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin38:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin39:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin40:de_sinh[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSin41:de_sinh[];
    
}
