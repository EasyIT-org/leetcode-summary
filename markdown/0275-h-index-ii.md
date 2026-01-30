# 275. H-Index II

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: h-index-ii
- Problem ID: 275

## Description
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in non-descending order, return the researcher's h-index.
According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
You must write an algorithm that runs in logarithmic time.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

### Example 2
```text
Input: citations = [1,2,100]
Output: 2
```


## Constraints
- n == citations.length
- 1 <= n <= 105
- 0 <= citations[i] <= 1000
- citations is sorted in ascending order.

## Hints
- Expected runtime complexity is in <i>O</i>(log <i>n</i>) and the input is sorted.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int hIndex(vector<int>& citations) {
        
    }
};
```

### java
```java
class Solution {
    public int hIndex(int[] citations) {
        
    }
}
```

### python
```python
class Solution(object):
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def hIndex(self, citations: List[int]) -> int:
```

### c
```c
int hIndex(int* citations, int citationsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int HIndex(int[] citations) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
};
```

### typescript
```typescript
function hIndex(citations: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $citations
     * @return Integer
     */
    function hIndex($citations) {
        
    }
}
```

### swift
```swift
class Solution {
    func hIndex(_ citations: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun hIndex(citations: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int hIndex(List<int> citations) {
    
  }
}
```

### golang
```golang
func hIndex(citations []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} citations
# @return {Integer}
def h_index(citations)
    
end
```

### scala
```scala
object Solution {
    def hIndex(citations: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn h_index(citations: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (h-index citations)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec h_index(Citations :: [integer()]) -> integer().
h_index(Citations) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec h_index(citations :: [integer]) :: integer
  def h_index(citations) do
    
  end
end
```
