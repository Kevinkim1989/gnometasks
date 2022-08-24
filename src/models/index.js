// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Type, Task, Project, Home } = initSchema(schema);

export {
  Type,
  Task,
  Project,
  Home
};