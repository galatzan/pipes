import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'match'
})

export class MatchPipe implements PipeTransform{

  transform(input:string,pattern:string,flag:any):(string | any[]) {

    let reg = new RegExp(pattern, flag);

    return typeof input == 'string'?
    input.match(reg)?
    input.match(reg):
    'No Matches Found':
    null;
  }
}