# 609. Find Duplicate File in System

- Difficulty: Medium
- Topics: Array, Hash Table, String
- Slug: find-duplicate-file-in-system
- Problem ID: 609

## Description
Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.
A group of duplicate files consists of at least two files that have the same content.
A single directory info string in the input list has the following format:
It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.
The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

### Example 2
```text
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```


## Constraints
- 1 <= paths.length <= 2 * 104
- 1 <= paths[i].length <= 3000
- 1 <= sum(paths[i].length) <= 5 * 105
- paths[i] consist of English letters, digits, '/', '.', '(', ')', and ' '.
- You may assume no files or directories share the same name in the same directory.
- You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<String>> findDuplicate(String[] paths) {
        
    }
}
```

### python
```python
class Solution(object):
    def findDuplicate(self, paths):
        """
        :type paths: List[str]
        :rtype: List[List[str]]
        """
```

### python3
```python3
class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** findDuplicate(char** paths, int pathsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<string>> FindDuplicate(string[] paths) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    
};
```

### typescript
```typescript
function findDuplicate(paths: string[]): string[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $paths
     * @return String[][]
     */
    function findDuplicate($paths) {
        
    }
}
```

### swift
```swift
class Solution {
    func findDuplicate(_ paths: [String]) -> [[String]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findDuplicate(paths: Array<String>): List<List<String>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<String>> findDuplicate(List<String> paths) {
    
  }
}
```

### golang
```golang
func findDuplicate(paths []string) [][]string {
    
}
```

### ruby
```ruby
# @param {String[]} paths
# @return {String[][]}
def find_duplicate(paths)
    
end
```

### scala
```scala
object Solution {
    def findDuplicate(paths: Array[String]): List[List[String]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_duplicate(paths: Vec<String>) -> Vec<Vec<String>> {
        
    }
}
```

### racket
```racket
(define/contract (find-duplicate paths)
  (-> (listof string?) (listof (listof string?)))
  )
```

### erlang
```erlang
-spec find_duplicate(Paths :: [unicode:unicode_binary()]) -> [[unicode:unicode_binary()]].
find_duplicate(Paths) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_duplicate(paths :: [String.t]) :: [[String.t]]
  def find_duplicate(paths) do
    
  end
end
```
