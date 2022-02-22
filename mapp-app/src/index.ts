import { Company } from './Company'
import { User } from './User'
import { CustomMap } from "./CustomMap";
/// <reference types="@types/google.maps" />




const user = new User()
const company = new Company()
const customMap= new CustomMap('map')

// console.log(user)

// const company = new Company()
// console.log(company)



 customMap.addMarker(user);
 customMap.addMarker(company)
 