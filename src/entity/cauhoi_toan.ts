import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_toan} from "./de_toan";


@Entity("cauhoi_toan",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_toan {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiToans,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        name:"hamso"
        })
    hamso:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"logarit"
        })
    logarit:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"nguyenham_tichphan"
        })
    nguyenham_tichphan:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"sophuc"
        })
    sophuc:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"luonggiac"
        })
    luonggiac:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"hinhkhonggian"
        })
    hinhkhonggian:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"hephuongtrinh"
        })
    hephuongtrinh:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"batphuongtrinh"
        })
    batphuongtrinh:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"tohop_sacxuat"
        })
    tohop_sacxuat:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"oxyz"
        })
    oxyz:number | null;
        

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans2:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans3:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans4:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans5:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans6:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans7:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans8:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans9:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas2:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas3:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas4:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas5:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas6:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas7:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas8:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToas9:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa10:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa11:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa12:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa13:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa14:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa15:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa16:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa17:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa18:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa19:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa20:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa21:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa22:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa23:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa24:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa25:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa26:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa27:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa28:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa29:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa30:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa31:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa32:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa33:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa34:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa35:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa36:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa37:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa38:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa39:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa40:de_toan[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToa41:de_toan[];
    
}
