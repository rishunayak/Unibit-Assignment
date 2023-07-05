function twoSumEqualToTargeted(arr,target)
{
    let obj={};    // Create an empty object to store key-value pairs for array elements.
    let ans=[];    // Create an empty array to store the subarrays whose sum is equal to the target.
    

    for(let x=0;x<arr.length;x++)
    {
        let searchElement=target-arr[x]  // Calculate the difference between the target and the current array element to find the complementary element.

        if(obj[searchElement]!==undefined) 
        {  
           ans.push([searchElement,arr[x]])  // If element is found in the object (obj), add a new subarray to the 'ans' array       
        }
        obj[arr[x]]=1 // Add the current array element as a key to the object (obj) with a dummy value of 1. By which we can check that the element is present in the array.  
    }

    return ans  // Return the 'ans' array containing the subarrays whose sum is equal to the target.
}

// twoSumEqualToTargeted  Time Complexity :- O(n) , Space Complexity :- O(n)






function MargeAndSort(arr)
{
    let marged=[]  // Create an empty array to store the merged array.

    marged=marged.concat(...arr) // Using the spread operator and the `concat` method, merge all subarrays of `arr` into a single array `merged`.

    marged.sort((a,b)=>a-b)  // Sort the elements of the `merged` array in ascending order.

    return marged  // Return the sorted `merged` array.
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


