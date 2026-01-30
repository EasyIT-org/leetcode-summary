# 506. Relative Ranks

- Difficulty: Easy
- Topics: Array, Sorting, Heap (Priority Queue)
- Slug: relative-ranks
- Problem ID: 506

## Description
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
Return an array answer of size n where answer[i] is the rank of the ith athlete.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
```

### Example 2
```text
Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].
```


## Constraints
- n == score.length
- 1 <= n <= 104
- 0 <= score[i] <= 106
- All the values in score are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        
    }
};
```

### java
```java
class Solution {
    public String[] findRelativeRanks(int[] score) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRelativeRanks(self, score):
        """
        :type score: List[int]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findRelativeRanks(int* score, int scoreSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] FindRelativeRanks(int[] score) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
};
```

### typescript
```typescript
function findRelativeRanks(score: number[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $score
     * @return String[]
     */
    function findRelativeRanks($score) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRelativeRanks(_ score: [Int]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRelativeRanks(score: IntArray): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findRelativeRanks(List<int> score) {
    
  }
}
```

### golang
```golang
func findRelativeRanks(score []int) []string {
    
}
```

### ruby
```ruby
# @param {Integer[]} score
# @return {String[]}
def find_relative_ranks(score)
    
end
```

### scala
```scala
object Solution {
    def findRelativeRanks(score: Array[Int]): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-relative-ranks score)
  (-> (listof exact-integer?) (listof string?))
  )
```

### erlang
```erlang
-spec find_relative_ranks(Score :: [integer()]) -> [unicode:unicode_binary()].
find_relative_ranks(Score) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_relative_ranks(score :: [integer]) :: [String.t]
  def find_relative_ranks(score) do
    
  end
end
```
