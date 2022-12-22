export class ObjectHelper {
  public static isFieldExists(obj: unknown, field: string): boolean {
    return obj.hasOwnProperty(field) && obj[field] !== undefined;
  }
}
