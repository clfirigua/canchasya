export interface BaseRepository<T> {
    save(entity: T): Promise<T>;
    delete(id:string): Promise<void>;
    findById(id: string): Promise<T | null>;
    paginate(page: number, limit: number): Promise<T[]>;
    update(entity: T): Promise<T | null>;
}