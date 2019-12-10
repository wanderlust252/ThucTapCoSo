import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {de_ly} from "./de_ly";


@Entity("cauhoi_ly",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
export class cauhoi_ly {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_cauhoi"
        })
    id_cauhoi:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.cauhoiLys,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        name:"daodong"
        })
    daodong:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"songco"
        })
    songco:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"dien"
        })
    dien:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"machgiaodong"
        })
    machgiaodong:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"songanhsang"
        })
    songanhsang:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"luongtu"
        })
    luongtu:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"hatnhan"
        })
    hatnhan:number | null;
        

    @Column("int",{ 
        nullable:true,
        default: () => "'0'",
        name:"vatly11"
        })
    vatly11:number | null;
        

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau9,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca10,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys2:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca11,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys3:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca12,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys4:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca13,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys5:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca14,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys6:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca15,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys7:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca16,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys8:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca17,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys9:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca18,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs2:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca19,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs3:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca20,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs4:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca21,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs5:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca22,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs6:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca23,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs7:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca24,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs8:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca25,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLs9:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca26,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL10:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca27,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL11:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca28,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL12:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau2,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL13:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca29,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL14:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca30,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL15:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca31,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL16:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca32,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL17:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca33,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL18:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca34,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL19:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca35,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL20:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca36,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL21:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca37,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL22:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca38,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL23:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau3,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL24:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca39,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL25:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca40,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL26:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca41,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL27:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca42,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL28:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca43,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL29:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca44,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL30:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca45,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL31:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca46,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL32:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca47,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL33:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca48,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL34:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau4,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL35:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca49,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL36:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idca50,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL37:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau5,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL38:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau6,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL39:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau7,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL40:de_ly[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.idcau8,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deL41:de_ly[];
    
}
