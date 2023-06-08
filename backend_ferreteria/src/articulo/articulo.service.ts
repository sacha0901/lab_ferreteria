import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { ArticuloEntity } from './entities/articulo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(ArticuloEntity)
    private articuloRepository: Repository<ArticuloEntity>,
  ) {}

  async create(
    createArticuloDto: CreateArticuloDto,
  ): Promise<ArticuloEntity> {
    const existe = await this.articuloRepository.findOneBy({
      codigo: createArticuloDto.codigo.trim(),
    });

    if (existe) {
      throw new ConflictException(`El articulo ${createArticuloDto.codigo} ya existe.`);
    }

    return this.articuloRepository.save({
      codigo: createArticuloDto.codigo.trim(),
      descripcion: createArticuloDto.descripcion.trim(),
      precio: createArticuloDto.precio,
      unidad: createArticuloDto.unidad.trim(),
      existenciaMaximo: createArticuloDto.existenciaMaximo,
      existenciaMinimo: createArticuloDto.existenciaMinimo,
    });
  }

  async findAll(): Promise<ArticuloEntity[]> {
    return this.articuloRepository.find();
  }

  async findOne(id: number): Promise<ArticuloEntity> {
    const articulo = await this.articuloRepository.findOneBy({id});

    if (!articulo) {
      throw new NotFoundException(`El articulo ${id} no existe.`);
    }

    return articulo;
  }

  async update(id: number, updateArticuloDto: UpdateArticuloDto) {
    const articulo = await this.articuloRepository.findOneBy({id});

    if (!articulo) {
      throw new NotFoundException(`El articulo ${id} no existe.`);
    }

    const articuloUpdate = Object.assign(articulo, updateArticuloDto);
    return this.articuloRepository.save(articuloUpdate);
  }

  async remove(id: number) {
    const existe = await this.articuloRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El articulo ${id} no existe.`);
    }

    return this.articuloRepository.delete(id);
  }
}
