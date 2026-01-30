# 13. Roman to Integer

- Difficulty: Easy
- Topics: Hash Table, Math, String
- Slug: roman-to-integer
- Problem ID: 13

## Description
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
Given a roman numeral, convert it to an integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

### Example 2
```text
Input: s = "III"
Output: 3
Explanation: III = 3.
```

### Example 3
```text
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

### Example 4
```text
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```


## Constraints
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].

## Hints
- Problem is simpler to solve by working the string from back to front and using a map.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int romanToInt(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int romanToInt(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def romanToInt(self, s: str) -> int:
```

### c
```c
int romanToInt(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RomanToInt(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
};
```

### typescript
```typescript
function romanToInt(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func romanToInt(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun romanToInt(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int romanToInt(String s) {
    
  }
}
```

### golang
```golang
func romanToInt(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def roman_to_int(s)
    
end
```

### scala
```scala
object Solution {
    def romanToInt(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (roman-to-int s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec roman_to_int(S :: unicode:unicode_binary()) -> integer().
roman_to_int(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec roman_to_int(s :: String.t) :: integer
  def roman_to_int(s) do
    
  end
end
```
