// place the cursor at end */
export default function posEnd(node) {
    var len = node.value.length;
              
    // Mostly for Web Browsers
    if (node.setSelectionRange) {
        node.focus();
        node.setSelectionRange(len, len);
    } else if (node.createTextRange) {
        var t = node.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}