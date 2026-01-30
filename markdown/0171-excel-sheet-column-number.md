# 171. Excel Sheet Column Number

- Difficulty: Easy
- Topics: Math, String
- Slug: excel-sheet-column-number
- Problem ID: 171

## Description
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
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
Input: columnTitle = "A"
Output: 1
```

### Example 3
```text
Input: columnTitle = "AB"
Output: 28
```

### Example 4
```text
Input: columnTitle = "ZY"
Output: 701
```


## Constraints
- 1 <= columnTitle.length <= 7
- columnTitle consists only of uppercase English letters.
- columnTitle is in the range ["A", "FXSHRXW"].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int titleToNumber(string columnTitle) {
        
    }
};
```

### java
```java
class Solution {
    public int titleToNumber(String columnTitle) {
        
    }
}
```

### python
```python
class Solution(object):
    def titleToNumber(self, columnTitle):
        """
        :type columnTitle: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
```

### c
```c
int titleToNumber(char* columnTitle) {
    
}
```

### csharp
```csharp
public class Solution {
    public int TitleToNumber(string columnTitle) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
};
```

### typescript
```typescript
function titleToNumber(columnTitle: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $columnTitle
     * @return Integer
     */
    function titleToNumber($columnTitle) {
        
    }
}
```

### swift
```swift
class Solution {
    func titleToNumber(_ columnTitle: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun titleToNumber(columnTitle: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int titleToNumber(String columnTitle) {
    
  }
}
```

### golang
```golang
func titleToNumber(columnTitle string) int {
    
}
```

### ruby
```ruby
# @param {String} column_title
# @return {Integer}
def title_to_number(column_title)
    
end
```

### scala
```scala
object Solution {
    def titleToNumber(columnTitle: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn title_to_number(column_title: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (title-to-number columnTitle)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec title_to_number(ColumnTitle :: unicode:unicode_binary()) -> integer().
title_to_number(ColumnTitle) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec title_to_number(column_title :: String.t) :: integer
  def title_to_number(column_title) do
    
  end
end
```
