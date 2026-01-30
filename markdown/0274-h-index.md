# 274. H-Index

- Difficulty: Medium
- Topics: Array, Sorting, Counting Sort
- Slug: h-index
- Problem ID: 274

## Description
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

### Example 2
```text
Input: citations = [1,3,1]
Output: 1
```


## Constraints
- n == citations.length
- 1 <= n <= 5000
- 0 <= citations[i] <= 1000

## Hints
- An easy approach is to sort the array first.
- What are the possible values of h-index?
- A faster approach is to use extra space.

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
