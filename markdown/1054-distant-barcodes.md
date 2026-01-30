# 1054. Distant Barcodes

- Difficulty: Medium
- Topics: Array, Hash Table, Greedy, Sorting, Heap (Priority Queue), Counting
- Slug: distant-barcodes
- Problem ID: 1140

## Description
In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
```

### Example 2
```text
Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]
```


## Constraints
- 1 <= barcodes.length <= 10000
- 1 <= barcodes[i] <= 10000

## Hints
- We want to always choose the most common or second most common element to write next.  What data structure allows us to query this effectively?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> rearrangeBarcodes(vector<int>& barcodes) {
        
    }
};
```

### java
```java
class Solution {
    public int[] rearrangeBarcodes(int[] barcodes) {
        
    }
}
```

### python
```python
class Solution(object):
    def rearrangeBarcodes(self, barcodes):
        """
        :type barcodes: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* rearrangeBarcodes(int* barcodes, int barcodesSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] RearrangeBarcodes(int[] barcodes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    
};
```

### typescript
```typescript
function rearrangeBarcodes(barcodes: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $barcodes
     * @return Integer[]
     */
    function rearrangeBarcodes($barcodes) {
        
    }
}
```

### swift
```swift
class Solution {
    func rearrangeBarcodes(_ barcodes: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun rearrangeBarcodes(barcodes: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> rearrangeBarcodes(List<int> barcodes) {
    
  }
}
```

### golang
```golang
func rearrangeBarcodes(barcodes []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} barcodes
# @return {Integer[]}
def rearrange_barcodes(barcodes)
    
end
```

### scala
```scala
object Solution {
    def rearrangeBarcodes(barcodes: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn rearrange_barcodes(barcodes: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (rearrange-barcodes barcodes)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec rearrange_barcodes(Barcodes :: [integer()]) -> [integer()].
rearrange_barcodes(Barcodes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec rearrange_barcodes(barcodes :: [integer]) :: [integer]
  def rearrange_barcodes(barcodes) do
    
  end
end
```
