# 27. Remove Element

- Difficulty: Easy
- Topics: Array, Two Pointers
- Slug: remove-element
- Problem ID: 27

## Description
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
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
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

### Example 2
```text
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 3
```text
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```


## Constraints
- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

## Hints
- The problem statement clearly asks us to modify the array in-place and it also says that the element beyond the new length of the array can be anything. Given an element, we need to remove all the occurrences of it from the array. We don't technically need to <b>remove</b> that element per-say, right?
- We can move all the occurrences of this element to the end of the array. Use two pointers!
<br><img src="https://assets.leetcode.com/uploads/2019/10/20/hint_remove_element.png" width="500"/>
- Yet another direction of thought is to consider the elements to be removed as non-existent. In a single pass, if we keep copying the visible elements in-place, that should also solve this problem for us.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        
    }
};
```

### java
```java
class Solution {
    public int removeElement(int[] nums, int val) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
```

### c
```c
int removeElement(int* nums, int numsSize, int val) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RemoveElement(int[] nums, int val) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
};
```

### typescript
```typescript
function removeElement(nums: number[], val: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeElement(nums: IntArray, `val`: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int removeElement(List<int> nums, int val) {
    
  }
}
```

### golang
```golang
func removeElement(nums []int, val int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    
end
```

### scala
```scala
object Solution {
    def removeElement(nums: Array[Int], `val`: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        
    }
}
```
