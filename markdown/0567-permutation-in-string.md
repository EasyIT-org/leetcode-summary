# 567. Permutation in String

- Difficulty: Medium
- Topics: Hash Table, Two Pointers, String, Sliding Window
- Slug: permutation-in-string
- Problem ID: 567

## Description
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

### Example 2
```text
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```


## Constraints
- 1 <= s1.length, s2.length <= 104
- s1 and s2 consist of lowercase English letters.

## Hints
- Obviously, brute force will result in TLE. Think of something else.
- How will you check whether one string is a permutation of another string?
- One way is to sort the string and then compare. But, Is there a better way?
- If one string is a permutation of another string then they must have one common metric. What is that?
- Both strings must have same character frequencies, if  one is permutation of another. Which data structure should be used to store frequencies?
- What about hash table?  An array of size 26?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        
    }
};
```

### java
```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        
    }
}
```

### python
```python
class Solution(object):
    def checkInclusion(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
```

### c
```c
bool checkInclusion(char* s1, char* s2) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
};
```

### typescript
```typescript
function checkInclusion(s1: string, s2: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
    function checkInclusion($s1, $s2) {
        
    }
}
```

### swift
```swift
class Solution {
    func checkInclusion(_ s1: String, _ s2: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun checkInclusion(s1: String, s2: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool checkInclusion(String s1, String s2) {
    
  }
}
```

### golang
```golang
func checkInclusion(s1 string, s2 string) bool {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @return {Boolean}
def check_inclusion(s1, s2)
    
end
```

### scala
```scala
object Solution {
    def checkInclusion(s1: String, s2: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn check_inclusion(s1: String, s2: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (check-inclusion s1 s2)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec check_inclusion(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary()) -> boolean().
check_inclusion(S1, S2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec check_inclusion(s1 :: String.t, s2 :: String.t) :: boolean
  def check_inclusion(s1, s2) do
    
  end
end
```
