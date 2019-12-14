import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("post_categories_category",{schema:"thi-thpt-ttcs" } )
@Index("IDX_25024b690f5266180b2a03fdbf",["postId",])
@Index("IDX_2de8ff5ab8819a782ad1da4545",["categoryId",])
export class post_categories_category {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"postId"
        })
    postId:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"categoryId"
        })
    categoryId:number;
        
}
