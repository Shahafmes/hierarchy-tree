

// Each node of the structure tree will contain Person Name, Person Job Title (max length 64 chars) and image.

export class PersonNode {
  id: number;
  name: string;
  jobTitle: string;
  imgUrl: string;
  children?: PersonNode[];
}
//
// export class Person {
//   name: string;
//   jobTitle: string;
//   imgUrl: string;
//   id: number;
// }






