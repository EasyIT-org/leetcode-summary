# 438. Find All Anagrams in a String

- Difficulty: Medium
- Topics: Hash Table, String, Sliding Window
- Slug: find-all-anagrams-in-a-string
- Problem ID: 438

## Description
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

### Example 2
```text
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```


## Constraints
- 1 <= s.length, p.length <= 3 * 104
- s and p consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        
    }
}
```

### python
```python
class Solution(object):
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findAnagrams(char* s, char* p, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindAnagrams(string s, string p) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
};
```

### typescript
```typescript
function findAnagrams(s: string, p: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $p
     * @return Integer[]
     */
    function findAnagrams($s, $p) {
        
    }
}
```

### swift
```swift
class Solution {
    func findAnagrams(_ s: String, _ p: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findAnagrams(s: String, p: String): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findAnagrams(String s, String p) {
    
  }
}
```

### golang
```golang
func findAnagrams(s string, p string) []int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} p
# @return {Integer[]}
def find_anagrams(s, p)
    
end
```

### scala
```scala
object Solution {
    def findAnagrams(s: String, p: String): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-anagrams s p)
  (-> string? string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_anagrams(S :: unicode:unicode_binary(), P :: unicode:unicode_binary()) -> [integer()].
find_anagrams(S, P) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_anagrams(s :: String.t, p :: String.t) :: [integer]
  def find_anagrams(s, p) do
    
  end
end
```
