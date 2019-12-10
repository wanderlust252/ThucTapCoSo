import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {cauhoi_sinh} from "./cauhoi_sinh";


@Entity("de_sinh",{schema:"thi-thpt-ttcs" } )
@Index("ma_monhoc",["maMonhoc",])
@Index("idcau1",["idcau",])
@Index("idcau2",["idcau2",])
@Index("idcau3",["idcau3",])
@Index("idcau4",["idcau4",])
@Index("idcau5",["idcau5",])
@Index("idcau6",["idcau6",])
@Index("idcau7",["idcau7",])
@Index("idcau8",["idcau8",])
@Index("idcau9",["idcau9",])
@Index("idcau10",["idca10",])
@Index("idcau11",["idca11",])
@Index("idcau12",["idca12",])
@Index("idcau13",["idca13",])
@Index("idcau14",["idca14",])
@Index("idcau15",["idca15",])
@Index("idcau16",["idca16",])
@Index("idcau17",["idca17",])
@Index("idcau18",["idca18",])
@Index("idcau19",["idca19",])
@Index("idcau20",["idca20",])
@Index("idcau21",["idca21",])
@Index("idcau22",["idca22",])
@Index("idcau23",["idca23",])
@Index("idcau24",["idca24",])
@Index("idcau25",["idca25",])
@Index("idcau26",["idca26",])
@Index("idcau27",["idca27",])
@Index("idcau28",["idca28",])
@Index("idcau29",["idca29",])
@Index("idcau30",["idca30",])
@Index("idcau31",["idca31",])
@Index("idcau32",["idca32",])
@Index("idcau33",["idca33",])
@Index("idcau34",["idca34",])
@Index("idcau35",["idca35",])
@Index("idcau36",["idca36",])
@Index("idcau37",["idca37",])
@Index("idcau38",["idca38",])
@Index("idcau39",["idca39",])
@Index("idcau40",["idca40",])
@Index("idcau41",["idca41",])
@Index("idcau42",["idca42",])
@Index("idcau43",["idca43",])
@Index("idcau44",["idca44",])
@Index("idcau45",["idca45",])
@Index("idcau46",["idca46",])
@Index("idcau47",["idca47",])
@Index("idcau48",["idca48",])
@Index("idcau49",["idca49",])
@Index("idcau50",["idca50",])
export class de_sinh {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_de"
        })
    id_de:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.deSinhs,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'ma_monhoc'})
    maMonhoc:monhoc | null;


    @Column("varchar",{ 
        nullable:true,
        name:"tendethi"
        })
    tendethi:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"ngaytao"
        })
    ngaytao:string | null;
        

   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau1'})
    idcau:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin13,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau2'})
    idcau2:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin24,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau3'})
    idcau3:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin35,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau4'})
    idcau4:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin38,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau5'})
    idcau5:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin39,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau6'})
    idcau6:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin40,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau7'})
    idcau7:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin41,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau8'})
    idcau8:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau9'})
    idcau9:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau10'})
    idca10:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau11'})
    idca11:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs4,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau12'})
    idca12:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs5,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau13'})
    idca13:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs6,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau14'})
    idca14:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs7,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau15'})
    idca15:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs8,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau16'})
    idca16:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSinhs9,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau17'})
    idca17:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau18'})
    idca18:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau19'})
    idca19:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins4,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau20'})
    idca20:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins5,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau21'})
    idca21:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins6,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau22'})
    idca22:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins7,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau23'})
    idca23:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins8,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau24'})
    idca24:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSins9,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau25'})
    idca25:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin10,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau26'})
    idca26:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin11,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau27'})
    idca27:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin12,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau28'})
    idca28:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin14,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau29'})
    idca29:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin15,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau30'})
    idca30:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin16,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau31'})
    idca31:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin17,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau32'})
    idca32:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin18,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau33'})
    idca33:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin19,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau34'})
    idca34:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin20,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau35'})
    idca35:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin21,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau36'})
    idca36:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin22,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau37'})
    idca37:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin23,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau38'})
    idca38:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin25,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau39'})
    idca39:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin26,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau40'})
    idca40:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin27,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau41'})
    idca41:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin28,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau42'})
    idca42:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin29,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau43'})
    idca43:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin30,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau44'})
    idca44:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin31,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau45'})
    idca45:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin32,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau46'})
    idca46:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin33,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau47'})
    idca47:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin34,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau48'})
    idca48:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin36,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau49'})
    idca49:cauhoi_sinh | null;


   
    @ManyToOne(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.deSin37,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau50'})
    idca50:cauhoi_sinh | null;

}
