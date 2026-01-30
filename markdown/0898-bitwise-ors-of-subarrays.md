# 898. Bitwise ORs of Subarrays

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Bit Manipulation
- Slug: bitwise-ors-of-subarrays
- Problem ID: 934

## Description
Given an integer array arr, return the number of distinct bitwise ORs of all the non-empty subarrays of arr.
The bitwise OR of a subarray is the bitwise OR of each integer in the subarray. The bitwise OR of a subarray of one integer is that integer.
A subarray is a contiguous non-empty sequence of elements within an array.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [0]
Output: 1
Explanation: There is only one possible result: 0.
```

### Example 2
```text
Input: arr = [1,1,2]
Output: 3
Explanation: The possible subarrays are [1], [1], [2], [1, 1], [1, 2], [1, 1, 2].
These yield the results 1, 1, 2, 1, 3, 3.
There are 3 unique values, so the answer is 3.
```

### Example 3
```text
Input: arr = [1,2,4]
Output: 6
Explanation: The possible results are 1, 2, 3, 4, 6, and 7.
```


## Constraints
- 1 <= arr.length <= 5 * 104
- 0 <= arr[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int subarrayBitwiseORs(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int subarrayBitwiseORs(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def subarrayBitwiseORs(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def subarrayBitwiseORs(self, arr: List[int]) -> int:
```

### c
```c
int subarrayBitwiseORs(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SubarrayBitwiseORs(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    
};
```

### typescript
```typescript
function subarrayBitwiseORs(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function subarrayBitwiseORs($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func subarrayBitwiseORs(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subarrayBitwiseORs(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int subarrayBitwiseORs(List<int> arr) {
    
  }
}
```

### golang
```golang
func subarrayBitwiseORs(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def subarray_bitwise_o_rs(arr)
    
end
```

### scala
```scala
object Solution {
    def subarrayBitwiseORs(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subarray_bitwise_o_rs(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (subarray-bitwise-o-rs arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec subarray_bitwise_o_rs(Arr :: [integer()]) -> integer().
subarray_bitwise_o_rs(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subarray_bitwise_o_rs(arr :: [integer]) :: integer
  def subarray_bitwise_o_rs(arr) do
    
  end
end
```
