// All prices here are fictional demo data, never production or official observations.
export const products = [
 {id:'eggs',name:'Eggs',aliases:['egg','eggs'],spec:'Large eggs · 12 count',unit:'each',amount:12,reference:5.75,referenceAmount:12,prices:[4.99,5.29,6.75]},
 {id:'milk',name:'Milk',aliases:['milk','whole milk'],spec:'Whole milk · 2 L',unit:'L',amount:2,reference:6.20,referenceAmount:2,prices:[4.49,4.79,5.19]},
 {id:'chicken',name:'Chicken',aliases:['chicken','whole chicken'],spec:'Chicken breast · per kg',unit:'kg',amount:1,reference:8.50,referenceAmount:1,prices:[7.99,8.49,9.29]}
];
export const stores=['Demo Market A','Demo Market B','Demo Market C'];
export function matchProduct(query){const q=query.toLowerCase().replace(/[^a-z]/g,' ').trim().replace(/\s+/g,' ');return products.find(p=>p.aliases.includes(q))||null;}
export function referencePrice(product,quantity,unit){const n=Number(quantity);if(!Number.isFinite(n)||n<=0||n>1000000)return null;if(product.unit==='each'&&(unit!=='each'||!Number.isInteger(n)))return null;if(product.unit==='L'&&!['L','mL'].includes(unit))return null;if(product.unit==='kg'&&!['kg','lb'].includes(unit))return null;const factor=unit==='lb'?0.45359237:unit==='mL'?0.001:1;return product.reference/product.referenceAmount*n*factor;}
export function totalCents(cart){return cart.reduce((sum,row)=>{const p=products.find(p=>p.id===row.product);return sum+Math.round(p.prices[row.store]*100)*row.quantity;},0);}
