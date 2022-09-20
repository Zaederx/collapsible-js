export function makeCollapsible(col:HTMLElement)
{
    console.log('*** makeCollapsible called ***')
    var element = col.firstElementChild as HTMLElement;
    col.addEventListener('click', () => toggleCollapse(element))
}
function toggleCollapse(element:HTMLElement)
{
    //set as active or inactive
    if(element.classList)
    {
        element.classList.toggle('active')
    }
    
    //get the next element in current element
    var content = element

    //if current active ('block') set maxHeight to 0
    if(content && content.style && content?.style.maxHeight)
    {
        console.log('first if statement triggered')
        //@ts-ignore - has to be null to work
        content.style.maxHeight = null;
    }
    else
    {
        console.log('second if statement triggered')
        content.style.maxHeight = content.scrollHeight + 'px'
    }
}