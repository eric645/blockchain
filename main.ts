enum block {
    //% block="1"
    one,
    //% block="spend"
    neg
}
block[] blocksvalues = [];
//% width="100" color=#00FFFF icon="C"
namespace blockchain {
    //% block="%x"
    //% js="%x"
    function _Block(x) { return x; }
    //% block="add block %x to blockchain"
    function addblock(x: block) {
        blocksvalues.push(x);
    }
    //% block="repr %x"
    function _repr(x: block) {
        if (x === block.one) {
            return 1;
        } else {
            return -1;
        }
    }
    //% block="values"
    function values() { return blocksvalues; }
    //% block="total"
    function total() {
        let p = 0;
        let f = 0;
        for (e in blocksvalues) {
            f = _repr(e);
            if (f < 0 && p <= 0) {
                f = 0;
            }
            p += f;
        }
        return p;
    }
    //% block="send total"
    function sendTotal() {
        serial.redirect(SerialPin.P0, SerialPin.P2, 111640));
        serial.writeString(total().toString());
    }
    //% block="receive a total"
    function receiveTotal() {
        serial.redirect(SerialPin.P0, SerialPin.P2, 111640));
        return Number(serial.readString());
    }
}