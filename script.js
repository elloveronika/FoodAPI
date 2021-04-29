document.querySelector('button').addEventListener('click', newFunc)




async function newFunc() {
    try{

    let choice = document.querySelector('input').value
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c6d01b413ea54fd1ada1fa451b6ff99e&query=${choice}`
    
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)

    }catch(err){
        console.log(err)
    }
}