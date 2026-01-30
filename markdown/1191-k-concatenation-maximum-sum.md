# 1191. K-Concatenation Maximum Sum

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: k-concatenation-maximum-sum
- Problem ID: 1299

## Description
Given an integer array arr and an integer k, modify the array by repeating it k times.
For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].
Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.
As the answer can be very large, return the answer modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2], k = 3
Output: 9
```

### Example 2
```text
Input: arr = [1,-2,1], k = 5
Output: 2
```

### Example 3
```text
Input: arr = [-1,-2], k = 7
Output: 0
```


## Constraints
- 1 <= arr.length <= 105
- 1 <= k <= 105
- -104 <= arr[i] <= 104

## Hints
- How to solve the problem for k=1 ?
- Use Kadane's algorithm for k=1.
- What are the possible cases for the answer ?
- The answer is the maximum between, the answer for k=1, the sum of the whole array multiplied by k, or the maximum suffix sum plus the maximum prefix sum plus (k-2) multiplied by the whole array sum for k > 1.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int kConcatenationMaxSum(vector<int>& arr, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int kConcatenationMaxSum(int[] arr, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kConcatenationMaxSum(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:
```

### c
```c
int kConcatenationMaxSum(int* arr, int arrSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int KConcatenationMaxSum(int[] arr, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    
};
```

### typescript
```typescript
function kConcatenationMaxSum(arr: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function kConcatenationMaxSum($arr, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kConcatenationMaxSum(_ arr: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kConcatenationMaxSum(arr: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int kConcatenationMaxSum(List<int> arr, int k) {
    
  }
}
```

### golang
```golang
func kConcatenationMaxSum(arr []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
def k_concatenation_max_sum(arr, k)
    
end
```

### scala
```scala
object Solution {
    def kConcatenationMaxSum(arr: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn k_concatenation_max_sum(arr: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (k-concatenation-max-sum arr k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec k_concatenation_max_sum(Arr :: [integer()], K :: integer()) -> integer().
k_concatenation_max_sum(Arr, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec k_concatenation_max_sum(arr :: [integer], k :: integer) :: integer
  def k_concatenation_max_sum(arr, k) do
    
  end
end
```
