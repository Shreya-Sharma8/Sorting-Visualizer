async function bubblesort()
{
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length-1;i++)
    {
        for(let j=0;j<ele.length-i-1;j++)
        {
            ele[j+1].style.background="red";
            ele[j].style.background="red";
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height))
            {
                await waitforme(delay); 
               // await new Promise(resolve => setTimeout(() => {resolve(),Delay(2)}));
                swap(ele[j],ele[j+1]);
            }
            ele[j+1].style.background="cyan";
            ele[j].style.background="cyan";
        }
        ele[ele.length-i-1].style.background="green";
    }
    ele[0].style.background="green";
}
const bubblebtn=document.querySelector(".bubble");
bubblebtn.addEventListener("click",async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubblesort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});