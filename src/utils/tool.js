export default {
  install(Vue) {
    Vue.prototype.isNumber = function(val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    }
    Vue.prototype.unique = function(arr) {
      if (!Array.isArray(arr)) {
        console.log('type error!')
        return
      }
      var array = [];
      for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
          array.push(arr[i])
        }
      }
      return array;
    }
    Vue.prototype.getIcon = function(paymentType) {
      if (paymentType === 'IMPS') {
        return require('@/assets/img/UPI_icon@2x.png');
      } else if (paymentType === 'UPI') {
        return require('@/assets/img/UPI@2x.png');
      }
    }
    Vue.prototype.getStatus = function(status) {
      const status1 = status.toLowerCase();
      switch (status1) {
        case 'transferusdt':
          return 'Transfer USDT';
          break;
        case 'underreview':
          return 'Under Review';
          break;
        case 'disapproved':
          return 'Disapproved';
          break;
        case 'onsale':
          return 'Wait Payment';
          break;
        case 'waitpayment':
          return 'Wait Payment';
          break;
        case 'paymentconfirm':
          return 'Payment Confirm';
          break;
        case 'complete':
          return 'Complete';
          break;
        case 'canceled':
          return 'Canceled';
          break;
        default:
          return '';
          break;
      }
    }
  }
}
