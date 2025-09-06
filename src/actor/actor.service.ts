import { ActorRepository} from './actor.repository';
import { UpdateActorInput } from './updateInput';
import { CreateActorInput } from './createInput';

export class ActorService {
  private actorRepository: ActorRepository;

  constructor(repository: ActorRepository) {
    this.actorRepository = repository;
  }

  async getAllActors() {
    const actors = await this.actorRepository.findAll();

    if (actors.length === 0) throw new Error(`No actors found in database`);
    return actors;
  }

  async getActorById(id: number) {
    const actor = await this.actorRepository.findById(id);
    if (!actor) throw new Error(`Actor with ${id} not found in database.`);
    return actor;
  }

  async createActor(input: CreateActorInput) {
    return await this.actorRepository.create(input);
  }

  async updateActor(id: number, input: UpdateActorInput) {
    const actor = await this.actorRepository.findById(id);
    if (!actor) throw new Error(`Actor with ${id} not found in database. Unable to update.`);

    return await this.actorRepository.update(id, input);
  }

  async deleteActor(id: number) {
    const actor = await this.actorRepository.findById(id);
    if (!actor) throw new Error(`Actor with ${id} not found in database. Enable to delete.`);
    
    return await this.actorRepository.delete(id);
  }
}
