# 1089. Duplicate Zeros

- Difficulty: Easy
- Topics: Array, Two Pointers
- Slug: duplicate-zeros
- Problem ID: 1168

## Description
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
```

### Example 2
```text
Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
```


## Constraints
- 1 <= arr.length <= 104
- 0 <= arr[i] <= 9

## Hints
- This is a great introductory problem for understanding and working with the concept of in-place operations. The problem statement clearly states that we are to modify the array in-place. That does not mean we cannot use another array. We just don't have to return anything.
- A better way to solve this would be without using additional space. The only reason the problem statement allows you to make modifications in place is that it hints at avoiding any additional memory.
- The main problem with not using additional memory is that we might override elements due to the zero duplication requirement of the problem statement. How do we get around that?
- If we had enough space available, we would be able to accommodate all the elements properly. The new length would be the original length of the array plus the number of zeros. Can we use this information somehow to solve the problem?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public void duplicateZeros(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def duplicateZeros(self, arr):
        """
        :type arr: List[int]
        :rtype: None Do not return anything, modify arr in-place instead.
        """
```

### python3
```python3
class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
```

### c
```c
void duplicateZeros(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void DuplicateZeros(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return NULL
     */
    function duplicateZeros(&$arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func duplicateZeros(_ arr: inout [Int]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun duplicateZeros(arr: IntArray): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void duplicateZeros(List<int> arr) {
    
  }
}
```

### golang
```golang
func duplicateZeros(arr []int)  {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Void} Do not return anything, modify arr in-place instead.
def duplicate_zeros(arr)
    
end
```

### scala
```scala
object Solution {
    def duplicateZeros(arr: Array[Int]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn duplicate_zeros(arr: &mut Vec<i32>) {
        
    }
}
```
