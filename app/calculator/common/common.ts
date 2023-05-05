import {ServiceType} from "@/app/calculator/types";


// export const calculateRabat = (orders: ServiceType[]) => {
//     if(!orders.length) return
//   const derivativeProductsID = orders.flatMap((order)=> order.rabatProduct)
//     const success = derivativeProductsID.reduce((acc,nextvalue) => {
//         const index =  acc.findIndex((item) => item.rabat_type === nextvalue.rabat_type)
//          if(index > -1) {
//              acc[index].rabat_exist = true
//              return acc[index]
//          }else {
//             acc.push({...nextvalue})
//          }
//    return acc
//
//     },[] as RabatProduct[])
//     console.log("Success",success)
//     return  success
// }
//
// export const showAvailableDiscounts = (orders: ServiceType[], id: ServiceType["id"]) => {
//     const rabatProducts = orders.flatMap((service) => service.rabatProduct)
//     const isRabat = !!rabatProducts.find((rabatProduct)=> rabatProduct.id == id)
//     return  {
//         backgroundColor: isRabat && orders.length < 2 ? "#50C878" : "",
//         transition: "all ease-in-out 0.3s"
//     }
//
// }
//


export const  checkArrays = (firstArray: number[], secondArray: number[]) => {
    return firstArray.sort().toString() === secondArray.sort().toString()
}