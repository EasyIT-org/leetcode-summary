# 12. Integer to Roman

- Difficulty: Medium
- Topics: Hash Table, Math, String
- Slug: integer-to-roman
- Problem ID: 12

## Description
Seven different symbols represent Roman numerals with the following values:
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:
Given an integer, convert it to a Roman numeral.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
```

### Example 2
```text
50 = L
 8 = VIII
```

### Example 3
```text
1000 = M
 900 = CM
  90 = XC
   4 = IV
```


## Constraints
- 1 <= num <= 3999

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string intToRoman(int num) {
        
    }
};
```

### java
```java
class Solution {
    public String intToRoman(int num) {
        
    }
}
```

### python
```python
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def intToRoman(self, num: int) -> str:
```

### c
```c
char* intToRoman(int num) {
    
}
```

### csharp
```csharp
public class Solution {
    public string IntToRoman(int num) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
};
```

### typescript
```typescript
function intToRoman(num: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $num
     * @return String
     */
    function intToRoman($num) {
        
    }
}
```

### swift
```swift
class Solution {
    func intToRoman(_ num: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun intToRoman(num: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String intToRoman(int num) {
    
  }
}
```

### golang
```golang
func intToRoman(num int) string {
    
}
```

### ruby
```ruby
# @param {Integer} num
# @return {String}
def int_to_roman(num)
    
end
```

### scala
```scala
object Solution {
    def intToRoman(num: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn int_to_roman(num: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (int-to-roman num)
  (-> exact-integer? string?)
  )
```

### erlang
```erlang
-spec int_to_roman(Num :: integer()) -> unicode:unicode_binary().
int_to_roman(Num) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec int_to_roman(num :: integer) :: String.t
  def int_to_roman(num) do
    
  end
end
```
