module.exports = {
    create(context){
        function findComments(comment){
            console.log(context.options);
            console.log("comment",comment)
            // if(comment.value.toLowerCase().indexOf('fixme') !== -1){
            //     context.report(comment, "FIXME is not allowed in comments")
            // }
            if(context.options.indexOf(comment.value.toLowerCase()) >= 0){
                context.report(comment, `${comment.value} is not allowed in the comments`)
            }
        }

        return {
            Program(node){
                let sourceCode = context.getSourceCode();
                let comments = sourceCode.getAllComments();
                for(let comment of comments){
                    findComments(comment)
                }
            }
        }
    }
}