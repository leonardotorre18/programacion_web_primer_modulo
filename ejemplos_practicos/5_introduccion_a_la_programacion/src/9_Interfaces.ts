interface IPerro {
  age: number,
  name: string
}
interface IPerro {
  lastname: string
}
class IPerroClass implements IPerro {
  age = 3;
  name = 'red';
  lastname = 'blue'
}

type TPerro = {
  age: number,
  name: string
}
// type TPerro = {
//   lastname: string
// }

const PerroConInterface: IPerro = {
  age: 3,
  name: 'Charlie',
  lastname: 'Harper'
}
class TPerroClass implements TPerro {
  age = 3;
  name = 'red';
  lastname = 'blue'
}


const PerroConType: TPerro = {
  age: 3,
  name: 'Charlie'
}


console.log(PerroConInterface, PerroConType)