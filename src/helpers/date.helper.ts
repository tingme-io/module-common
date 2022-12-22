export class DateHelper {
  public static dateToTimeStamp(d: Date): number {
    const strDate = d.toISOString();
    const datum = Date.parse(strDate);
    return Math.floor(datum / 1000);
  }
}
