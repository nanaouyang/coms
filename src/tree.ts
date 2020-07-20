/**
 * 数组和树翻译
 */

export class Tree {
  public static list2tree<T>({
    list = [],
    id = "id",
    pid = "pid",
    children = "children",
  }): Array<T> {
    return list.reduce((prev: Array<T>, curr: any) => {
      const obj = this.getParent(list, curr[pid]); // 根据当前项找出父节点
      if (obj) {
        // 存在父节点
        !obj.hasOwnProperty([children]) && (obj[children] = []); // 父节点无[children]属性，初始化[children]
        obj[children].push(curr); // 把当前节点推进父节点[children]
      } else {
        prev.push(curr);
      }
      return prev;
    }, []);
  }
  /**
   * 根据当前项找出父节点
   * @param list 要翻译的数组
   * @param pid 需找出父节点的当前节点
   * @return 父节点或者null
   */
  private static getParent(list: any[] = [], pid: string) {
    const obj = list.find((item) => item.id === pid);
    if (obj) {
      return obj;
    } else {
      return null;
    }
  }
}
