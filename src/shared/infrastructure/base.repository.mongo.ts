import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';

export abstract class BaseRepositoryMongo<T extends Document> {
  constructor(protected readonly model: Model<T>) {}

  async save(entity: T): Promise<T> {
    const created = await this.model.create(entity);
    return created.toObject() as T;
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id } as FilterQuery<T>).exec();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async paginate(page: number, limit: number): Promise<T[]> {
    return this.model
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async update(id: string, entity: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, entity, { new: true }).exec();
  }
}
