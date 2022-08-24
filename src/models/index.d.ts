import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Type {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Task?: Task | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly typeTaskId?: string | null;
  constructor(init: ModelInit<Type, TypeMetaData>);
  static copyOf(source: Type, mutator: (draft: MutableModel<Type, TypeMetaData>) => MutableModel<Type, TypeMetaData> | void): Type;
}

export declare class Task {
  readonly id: string;
  readonly cdate?: string | null;
  readonly ctime?: string | null;
  readonly summary?: string | null;
  readonly description?: string | null;
  readonly project_id?: string | null;
  readonly type_id?: string | null;
  readonly Project?: Project | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class Project {
  readonly id: string;
  readonly cdate?: string | null;
  readonly ctime?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

export declare class Home {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}