# 26. Remove Duplicates from Sorted Array

- Difficulty: Easy
- Topics: Array, Two Pointers
- Slug: remove-duplicates-from-sorted-array
- Problem ID: 26

## Description
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Custom Judge:
The judge will test your solution with the following code:
If all assertions pass, then your solution will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

### Example 2
```text
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 3
```text
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```


## Constraints
- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.

## Hints
- In this problem, the key point to focus on is the input array being sorted. As far as duplicate elements are concerned, what is their positioning in the array when the given array is sorted? Look at the image below for the answer. If we know the position of one of the elements, do we also know the positioning of all the duplicate elements?

<br>
<img src="https://assets.leetcode.com/uploads/2019/10/20/hint_rem_dup.png" width="500"/>
- We need to modify the array in-place and the size of the final array would potentially be smaller than the size of the input array. So, we ought to use a two-pointer approach here. One, that would keep track of the current element in the original array and another one for just the unique elements.
- Essentially, once an element is encountered, you simply need to <b>bypass</b> its duplicates and move on to the next unique element.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
```

### c
```c
int removeDuplicates(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
};
```

### typescript
```typescript
function removeDuplicates(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeDuplicates(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int removeDuplicates(List<int> nums) {
    
  }
}
```

### golang
```golang
func removeDuplicates(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    
end
```

### scala
```scala
object Solution {
    def removeDuplicates(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        
    }
}
```
