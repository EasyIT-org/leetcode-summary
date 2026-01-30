# 591. Tag Validator

- Difficulty: Hard
- Topics: String, Stack
- Slug: tag-validator
- Problem ID: 591

## Description
Given a string representing a code snippet, implement a tag validator to parse the code and return whether it is valid.
A code snippet is valid if all the following rules hold:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: code = "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
Output: true
Explanation: 
The code is wrapped in a closed tag : <DIV> and </DIV>. 
The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. 
Although CDATA_CONTENT has an unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as a tag.
So TAG_CONTENT is valid, and then the code is valid. Thus return true.
```

### Example 2
```text
Input: code = "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
Output: true
Explanation:
We first separate the code into : start_tag|tag_content|end_tag.
start_tag -> "<DIV>"
end_tag -> "</DIV>"
tag_content could also be separated into : text1|cdata|text2.
text1 -> ">>  ![cdata[]] "
cdata -> "<![CDATA[<div>]>]]>", where the CDATA_CONTENT is "<div>]>"
text2 -> "]]>>]"
The reason why start_tag is NOT "<DIV>>>" is because of the rule 6.
The reason why cdata is NOT "<![CDATA[<div>]>]]>]]>" is because of the rule 7.
```

### Example 3
```text
Input: code = "<A>  <B> </A>   </B>"
Output: false
Explanation: Unbalanced. If "<A>" is closed, then "<B>" must be unmatched, and vice versa.
```


## Constraints
- 1 <= code.length <= 500
- code consists of English letters, digits, '<', '>', '/', '!', '[', ']', '.', and ' '.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isValid(string code) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isValid(String code) {
        
    }
}
```

### python
```python
class Solution(object):
    def isValid(self, code):
        """
        :type code: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isValid(self, code: str) -> bool:
```

### c
```c
bool isValid(char* code) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsValid(string code) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
    
};
```

### typescript
```typescript
function isValid(code: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $code
     * @return Boolean
     */
    function isValid($code) {
        
    }
}
```

### swift
```swift
class Solution {
    func isValid(_ code: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isValid(code: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isValid(String code) {
    
  }
}
```

### golang
```golang
func isValid(code string) bool {
    
}
```

### ruby
```ruby
# @param {String} code
# @return {Boolean}
def is_valid(code)
    
end
```

### scala
```scala
object Solution {
    def isValid(code: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_valid(code: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-valid code)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_valid(Code :: unicode:unicode_binary()) -> boolean().
is_valid(Code) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_valid(code :: String.t) :: boolean
  def is_valid(code) do
    
  end
end
```
