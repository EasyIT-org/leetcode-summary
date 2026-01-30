# 1122. Relative Sort Array

- Difficulty: Easy
- Topics: Array, Hash Table, Sorting, Counting Sort
- Slug: relative-sort-array
- Problem ID: 1217

## Description
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
```

### Example 2
```text
Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
```


## Constraints
- 1 <= arr1.length, arr2.length <= 1000
- 0 <= arr1[i], arr2[i] <= 1000
- All the elements of arr2 are distinct.
- Each arr2[i] is in arr1.

## Hints
- Using a hashmap, we can map the values of arr2 to their position in arr2.
- After, we can use a custom sorting function.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        
    }
};
```

### java
```java
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        
    }
}
```

### python
```python
class Solution(object):
    def relativeSortArray(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* relativeSortArray(int* arr1, int arr1Size, int* arr2, int arr2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] RelativeSortArray(int[] arr1, int[] arr2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
};
```

### typescript
```typescript
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer[]
     */
    function relativeSortArray($arr1, $arr2) {
        
    }
}
```

### swift
```swift
class Solution {
    func relativeSortArray(_ arr1: [Int], _ arr2: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun relativeSortArray(arr1: IntArray, arr2: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> relativeSortArray(List<int> arr1, List<int> arr2) {
    
  }
}
```

### golang
```golang
func relativeSortArray(arr1 []int, arr2 []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer[]}
def relative_sort_array(arr1, arr2)
    
end
```

### scala
```scala
object Solution {
    def relativeSortArray(arr1: Array[Int], arr2: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn relative_sort_array(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (relative-sort-array arr1 arr2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec relative_sort_array(Arr1 :: [integer()], Arr2 :: [integer()]) -> [integer()].
relative_sort_array(Arr1, Arr2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec relative_sort_array(arr1 :: [integer], arr2 :: [integer]) :: [integer]
  def relative_sort_array(arr1, arr2) do
    
  end
end
```
