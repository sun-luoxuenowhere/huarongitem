export const validForm = { 
	//手机号
	phone: (rule, value, callback) => {   
        if( !validForm.pattresult["phone"].test(value) ){
            callback(new Error('请输入有效的手机号码'));
        }else{
            callback();
        };
    },
    //手机号
	tel: (rule, value, callback) => {   
        if( !validForm.pattresult["tel"].test(value) ){
            callback(new Error('请输入有效的电话号码'));
        }else{
            callback();
        };
    },
    //邮箱
    email: (rule, value, callback) => {   
        if( !validForm.pattresult["email"].test(value) ){
            callback(new Error('请输入正确的邮箱'));
        }else{
            callback();
        };
    },
    //汉字
    chinese: (rule, value, callback) => {   
        if( !validForm.pattresult["chinese"].test(value) ){
            callback(new Error('只能输入汉字'));
        }else{
            callback();
        };
    }, 
    pattresult: {
        "email": /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        "chinese": /^[\u4e00-\u9fa5]{0,}$/,
        "phone": /^1[34578]\d{9}$/,
        "tel": /^([0-9]{3,4}-)?[0-9]{7,8}$/
    }
};
