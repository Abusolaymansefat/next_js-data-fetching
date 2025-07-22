"use client"


export default  function ProductsAddFrom(){

   const handleSubmit =async(e) => {
    e.preventDefault()
    const form = e.target;
    const productName = form.productName.value;
    const playLoad = {productName}
    const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        body: JSON.stringify(playLoad),
        headers: {
            "Content-Type": "application/json"
        }

    })
    const result = await res.json();
    console.log(result)
    form.reset();
    alert("product add ")
}
   
    return (
        <div className="bg-[#4852e4] text-[#f1f3f3]">
            <form onSubmit={handleSubmit}>
                <input type="text" name="productName" placeholder="Prodect Name" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}