import ILens from "../../interfaces/Lens";

const lensesMock:ILens = {
  degree: 0.25,
  antiGlare: false,
  blueLightFilter: true
}

const lensesMockWithId:ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52ce',
  degree: 0.25,
  antiGlare: false,
  blueLightFilter: true
}

const allLensesMock = [
  {
    _id: '62cf1fh67j8565d94eba52ce',
    degree: 0.25,
    antiGlare: false,
    blueLightFilter: true
  },
  {
    _id: '62cf1fc64985676jeba52ce',
    degree: 0.25,
    antiGlare: false,
    blueLightFilter: true
  }
]

export { lensesMock, lensesMockWithId, allLensesMock };