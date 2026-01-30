# 138. Copy List with Random Pointer

- Difficulty: Medium
- Topics: Hash Table, Linked List
- Slug: copy-list-with-random-pointer
- Problem ID: 138

## Description
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
Return the head of the copied linked list.
The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
Your code will only be given the head of the original linked list.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```
Images:
- https://assets.leetcode.com/uploads/2019/12/18/e1.png

### Example 2
```text
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
```
Images:
- https://assets.leetcode.com/uploads/2019/12/18/e2.png

### Example 3
```text
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
```
Images:
- https://assets.leetcode.com/uploads/2019/12/18/e3.png


## Constraints
- 0 <= n <= 1000
- -104 <= Node.val <= 104
- Node.random is null or is pointing to some node in the linked list.

## Hints
- Just iterate the linked list and create copies of the nodes on the go. Since a node can be referenced from multiple nodes due to the random pointers, ensure you are not making multiple copies of the same node.
- You may want to use extra space to keep old_node ---> new_node mapping to prevent creating multiple copies of the same node.
- We can avoid using extra space for old_node ---> new_node mapping by tweaking the original linked list. Simply interweave the nodes of the old and copied list. For example:
Old List: A --> B --> C --> D
InterWeaved List: A --> A' --> B --> B' --> C --> C' --> D --> D'
- The interweaving is done using next</b> pointers and we can make use of interweaved structure to get the correct reference nodes for random</b> pointers.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        
    }
};
```

### java
```java
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        
    }
}
```

### python
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x, next=None, random=None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution(object):
    def copyRandomList(self, head):
        """
        :type head: Node
        :rtype: Node
        """
```

### python3
```python3
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
```

### c
```c
/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *next;
 *     struct Node *random;
 * };
 */

struct Node* copyRandomList(struct Node* head) {
	
}
```

### csharp
```csharp
/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;
    public Node random;
    
    public Node(int _val) {
        val = _val;
        next = null;
        random = null;
    }
}
*/

public class Solution {
    public Node CopyRandomList(Node head) {
        
    }
}
```

### javascript
```javascript
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    
};
```

### typescript
```typescript
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    
};
```

### php
```php
/**
 * Definition for a Node.
 * class Node {
 *     public $val = null;
 *     public $next = null;
 *     public $random = null;
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->next = null;
 *         $this->random = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param Node $head
     * @return Node
     */
    function copyRandomList($head) {
        
    }
}
```

### swift
```swift
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var next: Node?
 *     public var random: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *    	   self.random = nil
 *     }
 * }
 */

class Solution {
    func copyRandomList(_ head: Node?) -> Node? {
        
    }
}
```

### kotlin
```kotlin
/**
 * Example:
 * var ti = Node(5)
 * var v = ti.`val`
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var next: Node? = null
 *     var random: Node? = null
 * }
 */

class Solution {
    fun copyRandomList(node: Node?): Node? {
        
    }
}
```

### golang
```golang
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

func copyRandomList(head *Node) *Node {
    
}
```

### ruby
```ruby
# Definition for Node.
# class Node
#     attr_accessor :val, :next, :random
#     def initialize(val = 0)
#         @val = val
#		  @next = nil
#		  @random = nil
#     end
# end

# @param {Node} node
# @return {Node}
def copyRandomList(head)
    
end
```

### scala
```scala
/**
 * Definition for a Node.
 * class Node(var _value: Int) {
 *   var value: Int = _value
 *   var next: Node = null
 *   var random: Node = null
 * }
 */

object Solution {
    def copyRandomList(head: Node): Node = {
        
    }
}
```
