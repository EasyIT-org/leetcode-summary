# 1177. Can Make Palindrome from Substring

- Difficulty: Medium
- Topics: Array, Hash Table, String, Bit Manipulation, Prefix Sum
- Slug: can-make-palindrome-from-substring
- Problem ID: 1281

## Description
You are given a string s and array queries where queries[i] = [lefti, righti, ki]. We may rearrange the substring s[lefti...righti] for each query and then choose up to ki of them to replace with any lowercase English letter.
If the substring is possible to be a palindrome string after the operations above, the result of the query is true. Otherwise, the result is false.
Return a boolean array answer where answer[i] is the result of the ith query queries[i].
Note that each letter is counted individually for replacement, so if, for example s[lefti...righti] = "aaa", and ki = 2, we can only replace two of the letters. Also, note that no query modifies the initial string s.
Example :
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0]: substring = "d", is palidrome.
queries[1]: substring = "bc", is not palidrome.
queries[2]: substring = "abcd", is not palidrome after replacing only 1 character.
queries[3]: substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4]: substring = "abcda", could be changed to "abcba" which is palidrome.
```

### Example 2
```text
Input: s = "lyb", queries = [[0,1,0],[2,2,1]]
Output: [false,true]
```


## Constraints
- 1 <= s.length, queries.length <= 105
- 0 <= lefti <= righti < s.length
- 0 <= ki <= s.length
- s consists of lowercase English letters.

## Hints
- Since we can rearrange the substring, all we care about is the frequency of each character in that substring.
- How to find the character frequencies efficiently ?
- As a preprocess, calculate the accumulate frequency of all characters for all prefixes of the string.
- How to check if a substring can be changed to a palindrome given its characters frequency ?
- Count the number of odd frequencies, there can be at most one odd frequency in a palindrome.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<bool> canMakePaliQueries(string s, vector<vector<int>>& queries) {
        
    }
};
```

### java
```java
class Solution {
    public List<Boolean> canMakePaliQueries(String s, int[][] queries) {
        
    }
}
```

### python
```python
class Solution(object):
    def canMakePaliQueries(self, s, queries):
        """
        :type s: str
        :type queries: List[List[int]]
        :rtype: List[bool]
        """
```

### python3
```python3
class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* canMakePaliQueries(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<bool> CanMakePaliQueries(string s, int[][] queries) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
    
};
```

### typescript
```typescript
function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer[][] $queries
     * @return Boolean[]
     */
    function canMakePaliQueries($s, $queries) {
        
    }
}
```

### swift
```swift
class Solution {
    func canMakePaliQueries(_ s: String, _ queries: [[Int]]) -> [Bool] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canMakePaliQueries(s: String, queries: Array<IntArray>): List<Boolean> {
        
    }
}
```

### dart
```dart
class Solution {
  List<bool> canMakePaliQueries(String s, List<List<int>> queries) {
    
  }
}
```

### golang
```golang
func canMakePaliQueries(s string, queries [][]int) []bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer[][]} queries
# @return {Boolean[]}
def can_make_pali_queries(s, queries)
    
end
```

### scala
```scala
object Solution {
    def canMakePaliQueries(s: String, queries: Array[Array[Int]]): List[Boolean] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_make_pali_queries(s: String, queries: Vec<Vec<i32>>) -> Vec<bool> {
        
    }
}
```

### racket
```racket
(define/contract (can-make-pali-queries s queries)
  (-> string? (listof (listof exact-integer?)) (listof boolean?))
  )
```

### erlang
```erlang
-spec can_make_pali_queries(S :: unicode:unicode_binary(), Queries :: [[integer()]]) -> [boolean()].
can_make_pali_queries(S, Queries) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_make_pali_queries(s :: String.t, queries :: [[integer]]) :: [boolean]
  def can_make_pali_queries(s, queries) do
    
  end
end
```
