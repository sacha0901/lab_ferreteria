import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('vendedores')
export class VendedorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedulaIdentidad: string;

  @Column()
  nombre: string;

  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;

  @Column()
  codigo: number;

  @Column()
  sexo: string;

  @Column({ name: 'fecha_contrato' })
  fechaContrato: Date; //Solo necesito un tipo de dato fecha

  @Column({ name: 'objetivo_venta' })
  objetivoVenta: number;

  @Column()
  telefono: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
