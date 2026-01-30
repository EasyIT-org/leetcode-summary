# 786. K-th Smallest Prime Fraction

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search, Sorting, Heap (Priority Queue)
- Slug: k-th-smallest-prime-fraction
- Problem ID: 802

## Description
You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.
For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
```

### Example 2
```text
Input: arr = [1,7], k = 1
Output: [1,7]
```


## Constraints
- 2 <= arr.length <= 1000
- 1 <= arr[i] <= 3 * 104
- arr[0] == 1
- arr[i] is a prime number for i > 0.
- All the numbers of arr are unique and sorted in strictly increasing order.
- 1 <= k <= arr.length * (arr.length - 1) / 2

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kthSmallestPrimeFraction(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* kthSmallestPrimeFraction(int* arr, int arrSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] KthSmallestPrimeFraction(int[] arr, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    
};
```

### typescript
```typescript
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer[]
     */
    function kthSmallestPrimeFraction($arr, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kthSmallestPrimeFraction(_ arr: [Int], _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kthSmallestPrimeFraction(arr: IntArray, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> kthSmallestPrimeFraction(List<int> arr, int k) {
    
  }
}
```

### golang
```golang
func kthSmallestPrimeFraction(arr []int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer[]}
def kth_smallest_prime_fraction(arr, k)
    
end
```

### scala
```scala
object Solution {
    def kthSmallestPrimeFraction(arr: Array[Int], k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn kth_smallest_prime_fraction(arr: Vec<i32>, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (kth-smallest-prime-fraction arr k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec kth_smallest_prime_fraction(Arr :: [integer()], K :: integer()) -> [integer()].
kth_smallest_prime_fraction(Arr, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec kth_smallest_prime_fraction(arr :: [integer], k :: integer) :: [integer]
  def kth_smallest_prime_fraction(arr, k) do
    
  end
end
```
