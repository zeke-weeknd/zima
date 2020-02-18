const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    avatar:{type:String},
    star:{type:Number},
    job:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    scores:{
        position:{type:String},
        speed:{type:String},
        damage:{type:String},
        skills:{type:Number}
    },
    skills:[{
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String}
    }],
    items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],//精一材料
    items2:{
        item:{type:mongoose.SchemaTypes.ObjectId,ref:'Item'},
        number:{type:Number}
    },//精二材料

    usageTips:{type:String},//使用技巧
    battleTips:{type:String},//部署思路
    partners:[{
        operator:{type:mongoose.SchemaTypes.ObjectId,ref:'Operator'},
        description:{type:String}
    }]
})

module.exports = mongoose.model('Operator',schema)