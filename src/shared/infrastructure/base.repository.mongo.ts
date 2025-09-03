import { Model, Document } from 'mongoose';
import { IBaseRepository } from '../core/base.repository';

export abstract class BaseRepositoryMongo<T extends Document> implements IBaseRepository<T> {

    
  protected readonly model: Model<T>;

  /**
   * Crea una instancia del repositorio base.
   *
   * @param model - Modelo de Mongoose para la entidad.
   */
  constructor(model: Model<T>) {
    this.model = model;
  }

  /**
   * Crea y guarda una nueva entidad en la base de datos.
   *
   * @param entity - Entidad a crear.
   * @returns La entidad creada.
   */
  async create(entity: T): Promise<T> {
    const created = new this.model(entity);
    return await created.save();
  }

  /**
   * Busca una entidad por su identificador único.
   *
   * @param id - Identificador de la entidad.
   * @returns La entidad encontrada o null si no existe.
   */
  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  /**
   * Obtiene todas las entidades de la colección.
   *
   * @returns Lista de entidades.
   */
  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  /**
   * Actualiza una entidad existente por su identificador.
   *
   * @param id - Identificador de la entidad a actualizar.
   * @param entity - Propiedades a actualizar (parciales).
   * @returns La entidad actualizada o null si no existe.
   */
  async update(id: string, entity: Partial<T>): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, entity, { new: true }).exec();
  }

  /**
   * Elimina una entidad por su identificador.
   *
   * @param id - Identificador de la entidad a eliminar.
   * @returns void
   */
  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }

  async findOne(filter:  Record<string, string>): Promise<T | null> {
    return await this.model.findOne(filter).exec();
  }
}
