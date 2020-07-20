import {Debounce} from "../index";

test('防抖函数', () => {
    function say() {
        return 'yes'
    }
    const test=new Debounce(say,300)
    test.exec()
});