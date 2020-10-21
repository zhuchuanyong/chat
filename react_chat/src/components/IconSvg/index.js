const requireAll = (requireContext) => {
  console.log('requireContext', requireContext)
  console.log('requireContext - id', requireContext.id)
  console.log('requireContext keys()', requireContext.keys())

  // console.log('requireContext map()', requireContext.maps())
  console.log('requireContext.keys().map(requireContext)', requireContext.keys().map((item)=>{
    return item
  }))
  let a=requireContext.keys().map(requireContext)

  console.log(' a',a);
  return requireContext.keys().map(requireContext)
}
const req = require.context('@src/assets/icon/', false, /\.svg$/)
console.log('req',req)
let svgIcons=requireAll(req)

console.log('svgIcons', svgIcons)
export  default svgIcons
