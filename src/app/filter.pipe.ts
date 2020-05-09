import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    
    if( !value || !filterString) {
      return value;
    }

    if (typeof filterString === "string") {
      return value.filter(
        (item: any) => item.status.toLowerCase().indexOf( filterString.toLowerCase() ) !== -1
      );
    }

  }

}
