
// const CURRENT_FORMATTER = new Intl.NumberFormat(undefined ,{ style:'currency', currency: 'USD' })

 

// const  FormatCurrent =(number)=>{
//     return CURRENT_FORMATTER.format(number)
// }
// export default FormatCurrent
const CURRENTFORMAT =new Intl.NumberFormat(undefined,{ style: 'currency', currency: 'USD' });
const Format =(number)=>{
    return CURRENTFORMAT.format(number)

}
export default Format