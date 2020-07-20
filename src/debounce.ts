/**
 * 防抖函数
 */
export class Debounce {
  private readonly func: Function;
  private readonly delay: number;
  private timer: any;
  public constructor(func: Function, delay = 300) {
    this.func = func;
    this.delay = delay;
    this.timer = null;
  }

  public exec() {
    const arg = arguments;
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.func.apply(this, arg);
    }, this.delay);
  }
}
