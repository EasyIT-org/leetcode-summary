# 969. Pancake Sorting

- Difficulty: Medium
- Topics: Array, Two Pointers, Greedy, Sorting
- Slug: pancake-sorting
- Problem ID: 1009

## Description
Given an array of integers arr, sort the array by performing a series of pancake flips.
In one pancake flip we do the following steps:
For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3.
Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr = [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: arr = [3, 2, 4, 1]
After 1st flip (k = 4): arr = [1, 4, 2, 3]
After 2nd flip (k = 2): arr = [4, 1, 2, 3]
After 3rd flip (k = 4): arr = [3, 2, 1, 4]
After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted.
```

### Example 2
```text
Input: arr = [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
```


## Constraints
- 1 <= arr.length <= 100
- 1 <= arr[i] <= arr.length
- All integers in arr are unique (i.e. arr is a permutation of the integers from 1 to arr.length).

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> pancakeSort(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> pancakeSort(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def pancakeSort(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def pancakeSort(self, arr: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* pancakeSort(int* arr, int arrSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> PancakeSort(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    
};
```

### typescript
```typescript
function pancakeSort(arr: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function pancakeSort($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func pancakeSort(_ arr: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun pancakeSort(arr: IntArray): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> pancakeSort(List<int> arr) {
    
  }
}
```

### golang
```golang
func pancakeSort(arr []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer[]}
def pancake_sort(arr)
    
end
```

### scala
```scala
object Solution {
    def pancakeSort(arr: Array[Int]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn pancake_sort(arr: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (pancake-sort arr)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec pancake_sort(Arr :: [integer()]) -> [integer()].
pancake_sort(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec pancake_sort(arr :: [integer]) :: [integer]
  def pancake_sort(arr) do
    
  end
end
```
