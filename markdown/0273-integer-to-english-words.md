# 273. Integer to English Words

- Difficulty: Hard
- Topics: Math, String, Recursion
- Slug: integer-to-english-words
- Problem ID: 273

## Description
Convert a non-negative integer num to its English words representation.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: num = 123
Output: "One Hundred Twenty Three"
```

### Example 2
```text
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
```

### Example 3
```text
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```


## Constraints
- 0 <= num <= 231 - 1

## Hints
- Did you see a pattern in dividing the number into chunk of words? For example, 123 and 123000.
- Group the number by thousands (3 digits). You can write a helper function that takes a number less than 1000 and convert just that chunk to words.
- There are many edge cases. What are some good test cases? Does your code work with input such as 0? Or 1000010? (middle chunk is zero and should not be printed out)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string numberToWords(int num) {
        
    }
};
```

### java
```java
class Solution {
    public String numberToWords(int num) {
        
    }
}
```

### python
```python
class Solution(object):
    def numberToWords(self, num):
        """
        :type num: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def numberToWords(self, num: int) -> str:
```

### c
```c
char* numberToWords(int num) {
    
}
```

### csharp
```csharp
public class Solution {
    public string NumberToWords(int num) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    
};
```

### typescript
```typescript
function numberToWords(num: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $num
     * @return String
     */
    function numberToWords($num) {
        
    }
}
```

### swift
```swift
class Solution {
    func numberToWords(_ num: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numberToWords(num: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String numberToWords(int num) {
    
  }
}
```

### golang
```golang
func numberToWords(num int) string {
    
}
```

### ruby
```ruby
# @param {Integer} num
# @return {String}
def number_to_words(num)
    
end
```

### scala
```scala
object Solution {
    def numberToWords(num: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn number_to_words(num: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (number-to-words num)
  (-> exact-integer? string?)
  )
```

### erlang
```erlang
-spec number_to_words(Num :: integer()) -> unicode:unicode_binary().
number_to_words(Num) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec number_to_words(num :: integer) :: String.t
  def number_to_words(num) do
    
  end
end
```
