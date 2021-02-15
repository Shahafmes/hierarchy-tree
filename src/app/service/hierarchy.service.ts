import { Injectable } from '@angular/core';
import { PersonNode} from "../models/person-model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {
  public TREE_DATA: PersonNode[] = [{
    "id": 0,
    "name": "Admin",
    "jobTitle": "CEO",
    "imgUrl": "https://www.w3schools.com/w3images/avatar1.png",
    "children": [{
      "id": 1,
      "name": "Co-Admin",
      "jobTitle": "CTO",
      "imgUrl": "https://www.w3schools.com/w3images/avatar3.png",
      "children": [{
        "id": 3,
        "name": "devi",
        "jobTitle": "developer",
        "imgUrl": "https://www.w3schools.com/w3images/avatar6.png"
      }],
    }, {
      "id": 2,
      "name": "Co-Admin",
      "jobTitle": "VP",
      "imgUrl": "https://www.w3schools.com/w3images/avatar2.png"
    }]
  }]

  dataChange: BehaviorSubject<PersonNode[]> = new BehaviorSubject<PersonNode[]>([]);
  _nextId: number = -1;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.dataChange.next(this.TREE_DATA);
    this.getLastId(this.TREE_DATA[0]);
  }

  get data(): PersonNode[] { return this.dataChange.value; }

  getLastId(obj) {
    let id = -1;
    let iterateObj = (obj) => {
      Object.keys(obj).forEach(function (key) {
        if(key === 'id')
          id = Math.max(id, obj[key]);
        if (typeof obj[key] === 'object') {
          return iterateObj(obj[key]);
        }

      });
    }
    iterateObj(obj);
    this._nextId = id;
  }


  appendNewNode(node: PersonNode, newObj: PersonNode){
    console.log(node);
    const child = <PersonNode>{
      name: newObj.name,
      id: ++this._nextId,
      jobTitle:newObj.jobTitle,
      imgUrl: newObj.imgUrl
    };
      if (node.children) {
        node.children.push(child);
        this.dataChange.next(this.data);
      }
      else {
        node.children = [];
        node.children.push(child);
        this.dataChange.next(this.data);
      }
  }

  updateItem(node: PersonNode, noodeDetails: PersonNode) {
    node.name = noodeDetails.name;
    node.jobTitle = noodeDetails.jobTitle;
    node.imgUrl = noodeDetails.imgUrl;
    this.dataChange.next(this.data);
  }

}
