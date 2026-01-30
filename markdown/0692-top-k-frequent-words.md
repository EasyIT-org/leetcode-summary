# 692. Top K Frequent Words

- Difficulty: Medium
- Topics: Array, Hash Table, String, Trie, Sorting, Heap (Priority Queue), Bucket Sort, Counting
- Slug: top-k-frequent-words
- Problem ID: 692

## Description
Given an array of strings words and an integer k, return the k most frequent strings.
Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
Example 1:
Example 2:
Constraints:
Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

## Examples
### Example 1
```text
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
```

### Example 2
```text
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```


## Constraints
- 1 <= words.length <= 500
- 1 <= words[i].length <= 10
- words[i] consists of lowercase English letters.
- k is in the range [1, The number of unique words[i]]

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> topKFrequent(vector<string>& words, int k) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def topKFrequent(self, words, k):
        """
        :type words: List[str]
        :type k: int
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** topKFrequent(char** words, int wordsSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> TopKFrequent(string[] words, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
};
```

### typescript
```typescript
function topKFrequent(words: string[], k: number): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @param Integer $k
     * @return String[]
     */
    function topKFrequent($words, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func topKFrequent(_ words: [String], _ k: Int) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun topKFrequent(words: Array<String>, k: Int): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> topKFrequent(List<String> words, int k) {
    
  }
}
```

### golang
```golang
func topKFrequent(words []string, k int) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @param {Integer} k
# @return {String[]}
def top_k_frequent(words, k)
    
end
```

### scala
```scala
object Solution {
    def topKFrequent(words: Array[String], k: Int): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn top_k_frequent(words: Vec<String>, k: i32) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (top-k-frequent words k)
  (-> (listof string?) exact-integer? (listof string?))
  )
```

### erlang
```erlang
-spec top_k_frequent(Words :: [unicode:unicode_binary()], K :: integer()) -> [unicode:unicode_binary()].
top_k_frequent(Words, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec top_k_frequent(words :: [String.t], k :: integer) :: [String.t]
  def top_k_frequent(words, k) do
    
  end
end
```
