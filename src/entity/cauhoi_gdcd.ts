import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_gdcd} from "./de_gdcd";


@Entity("cauhoi_gdcd",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_gdcd {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiGdcds,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds2:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds3:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds4:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds5:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds6:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds7:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds8:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds9:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs2:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs3:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs4:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs5:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs6:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs7:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs8:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcs9:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc10:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc11:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc12:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc13:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc14:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc15:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc16:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc17:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc18:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc19:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc20:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc21:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc22:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc23:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc24:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc25:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc26:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc27:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc28:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc29:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc30:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc31:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc32:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc33:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc34:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc35:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc36:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc37:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc38:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc39:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc40:de_gdcd[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdc41:de_gdcd[];
    
}
