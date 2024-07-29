abstract class BaseService<T> {
   abstract findAll(): T[];
   abstract findOne(id: number): T | null;
   abstract create(title: string, body: string): T;
   abstract update(id: number, title: string, body: string): T | null;
   abstract delete(id: number): void;
}

export default BaseService;
