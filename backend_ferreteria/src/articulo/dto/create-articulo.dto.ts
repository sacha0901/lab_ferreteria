import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateArticuloDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo codigo no debe ser vacío' })
  @IsString({ message: 'El campo codigo debe ser de tipo cadena' })
  @MaxLength(10, {
    message: 'El campo codigo no debe ser mayor a 20 caracteres',
  })
  readonly codigo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe ser vacío' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(30, {
    message: 'El campo descripcion no debe ser mayor a 20 caracteres',
  })
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio deber ser de tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo unidad no debe ser vacío' })
  @IsString({ message: 'El campo unidad debe ser de tipo cadena' })
  @MaxLength(20, {
    message: 'El campo unidad no debe ser mayor a 20 caracteres',
  })
  readonly unidad: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo existenciaMaximo no debe ser vacío' })
  @IsNumber(
    {},
    { message: 'El campo existenciaMaximo deber ser de tipo numérico' },
  )
  readonly existenciaMaximo: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo existenciaMinimo no debe ser vacío' })
  @IsNumber(
    {},
    { message: 'El campo existenciaMinimo deber ser de tipo numérico' },
  )
  readonly existenciaMinimo: number;
}
