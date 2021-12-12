// 表单校验规则函数第一个参数rule的类型
export type rulesType = {
    field: string;
    fullField: string;
    type: string;
    validator: (item: any) => any
}

// 表单校验函数第三个参数callback
export type callbackType = (item?: any) => any
