
export function deepCopyArry( arr ){ 
	//为了保证原始的listdata数据不被污染，使用拷贝的方式赋值
	return arr.map((e)=>{
        if(typeof e === 'object'){
            return Object.assign({},e)
        }else{
            return e
        }
    });
};

export function deepCopyObj( obj ){  
	var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = deepCopyObj(obj[i]);
        else
            clone[i] = obj[i];
    }; 
    return clone;
};  