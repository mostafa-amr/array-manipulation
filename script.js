




document.getElementById('ascending').addEventListener('click',()=>{
    
const arr = document.getElementById('value').value.split(',').map((val)=>{return parseInt(val)})
// debugger
const arrAsc=arr.sort((x,y)=>{return x-y})
if(isNaN(arrAsc[0])){
    document.getElementById('value').value=''
    alert('enter numbers only seperated by coma')
    return
}
alert(`your number in ascending order = ${arrAsc}`)
document.getElementById('value').value=''

})



document.getElementById('descending').addEventListener('click',()=>{
    const arr = document.getElementById('value').value.split(',').map((val)=>{return parseInt(val)})
    const arrdsc=arr.sort((x,y)=>{return y-x})
    if(isNaN(arrdsc[0])){
        document.getElementById('value').value=''
        alert('enter numbers only seperated by coma')
        return
    }
    else{
    alert(`your number in ascending order = ${arrdsc}`)
    document.getElementById('value').value=''
    }
    })


document.getElementById('maximum').addEventListener('click',()=>{
    const arr = document.getElementById('value').value.split(',').map((val)=>{return parseInt(val)})  
    let maxe=Math.max(...arr)
    if(isNaN(maxe)){
        document.getElementById('value').value=''
        alert('enter numbers only seperated by coma')
        return
    }
    else{
    alert(`your maximum number  = ${maxe}`)
    document.getElementById('value').value=''
}
})


document.getElementById('minumum').addEventListener('click',()=>{
    const arr = document.getElementById('value').value.split(',').map((val)=>{return parseInt(val)})  
    let mine=Math.min(...arr)
    if(isNaN(mine)){
        document.getElementById('value').value=''
        alert('enter numbers only seperated by coma')
        return
    }
    else{
    alert(`your minumum number  = ${mine}`)
    document.getElementById('value').value=''
    }
   
})


document.getElementById('filter').addEventListener('click',()=>{
    const arr = document.getElementById('value').value.split(',').map((val)=>{return parseInt(val)}).filter((value)=>{return value>50})
   if(arr.length>0){
    alert(`your minumum number  = ${arr}`)
    document.getElementById('value').value=''
   }
    else{
        document.getElementById('value').value=''
        alert(`enter atleast number above 50`)
    }
})









