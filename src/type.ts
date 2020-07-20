export class Type {
  private utils: any[];
  constructor() {
    this.utils = [];
  }
  private isType(type: string) {
    return function (content: string) {
      let t = Object.prototype.toString
        .call(content)
        .replace(/\[object\s|\]/g, "");
      return t === type;
    };
  }
  createUtils() {
    let utils: any = {};
    let type = [
      "String",
      "Number",
      "Function",
      "Undefined",
      "Boolean",
      "Array",
    ];
    type.forEach((item) => {
      utils["is" + item] = this.isType(item);
    });
    this.utils = utils;
  }

  isNull(o: any) {
    //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === "Null";
  }

  isObj(o: any) {
    //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }

  isDate(o: any) {
    //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === "Date";
  }

  isRegExp(o: any) {
    //是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === "RegExp";
  }

  isError(o: any) {
    //是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Error";
  }

  isSymbol(o: any) {
    //是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
  }

  isPromise(o: any) {
    //是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
  }

  isSet(o: any) {
    //是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Set";
  }

  isFalse(o: string) {
    if (!o || o === "null" || o === "undefined" || o === "false" || o === "NaN")
      return true;
    return false;
  }

  isTrue(o: any) {
    return !this.isFalse(o);
  }

  isIos() {
    // @ts-ignore
    var u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
      //安卓手机
      // return "Android";
      return false;
    } else if (u.indexOf("iPhone") > -1) {
      //苹果手机
      // return "iPhone";
      return true;
    } else if (u.indexOf("iPad") > -1) {
      //iPad
      // return "iPad";
      return false;
    } else if (u.indexOf("Windows Phone") > -1) {
      //winphone手机
      // return "Windows Phone";
      return false;
    } else {
      return false;
    }
  }

  isPC() {
    //是否为PC端
    // @ts-ignore
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod",
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  browserType() {
    // @ts-ignore
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE =
      userAgent.indexOf("compatible") > -1 &&
      userAgent.indexOf("MSIE") > -1 &&
      !isOpera; //判断是否IE浏览器
    var isIE11 =
      userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari =
      userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome =
      userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) return "IE7";
      else if (fIEVersion == 8) return "IE8";
      else if (fIEVersion == 9) return "IE9";
      else if (fIEVersion == 10) return "IE10";
      else return "IE7以下"; //IE版本过低
    }
    if (isIE11) return "IE11";
    if (isEdge) return "Edge";
    if (isFF) return "FF";
    if (isOpera) return "Opera";
    if (isSafari) return "Safari";
    if (isChrome) return "Chrome";
  }
}
