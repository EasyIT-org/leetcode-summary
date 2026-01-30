# 1170. Compare Strings by Frequency of the Smallest Character

- Difficulty: Medium
- Topics: Array, Hash Table, String, Binary Search, Sorting
- Slug: compare-strings-by-frequency-of-the-smallest-character
- Problem ID: 1273

## Description
Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.
You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.
Return an integer array answer, where each answer[i] is the answer to the ith query.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
```

### Example 2
```text
Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
```


## Constraints
- 1 <= queries.length <= 2000
- 1 <= words.length <= 2000
- 1 <= queries[i].length, words[i].length <= 10
- queries[i][j], words[i][j] consist of lowercase English letters.

## Hints
- For each string from words calculate the leading count and store it in an array, then sort the integer array.
- For each string from queries calculate the leading count "p" and in base of the sorted array calculated on the step 1 do a binary search to count the number of items greater than "p".

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> numSmallerByFrequency(vector<string>& queries, vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int[] numSmallerByFrequency(String[] queries, String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSmallerByFrequency(self, queries, words):
        """
        :type queries: List[str]
        :type words: List[str]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* numSmallerByFrequency(char** queries, int queriesSize, char** words, int wordsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] NumSmallerByFrequency(string[] queries, string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    
};
```

### typescript
```typescript
function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $queries
     * @param String[] $words
     * @return Integer[]
     */
    function numSmallerByFrequency($queries, $words) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSmallerByFrequency(_ queries: [String], _ words: [String]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSmallerByFrequency(queries: Array<String>, words: Array<String>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> numSmallerByFrequency(List<String> queries, List<String> words) {
    
  }
}
```

### golang
```golang
func numSmallerByFrequency(queries []string, words []string) []int {
    
}
```

### ruby
```ruby
# @param {String[]} queries
# @param {String[]} words
# @return {Integer[]}
def num_smaller_by_frequency(queries, words)
    
end
```

### scala
```scala
object Solution {
    def numSmallerByFrequency(queries: Array[String], words: Array[String]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_smaller_by_frequency(queries: Vec<String>, words: Vec<String>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (num-smaller-by-frequency queries words)
  (-> (listof string?) (listof string?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec num_smaller_by_frequency(Queries :: [unicode:unicode_binary()], Words :: [unicode:unicode_binary()]) -> [integer()].
num_smaller_by_frequency(Queries, Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_smaller_by_frequency(queries :: [String.t], words :: [String.t]) :: [integer]
  def num_smaller_by_frequency(queries, words) do
    
  end
end
```
