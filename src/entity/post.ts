import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("post",{schema:"thi-thpt-ttcs" } )
export class post {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:false,
        name:"text"
        })
    text:string;
        
}
