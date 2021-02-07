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
    Vue.prototype.getIcon = function(paymentType) {
      if (paymentType === 'IMPS') {
        return require('@/assets/img/UPI_icon@2x.png');
      } else if (paymentType === 'UPI') {
        return require('@/assets/img/UPI@2x.png');
      }
    }
    Vue.prototype.getStatus = function(status) {
      switch (status) {
        case 'TransferUSDT':
          return 'Transfer USDT';
          break;
        case 'UnderReview':
          return 'Under Review';
          break;
        case 'Disapproved':
          return 'Disapproved';
          break;
        case 'OnSale':
          return 'Wait Payment';
          break;
        case 'WaitPayment':
          return 'Wait Payment';
          break;
        case 'PaymentConfirm':
          return 'Payment Confirm';
          break;
        case 'Complete':
          return 'Complete';
          break;
        case 'Canceled':
          return 'Canceled';
          break;
        default:
          return '';
          break;
      }
    }
  }
}
