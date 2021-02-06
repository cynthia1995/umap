import {
  getRequest,
  postRequest
} from '@/utils/request'
// email, phone, password, referralId(referralId不必须)
export const register = (params) => { //注册
  return postRequest('/exchange/m/sell/register', params)
}
// phone, code
export const verifyRegister = (params) => { //验证码验证
  return postRequest('/exchange/m/sell/verifyRegister', params)
}
// email, password, phone(email和phone必须有一个)
export const login = (params) => { //登录
  return postRequest('/exchange/m/sell/login', params)
}
// phone
export const verifyPhone = (params) => { //忘记密码,发送验证码
  return getRequest('/exchange/m/sell/forget/verifyPhone/{phone}'.replace('{phone}', params.phone), params)
}
// phone, smsCode, newpwd
export const resetPwd = (params) => { //修改密码
  return postRequest('/exchange/m/sell/forget/newpwd/{phone}'.replace('{phone}', params.phone), params)
}
// dictcode
export const getdict = (params) => { //获取系统数据字典
  return getRequest('/exchange/m/sell/getdict/{dictcode}'.replace('{dictcode}', params.dictcode), params)
}
// paramName
export const getSysParam = (params) => { //获取系统参数
  return getRequest('/exchange/m/sell/getSysParam/{paramName}'.replace('{paramName}', params.paramName), params)
}
export const getHome = (params) => { //卖家端首页
  return getRequest('/exchange/m/sell/home', params)
}
// paymentType	收款方式类型	string	Y	字典：payment_type
// name	实名	string	Y
// account	账号	string	Y
// ifscCode	ifscCode	string	N	IMPS时必须填写
// bankName	银行名称	string	N	IMPS时必须填写
// qrCode	收款二维码	string	N	UPI时选填，IMPS
export const addPayment = (params) => { //卖家添加收款方式
  return postRequest('/exchange/m/sell/addPayment', params)
}
//id
export const editDefaultPayment = (params) => { //卖家修改默认收款方式
  return getRequest('/exchange/m/sell//editDefaultPayment/{id}'.replace('{id}', params.id), params)
}
export const getPaymentList = (params) => { //卖家收款方式列表
  return getRequest('/exchange/m/sell/getPaymentList', params)
}
export const getCoinsAddrList = (params) => { //获取平台收币地址
  return getRequest('/exchange/m/sell/getCoinsAddrList', params)
}
export const getUserInfo = (params) => { //获取卖家信息
  return getRequest('/exchange/m/sell/userInfo', params)
}
//searchType(open, completed)
export const getOrders = (params) => { //订单（商品）列表
  return getRequest('/exchange/m/sell/orderList/{searchType}'.replace('{searchType}', params.searchType), params)
}
//goodsId
export const orderDetail = (params) => { //订单（商品）列表
  return getRequest('/exchange/m/sell//exchange/m/sell/orderDetail/{goodsId}'.replace('{goodsId}', params.goodsId), params)
}
// goodsId	商品ID	string	Y
// addrType	地址类型	string	Y
// form	转出地址	string	Y
// txid	交易号	string	Y
// paymentMethodId	收款方式	string	Y
// voucher	交易凭证	string	Y
export const uploadcertificate = (params) => { //上传转币凭证
  return postRequest('/exchange/m/sell/uploadcertificate', params)
}

// volume	发布数量	double	Y	两位小数
// price	单价	double	Y	前端提交的为单位为卢比，后端接口要对当前的价格进行核实并重新计算
// fee	手续费	double	Y	默认为0
// total	销售总价	double	Y	前端提交的为单位为卢比，后端接口要对当前的价格进行核实并重新计算
export const confirmOrder = (params) => { //发布并确认商品
  return postRequest('/exchange/m/sell/confirmOrder', params)
}
// orderId
export const confirmPay = (params) => { //卖家确认订单（商品）收款
  return postRequest('/exchange/m/sell/confirmPay/{orderId}'.replace('{orderId}', params.orderId), params)
}
