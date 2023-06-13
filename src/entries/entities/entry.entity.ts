import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  author: string;

  @Column({ type: 'date' })
  publicationDate: Date;

  @Column({ type: 'text' })
  contentText: string;

  @Column({ type: 'text', nullable: true })
  image: string;
}
