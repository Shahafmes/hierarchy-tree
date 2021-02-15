import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {Observable, of} from "rxjs";
import {PersonNode} from "../models/person-model";
import {HierarchyService} from "../service/hierarchy.service";
import {ArrayDataSource} from "@angular/cdk/collections";
import {MatTreeNestedDataSource} from "@angular/material/tree";

@Component({
  selector: 'app-person-node',
  templateUrl: './person-node.component.html',
  styleUrls: ['./person-node.component.css']
})
export class PersonNodeComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<PersonNode>;
  nestedDataSource: PersonNode[];
  nestedDataSource2: PersonNode[];

  readonly treeSource: MatTreeNestedDataSource<PersonNode>;

  constructor(private hierarchyService:HierarchyService) {
    this.treeSource = new MatTreeNestedDataSource<PersonNode>();
    this.nestedTreeControl = new NestedTreeControl<PersonNode>(this._getChildren);

    this.hierarchyService.dataChange.subscribe( (data) =>{

      this.treeSource.data = null;
      this.treeSource.data = data;

      this.nestedDataSource = null;
      this.nestedDataSource = data;
      }
    );
  }

  hasNestedChild = (_: number, nodeData: PersonNode) => nodeData.children;
  hasNoContent = (_: number, nodeData: PersonNode) =>  nodeData.name === '';


  private _getChildren = (node: PersonNode) => of(node.children);

  ngOnInit(): void {

  }

  saveNode(node: PersonNode, nameValue: string, jobValue: string, imgUrl: string) {
   const newNodeData = {
     name: nameValue,
     jobTitle: jobValue,
     imgUrl: imgUrl,
     id: -1
   }
    this.hierarchyService.updateItem(node!, newNodeData);
  }

  addNewItem(node: PersonNode) {
      let isParentHasChildren: boolean = false;
      if (node.children)
        isParentHasChildren = true;

      this.hierarchyService.appendNewNode(node!, {
        name: '',
        id: -1,
        imgUrl: '',
        jobTitle: ''
      });
      if (!this.nestedTreeControl.isExpanded(node)) {
        this.nestedTreeControl.expand(node);
      }

      // if (isParentHasChildren){
      //     this.nestedTreeControl.expand(node);
      // }
  }

  //
  // /** add */
  // add(node?: TreeItem) {
  //   const newItem = this._createTreeItem(`ManualCreated ${AppComponent._id}`);
  //
  //   // add as child
  //   if (node) {
  //     node.children = [
  //       ...(node.children || []),
  //       newItem
  //     ];
  //     if (!this.treeControl.isExpanded(node)) {
  //       this.treeControl.expand(node);
  //     }
  //   }
  //   // add to root
  //   else {
  //     this.dataSource$.next([
  //       ...this.dataSource$.value,
  //       newItem
  //     ]);
  //   }
  //
  //   this.dataSource$.next(this.dataSource$.value);
  //
  //
  // }

}
