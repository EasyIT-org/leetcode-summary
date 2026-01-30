# 6. Zigzag Conversion

- Difficulty: Medium
- Topics: String
- Slug: zigzag-conversion
- Problem ID: 6

## Description
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
P   A   H   N
A P L S I I G
Y   I   R
```

### Example 2
```text
string convert(string s, int numRows);
```

### Example 3
```text
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

### Example 4
```text
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

### Example 5
```text
Input: s = "A", numRows = 1
Output: "A"
```


## Constraints
- 1 <= s.length <= 1000
- s consists of English letters (lower-case and upper-case), ',' and '.'.
- 1 <= numRows <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string convert(string s, int numRows) {
        
    }
};
```

### java
```java
class Solution {
    public String convert(String s, int numRows) {
        
    }
}
```

### python
```python
class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def convert(self, s: str, numRows: int) -> str:
```

### c
```c
char* convert(char* s, int numRows) {
    
}
```

### csharp
```csharp
public class Solution {
    public string Convert(string s, int numRows) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
};
```

### typescript
```typescript
function convert(s: string, numRows: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $numRows
     * @return String
     */
    function convert($s, $numRows) {
        
    }
}
```

### swift
```swift
class Solution {
    func convert(_ s: String, _ numRows: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun convert(s: String, numRows: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String convert(String s, int numRows) {
    
  }
}
```

### golang
```golang
func convert(s string, numRows int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
    
end
```

### scala
```scala
object Solution {
    def convert(s: String, numRows: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (convert s numRows)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec convert(S :: unicode:unicode_binary(), NumRows :: integer()) -> unicode:unicode_binary().
convert(S, NumRows) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec convert(s :: String.t, num_rows :: integer) :: String.t
  def convert(s, num_rows) do
    
  end
end
```
