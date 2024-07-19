let url = "http://universities.hipolabs.com/search?name=";
let inp;

document.querySelector("button").addEventListener("click", async() => {
    inp = document.querySelector("input").value;
    let country_name = await college(inp);
    Showname(country_name);
});

function Showname(country_name) {
    let list = document.querySelector("ul");
    list.innerText = "";
    for (nam of country_name) {

        let li = document.createElement("li");
        li.innerText = nam.name;
        list.appendChild(li);
    }
}

async function college(inp) {
    let counrty = await axios.get(url + inp);
    try {
        let ss = counrty.data
        console.log(counrty.data);
        return counrty.data;

    } catch (e) {
        console.log(e);
        return [];
    }
}