import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_ta} from "./de_ta";


@Entity("cauhoi_ta",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_ta {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiTas,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"nguam"
        })
    nguam:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"nguphap_tuvung"
        })
    nguphap_tuvung:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"giaotiep"
        })
    giaotiep:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"kynangdoc"
        })
    kynangdoc:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"kynangviet"
        })
    kynangviet:number | null;
        

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas2:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas3:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas4:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas5:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas6:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas7:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas8:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas9:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs2:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs3:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs4:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs5:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs6:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs7:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs8:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTs9:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT10:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT11:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT12:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT13:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT14:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT15:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT16:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT17:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT18:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT19:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT20:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT21:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT22:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT23:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT24:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT25:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT26:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT27:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT28:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT29:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT30:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT31:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT32:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT33:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT34:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT35:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT36:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT37:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT38:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT39:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT40:de_ta[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deT41:de_ta[];
    
}
