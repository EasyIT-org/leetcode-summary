# 168. Excel Sheet Column Title

- Difficulty: Easy
- Topics: Math, String
- Slug: excel-sheet-column-title
- Problem ID: 168

## Description
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
For example:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
```

### Example 2
```text
Input: columnNumber = 1
Output: "A"
```

### Example 3
```text
Input: columnNumber = 28
Output: "AB"
```

### Example 4
```text
Input: columnNumber = 701
Output: "ZY"
```


## Constraints
- 1 <= columnNumber <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string convertToTitle(int columnNumber) {
        
    }
};
```

### java
```java
class Solution {
    public String convertToTitle(int columnNumber) {
        
    }
}
```

### python
```python
class Solution(object):
    def convertToTitle(self, columnNumber):
        """
        :type columnNumber: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
```

### c
```c
char* convertToTitle(int columnNumber) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ConvertToTitle(int columnNumber) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
};
```

### typescript
```typescript
function convertToTitle(columnNumber: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $columnNumber
     * @return String
     */
    function convertToTitle($columnNumber) {
        
    }
}
```

### swift
```swift
class Solution {
    func convertToTitle(_ columnNumber: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun convertToTitle(columnNumber: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String convertToTitle(int columnNumber) {
    
  }
}
```

### golang
```golang
func convertToTitle(columnNumber int) string {
    
}
```

### ruby
```ruby
# @param {Integer} column_number
# @return {String}
def convert_to_title(column_number)
    
end
```

### scala
```scala
object Solution {
    def convertToTitle(columnNumber: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn convert_to_title(column_number: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (convert-to-title columnNumber)
  (-> exact-integer? string?)
  )
```

### erlang
```erlang
-spec convert_to_title(ColumnNumber :: integer()) -> unicode:unicode_binary().
convert_to_title(ColumnNumber) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec convert_to_title(column_number :: integer) :: String.t
  def convert_to_title(column_number) do
    
  end
end
```
