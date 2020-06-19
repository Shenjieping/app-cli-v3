/**
* @file util.js
* @author shenjp@founder.com
* @date 2020-06-19 22:42:43
*/

const App = {};
export default (App.utils = {
  /**
     * dateFormat
     *
     * @param {number} time 时间戳
     * @param {string} format 时间格式, 默认'YYYY年MM月DD日'
     * @return {string} 真实数字替换掉YYYY, MM, DD, H, M, S
     */
  dateFormat (time = Date.now(), format) {
    let zeroFill = function (num) {
      return num < 10 ? '0' + num : num;
    };
    let formatStr = format || 'YYYY年MM月DD日';
    // Safari new Date('yyyy-mm-dd hh:mm:ss') => Invalid Date
    let date = new Date(time);
    let year = date.getFullYear();
    let month = zeroFill(date.getMonth() + 1);
    let day = zeroFill(date.getDate());
    let hour = zeroFill(date.getHours());
    let minute = zeroFill(date.getMinutes());
    let second = zeroFill(date.getSeconds());
    const formatArr = ['YYYY', 'MM', 'DD', 'H', 'M', 'S'];
    const dateArr = [year, month, day, hour, minute, second];
    for (let i = 0; i < formatArr.length; i++) {
      formatStr = formatStr.replace(formatArr[i], dateArr[i]);
    }
    return formatStr;
  },
  tips (str, type, persist, cls) {
    cls = cls || 'tipsall';
    let $obj = document.querySelector('.' + cls);
    let parent = document.querySelector('body');
    if (!$obj) {
      $obj = document.createElement('DIV');
      $obj.className = cls;
    }
    if (type) {
      $obj.classList.add('blue');
    } else {
      $obj.classList.remove('blue');
    }
    $obj.innerHTML = str;
    parent.appendChild($obj);
    $obj.classList.add('show');
    if (persist) return $obj;
    if (window.intFade) clearTimeout(window.intFade);
    window.intFade = setTimeout(function () {
      $obj.classList.remove('show');
    }, 3000);
  }
});
