import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('articulos')
export class ArticuloEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  unidad: string;

  @Column({name:'existencia_maximo'})
  existenciaMaximo: number;

  @Column({name: 'existencia_minimo'})
  existenciaMinimo: number;


  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
