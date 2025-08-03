const handleinput = (key)=>(e)=>{
setpreviouse ((pre)=>({
    ...pre,
    [key]: e.target.value
}))
}