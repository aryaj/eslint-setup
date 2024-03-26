module.exports = {
    meta:{
            fixable:'code'
        },
    create(context){
        return {
            CallExpression(node){
                if(node.callee.name === 'getPayments'){
                    context.report({
                        node:node,
                        message:'getPayments is deprecated, use latest getLatestPayments',
                        fix: function(fixer){
                            return fixer.replaceText(node.callee,'getLatestPayments')
                        }
                    });
                }
            }
        };
    }
};