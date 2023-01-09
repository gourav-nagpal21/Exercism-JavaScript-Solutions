export const toRoman = (number) => {
    let result = '';
    const roman ={ "M" : 1000, "CM" : 900, "D" : 500, "CD" : 400, "C" : 100, "XC" : 90, "L" : 50, "XL" : 40, "X" : 10, "IX" : 9, "V" : 5, "IV" : 4, "I" : 1 }
    while(number > 0){
        for (let i in roman){
            if(number >= roman[i]){
                result += i;
                number -= roman[i];
                break;
            }
        }
    }
    return result;
};