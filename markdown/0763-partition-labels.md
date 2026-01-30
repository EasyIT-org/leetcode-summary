# 763. Partition Labels

- Difficulty: Medium
- Topics: Hash Table, Two Pointers, String, Greedy
- Slug: partition-labels
- Problem ID: 768

## Description
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
Return a list of integers representing the size of these parts.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
```

### Example 2
```text
Input: s = "eccbbbbdec"
Output: [10]
```


## Constraints
- 1 <= s.length <= 500
- s consists of lowercase English letters.

## Hints
- Try to greedily choose the smallest partition that includes the first letter.  If you have something like "abaccbdeffed", then you might need to add b.  You can use an map like "last['b'] = 5" to help you expand the width of your partition.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> partitionLabels(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> partitionLabels(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def partitionLabels(self, s):
        """
        :type s: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* partitionLabels(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> PartitionLabels(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    
};
```

### typescript
```typescript
function partitionLabels(s: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer[]
     */
    function partitionLabels($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func partitionLabels(_ s: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun partitionLabels(s: String): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> partitionLabels(String s) {
    
  }
}
```

### golang
```golang
func partitionLabels(s string) []int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer[]}
def partition_labels(s)
    
end
```

### scala
```scala
object Solution {
    def partitionLabels(s: String): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (partition-labels s)
  (-> string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec partition_labels(S :: unicode:unicode_binary()) -> [integer()].
partition_labels(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec partition_labels(s :: String.t) :: [integer]
  def partition_labels(s) do
    
  end
end
```
