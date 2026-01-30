# 388. Longest Absolute File Path

- Difficulty: Medium
- Topics: String, Stack, Depth-First Search
- Slug: longest-absolute-file-path
- Problem ID: 388

## Description
Suppose we have a file system that stores both files and directories. An example of one system is represented in the following picture:
Here, we have dir as the only directory in the root. dir contains two subdirectories, subdir1 and subdir2. subdir1 contains a file file1.ext and subdirectory subsubdir1. subdir2 contains a subdirectory subsubdir2, which contains a file file2.ext.
In text form, it looks like this (with ⟶ representing the tab character):
If we were to write this representation in code, it will look like this: "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext". Note that the '\n' and '\t' are the new-line and tab characters.
Every file and directory has a unique absolute path in the file system, which is the order of directories that must be opened to reach the file/directory itself, all concatenated by '/'s. Using the above example, the absolute path to file2.ext is "dir/subdir2/subsubdir2/file2.ext". Each directory name consists of letters, digits, and/or spaces. Each file name is of the form name.extension, where name and extension consist of letters, digits, and/or spaces.
Given a string input representing the file system in the explained format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.
Note that the testcases are generated such that the file system is valid and no file or directory name has length 0.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
dir
⟶ subdir1
⟶ ⟶ file1.ext
⟶ ⟶ subsubdir1
⟶ subdir2
⟶ ⟶ subsubdir2
⟶ ⟶ ⟶ file2.ext
```
Images:
- https://assets.leetcode.com/uploads/2020/08/28/mdir.jpg

### Example 2
```text
Input: input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
Output: 20
Explanation: We have only one file, and the absolute path is "dir/subdir2/file.ext" of length 20.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/28/dir1.jpg

### Example 3
```text
Input: input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
Output: 32
Explanation: We have two files:
"dir/subdir1/file1.ext" of length 21
"dir/subdir2/subsubdir2/file2.ext" of length 32.
We return 32 since it is the longest absolute path to a file.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/28/dir2.jpg

### Example 4
```text
Input: input = "a"
Output: 0
Explanation: We do not have any files, just a single directory named "a".
```
Images:
- https://assets.leetcode.com/uploads/2020/08/28/dir2.jpg


## Constraints
- 1 <= input.length <= 104
- input may contain lowercase or uppercase English letters, a new line character '\n', a tab character '\t', a dot '.', a space ' ', and digits.
- All file and directory names have positive length.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int lengthLongestPath(string input) {
        
    }
};
```

### java
```java
class Solution {
    public int lengthLongestPath(String input) {
        
    }
}
```

### python
```python
class Solution(object):
    def lengthLongestPath(self, input):
        """
        :type input: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def lengthLongestPath(self, input: str) -> int:
```

### c
```c
int lengthLongestPath(char* input) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LengthLongestPath(string input) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    
};
```

### typescript
```typescript
function lengthLongestPath(input: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $input
     * @return Integer
     */
    function lengthLongestPath($input) {
        
    }
}
```

### swift
```swift
class Solution {
    func lengthLongestPath(_ input: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lengthLongestPath(input: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int lengthLongestPath(String input) {
    
  }
}
```

### golang
```golang
func lengthLongestPath(input string) int {
    
}
```

### ruby
```ruby
# @param {String} input
# @return {Integer}
def length_longest_path(input)
    
end
```

### scala
```scala
object Solution {
    def lengthLongestPath(input: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn length_longest_path(input: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (length-longest-path input)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec length_longest_path(Input :: unicode:unicode_binary()) -> integer().
length_longest_path(Input) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec length_longest_path(input :: String.t) :: integer
  def length_longest_path(input) do
    
  end
end
```
