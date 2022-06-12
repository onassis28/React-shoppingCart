import {atom} from 'recoil'

export const  itemstate = atom({
    key: 'items',
    default:[
     
  ]
});
 
export const count =atom({
  key: 'count',
  default: 0
})

export const dateChange =atom({
  key:'date',
  default:false
})

