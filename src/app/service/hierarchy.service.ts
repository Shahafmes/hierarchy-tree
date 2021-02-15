import { Injectable } from '@angular/core';
import {PersonNode} from "../models/person-model";

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {
  public TREE_DATA: PersonNode[] = [{
    "id": 0,
    "name": "Admin",
    "jobTitle": "CEO",
    "imgUrl": "some/url.gif",
    "children": [{
      "id": 1,
      "name": "Co-Admin",
      "jobTitle": "CTO",
      "imgUrl": "some/url2.gif",
      "children": [{
        "id": 4,
        "name": "devi",
        "jobTitle": "developer",
        "imgUrl": "some/url4.gif"
      }],
    }, {
      "id": 3,
      "name": "Co-Admin",
      "jobTitle": "VP",
      "imgUrl": "some/url3.gif"
    }]
  }]

  // dataChange: BehaviorSubject<TodoItemNode[]> = new BehaviorSubject<TodoItemNode[]>([]);
  //
  // get data(): TodoItemNode[] { return this.dataChange.value; }
  //
  // constructor() {
  //   this.initialize();
  // }
  //
  // initialize() {
  //   // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
  //   //     file node as children.
  //   const data = this.buildFileTree(TREE_DATA, 0);
  //
  //   // Notify the change.
  //   this.dataChange.next(data);
  // }
}
