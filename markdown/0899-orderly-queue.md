# 899. Orderly Queue

- Difficulty: Hard
- Topics: Math, String, Sorting
- Slug: orderly-queue
- Problem ID: 935

## Description
You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string.
Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "cba", k = 1
Output: "acb"
Explanation: 
In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".
```

### Example 2
```text
Input: s = "baaca", k = 3
Output: "aaabc"
Explanation: 
In the first move, we move the 1st character 'b' to the end, obtaining the string "aacab".
In the second move, we move the 3rd character 'c' to the end, obtaining the final result "aaabc".
```


## Constraints
- 1 <= k <= s.length <= 1000
- s consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string orderlyQueue(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String orderlyQueue(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def orderlyQueue(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
```

### c
```c
char* orderlyQueue(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string OrderlyQueue(string s, int k) {
        
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
var orderlyQueue = function(s, k) {
    
};
```

### typescript
```typescript
function orderlyQueue(s: string, k: number): string {
    
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
    function orderlyQueue($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func orderlyQueue(_ s: String, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun orderlyQueue(s: String, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String orderlyQueue(String s, int k) {
    
  }
}
```

### golang
```golang
func orderlyQueue(s string, k int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {String}
def orderly_queue(s, k)
    
end
```

### scala
```scala
object Solution {
    def orderlyQueue(s: String, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn orderly_queue(s: String, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (orderly-queue s k)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec orderly_queue(S :: unicode:unicode_binary(), K :: integer()) -> unicode:unicode_binary().
orderly_queue(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec orderly_queue(s :: String.t, k :: integer) :: String.t
  def orderly_queue(s, k) do
    
  end
end
```
