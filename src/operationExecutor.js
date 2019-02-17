'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let copy = Object.assign({}, arg.obj1);
    copy.lastName = "Kjellberg";
    return {arg, copy};
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let obj;
    obj = {...arg.obj1, ...arg.obj2};
    return {arg, obj};
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    let obj = Object.assign({}, arg.obj1);
    obj.relatives.forEach(el => el.gender = "helicopter");
    return obj;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    let obj = Object.assign({}, arg.obj1);
    obj.greetings = [];
    obj.relatives.filter(el => el.lastName === "Ivanova").forEach(el => obj.greetings.push(`Hello, ${el.firstName}`));
    return obj;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    /**
     * Place your code here
     */
    let doc = window.document.getElementsByClassName(arg.className)[0];
    doc.style.background = 'red';
      return doc.className + doc.style.background;
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    let obj = Object.assign({}, arg.hostNames.filter(el => el === location.hostname));
    return obj;
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    let keys = Object.keys(arg);
    let obj = {};
    Object.assign(obj, keys.forEach(el => obj[arg[el]] = el));
    return obj;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    let obj = arg.arr1.concat(arg.arr2);
    let objEven = {};
      for (let i = 0; i < obj.length; i+=2) {
        if(obj.length <= i + 1) {
          objEven[obj[i]] = null;
          return objEven;
        }
          objEven[obj[i]] = obj[i+1];
      }
    return objEven;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    let obj = {};
    arg.users.forEach(el => obj[el.id] = el);
    return obj;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    let obj = window.document.getElementsByClassName(arg.className);
      for (let i = 0; i < obj.length; i++) {
          let item = {};
          item.classInfo = obj[i].className;
          item.tagInfo = obj[i].tagName;
          arg.childrenInfo.push(item);
      }
    return arg;
  }
}

export default OperationExecutor;
