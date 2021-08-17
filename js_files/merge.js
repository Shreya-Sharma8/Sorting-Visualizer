async function merge(ele,low,mid,high)
{
    console.log("in merge");
    const n1=mid-low+1;
    const n2=high-mid;
    
    let left=new Array(n1);
    let right=new Array(n2);

    for(let i=0;i<n1;i++)
    {
        await waitforme(delay);
        ele[low+i].style.background="orange";
        left[i]=ele[low+i].style.height;
    }
    for(let i=0;i<n2;i++)
    {
        await waitforme(delay);
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        ele[mid+1+i].style.background="yellow";
        right[i]=ele[mid+1+i].style.height;
    }

    let l=0;       //index of left subarray
    let r=0;       //index of right subarray
    let m=low;   //index of merged array

    while(l<n1&&r<n2)
    {
        await waitforme(delay);
         if(parseInt(left[l])<=parseInt(right[r]))
         {
            if((n1 + n2) === ele.length){
                ele[m].style.background = 'green';
            }
            else{
                ele[m].style.background = 'lightgreen';
            }
             ele[m].style.height=left[l];
             l++;
         }
         else
         {
            if((n1 + n2) === ele.length){
                ele[m].style.background = 'green';
            }
            else{
                ele[m].style.background = 'lightgreen';
            }
             ele[m].style.height=right[r];
             r++;
         }
         m++;
    }

    while(l<n1)
    {
        await waitforme(delay);
        if((n1 + n2) === ele.length){
            ele[m].style.background = 'green';
        }
        else{
            ele[m].style.background = 'lightgreen';
        }
        ele[m].style.height=left[l];
        m++;
        l++;
    }

    while(r<n2)
    {
        await waitforme(delay);
        if((n1 + n2) === ele.length){
            ele[m].style.background = 'green';
        }
        else{
            ele[m].style.background = 'lightgreen';
        }
        ele[m].style.height=right[r];
        r++;
        m++;
    }

}

async function mergesort(ele,begin,end)
{
    if(begin>=end)
       return;

    let mid=begin+Math.floor((end-begin)/2);
    await mergesort(ele,begin,mid);
    await mergesort(ele,mid+1,end);
    await merge(ele,begin,mid,end);
}

const mergebtn=document.querySelector(".merge");
mergebtn.addEventListener('click',async function()
{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const ele=document.querySelectorAll(".bar");
    let begin=0;
    let end=parseInt(ele.length)-1;
    await mergesort(ele,begin,end);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});