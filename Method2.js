function twoSumEqualToTargeted(arr,target)
{
    arr.sort((a,b)=>a-b); // Sort the input array in ascending order. This is necessary for the two-pointer technique to work properly.
    let ans=[];           // Initialize an empty array to store the pairs of elements whose sum is equal to the target.
    let start=0;          // Initialize an starting index
    let end=arr.length-1; // Initialize an ending index

    while(start<end)     // Iterate until the both index meet or cross each other
    {
        let sum=arr[start]+arr[end]; // Calculate the sum of the elements at the current index

        if(sum===target)
        {
            ans.push([arr[start],arr[end]]) // If sum is equal to target Add the subset to the 'ans' array.
            start++;
            end--;
        }
        else if(sum<target) // If the sum is less than the target, move the starting index
        {
            start++;
        }
        else // If the sum is greater than the target, move the ending index
        {
            end--;
        }
    }

    return ans
    
}

// twoSumEqualToTargeted  Time Complexity :- O(n log n) , Space Complexity :- O(n)



function MargeAndSort(arr)
{
    let marged=[] // Initialize an empty array to store the merged array

    for(let x=0;x<arr.length;x++)
    {
        marged=[...marged,...arr[x]] // Concatenate the current array with the existing merged array using the spread operator
    }
    marged.sort((a,b)=>a-b) // Sort the merged array in ascending order using the sort method
    
    return marged // Return the sorted merged array
}

// MargeAndSort  Time Complexity :- O(n log n) , Space Complexity :- O(n)



function subSetEqualToTarget(arr,target)
{
    let res=[]; //Initialize an empty array to store the subsets whose sum is equal to the target.

     

    function findSubArray(i,subArraySum,subArray) // Recursive function to find subsets with the given conditions.
    {
        if(subArraySum===target)  
        {
          
            res.push([...subArray]); // If the current subArraySum is equal to the target, push a copy of the subArray into the result array.
        }
        if(i===arr.length) 
        {
            return; //This condition ensures that the function doesn't go beyond the array bounds.
        }

        for(let x=i;x<arr.length;x++)
        {
           subArraySum+=arr[x];                       // Add the current element (arr[x]) to the subArraySum.
           subArray.push(arr[x]);                     // Add the current element (arr[x]) to the subArray.
           findSubArray(x+1,subArraySum,subArray);    // Recursively call the function with the updated index (x+1),subArraySum, and subArray to explore further possibilities.
           subArraySum-=arr[x];                       // Subtract the current element (arr[x]) from the subArraySum.
           subArray.pop();                            // Remove the last element from the subArray.
        }
    }

    findSubArray(0,0,[]); //Call the findSubArray function with initial values
    
    return res // Return the result array containing subsets whose sum is equal to the target.

}


// subSetEqualToTarget  Time Complexity :- O(n^2) , Space Complexity :- O(n)




let arr = [1, 3, 2, 2, -4, -6, -2, 8];
let target = 4;

let combination=twoSumEqualToTargeted(arr,target) // To Get the subarrays whose sum is equal to the target.

console.log(`First Combination For "${target}" :`,combination)

let margeArr=MargeAndSort(combination) // To Get the sorted `merged` array.

console.log("Merge Into a single Array :",margeArr)

console.log(`Second Combination For "${target*2}" :`,subSetEqualToTarget(margeArr,target*2)) // To Get the subarrays whose sum is equal to the Double target.
