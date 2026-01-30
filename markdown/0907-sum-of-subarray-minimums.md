# 907. Sum of Subarray Minimums

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Stack, Monotonic Stack
- Slug: sum-of-subarray-minimums
- Problem ID: 943

## Description
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
```

### Example 2
```text
Input: arr = [11,81,94,43,3]
Output: 444
```


## Constraints
- 1 <= arr.length <= 3 * 104
- 1 <= arr[i] <= 3 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int sumSubarrayMins(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int sumSubarrayMins(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def sumSubarrayMins(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
```

### c
```c
int sumSubarrayMins(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SumSubarrayMins(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    
};
```

### typescript
```typescript
function sumSubarrayMins(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function sumSubarrayMins($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func sumSubarrayMins(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sumSubarrayMins(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int sumSubarrayMins(List<int> arr) {
    
  }
}
```

### golang
```golang
func sumSubarrayMins(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def sum_subarray_mins(arr)
    
end
```

### scala
```scala
object Solution {
    def sumSubarrayMins(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sum_subarray_mins(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (sum-subarray-mins arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec sum_subarray_mins(Arr :: [integer()]) -> integer().
sum_subarray_mins(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sum_subarray_mins(arr :: [integer]) :: integer
  def sum_subarray_mins(arr) do
    
  end
end
```
