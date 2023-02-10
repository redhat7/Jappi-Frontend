import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateFormat",
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any): string {
    const stringToDate: Date = new Date(value);
    let dateFormat = stringToDate.toLocaleDateString();
    let [date, month, year] = dateFormat.split("/");
    return `${date}-${month}-${year}`;
  }
}
