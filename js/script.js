let grid = "";

for (let i = 1; i <= 100; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FIZZBUZZ";
        grid += `<div class = "p-1"> <div class="card d-flex justify-content-center align-items-center fizzbuzz ms_dim"> ${result} </div> </div>`
    } else if (i % 5 == 0) {
        result = "BUZZ";
        grid += `<div class = "p-1"> <div class="card d-flex justify-content-center align-items-center buzz ms_dim"> ${result} </div> </div>`
    } else if (i % 3 === 0) {
        result = "FIZZ"
        grid += `<div class = "p-1"> <div class="card d-flex justify-content-center align-items-center fizz ms_dim"> ${result} </div> </div>`
    } else {
        grid += `<div class = "p-1"> <div class="card d-flex justify-content-center align-items-center natural ms_dim"> ${i} </div> </div>`
    }
    console.log (i, result)
}

document.querySelector(".row").innerHTML = grid;