# 1209. Remove All Adjacent Duplicates in String II

- Difficulty: Medium
- Topics: String, Stack
- Slug: remove-all-adjacent-duplicates-in-string-ii
- Problem ID: 1320

## Description
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.
We repeatedly make k duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
```

### Example 2
```text
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
```

### Example 3
```text
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
```


## Constraints
- 1 <= s.length <= 105
- 2 <= k <= 104
- s only contains lowercase English letters.

## Hints
- Use a stack to store the characters, when there are k same characters, delete them.
- To make it more efficient, use a pair to store the value and the count of each character.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string removeDuplicates(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String removeDuplicates(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeDuplicates(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
```

### c
```c
char* removeDuplicates(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string RemoveDuplicates(string s, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
};
```

### typescript
```typescript
function removeDuplicates(s: string, k: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function removeDuplicates($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeDuplicates(_ s: String, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeDuplicates(s: String, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String removeDuplicates(String s, int k) {
    
  }
}
```

### golang
```golang
func removeDuplicates(s string, k int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {String}
def remove_duplicates(s, k)
    
end
```

### scala
```scala
object Solution {
    def removeDuplicates(s: String, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_duplicates(s: String, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (remove-duplicates s k)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec remove_duplicates(S :: unicode:unicode_binary(), K :: integer()) -> unicode:unicode_binary().
remove_duplicates(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_duplicates(s :: String.t, k :: integer) :: String.t
  def remove_duplicates(s, k) do
    
  end
end
```
