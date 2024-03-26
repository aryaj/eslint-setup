import lodash from 'lodash';

//FIXME

var arr = ['apples','grapes','oranges'];

lodash.findIndex(arr,'grapes');

function checkEven(number){
    if(number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

checkEven(4);