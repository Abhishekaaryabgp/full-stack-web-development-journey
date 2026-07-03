//  here the block
// note after 2015 let,const introduce so the block scope only works on these two  
{
  let a = 12; // not access
  const a = 12; // not access 
  var a = 12; // accessiablbe out side the block
}
// out side the block a is not acessiable (using var you can access out side the block but this is not good practice to use)
console.log(a);

