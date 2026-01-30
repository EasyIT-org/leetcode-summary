# 331. Verify Preorder Serialization of a Binary Tree

- Difficulty: Medium
- Topics: String, Stack, Tree, Binary Tree
- Slug: verify-preorder-serialization-of-a-binary-tree
- Problem ID: 331

## Description
One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as '#'.
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.
Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.
It is guaranteed that each comma-separated value in the string must be either an integer or a character '#' representing null pointer.
You may assume that the input format is always valid.
Note: You are not allowed to reconstruct the tree.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg

### Example 2
```text
Input: preorder = "1,#"
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg

### Example 3
```text
Input: preorder = "9,#,#,1"
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2021/03/12/pre-tree.jpg


## Constraints
- 1 <= preorder.length <= 104
- preorder consist of integers in the range [0, 100] and '#' separated by commas ','.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isValidSerialization(string preorder) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isValidSerialization(String preorder) {
        
    }
}
```

### python
```python
class Solution(object):
    def isValidSerialization(self, preorder):
        """
        :type preorder: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
```

### c
```c
bool isValidSerialization(char* preorder) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsValidSerialization(string preorder) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    
};
```

### typescript
```typescript
function isValidSerialization(preorder: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $preorder
     * @return Boolean
     */
    function isValidSerialization($preorder) {
        
    }
}
```

### swift
```swift
class Solution {
    func isValidSerialization(_ preorder: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isValidSerialization(preorder: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isValidSerialization(String preorder) {
    
  }
}
```

### golang
```golang
func isValidSerialization(preorder string) bool {
    
}
```

### ruby
```ruby
# @param {String} preorder
# @return {Boolean}
def is_valid_serialization(preorder)
    
end
```

### scala
```scala
object Solution {
    def isValidSerialization(preorder: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_valid_serialization(preorder: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-valid-serialization preorder)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_valid_serialization(Preorder :: unicode:unicode_binary()) -> boolean().
is_valid_serialization(Preorder) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_valid_serialization(preorder :: String.t) :: boolean
  def is_valid_serialization(preorder) do
    
  end
end
```
