import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_hoa} from "./de_hoa";


@Entity("cauhoi_hoa",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_hoa {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiHoas,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        name:"sudienli"
        })
    sudienli:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"phanbonhhoahoc"
        })
    phanbonhhoahoc:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"hidrocacbon"
        })
    hidrocacbon:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"este_lipit"
        })
    este_lipit:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"cacbohidrat"
        })
    cacbohidrat:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"amin_protein"
        })
    amin_protein:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"polime"
        })
    polime:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"daicuongkimloai"
        })
    daicuongkimloai:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"kimloai"
        })
    kimloai:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"nhanbiethoahoc"
        })
    nhanbiethoahoc:number | null;
        

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas2:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas3:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas4:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas5:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas6:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas7:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas8:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas9:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos2:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos3:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos4:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos5:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos6:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos7:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos8:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHos9:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo10:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo11:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo12:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo13:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo14:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo15:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo16:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo17:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo18:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo19:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo20:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo21:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo22:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo23:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo24:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo25:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo26:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo27:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo28:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo29:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo30:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo31:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo32:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo33:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo34:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo35:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo36:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo37:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo38:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo39:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo40:de_hoa[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHo41:de_hoa[];
    
}
