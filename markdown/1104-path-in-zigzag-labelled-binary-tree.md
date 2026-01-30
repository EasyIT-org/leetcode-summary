# 1104. Path In Zigzag Labelled Binary Tree

- Difficulty: Medium
- Topics: Math, Tree, Binary Tree
- Slug: path-in-zigzag-labelled-binary-tree
- Problem ID: 1194

## Description
In an infinite binary tree where every node has two children, the nodes are labelled in row order.
In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: label = 14
Output: [1,3,4,14]
```
Images:
- https://assets.leetcode.com/uploads/2019/06/24/tree.png

### Example 2
```text
Input: label = 26
Output: [1,2,6,10,26]
```
Images:
- https://assets.leetcode.com/uploads/2019/06/24/tree.png


## Constraints
- 1 <= label <= 10^6

## Hints
- Based on the label of the current node, find what the label must be for the parent of that node.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> pathInZigZagTree(int label) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> pathInZigZagTree(int label) {
        
    }
}
```

### python
```python
class Solution(object):
    def pathInZigZagTree(self, label):
        """
        :type label: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def pathInZigZagTree(self, label: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* pathInZigZagTree(int label, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> PathInZigZagTree(int label) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    
};
```

### typescript
```typescript
function pathInZigZagTree(label: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $label
     * @return Integer[]
     */
    function pathInZigZagTree($label) {
        
    }
}
```

### swift
```swift
class Solution {
    func pathInZigZagTree(_ label: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun pathInZigZagTree(label: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> pathInZigZagTree(int label) {
    
  }
}
```

### golang
```golang
func pathInZigZagTree(label int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} label
# @return {Integer[]}
def path_in_zig_zag_tree(label)
    
end
```

### scala
```scala
object Solution {
    def pathInZigZagTree(label: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn path_in_zig_zag_tree(label: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (path-in-zig-zag-tree label)
  (-> exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec path_in_zig_zag_tree(Label :: integer()) -> [integer()].
path_in_zig_zag_tree(Label) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec path_in_zig_zag_tree(label :: integer) :: [integer]
  def path_in_zig_zag_tree(label) do
    
  end
end
```
