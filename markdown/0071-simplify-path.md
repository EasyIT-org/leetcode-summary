# 71. Simplify Path

- Difficulty: Medium
- Topics: String, Stack
- Slug: simplify-path
- Problem ID: 71

## Description
You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.
The rules of a Unix-style file system are as follows:
The simplified canonical path should follow these rules:
Return the simplified canonical path.
Example 1:
Example 2:
Example 3:
Example 4:
Example 5:
Constraints:

## Examples
### Example 1
```text
Input: path = "/home/"
Output: "/home"
Explanation:
The trailing slash should be removed.
```

### Example 2
```text
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation:
Multiple consecutive slashes are replaced by a single one.
```

### Example 3
```text
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
Explanation:
A double period ".." refers to the directory up a level (the parent directory).
```

### Example 4
```text
Input: path = "/../"
Output: "/"
Explanation:
Going one level up from the root directory is not possible.
```

### Example 5
```text
Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
Explanation:
"..." is a valid name for a directory in this problem.
```


## Constraints
- 1 <= path.length <= 3000
- path consists of English letters, digits, period '.', slash '/' or '_'.
- path is a valid absolute Unix path.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string simplifyPath(string path) {
        
    }
};
```

### java
```java
class Solution {
    public String simplifyPath(String path) {
        
    }
}
```

### python
```python
class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def simplifyPath(self, path: str) -> str:
```

### c
```c
char* simplifyPath(char* path) {
    
}
```

### csharp
```csharp
public class Solution {
    public string SimplifyPath(string path) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
};
```

### typescript
```typescript
function simplifyPath(path: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $path
     * @return String
     */
    function simplifyPath($path) {
        
    }
}
```

### swift
```swift
class Solution {
    func simplifyPath(_ path: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun simplifyPath(path: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String simplifyPath(String path) {
    
  }
}
```

### golang
```golang
func simplifyPath(path string) string {
    
}
```

### ruby
```ruby
# @param {String} path
# @return {String}
def simplify_path(path)
    
end
```

### scala
```scala
object Solution {
    def simplifyPath(path: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn simplify_path(path: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (simplify-path path)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec simplify_path(Path :: unicode:unicode_binary()) -> unicode:unicode_binary().
simplify_path(Path) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec simplify_path(path :: String.t) :: String.t
  def simplify_path(path) do
    
  end
end
```
