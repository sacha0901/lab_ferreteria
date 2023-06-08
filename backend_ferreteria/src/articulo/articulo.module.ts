import { Module } from '@nestjs/common';
import { ArticuloService } from './articulo.service';
import { ArticuloController } from './articulo.controller';
import { ArticuloEntity } from './entities/articulo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticuloEntity])],
  controllers: [ArticuloController],
  providers: [ArticuloService]
})
export class ArticuloModule {}
