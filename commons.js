const getCSS =(variavel)=>{
    const bodystyles = getComputedStyle(document.body)
    return bodystyles.getPropertyValue(variavel)
}
const tickconfig={
    family: getCSS('--font'),
    size :16,
    color: getCSS('--primary-color')
}
export{getCSS, tickconfig}