
let button = document.getElementById("start");

button.addEventListener("click", (event) => {
    let calculation = document.getElementById('calculation').value;
    let result = "";

        if (calculation.includes('+')== true) {
            const nums = calculation.split("+");
            result = `${nums[0]} + ${nums[1]} = ${parseFloat(nums[0])+parseFloat(nums[1])}`;

        } else if (calculation.includes('-')== true) {
            const nums = calculation.split('-');
            result = `${nums[0]} - ${nums[1]} = ${parseFloat(nums[0])-parseFloat(nums[1])}`;

        } else if (calculation.includes('*')== true) {
            const nums = calculation.split('*');
            result = `${nums[0]} * ${nums[1]} = ${parseFloat(nums[0])*parseFloat(nums[1])}`;

        } else if (calculation.includes('/')== true) {
            const nums = calculation.split('/');
            result = `${nums[0]} / ${nums[1]} = ${parseFloat(nums[0])/parseFloat(nums[1])}`;
        } 
    document.getElementById('result').innerHTML = result;
})