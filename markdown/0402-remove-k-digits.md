# 402. Remove K Digits

- Difficulty: Medium
- Topics: String, Stack, Greedy, Monotonic Stack
- Slug: remove-k-digits
- Problem ID: 402

## Description
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```

### Example 2
```text
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
```

### Example 3
```text
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
```


## Constraints
- 1 <= k <= num.length <= 105
- num consists of only digits.
- num does not have any leading zeros except for the zero itself.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string removeKdigits(string num, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String removeKdigits(String num, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeKdigits(self, num, k):
        """
        :type num: str
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
```

### c
```c
char* removeKdigits(char* num, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string RemoveKdigits(string num, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
};
```

### typescript
```typescript
function removeKdigits(num: string, k: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $num
     * @param Integer $k
     * @return String
     */
    function removeKdigits($num, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeKdigits(_ num: String, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeKdigits(num: String, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String removeKdigits(String num, int k) {
    
  }
}
```

### golang
```golang
func removeKdigits(num string, k int) string {
    
}
```

### ruby
```ruby
# @param {String} num
# @param {Integer} k
# @return {String}
def remove_kdigits(num, k)
    
end
```

### scala
```scala
object Solution {
    def removeKdigits(num: String, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_kdigits(num: String, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (remove-kdigits num k)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec remove_kdigits(Num :: unicode:unicode_binary(), K :: integer()) -> unicode:unicode_binary().
remove_kdigits(Num, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_kdigits(num :: String.t, k :: integer) :: String.t
  def remove_kdigits(num, k) do
    
  end
end
```
