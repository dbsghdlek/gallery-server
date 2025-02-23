import { GalleryRepository } from '../../../domain/repositories/gallery.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from '../entities/Gallery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GalleryRepositoryImpl implements GalleryRepository {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
  ) {}

  findAll() {
    return this.galleryRepository.find();
  }
}
