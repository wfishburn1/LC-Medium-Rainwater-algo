function trap(height: number[]) {

    let left: number = 0;
    let right: number = height.length - 1;
    let leftMax: number = 0;
    let rightMax: number = 0;
    let waterTrapped: number = 0;


    while (left < right){
        if (height[left] < height[right]){
            if (height[left] >= leftMax){
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        }else{
            if(height[right] >= rightMax){
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }

    }

    return waterTrapped;

    
}

console.log(trap([1,5,0,2,4,6]));
