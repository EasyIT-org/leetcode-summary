# 941. Valid Mountain Array

- Difficulty: Easy
- Topics: Array
- Slug: valid-mountain-array
- Problem ID: 978

## Description
Given an array of integers arr, return true if and only if it is a valid mountain array.
Recall that arr is a mountain array if and only if:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [2,1]
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png

### Example 2
```text
Input: arr = [3,5,5]
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png

### Example 3
```text
Input: arr = [0,3,2,1]
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png


## Constraints
- 1 <= arr.length <= 104
- 0 <= arr[i] <= 104

## Hints
- It's very easy to keep track of a monotonically increasing or decreasing ordering of elements. You just need to be able to determine the start of the valley in the mountain and from that point onwards, it should be a valley i.e. no mini-hills after that. Use this information in regards to the values in the array and you will be able to come up with a straightforward solution.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool validMountainArray(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public boolean validMountainArray(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def validMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
```

### c
```c


bool validMountainArray(int* arr, int arrSize){

}
```

### csharp
```csharp
public class Solution {
    public bool ValidMountainArray(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    
};
```

### typescript
```typescript
function validMountainArray(arr: number[]): boolean {

};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function validMountainArray($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func validMountainArray(_ arr: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun validMountainArray(arr: IntArray): Boolean {
        
    }
}
```

### golang
```golang
func validMountainArray(arr []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Boolean}
def valid_mountain_array(arr)
    
end
```

### scala
```scala
object Solution {
    def validMountainArray(arr: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn valid_mountain_array(arr: Vec<i32>) -> bool {
        
    }
}
```
