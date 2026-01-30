# 75. Sort Colors

- Difficulty: Medium
- Topics: Array, Two Pointers, Sorting
- Slug: sort-colors
- Problem ID: 75

## Description
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
Example 1:
Example 2:
Constraints:
Follow up: Could you come up with a one-pass algorithm using only constant extra space?

## Examples
### Example 1
```text
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

### Example 2
```text
Input: nums = [2,0,1]
Output: [0,1,2]
```


## Constraints
- n == nums.length
- 1 <= n <= 300
- nums[i] is either 0, 1, or 2.

## Hints
- A rather straight forward solution is a two-pass algorithm using counting sort.
- Iterate the array counting number of 0's, 1's, and 2's.
- Overwrite array with the total number of 0's, then 1's and followed by 2's.

## Follow Ups
- Could you come up with a one-pass algorithm using only constant extra space?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public void sortColors(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
```

### python3
```python3
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
```

### c
```c
void sortColors(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void SortColors(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function sortColors(&$nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func sortColors(_ nums: inout [Int]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sortColors(nums: IntArray): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void sortColors(List<int> nums) {
    
  }
}
```

### golang
```golang
func sortColors(nums []int)  {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    
end
```

### scala
```scala
object Solution {
    def sortColors(nums: Array[Int]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        
    }
}
```
