module.exports = {
    create(context){
        return  {
            CallExpression(node){
                if(node.callee.name === 'checkNumber'){
                    if(typeof node.arguments[0].value !== 'number'){
                        context.report(node, 'checkNumber arguments should be number only')
                    }   
                }
            }
        }
    }
}