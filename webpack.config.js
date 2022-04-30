//entry point -> output
const { dirname } = require('path')
const path=require('path')

//console.log()

module.exports={
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        {
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
       
    },
    mode:'development',
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        static: path.join(__dirname,'public')
    }


}

//loader
