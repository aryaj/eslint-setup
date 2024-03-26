module.exports = {
    meta:{},
    create(context){
        return {
            CallExpression(node){
                if(node.callee.name === 'getPayments'){
                    context.report({
                        node:node,
                        message:'getPayments is deprecated, use latest getLatestPayments'
                    });
                }
            }
        };
    }
};