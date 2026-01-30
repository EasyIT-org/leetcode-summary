# 852. Peak Index in a Mountain Array

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: peak-index-in-a-mountain-array
- Problem ID: 882

## Description
You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
Return the index of the peak element.
Your task is to solve it in O(log(n)) time complexity.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [0,1,0]
Output: 1
```

### Example 2
```text
Input: arr = [0,2,1,0]
Output: 1
```

### Example 3
```text
Input: arr = [0,10,5,2]
Output: 1
```


## Constraints
- 3 <= arr.length <= 105
- 0 <= arr[i] <= 106
- arr is guaranteed to be a mountain array.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def peakIndexInMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
```

### c
```c
int peakIndexInMountainArray(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int PeakIndexInMountainArray(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
};
```

### typescript
```typescript
function peakIndexInMountainArray(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function peakIndexInMountainArray($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func peakIndexInMountainArray(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun peakIndexInMountainArray(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int peakIndexInMountainArray(List<int> arr) {
    
  }
}
```

### golang
```golang
func peakIndexInMountainArray(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def peak_index_in_mountain_array(arr)
    
end
```

### scala
```scala
object Solution {
    def peakIndexInMountainArray(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn peak_index_in_mountain_array(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (peak-index-in-mountain-array arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec peak_index_in_mountain_array(Arr :: [integer()]) -> integer().
peak_index_in_mountain_array(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec peak_index_in_mountain_array(arr :: [integer]) :: integer
  def peak_index_in_mountain_array(arr) do
    
  end
end
```
