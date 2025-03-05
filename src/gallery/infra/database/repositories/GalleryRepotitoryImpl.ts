import { GalleryRepository } from '../../../domain/repositories/gallery.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GalleryEntity } from '../gallery.entity';
import GalleryMapper from '../../Gallery.mapper';

@Injectable()
export class GalleryRepositoryImpl implements GalleryRepository {
  constructor(
    @InjectRepository(GalleryEntity)
    private readonly galleryRepository: Repository<GalleryEntity>,
  ) {}

  async findAllByPaging(pageNumber: number) {
    const galleryList = await this.galleryRepository.find({
      take: 10,
      skip: 10 * (pageNumber - 1),
    });
    return galleryList.map((galleryEntity: GalleryEntity) => {
      return GalleryMapper.fromEntity(galleryEntity);
    });
  }
}
