
var input_txt = document.getElementById("input_txt");
var output_txt = document.getElementById("output_txt");
var copy_btn = document.getElementById("copy_btn");
var clear_btn = document.getElementById("clear_btn");

input_txt.addEventListener("keyup", (e) => {
    toMockingTxt(e.target.value);
});

copy_btn.addEventListener("click", (e) => {
    copyTxt();
});
clear_btn.addEventListener("click", (e) => {
    clearTxt();
});

function toMockingTxt(inptxt) {
    var isUpperCase = true;
    var result = '';
    for (var chara of inptxt) {
        if (isUpperCase) {
            result += chara.toUpperCase();
        } else {
            result += chara.toLowerCase();
        }

        if (chara.match(/[a-zA-Z]/)) {
            isUpperCase = !isUpperCase;
        } else {
            isUpperCase = true;
        }
    }
    output_txt.value = result;
    return result;
}

function copyTxt() {  
    var coppiedTxt = output_txt.value;
    if(coppiedTxt.match(/[a-zA-Z]/)){
        navigator.clipboard.writeText(coppiedTxt);
        alert('Copied: ' + coppiedTxt);
        clearTxt();

    }else{
        alert('PlEaSe TyPe/PaStE SoMeThInG In To ThE BaSiC TeXt FiElD!');
    }  
}

function clearTxt(){
    output_txt.value = "";
    input_txt.value = "";
}
