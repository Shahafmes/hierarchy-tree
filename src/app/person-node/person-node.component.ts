import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {of} from "rxjs";
import {PersonNode} from "../models/person-model";
import {HierarchyService} from "../service/hierarchy.service";

@Component({
  selector: 'app-person-node',
  templateUrl: './person-node.component.html',
  styleUrls: ['./person-node.component.css']
})
export class PersonNodeComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<PersonNode>;

  nestedDataSource: PersonNode[];

  constructor(private hierarchyService:HierarchyService) {
    this.nestedTreeControl = new NestedTreeControl<PersonNode>(this._getChildren);
    this.nestedDataSource = this.hierarchyService.TREE_DATA;
  }

  hasNestedChild = (_: number, nodeData: PersonNode) => nodeData.children;
  private _getChildren = (node: PersonNode) => of(node.children);

  ngOnInit(): void {
  }

}
