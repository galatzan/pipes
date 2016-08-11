import { Component } from '@angular/core';
import { MatchPipe } from '../pipes/match.pipe';


@Component({
  selector: 'examples',
  pipes: [MatchPipe],
  template:`
   <h1>{{greeting | match: 'hfdjshfjks' : 'gi'}}</h1>
   ` ,
})

export class Examples {

private greeting = `Hello world, hello world, helo world, hell`; 

}
