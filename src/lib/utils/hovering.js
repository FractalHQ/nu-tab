export default function smoothHover(node, delay = 500) {
    let timer = null
    
    function smoothOver() {
        console.dir('smoothOver for ', node)
        timer && clearTimeout(timer)
        
        node.dispatchEvent(new CustomEvent('smoothOver', node));
    }
    
    function smoothOut() {
        console.dir('smoothOut for ', node)
        if (timer) clearTimeout(timer)
        
        timer = setTimeout(() => {
            node.classList.add('remove');

            node.dispatchEvent(new CustomEvent('smoothOut', node));
        }, delay)
    }
    
    node.addEventListener('mouseover', smoothOver)
    node.addEventListener('mouseout', smoothOut)
    
    return {
        destroy() {
            node.removeEventListener('mouseover', smoothOver)
            node.removeEventListener('mouseout', smoothOut)
        }
    }
}
