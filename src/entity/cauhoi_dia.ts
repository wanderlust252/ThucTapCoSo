import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_dia} from "./de_dia";


@Entity("cauhoi_dia",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_dia {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiDias,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias2:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias3:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias4:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias5:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias6:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias7:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias8:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias9:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis2:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis3:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis4:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis5:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis6:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis7:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis8:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDis9:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi10:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi11:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi12:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi13:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi14:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi15:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi16:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi17:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi18:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi19:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi20:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi21:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi22:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi23:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi24:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi25:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi26:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi27:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi28:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi29:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi30:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi31:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi32:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi33:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi34:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi35:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi36:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi37:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi38:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi39:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi40:de_dia[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDi41:de_dia[];
    
}
