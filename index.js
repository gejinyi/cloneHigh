//深拷贝
function checkedType(target) {

    return Object.prototype.toString.call(target).slice(8, -1)

}

function clone(target) {

    let result, targetType = checkedType(target)

    if (targetType === 'Object') {

        result = {}

    } else if (targetType === 'Array') {

        result = []

    } else {

        return target

    }

    for (let i in target) {

        let value = target[i]

        if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
            for(let j in result) {

                if(result[j] == value){

                    break;
                }
                else{ result[i] = clone(value)}};

        } else { 

            result[i] = value;

        }

    }

    return result

}

//柯里化
var x = addSum(1,2);

function addSum (m,n) {

    var c = m + n;

    return function (p) {

        if(p%3 === 0){

            return c + p;

        }else{

            return 2*c + p;
        }

    }
}
