# 80. Remove Duplicates from Sorted Array II

- Difficulty: Medium
- Topics: Array, Two Pointers
- Slug: remove-duplicates-from-sorted-array-ii
- Problem ID: 80

## Description
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
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
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 3
```text
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```


## Constraints
- 1 <= nums.length <= 3 * 104
- -104 <= nums[i] <= 104
- nums is sorted in non-decreasing order.

## Hints
(none)

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
