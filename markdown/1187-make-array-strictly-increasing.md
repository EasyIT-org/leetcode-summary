# 1187. Make Array Strictly Increasing

- Difficulty: Hard
- Topics: Array, Binary Search, Dynamic Programming, Sorting
- Slug: make-array-strictly-increasing
- Problem ID: 1290

## Description
Given two integer arrays arr1 and arr2, return the minimum number of operations (possibly zero) needed to make arr1 strictly increasing.
In one operation, you can choose two indices 0 <= i < arr1.length and 0 <= j < arr2.length and do the assignment arr1[i] = arr2[j].
If there is no way to make arr1 strictly increasing, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
Output: 1
Explanation: Replace 5 with 2, then arr1 = [1, 2, 3, 6, 7].
```

### Example 2
```text
Input: arr1 = [1,5,3,6,7], arr2 = [4,3,1]
Output: 2
Explanation: Replace 5 with 3 and then replace 3 with 4. arr1 = [1, 3, 4, 6, 7].
```

### Example 3
```text
Input: arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
Output: -1
Explanation: You can't make arr1 strictly increasing.
```


## Constraints
- 1 <= arr1.length, arr2.length <= 2000
- 0 <= arr1[i], arr2[i] <= 10^9

## Hints
- Use dynamic programming.
- The state would be the index in arr1 and the index of the previous element in arr2 after sorting it and removing duplicates.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int makeArrayIncreasing(vector<int>& arr1, vector<int>& arr2) {
        
    }
};
```

### java
```java
class Solution {
    public int makeArrayIncreasing(int[] arr1, int[] arr2) {
        
    }
}
```

### python
```python
class Solution(object):
    def makeArrayIncreasing(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
```

### c
```c
int makeArrayIncreasing(int* arr1, int arr1Size, int* arr2, int arr2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MakeArrayIncreasing(int[] arr1, int[] arr2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    
};
```

### typescript
```typescript
function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer
     */
    function makeArrayIncreasing($arr1, $arr2) {
        
    }
}
```

### swift
```swift
class Solution {
    func makeArrayIncreasing(_ arr1: [Int], _ arr2: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun makeArrayIncreasing(arr1: IntArray, arr2: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int makeArrayIncreasing(List<int> arr1, List<int> arr2) {
    
  }
}
```

### golang
```golang
func makeArrayIncreasing(arr1 []int, arr2 []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer}
def make_array_increasing(arr1, arr2)
    
end
```

### scala
```scala
object Solution {
    def makeArrayIncreasing(arr1: Array[Int], arr2: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn make_array_increasing(arr1: Vec<i32>, arr2: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (make-array-increasing arr1 arr2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec make_array_increasing(Arr1 :: [integer()], Arr2 :: [integer()]) -> integer().
make_array_increasing(Arr1, Arr2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec make_array_increasing(arr1 :: [integer], arr2 :: [integer]) :: integer
  def make_array_increasing(arr1, arr2) do
    
  end
end
```
