import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {monhoc} from "./monhoc";
import {cauhoi_ly} from "./cauhoi_ly";


@Entity("de_ly",{schema:"thi-thpt-ttcs" } )
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
export class de_ly {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id_de"
        })
    id_de:number;
        

   
    @ManyToOne(type=>monhoc, monhoc=>monhoc.deLys,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
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
        

   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau1'})
    idcau:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL13,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau2'})
    idcau2:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL24,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau3'})
    idcau3:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL35,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau4'})
    idcau4:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL38,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau5'})
    idcau5:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL39,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau6'})
    idcau6:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL40,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau7'})
    idcau7:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL41,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau8'})
    idcau8:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau9'})
    idcau9:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau10'})
    idca10:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau11'})
    idca11:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys4,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau12'})
    idca12:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys5,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau13'})
    idca13:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys6,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau14'})
    idca14:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys7,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau15'})
    idca15:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys8,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau16'})
    idca16:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLys9,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau17'})
    idca17:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau18'})
    idca18:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau19'})
    idca19:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs4,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau20'})
    idca20:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs5,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau21'})
    idca21:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs6,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau22'})
    idca22:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs7,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau23'})
    idca23:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs8,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau24'})
    idca24:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deLs9,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau25'})
    idca25:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL10,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau26'})
    idca26:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL11,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau27'})
    idca27:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL12,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau28'})
    idca28:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL14,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau29'})
    idca29:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL15,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau30'})
    idca30:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL16,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau31'})
    idca31:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL17,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau32'})
    idca32:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL18,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau33'})
    idca33:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL19,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau34'})
    idca34:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL20,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau35'})
    idca35:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL21,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau36'})
    idca36:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL22,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau37'})
    idca37:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL23,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau38'})
    idca38:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL25,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau39'})
    idca39:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL26,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau40'})
    idca40:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL27,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau41'})
    idca41:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL28,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau42'})
    idca42:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL29,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau43'})
    idca43:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL30,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau44'})
    idca44:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL31,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau45'})
    idca45:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL32,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau46'})
    idca46:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL33,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau47'})
    idca47:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL34,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau48'})
    idca48:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL36,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau49'})
    idca49:cauhoi_ly | null;


   
    @ManyToOne(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.deL37,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcau50'})
    idca50:cauhoi_ly | null;

}
