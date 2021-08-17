async function partition(ele,low,high)
{
    console.log("In Partition");
    let left=low;
    let right=high;
    let pivot_item=parseInt(ele[low].style.height);

    ele[low].style.background="blue";

    while(left<right)
    {
        ele[right].style.background="red";

        while(parseInt(ele[left].style.height)<=pivot_item && left<ele.length-1)  //additional AND condition is for that case when
        {                                                                        // first element is greater than all the elements so
            if(left==low)                                                        //to limit the value of left we need this condition
            {
                left++;
                ele[left].style.background="red";
            }
            else
            {
                ele[left].style.background="cyan";
                left++;
                ele[left].style.background="red";
            }
            await waitforme(delay);
        }
        
        
        while(parseInt(ele[right].style.height)>pivot_item)
        {
            ele[right].style.background="cyan";
            right--;
            ele[right].style.background="red";
            await waitforme(delay);
        }

        if(left<right)
        {
            swap(ele[left],ele[right]);
            await waitforme(delay);
        }  

    }
    
    swap(ele[low],ele[right]);
    ele[right].style.background="green"; 
    await waitforme(delay);

    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return right;
}

async function quicksort(ele,low,high)
{
    console.log("In quicksort");
    let pivot;
    if(high>low)
    {
        pivot=await partition(ele,low,high);
        await quicksort(ele,low,pivot-1);
        await quicksort(ele,pivot+1,high);
    }
    else
    {
        if(low >= 0 && high >= 0 && low <ele.length && high <ele.length)
        {
            ele[high].style.background = 'green';
            ele[low].style.background = 'green';
        }
    }
}

const quickbtn=document.querySelector(".quick");
quickbtn.addEventListener('click',async function()
{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    let ele=document.querySelectorAll(".bar");
    let low=0;
    let high=ele.length-1;
    await quicksort(ele,low,high);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});