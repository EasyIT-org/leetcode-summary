# 1078. Occurrences After Bigram

- Difficulty: Easy
- Topics: String
- Slug: occurrences-after-bigram
- Problem ID: 1156

## Description
Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
Return an array of all the words third for each occurrence of "first second third".
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
```

### Example 2
```text
Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]
```


## Constraints
- 1 <= text.length <= 1000
- text consists of lowercase English letters and spaces.
- All the words in text are separated by a single space.
- 1 <= first.length, second.length <= 10
- first and second consist of lowercase English letters.
- text will not have any leading or trailing spaces.

## Hints
- Split the string into words, then look at adjacent triples of words.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findOcurrences(string text, string first, string second) {
        
    }
};
```

### java
```java
class Solution {
    public String[] findOcurrences(String text, String first, String second) {
        
    }
}
```

### python
```python
class Solution(object):
    def findOcurrences(self, text, first, second):
        """
        :type text: str
        :type first: str
        :type second: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findOcurrences(char* text, char* first, char* second, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] FindOcurrences(string text, string first, string second) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    
};
```

### typescript
```typescript
function findOcurrences(text: string, first: string, second: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $text
     * @param String $first
     * @param String $second
     * @return String[]
     */
    function findOcurrences($text, $first, $second) {
        
    }
}
```

### swift
```swift
class Solution {
    func findOcurrences(_ text: String, _ first: String, _ second: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findOcurrences(text: String, first: String, second: String): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findOcurrences(String text, String first, String second) {
    
  }
}
```

### golang
```golang
func findOcurrences(text string, first string, second string) []string {
    
}
```

### ruby
```ruby
# @param {String} text
# @param {String} first
# @param {String} second
# @return {String[]}
def find_ocurrences(text, first, second)
    
end
```

### scala
```scala
object Solution {
    def findOcurrences(text: String, first: String, second: String): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_ocurrences(text: String, first: String, second: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-ocurrences text first second)
  (-> string? string? string? (listof string?))
  )
```

### erlang
```erlang
-spec find_ocurrences(Text :: unicode:unicode_binary(), First :: unicode:unicode_binary(), Second :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
find_ocurrences(Text, First, Second) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_ocurrences(text :: String.t, first :: String.t, second :: String.t) :: [String.t]
  def find_ocurrences(text, first, second) do
    
  end
end
```
