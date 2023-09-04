const loadData =async ()=>{
    const response = await fetch(`https://dummyjson.com/quotes`);
    const MainData = await response.json();
    const data = MainData.quotes
    addData(data)
    console.log(data)
}
 
const addData = (data) =>{
         const cardContainer = document.getElementById('card-Container')
        data.forEach(quotes => {
            const div = document.createElement("div")
            div.innerHTML=`
            <div class="bg-slate-100 w-9/12 mx-auto p-5 mt-10 rounded-xl">
            <h1 class="font-serif font-medium text-xl">${quotes.quote}</h1>
            <p class="text-2xl font-semibold mt-4 underline">${quotes.author}</p>
           </div>
            `
            cardContainer.appendChild(div)
        });

}

  
loadData()