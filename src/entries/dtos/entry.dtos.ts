import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateEntryDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsDate()
  @IsNotEmpty()
  readonly publicationDate: Date;

  @IsString()
  @IsNotEmpty()
  readonly contentText: string;
}
