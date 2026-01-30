# 722. Remove Comments

- Difficulty: Medium
- Topics: Array, String
- Slug: remove-comments
- Problem ID: 722

## Description
Given a C++ program, remove comments from it. The program source is an array of strings source where source[i] is the ith line of the source code. This represents the result of splitting the original source code string by the newline character '\n'.
In C++, there are two types of comments, line comments, and block comments.
The first effective comment takes precedence over others.
If a certain line of code is empty after removing comments, you must not output that line: each string in the answer list will be non-empty.
There will be no control characters, single quote, or double quote characters.
Also, nothing else such as defines or macros will interfere with the comments.
It is guaranteed that every open block comment will eventually be closed, so "/*" outside of a line or block comment always starts a new comment.
Finally, implicit newline characters can be deleted by block comments. Please see the examples below for details.
After removing the comments from the source code, return the source code in the same format.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
Explanation: The line by line code is visualized as below:
/*Test program */
int main()
{ 
  // variable declaration 
int a, b, c;
/* This is a test
   multiline  
   comment for 
   testing */
a = b + c;
}
The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.
The line by line output code is visualized as below:
int main()
{ 
  
int a, b, c;
a = b + c;
}
```

### Example 2
```text
Input: source = ["a/*comment", "line", "more_comment*/b"]
Output: ["ab"]
Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.  After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].
```


## Constraints
- 1 <= source.length <= 100
- 0 <= source[i].length <= 80
- source[i] consists of printable ASCII characters.
- Every open block comment is eventually closed.
- There are no single-quote or double-quote in the input.

## Hints
- Carefully parse each line according to the following rules:

* If we start a block comment and we aren't in a block, then we will skip over the next two characters and change our state to be in a block.

* If we end a block comment and we are in a block, then we will skip over the next two characters and change our state to be *not* in a block.

* If we start a line comment and we aren't in a block, then we will ignore the rest of the line.

* If we aren't in a block comment (and it wasn't the start of a comment), we will record the character we are at.

* At the end of each line, if we aren't in a block, we will record the line.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> removeComments(vector<string>& source) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> removeComments(String[] source) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeComments(self, source):
        """
        :type source: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def removeComments(self, source: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** removeComments(char** source, int sourceSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> RemoveComments(string[] source) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    
};
```

### typescript
```typescript
function removeComments(source: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $source
     * @return String[]
     */
    function removeComments($source) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeComments(_ source: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeComments(source: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> removeComments(List<String> source) {
    
  }
}
```

### golang
```golang
func removeComments(source []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} source
# @return {String[]}
def remove_comments(source)
    
end
```

### scala
```scala
object Solution {
    def removeComments(source: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_comments(source: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (remove-comments source)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec remove_comments(Source :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
remove_comments(Source) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_comments(source :: [String.t]) :: [String.t]
  def remove_comments(source) do
    
  end
end
```
