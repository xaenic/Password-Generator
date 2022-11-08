const lists = {
    letters: "abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*"
};

const combinations = () => {
    const options = document.querySelectorAll(".checkbox");
    let comb = "";
    options.forEach(function (i,e) {
        if(i.checked)
            comb+=lists[i.id];   
    })

    return comb;
}

function generateString() {
    const cbs = combinations();
    let len = document.getElementById("length").value;
    let password = "";

    for(let i =0; i < len; i++)
        password+= cbs.charAt(Math.floor(Math.random() * cbs.length));
    return password;
}

function changeColor() {
    const slider = document.getElementById("length");
    const min = slider.min;
    const max = slider.max;
    const value = slider.value;
    slider.style.background = `linear-gradient(to right, #64ffda 0%, #64ffda ${
      ((value - min) / (max - min)) * 100
    }%, #ccd6f6 ${((value - min) / (max - min)) * 100}%, #ccd6f6 100%)`;

    document.getElementById("ltext").innerHTML = value;
}

generate();
function generate() {
  changeColor();
  let field = document.querySelector('.password');
  field.value = generateString();
  document.getElementById("copy").innerHTML = "Copy Password";
}

function check() {
    const options = document.querySelectorAll('.checkbox');
    let enableds = [];
    options.forEach(function(i, e){
        if(i.checked){
            enableds.push(i);
        }
    })

    if(enableds.length == 1)
        enableds[0].setAttribute('disabled','')
    else
        enableds.forEach((i,e) => {
            i.removeAttribute('disabled');
        })
}

function copy () {
    const text = document.querySelector('.password').value;
    navigator.clipboard.writeText(text).then(
        function (){
            document.getElementById('copy').innerHTML = "Copied ✅";
        },
        function (err) {
            console.error("Could not copy password: ", err);
        }
    )
}