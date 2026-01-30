# 283. Move Zeroes

- Difficulty: Easy
- Topics: Array, Two Pointers
- Slug: move-zeroes
- Problem ID: 283

## Description
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### Example 2
```text
Input: nums = [0]
Output: [0]
```


## Constraints
- 1 <= nums.length <= 104
- -231 <= nums[i] <= 231 - 1

## Hints
- <b>In-place</b> means we should not be allocating any space for extra array. But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.
- A <b>two-pointer</b> approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public void moveZeroes(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
```

### python3
```python3
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
```

### c
```c
void moveZeroes(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void MoveZeroes(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func moveZeroes(_ nums: inout [Int]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void moveZeroes(List<int> nums) {
    
  }
}
```

### golang
```golang
func moveZeroes(nums []int)  {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    
end
```

### scala
```scala
object Solution {
    def moveZeroes(nums: Array[Int]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        
    }
}
```
