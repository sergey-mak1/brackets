module.exports = function check(str, bracketsConfig) {
 if (str.length %2 === 0) {
        str = Array.from(str);
        let stack = [];
        let x;

        let brackets = Array.from(bracketsConfig.join('').replace(/,/g, ''));
        for (elem of str) {
            let index = brackets.indexOf(elem);
            if (index % 2 === 0) {
                if (elem === brackets[index + 1] && stack[stack.length - 1] === index) {
                    stack.pop();
                }
                else {
                    stack.push(index);
                }
            }
            else {
                x = stack.pop()
                if (x !== index - 1) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
   else {
    return false;
   }
        }
