import { PrismaClient } from '@prisma/client';
import { CreateActorInput } from './createInput';
import { UpdateActorInput } from './updateInput';


export class ActorRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll() {
    const actors = await this.prisma.actor.findMany();
    return actors.map((actor: { birthDate: Date; }) => ({
      ...actor,
      birthDate: this.formatDate(actor.birthDate),
    }));
  }

  async findById(id: number) {
    const actor = await this.prisma.actor.findUnique({
      where: { id },
      include: { movies: true },
    });
    return actor ? { ...actor, birthDate: this.formatDate(actor.birthDate) } : null;
  }

  async create(data: CreateActorInput) {
    const actor = await this.prisma.actor.create({
      data: {
        name: data.name,
        birthDate: new Date(data.birthDate),
      },
      include: { movies: true },
    });
    return { ...actor, birthDate: this.formatDate(actor.birthDate) };
  }

  async update(id: number, data: UpdateActorInput) {
    const actor = await this.prisma.actor.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.birthDate && { birthDate: new Date(data.birthDate) }),
      },
      include: { movies: true },
    });
    return { ...actor, birthDate: this.formatDate(actor.birthDate) };
  }

  async delete(id: number) {
    return this.prisma.actor.delete({ where: { id } });
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; 
  }
}
