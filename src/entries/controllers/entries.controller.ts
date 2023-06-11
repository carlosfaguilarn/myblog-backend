import {
  Get,
  Post,
  Controller,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EntriesService } from '../services/entries.service';
import { CreateEntryDto } from '../dtos/entry.dtos';

@ApiTags('entries')
@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Get()
  getAll() {
    return this.entriesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.entriesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateEntryDto) {
    return this.entriesService.create(payload);
  }
}
