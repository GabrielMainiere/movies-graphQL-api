import { Context } from '../context';
import { CreateActorInput } from './createInput';

export const actorResolver = {
  Query: {
    actors: (_: any, __: any, context: Context) => context.actorService.getAllActors(),
    actor: (_: any, { id }: { id: number }, context: Context) => context.actorService.getActorById(id),
  },
  Mutation: {
    createActor: (_: any, { input }: { input: CreateActorInput }, context: Context) =>
      context.actorService.createActor(input),
    updateActor: (_: any, { id, input }: { id: number; input: any }, context: Context) =>
      context.actorService.updateActor(id, input),
    deleteActor: (_: any, { id }: { id: number }, context: Context) =>
      context.actorService.deleteActor(id),
  },
};
