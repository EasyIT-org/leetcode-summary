# 1207. Unique Number of Occurrences

- Difficulty: Easy
- Topics: Array, Hash Table
- Slug: unique-number-of-occurrences
- Problem ID: 1319

## Description
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
```

### Example 2
```text
Input: arr = [1,2]
Output: false
```

### Example 3
```text
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
```


## Constraints
- 1 <= arr.length <= 1000
- -1000 <= arr[i] <= 1000

## Hints
- Find the number of occurrences of each element in the array using a hash map.
- Iterate through the hash map and check if there is a repeated value.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
```

### c
```c
bool uniqueOccurrences(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
};
```

### typescript
```typescript
function uniqueOccurrences(arr: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function uniqueOccurrences($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func uniqueOccurrences(_ arr: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun uniqueOccurrences(arr: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool uniqueOccurrences(List<int> arr) {
    
  }
}
```

### golang
```golang
func uniqueOccurrences(arr []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Boolean}
def unique_occurrences(arr)
    
end
```

### scala
```scala
object Solution {
    def uniqueOccurrences(arr: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn unique_occurrences(arr: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (unique-occurrences arr)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec unique_occurrences(Arr :: [integer()]) -> boolean().
unique_occurrences(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec unique_occurrences(arr :: [integer]) :: boolean
  def unique_occurrences(arr) do
    
  end
end
```
