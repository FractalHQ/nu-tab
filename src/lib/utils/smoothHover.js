let hovering = false;
let timer = null

export default function smoothHover(node, delay = 300) {
    function smoothOver() {
        timer && clearTimeout(timer)
        if (hovering) return

        node.dispatchEvent(new CustomEvent('smoothOver', node));
        hovering = true;
    }
    
    function smoothOut() {
        timer && clearTimeout(timer)
        if (!hovering) return
        
        timer = setTimeout(() => {
            node.classList.add('remove');

            node.dispatchEvent(new CustomEvent('smoothOut', node));
            hovering = false
        }, delay)
    }
    
    node.addEventListener('mouseover', smoothOver)
    node.addEventListener('mouseout', smoothOut)
    
    return {
        destroy() {
            timer && clearTimeout(timer)
            node.removeEventListener('mouseover', smoothOver)
            node.removeEventListener('mouseout', smoothOut)
        }
    }
}
