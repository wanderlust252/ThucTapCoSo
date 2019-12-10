import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cauhoi_dia} from "./cauhoi_dia";
import {cauhoi_gdcd} from "./cauhoi_gdcd";
import {cauhoi_hoa} from "./cauhoi_hoa";
import {cauhoi_ls} from "./cauhoi_ls";
import {cauhoi_ly} from "./cauhoi_ly";
import {cauhoi_sinh} from "./cauhoi_sinh";
import {cauhoi_ta} from "./cauhoi_ta";
import {cauhoi_toan} from "./cauhoi_toan";
import {de_dia} from "./de_dia";
import {de_gdcd} from "./de_gdcd";
import {de_hoa} from "./de_hoa";
import {de_ls} from "./de_ls";
import {de_ly} from "./de_ly";
import {de_sinh} from "./de_sinh";
import {de_ta} from "./de_ta";
import {de_toan} from "./de_toan";
import {kq_bailam} from "./kq_bailam";
import {list_de} from "./list_de";


@Entity("monhoc",{schema:"thi-thpt-ttcs" } )
export class monhoc {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ma_monhoc"
        })
    ma_monhoc:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"ten_monhoc"
        })
    ten_monhoc:string;
        

    @Column("int",{ 
        nullable:true,
        name:"loaimon"
        })
    loaimon:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"socauhoi"
        })
    socauhoi:number | null;
        

   
    @OneToMany(type=>cauhoi_dia, cauhoi_dia=>cauhoi_dia.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiDias:cauhoi_dia[];
    

   
    @OneToMany(type=>cauhoi_gdcd, cauhoi_gdcd=>cauhoi_gdcd.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiGdcds:cauhoi_gdcd[];
    

   
    @OneToMany(type=>cauhoi_hoa, cauhoi_hoa=>cauhoi_hoa.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiHoas:cauhoi_hoa[];
    

   
    @OneToMany(type=>cauhoi_ls, cauhoi_ls=>cauhoi_ls.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiLss:cauhoi_ls[];
    

   
    @OneToMany(type=>cauhoi_ly, cauhoi_ly=>cauhoi_ly.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiLys:cauhoi_ly[];
    

   
    @OneToMany(type=>cauhoi_sinh, cauhoi_sinh=>cauhoi_sinh.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiSinhs:cauhoi_sinh[];
    

   
    @OneToMany(type=>cauhoi_ta, cauhoi_ta=>cauhoi_ta.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiTas:cauhoi_ta[];
    

   
    @OneToMany(type=>cauhoi_toan, cauhoi_toan=>cauhoi_toan.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cauhoiToans:cauhoi_toan[];
    

   
    @OneToMany(type=>de_dia, de_dia=>de_dia.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deDias:de_dia[];
    

   
    @OneToMany(type=>de_gdcd, de_gdcd=>de_gdcd.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deGdcds:de_gdcd[];
    

   
    @OneToMany(type=>de_hoa, de_hoa=>de_hoa.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deHoas:de_hoa[];
    

   
    @OneToMany(type=>de_ls, de_ls=>de_ls.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLss:de_ls[];
    

   
    @OneToMany(type=>de_ly, de_ly=>de_ly.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deLys:de_ly[];
    

   
    @OneToMany(type=>de_sinh, de_sinh=>de_sinh.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deSinhs:de_sinh[];
    

   
    @OneToMany(type=>de_ta, de_ta=>de_ta.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deTas:de_ta[];
    

   
    @OneToMany(type=>de_toan, de_toan=>de_toan.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    deToans:de_toan[];
    

   
    @OneToMany(type=>kq_bailam, kq_bailam=>kq_bailam.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    kqBailams:kq_bailam[];
    

   
    @OneToMany(type=>list_de, list_de=>list_de.maMonhoc,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    listDes:list_de[];
    
}
