# 658. Find K Closest Elements

- Difficulty: Medium
- Topics: Array, Two Pointers, Binary Search, Sliding Window, Sorting, Heap (Priority Queue)
- Slug: find-k-closest-elements
- Problem ID: 658

## Description
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

### Example 2
```text
Input: arr = [1,1,2,3,4,5], k = 4, x = -1
Output: [1,1,2,3]
```


## Constraints
- 1 <= k <= arr.length
- 1 <= arr.length <= 104
- arr is sorted in ascending order.
- -104 <= arr[i], x <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        
    }
}
```

### python
```python
class Solution(object):
    def findClosestElements(self, arr, k, x):
        """
        :type arr: List[int]
        :type k: int
        :type x: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findClosestElements(int* arr, int arrSize, int k, int x, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindClosestElements(int[] arr, int k, int x) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    
};
```

### typescript
```typescript
function findClosestElements(arr: number[], k: number, x: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @param Integer $x
     * @return Integer[]
     */
    function findClosestElements($arr, $k, $x) {
        
    }
}
```

### swift
```swift
class Solution {
    func findClosestElements(_ arr: [Int], _ k: Int, _ x: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findClosestElements(arr: IntArray, k: Int, x: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findClosestElements(List<int> arr, int k, int x) {
    
  }
}
```

### golang
```golang
func findClosestElements(arr []int, k int, x int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
    
end
```

### scala
```scala
object Solution {
    def findClosestElements(arr: Array[Int], k: Int, x: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-closest-elements arr k x)
  (-> (listof exact-integer?) exact-integer? exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_closest_elements(Arr :: [integer()], K :: integer(), X :: integer()) -> [integer()].
find_closest_elements(Arr, K, X) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_closest_elements(arr :: [integer], k :: integer, x :: integer) :: [integer]
  def find_closest_elements(arr, k, x) do
    
  end
end
```
