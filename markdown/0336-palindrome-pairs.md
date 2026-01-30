# 336. Palindrome Pairs

- Difficulty: Hard
- Topics: Array, Hash Table, String, Trie
- Slug: palindrome-pairs
- Problem ID: 336

## Description
You are given a 0-indexed array of unique strings words.
A palindrome pair is a pair of integers (i, j) such that:
Return an array of all the palindrome pairs of words.
You must write an algorithm with O(sum of words[i].length) runtime complexity.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]
```

### Example 2
```text
Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]
```

### Example 3
```text
Input: words = ["a",""]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["a","a"]
```


## Constraints
- 1 <= words.length <= 5000
- 0 <= words[i].length <= 300
- words[i] consists of lowercase English letters.

## Hints
- Checking every two pairs will exceed the time limit. It will be O(n^2 * k). We need a faster way.
- If we hash every string in the array, how can we check if two pairs form a palindrome after the concatenation?
- We can check every string in words and consider it as words[j] (i.e., the suffix of the target palindrome). We can check if there is a hash of string that can be the prefix to make it a palindrome.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> palindromePairs(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> palindromePairs(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def palindromePairs(self, words):
        """
        :type words: List[str]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** palindromePairs(char** words, int wordsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> PalindromePairs(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    
};
```

### typescript
```typescript
function palindromePairs(words: string[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return Integer[][]
     */
    function palindromePairs($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func palindromePairs(_ words: [String]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun palindromePairs(words: Array<String>): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> palindromePairs(List<String> words) {
    
  }
}
```

### golang
```golang
func palindromePairs(words []string) [][]int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {Integer[][]}
def palindrome_pairs(words)
    
end
```

### scala
```scala
object Solution {
    def palindromePairs(words: Array[String]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn palindrome_pairs(words: Vec<String>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (palindrome-pairs words)
  (-> (listof string?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec palindrome_pairs(Words :: [unicode:unicode_binary()]) -> [[integer()]].
palindrome_pairs(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec palindrome_pairs(words :: [String.t]) :: [[integer]]
  def palindrome_pairs(words) do
    
  end
end
```
