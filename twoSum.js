/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    var hashMap = new Object();
    var ans = [];
    
    var i =0;
    
    for(const num of nums) {
        
        // console.log(num);
        var sec = target - num;
        
        if(sec in hashMap) {
            // console.log("yes");
            ans.push(hashMap[sec]);
            ans.push(i);
           // console.log(ans);
            return ans;
        }
        
        hashMap[num] = i;
        i++;
    }
};