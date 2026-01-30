# 189. Rotate Array

- Difficulty: Medium
- Topics: Array, Math, Two Pointers
- Slug: rotate-array
- Problem ID: 189

## Description
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

### Example 2
```text
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```


## Constraints
- 1 <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1
- 0 <= k <= 105

## Hints
- The easiest solution would use additional memory and that is perfectly fine.
- The actual trick comes when trying to solve this problem without using any additional memory. This means you need to use the original array somehow to move the elements around. Now, we can place each element in its original location and shift all the elements around it to adjust as that would be too costly and most likely will time out on larger input arrays.
- One line of thought is based on reversing the array (or parts of it) to obtain the desired result. Think about how reversal might potentially help us out by using an example.
- The other line of thought is a tad bit complicated but essentially it builds on the idea of placing each element in its original position while keeping track of the element originally in that position. Basically, at every step, we place an element in its rightful position and keep track of the element already there or the one being overwritten in an additional variable. We can't do this in one linear pass and the idea here is based on <b>cyclic-dependencies</b> between elements.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public void rotate(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
```

### python3
```python3
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
```

### c
```c
void rotate(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public void Rotate(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func rotate(_ nums: inout [Int], _ k: Int) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun rotate(nums: IntArray, k: Int): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void rotate(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func rotate(nums []int, k int)  {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
    
end
```

### scala
```scala
object Solution {
    def rotate(nums: Array[Int], k: Int): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn rotate(nums: &mut Vec<i32>, k: i32) {
        
    }
}
```
