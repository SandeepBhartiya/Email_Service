function print(arr,n)
{
    for(let i=0;i<n;i++)
    {
        arr[i]=arr[i]+arr[i+1];
    }

    return arr;
}

// const arr=[1,2,3,4,6]

// console.log(print(arr,arr.length));

function bubbleSort(arr,n)
{
    for(let i=0;i<n-1;i++)
    {
        for(let j=0;j<n-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(j,j+1);
            }
        }
    }
    return arr;
}

function swap(a,b)
{
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

const arr=[40,25,5,26,9,1];
console.log(bubbleSort(arr,arr.length));


//BST

class Node{
    constructor(val)
    {
        this.data=val,
        this.left=null,
        this.right=null
    }
}

var root=null;

function postOrder(node)
{
    if(node==null)
    {
        return;
    }
    postOrder(node.left);
    postOrder(node.right);

    console.log(node.data+ " ");
    console.clear();
}

root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);

console.log(postOrder(root));

